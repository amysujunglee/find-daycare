import React, { useState } from 'react'
import { database } from '../FirebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const LogIn = () => {
    const [login, setLogin] = useState(false)
    const history = useNavigate()
    const handleSubmit = (e, type) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (type === 'signup') {
            createUserWithEmailAndPassword(database, email, password).then(data => {
                console.log(data, "authdata");
                history('/')
            }).catch(err => {
                alert(err.code)
                setLogin(true)
            })
        } else {
            signInWithEmailAndPassword(database, email, password).then(data => {
                console.log(data, "authdata");
                history('/')
            }).catch(err => {
                alert(err.code)
            })
        }
    }
    return (
        <div className='m-4'>
            <div className='mb-4'>
                <button className='border px-4 py-2 bg-gray-700 text-white' onClick={() => setLogin(false)}>Sign Up</button>
                <button className='border px-4 py-2 bg-gray-700 text-white' onClick={() => setLogin(true)}>Log In</button>
            </div>

            <h1 className='mb-4'>{login ? 'Log In' : 'Sign Up'}</h1>
            <form action="" onSubmit={(e) => handleSubmit(e, login ? 'login' : 'signup')} className='space-y-4'>
                <input name='email' type="email" placeholder='Email' className='border' /><br />
                <input name='password' type="password" placeholder='Password' className='border' /><br />
                <button className='border px-4 py-2 bg-gray-700 text-white'>{login ? 'Log In' : 'Sign Up'}</button>
            </form>
        </div>
    )
}

export default LogIn
