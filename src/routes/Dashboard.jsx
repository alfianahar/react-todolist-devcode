import React, { useEffect, useState } from 'react'
import EmptyState from '../components/EmptyState'
import TitleBar from '../components/TitleBar'
import { Link } from 'react-router-dom'
import axios from 'axios';

function Dashboard() {

    const [activity, setActivity] = useState([])

    const getActivities = async () => {
        await axios.get(
            `https://todo.api.devcode.gethired.id/activity-groups?email=alfian.aswinda%40gmail.com`
        ).then(response => {
            setActivity(response.data.data)
            console.log(activity)
        }).catch(err => console.log(err.message))
        // ()
    }

    useEffect(() => {
        getActivities()
    }, [])

    return (
        <>
            <TitleBar />
            <div className='min-h-[70vh] lg:min-h-[60vh] flex items-center'>
                <EmptyState data-cy="activity-empty-state" main />
            </div>
            {activity.map((act) => (
                <div>
                    <p> {act.id} </p>

                </div>
            ))}
        </>
    )
}

export default Dashboard