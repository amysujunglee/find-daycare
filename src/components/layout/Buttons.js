import React from 'react'
import DAYCARE_DATA from '../data'

const Buttons = ({ buttonItems, filterDaycares, setDaycares }) => {
    return (
        <div className='space-x-4'>
            <button className='bg-gray-200 p-2 border border-red-800 hover:bg-gray-400' onClick={() => setDaycares(DAYCARE_DATA)}>All</button>
            {buttonItems.map(item => (
                <button key={item} className='bg-gray-200 p-2 border border-red-800 hover:bg-gray-400' onClick={() => filterDaycares(item)}>{item}</button>
            ))}
        </div>
    )
}

export default Buttons
