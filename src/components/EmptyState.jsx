import emptyActivity from '../assets/activity-empty-state.svg'
import todoActivity from '../assets/todo-empty-state.svg'

function EmptyState({ main }) {

    return (
        <div data class="flex justify-center">
            {main ?
                <img
                    src={emptyActivity}
                    alt="empty-state"
                    class="lg:w-4/6"
                /> :
                <img
                    src={todoActivity}
                    alt="empty-list"
                    class="lg:w-4/6"
                />
            }
        </div>
    )
}

export default EmptyState