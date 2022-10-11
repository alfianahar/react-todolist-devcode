import { useEffect, useState } from 'react'
import EmptyState from '../components/EmptyState'
import TitleBar from '../components/TitleBar'
import axios from 'axios';
import ActivityList from '../components/ActivityList';

function Dashboard() {

    const [activity, setActivity] = useState([])
    const [click, setClick] = useState(false)

    const getActivities = async () => {
        await axios.get(
            `https://todo.api.devcode.gethired.id/activity-groups?email=alfian.aswinda%40gmail.com`
        ).then(response => {
            setActivity(response.data.data)
        }).catch(err => console.log(err.message))
    }

    const addActivity = async () => {
        const request = {
            title: "New Activity",
            email: "alfian.aswinda@gmail.com",
        }
        const headers = {
            "Content-Type": "application/json",
        }
        await axios.post("https://todo.api.devcode.gethired.id/activity-groups", request, headers)

        // delete all activity
        // activity.map(async (act) => await axios.delete(
        //     `https://todo.api.devcode.gethired.id/activity-groups/${act.id}`
        // ))
        // console.log(activity.length)
        setClick(!click)
    }

    const delActivity = async (id) => {
        await axios.delete(
            `https://todo.api.devcode.gethired.id/activity-groups/${id}`
        );
        setActivity(activity.filter((val) => val.id !== id))
        console.log(activity.length)

    }

    useEffect(() => {
        getActivities()
    }, [click])

    return (
        <>
            <TitleBar addActivity={addActivity} />
            {activity.length == 0 ?
                <div className='min-h-[70vh] lg:min-h-[60vh] flex items-center'>
                    <EmptyState data-cy="activity-empty-state" main />
                </div>
                :
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-7 lg:mt-13' data-cy="activity-item">
                    {activity.map((act) => (
                        <ActivityList key={act.id} title={act.title} date={act.created_at} id={act.id} delActivity={delActivity} />
                    ))}
                </div>

            }
        </>
    )
}

export default Dashboard