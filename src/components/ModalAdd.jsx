import React, { useState } from 'react'

function ModalAdd({ priorityOption, createTodo }) {

    const [openPriorityOpt, setOpenPriorityOpt] = useState(false)
    const [todoTitle, setTodoTitle] = useState('')
    const [priority, setPriority] = useState('very-high')

    // console.log(todoTitle)
    // console.log(priority)

    return (
        <>
            <input type="checkbox" id="my-modal-2" className="modal-toggle" onChange={(e) => setTodoTitle('')} />
            <label htmlFor="my-modal-2" className="modal">
                <label className="modal-box-add relative " >
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
                                value={todoTitle}
                                onChange={(e) => setTodoTitle(e.target.value)}

                                onKeyDown={(e) => { e.key === 'Enter' ? '' : '' }}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-semibold text-xs mb-3"
                            >PRIORITY</label>
                            <div className="dropdown ">
                                <label
                                    tabIndex={0}
                                    className="flex items-center justify-between w-56 px-4 py-3 bg-white border border-gray-400 rounded-md"
                                    data-cy="modal-add-priority-dropdown"
                                    onClick={() => setOpenPriorityOpt(!openPriorityOpt)}
                                    onBlur={() => setOpenPriorityOpt(false)}
                                >
                                    <span className="text-gray-400 inline-flex items-center gap-3">
                                        <div
                                            className={`inline-flex rounded-full h-3 w-3 ${priority ? priorityOption[priorityOption.findIndex(e => e.value == priority)].color : "bg-[#ED4C5C]"}`}
                                        ></div>
                                        {priority ? priorityOption[priorityOption.findIndex(e => e.value == priority)].name : "Very High"}
                                    </span>
                                    <i
                                        className={`bx bx-chevron-up bx-sm transform transition-transform duration-200 ease-in-out ${openPriorityOpt ? "rotate-180" : ""}`}
                                    ></i>
                                </label>
                                <ul tabIndex={0} className="dropdown-content menu shadow bg-base-100 rounded-md w-56  ">
                                    {priorityOption.map((item) => (
                                        <li key={item.value} className="inline-flex gap-3"
                                            data-cy="modal-add-priority-item"
                                            onClick={() => setPriority(item.value)}
                                        >
                                            <a>
                                                <span
                                                    className={`inline-flex rounded-full h-3 w-3 ${item.color}`}
                                                ></span>
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end mt-6">
                        <label
                            className={`btn btn-primary py-3 px-9 text-white ${todoTitle === '' ? "bg-opacity-70" : ''}`}
                            type="submit"
                            htmlFor="my-modal-2"
                            data-cy="modal-add-save-button"
                            disabled={todoTitle === ''}
                            onClick={() => {
                                createTodo(todoTitle, priority);
                                setPriority('very-high')
                            }}
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