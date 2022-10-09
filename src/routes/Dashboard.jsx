import React from 'react'
import { Link } from 'react-router-dom'
import TitleBar from '../components/TitleBar'

function Dashboard() {
    document.title = "Dashboard | React To Do List"
    return (
        <>
            <TitleBar />
            <Link to={`detail/1`}>To Item List</Link>
        </>
    )
}

export default Dashboard