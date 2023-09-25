import React from 'react'

const Header = () => {
    return (
        <header className='bg-gray-300 p-4'>
            <ul className='flex'>
                <li className='mr-auto'><a href="/" className='hover:underline hover:underline-offset-4'>Logo</a></li>
                <li><a href="/add-daycare" className='hover:underline hover:underline-offset-4'>Add a daycare</a></li>
                <li className='ml-4'><a href="/favourites" className='hover:underline hover:underline-offset-4'>My List</a></li>
            </ul>
        </header>
    )
}

export default Header
