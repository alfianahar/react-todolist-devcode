import React from 'react'

function ModalAdd() {
    return (
        <>
            <input type="checkbox" id="my-modal-2" className="modal-toggle" />
            <label htmlFor="my-modal-2" className="modal">
                <label className="modal-box relative" >
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-xl font-semibold">Tambah List Item</h1>
                        <label
                            htmlFor="my-modal-2"
                            className="btn modal-button btn-secondary btn-circle btn-outline pt-1 btn-sm"
                        >
                            <i className='bx bx-x bx-sm'></i>
                        </label>
                    </div>
                    <div className="border-t border-b pt-6 pb-6 space-y-6">
                        <div className="flex flex-col">
                            <label className="font-semibold text-xs mb-3 "
                            >NAMA LIST ITEM</label>
                            <input
                                required
                                type="text"
                                placeholder="Tambahkan nama list item"
                                data-cy="modal-add-name-input"
                                className='input w-full rounded-md'
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-semibold text-xs mb-3"
                            >PRIORITY</label>
                        </div>
                    </div>
                    <div className="flex justify-end mt-6">
                        <label
                            className='btn btn-primary py-3 px-9 text-white'
                            type="submit"
                            htmlFor="my-modal-2"
                            data-cy="modal-add-save-button"
                        >
                            Simpan
                        </label>
                    </div>
                </label>
            </label>
        </>
    )
}

export default ModalAdd