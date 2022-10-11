import React from 'react'

function ModalDelete() {
    return (
        <>

            <label htmlFor="my-modal-4" className="btn modal-button btn-circle btn-sm btn-outline btn-error" data-cy="activity-item-delete-button">
                <i className='bx bx-trash'></i>
            </label>

            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative" for="">
                    <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </label>
            </label>
        </>
    )
}

export default ModalDelete