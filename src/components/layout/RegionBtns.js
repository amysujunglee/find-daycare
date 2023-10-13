import React from 'react'

const RegionBtns = ({ regions }) => {
    return (
        <div className='space-x-4'>
            <button className='bg-gray-200 p-2 border border-red-800 hover:bg-gray-400'>All</button>
            {regions.map(region => (
                <button className='bg-gray-200 p-2 border border-red-800 hover:bg-gray-400'>{region}</button>
            ))}
        </div>
    )
}

export default RegionBtns
