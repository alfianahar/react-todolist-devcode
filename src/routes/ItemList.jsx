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
    // console.log(params.id);

    const getItemsList = async () => {
        await axios.get(
            `https://todo.api.devcode.gethired.id/activity-groups/${params.id}`
        ).then(response => {
            setItem(response.data)
        }).catch(err => console.log(err.message))
    }
    console.log(item);


    useEffect(() => {
        getItemsList()
    }, [])

    return (
        <>
            <TitleBar item={item} />
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
                                <TodoList key={todo.id} item={todo} />
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