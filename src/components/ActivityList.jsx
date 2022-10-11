import React from 'react'

function ActivityList({ title, date }) {

    function dateFunc(value) {
        let val = value.slice(0, 10).split("-");
        let monthNumber = parseInt(val[1]);
        let monthName = [
            "Januari",
            "Februari",
            "Maret",
            "April",
            "Mei",
            "Juni",
            "Juli",
            "Agustus",
            "September",
            "Oktober",
            "November",
            "Desember",
        ][monthNumber - 1];

        val[1] = monthName;

        val = val.reverse().join(" ");

        return val;
    }
    return (
        <div className='p-6 w-full lg:w-56 h-56 bg-white rounded-xl border border-gray-200 shadow-xl inline-flex flex-col justify-between'>
            <h1 className='mb-2 text-xl font-bold' data-cy='activity-item-title'>
                {title}
            </h1>
            <div className='flex flex-row justify-between items-center'>
                <p className=' lg:font-medium text-gray-700' data-cy="activity-item-date">
                    {dateFunc(date)}
                </p>
                <button className='btn btn-circle btn-sm btn-outline btn-error' data-cy="activity-item-delete-button">
                    <i class='bx bx-trash'></i>
                </button>

            </div>

        </div>
    )
}

export default ActivityList