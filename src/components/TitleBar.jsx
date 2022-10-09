import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const usePathname = () => {
    const location = useLocation();
    return location.pathname;
}

function TitleBar() {
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

    return (
        <>
            <div className="flex justify-between w-full">
                {path ?
                    <>
                        <h1 className="font-bold text-3xl" data-cy="activity-title">Activity</h1>
                        <button
                            className="btn btn-primary gap-2  font-semibold text-base normal-case px-3 lg:px-5"
                            type="button"
                            data-cy="activity-add-button"

                        >
                            <i className='bx bx-plus bx-sm'></i>
                            <span className="hidden lg:block"> Tambah </span>
                        </button>
                    </>
                    : <>
                        <div className='inline-flex items-center gap-3 lg:gap-4'>

                        </div>
                    </>
                }
            </div>
        </>
    )
}

export default TitleBar