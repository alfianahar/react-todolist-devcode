import { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'

const usePathname = () => {
    const location = useLocation();
    return location.pathname;
}

function TitleBar(props) {
    const [path, setPath] = useState()

    const currentPath = usePathname().substring((usePathname().lastIndexOf("/")
    ) + 1)


    useEffect(() => {
        setPath(currentPath)
        if (path) {
            document.title = "Detail | React To Do List"
        } else {
            document.title = "Dashboard | React To Do List"
        }
    }, [path])

    // console.log(props.item)
    return (
        <>
            <div className="flex justify-between items-center w-full">
                {path == false ?
                    <>
                        <h1 className="font-bold text-3xl" data-cy="activity-title">Activity</h1>
                        <button
                            className="btn btn-primary gap-2  font-semibold text-base normal-case px-3 lg:px-5"
                            type="button"
                            data-cy="activity-add-button"
                            onClick={props.addActivity}
                        >
                            <i className='bx bx-plus bx-sm'></i>
                            <span className="hidden lg:block"> Tambah </span>
                        </button>
                    </>
                    : <>
                        {props && props?.item == undefined ?
                            <></> :
                            <>
                                <div className='inline-flex items-center gap-3 lg:gap-4'>
                                    <Link to={`/`}>
                                        <i className='bx bxs-chevron-left bx-md bx-fade-left-hover'></i>
                                    </Link>
                                    {/* <input
                                        type="text"
                                        id="item-title"
                                        className="bg-transparent border-b-2 font-bold text-2xl w-full"
                                    /> */}
                                    <h1 className="font-bold text-2xl lg:text-3xl cursor-pointer"
                                        data-cy="todo-title"
                                    >
                                        {props.item.title}
                                    </h1>
                                    <button type="button" className='pt-1'>
                                        <i className='bx bx-pencil bx-sm' ></i>
                                    </button>
                                </div>
                                <div className='inline-flex items-center gap-3 lg:gap-4'>
                                    {/* <button
                                        className='btn btn-circle btn-outline btn-secondary'
                                        data-cy="todo-sort-button">
                                    </button> */}
                                    <div className="dropdown">
                                        <label tabIndex={0} className="btn btn-circle btn-outline btn-secondary m-1" data-cy="todo-sort-button">
                                            <i className='bx bx-sort-alt-2 bx-sm'></i>
                                        </label>
                                        <ul tabIndex={0} className="dropdown-content menu shadow bg-base-100 rounded-md w-52">
                                            <li><a><i className='bx bx-sort-down'></i>Terbaru</a></li>
                                            <li><a><i className='bx bx-sort-up'></i>Terlama</a></li>
                                            <li><a><i className='bx bx-sort-a-z' ></i>A-Z</a></li>
                                            <li><a><i className='bx bx-sort-z-a' ></i>Z-A</a></li>
                                            <li><a><i className='bx bx-sort-alt-2'></i>Belum Selesai</a></li>
                                        </ul>
                                    </div>
                                    <label
                                        className="btn btn-primary gap-2  font-semibold text-base normal-case px-3 lg:px-5"
                                        type="button"
                                        data-cy="todo-add-button"
                                        htmlFor="my-modal-2"
                                    >
                                        <i className='bx bx-plus bx-sm'></i>
                                        <span className="hidden lg:block"> Tambah </span>
                                    </label>
                                </div>
                            </>
                        }
                    </>
                }
            </div >
        </>
    )
}

export default TitleBar