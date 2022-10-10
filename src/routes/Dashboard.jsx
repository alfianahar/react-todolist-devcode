import React from 'react'
import { Link } from 'react-router-dom'
import EmptyState from '../components/EmptyState'
import TitleBar from '../components/TitleBar'

function Dashboard() {

    const main = true
    return (
        <>
            <TitleBar />
            <div className='min-h-[70vh] lg:min-h-[60vh] flex items-center'>
                <EmptyState data-cy="activity-empty-state" main={main} />
            </div>
            <Link to={`detail/1`}>To Item List</Link>

        </>
    )
}

export default Dashboard