import React, { useContext, useEffect, useState } from 'react'
import {
    auth,
    logInWithEmailAndPassword,
    signInWithGoogle,
    logout,
} from '../../firebase/config'
import { useAuthState } from 'react-firebase-hooks/auth'
import Link from 'next/link'
import { signInWithEmailAndPassword } from 'firebase/auth'
import Navbar from '../../components//navbar/navbar'
import { Redirect } from 'react-router-dom'
import { useRouter } from 'next/router'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')
    const [currentUser, setCurrentUser] = useState(null)

    const handleEmailInput = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordInput = (e) => {
        setPassword(e.target.value)
    }
    const router = useRouter()
    const onSubmit = (e) => {
        e.preventDefault()
        try {
            logInWithEmailAndPassword(email, password)
        } catch {
            alert('Login Unsuccessful')
            setMessage(error.message)
        }
    }
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setCurrentUser(user)
            }
        })
    })

    if (currentUser) {
        router.push('/home')
    }
    return (
        <>
            <div className='min-h-screen bg-mutelu_1 bg-cover'>
                <Navbar />
                <div className='flex place-content-center mt-[12rem]'>
                    <div className='flex p-6 rounded-lg shadow-lg bg-white max-w-sm items-center text-black'>
                        <form className='' onSubmit={onSubmit}>
                            <div className='text-center text-3xl'>Log In</div>
                            <label className='form-label inline-block my-2 text-gray-700'>
                                Email
                            </label>
                            <input
                                type='text'
                                className='form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid 
                                border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600'
                                name='email'
                                onChange={handleEmailInput}
                                placeholder='E-mail Address'
                            />
                            <label className='form-label inline-block my-2 text-gray-700'>
                                Password
                            </label>
                            <input
                                type='password'
                                className='form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600'
                                name='password'
                                onChange={handlePasswordInput}
                                placeholder='Password'
                            />
                            <button
                                className='w-full bg-royal-purple-light rounded-lg mt-2 text-white font-bold'
                                type='submit'
                            >
                                Login
                            </button>
                            <div>
                                <Link href='/reset'>Forgot Password</Link>
                            </div>
                            <div>
                                Do not have an account?{' '}
                                <Link href='/signup'>Register</Link> now.
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
