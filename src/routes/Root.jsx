import React from 'react'
import { Outlet } from 'react-router-dom'

function Root() {
    return (
        <>
            <header
                className='sticky top-0 bg-primary px-6 py-8 lg:py-8 lg:px-48 shadow-lg z-auto'
            >
                <h1 className='text-2xl font-bold text-white'
                    data-cy="header-title" >
                    TO DO LIST APP
                </h1 >
            </header >
            <div className='flex flex-col gap px-6 py-11 lg:px-48'>
                <Outlet />
            </div>
        </>
    )
}

export default Root