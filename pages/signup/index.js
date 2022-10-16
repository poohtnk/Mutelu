import React, { useState } from 'react'
import Navbar from '../../components/navbar'
import Link from 'next/link'
import { registerWithEmailAndPassword } from '../../firebase/config'
import { Redirect } from 'react-router-dom'

function SignUp() {
    const [firstName, setFirstname] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')
    const [currentUser, setCurrentUser] = useState(null)
    const handleFirstNameInput = (e) => {
        setFirstname(e.target.value)
    }
    const handleLastNameInput = (e) => {
        setLastName(e.target.value)
    }
    const handleEmailInput = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordInput = (e) => {
        setPassword(e.target.value)
    }
    const handleConfirmPasswordInput = (e) => {
        setConfirmPassword(e.target.value)
    }
    const handleMessageInput = (e) => {
        setMessage(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        console.log('Pass')
        console.log(
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            message
        )
        if (password === confirmPassword) {
            console.log('1')
            try {
                registerWithEmailAndPassword(
                    firstName,
                    lastName,
                    email,
                    password
                )
                console.log('true')
                setCurrentUser(true)
            } catch (error) {
                if (error.code == 'auth/email-already-in-use') {
                    alert('The email address is already in use')
                } else if (error.code == 'auth/invalid-email') {
                    alert('The email address is not valid.')
                } else if (error.code == 'auth/operation-not-allowed') {
                    alert('Operation not allowed.')
                } else if (error.code == 'auth/weak-password') {
                    alert('The password is too weak.')
                }
                setCurrentUser(false)
            }
        }
    }
    return (
        <>
            <Navbar />
            <div className='flex place-content-center mt-[15rem]'>
                <div className='flex p-6 rounded-lg shadow-lg bg-white max-w-sm items-center text-black'>
                    <form className='' onSubmit={onSubmit}>
                        <label className='form-label inline-block my-2 text-gray-700'>
                            First Name
                        </label>
                        <input
                            type='text'
                            className='form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid 
                                border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600'
                            name='firstName'
                            onChange={handleFirstNameInput}
                            placeholder='Enter your first name'
                        />
                        <label className='form-label inline-block my-2 text-gray-700'>
                            Last Name
                        </label>
                        <input
                            type='text'
                            className='form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid 
                                border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600'
                            name='lastName'
                            onChange={handleLastNameInput}
                            placeholder='Enter your last name'
                        />
                        <label className='form-label inline-block my-2 text-gray-700'>
                            Email
                        </label>
                        <input
                            type='text'
                            className='form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid 
                                border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600'
                            name='email'
                            onChange={handleEmailInput}
                            placeholder='Enter your email'
                        />
                        <label className='form-label inline-block my-2 text-gray-700'>
                            Password
                        </label>
                        <input
                            type='password'
                            className='form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600'
                            name='password'
                            onChange={handlePasswordInput}
                            placeholder='Enter your password'
                        />
                        <label className='form-label inline-block my-2 text-gray-700'>
                            Confirm Password
                        </label>
                        <input
                            type='password'
                            className='form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounde dm-0 focus:text-gray-700 focus:bg-white focus:border-blue-600'
                            name='confirmPasswordpassword'
                            onChange={handleConfirmPasswordInput}
                            placeholder='Confirm your password'
                        />
                        <button
                            className='w-full bg-sky-500 p-1 rounded-lg mt-2 text-white font-bold'
                            type='submit'
                        >
                            <Link href='/'>Sign Up</Link>
                        </button>
                        <div>
                            Already have an account?{' '}
                            <Link href='/login'>log in</Link> now.
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp
