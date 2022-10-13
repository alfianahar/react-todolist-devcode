import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import TitleBar from '../components/TitleBar';
import EmptyState from '../components/EmptyState'
import ModalDelete from '../components/ModalDelete';
import ModalDone from '../components/ModalDone';
import TodoList from '../components/TodoList';
import ModalAdd from '../components/ModalAdd';

function ItemList() {

    const [item, setItem] = useState([])
    const params = useParams()

    const getItemsList = async () => {
        await axios.get(
            `https://todo.api.devcode.gethired.id/activity-groups/${params.id}`
        ).then(response => {
            setItem(response.data)
        }).catch(err => console.log(err.message))
    }

    const setActiveStatus = async (id, isActive) => {
        const request = {
            is_active: isActive === 0 ? 1 : 0,
        }
        const headers = {
            "Content-Type": "application/json",
        }
        await axios.patch(`https://todo.api.devcode.gethired.id/todo-items/${id}`, request, headers)
        await getItemsList()
        return
    }

    useEffect(() => {
        getItemsList()
    }, [])

    return (
        <>
            <TitleBar item={item} afterChange={getItemsList} />
            {item?.todo_items?.length === 0 ?
                <div className='min-h-[70vh] lg:min-h-[60vh] flex items-center'>
                    <EmptyState data-cy="todo-empty-state" />
                </div>
                :
                <div className="flex flex-col gap-2 mt-7 lg:mt-13">
                    {item?.todo_items == undefined ?
                        <></>
                        :
                        <>
                            {item.todo_items.map((todo) => (
                                <TodoList key={todo.id} item={todo} setActiveStatus={setActiveStatus} />
                            ))}
                        </>
                    }
                </div>
            }

            <ModalAdd />
            {/* <ModalDelete /> */}
            {/* <ModalDone /> */}
        </>
    )
}

export default ItemList