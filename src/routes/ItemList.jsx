import React from 'react'
import { Link } from 'react-router-dom'
import TitleBar from '../components/TitleBar';
import EmptyState from '../components/EmptyState'

function ItemList() {

    const main = false
    return (
        <>
            <TitleBar />
            <div className='min-h-[70vh] lg:min-h-[60vh] flex items-center'>
                <EmptyState data-cy="todo-empty-state" />
            </div>

        </>
    )
}

export default ItemList