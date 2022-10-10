import React from 'react'

function EmptyState() {
    return (
        <div class="flex justify-center">
            <img

                src="../assets/activity-empty-state.svg"
                alt="empty-state"
                class="lg:w-4/6"
            />
            <img

                src="../assets/todo-empty-state.svg"
                alt="empty-list"
                class="lg:w-4/6"
            />
        </div>
    )
}

export default EmptyState