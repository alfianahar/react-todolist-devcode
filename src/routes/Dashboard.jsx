import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
    return (
        <>
            <div className="flex justify-between w-full">
                <h1 className="font-bold text-3xl" data-cy="activity-title">Activity</h1>
                <button
                    className="btn btn-primary gap-2  font-semibold text-base normal-case px-3 lg:px-5"
                    type="button"
                    data-cy="activity-add-button"

                >
                    <i className='bx bx-plus bx-sm'></i>
                    <span className="hidden lg:block"> Tambah </span>
                </button>
            </div>
            <Link to={`detail/1`}>To Item List</Link>
        </>
    )
}

export default Dashboard