import React from 'react'

const Card = (props) => {
    return (
        <div className='bg-white rounded-lg shadow-md p-5'>
            {props.children}
        </div>
    )
}

export default Card
