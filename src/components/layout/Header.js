import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='bg-gray-300 p-4 flex justify-between'>
            <div><Link to='/' className='hover:underline hover: underline - offset - 4'>Logo</Link></div>
            <nav>
                <ul className='flex gap-8'>
                    <li><Link to='/' className='hover:underline hover:underline-offset-4'>All Daycares</Link></li>
                    <li><Link to="/favourites" className='hover:underline hover:underline-offset-4'>My List</Link></li>
                </ul>
            </nav>
        </header >
    )
}

export default Header
