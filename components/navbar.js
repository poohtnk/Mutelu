import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import {
    auth,
    logInWithEmailAndPassword,
    signInWithGoogle,
    logout,
} from '../firebase/config'

export default function Navbar({ fixed }) {
    const [navbarOpen, setNavbarOpen] = React.useState(false)
    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setCurrentUser(user)
            }
        })
    })
    return (
        <div className='bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-50'>
            <nav className='flex justify-between px-[10rem] py-[1.5rem]'>
                <div className='text-3xl font-bold'>Mutelu</div>
                <ul className='menu flex '>
                    {currentUser ? (
                        <>
                            <li className='text-xl mx-[40px] pt-1'>
                                <Link href='/'>Home</Link>
                            </li>
                            <li className='text-xl mx-[40px] pt-1'>
                                <Link href='/Search Sanctuary'>
                                    Search Sanctuary
                                </Link>
                            </li>
                            <li className='text-xl mx-[40px] pt-1'>
                                <button onClick={logout}>Log Out</button>
                            </li>{' '}
                        </>
                    ) : (
                        <>
                            <li className='text-xl mx-[40px] pt-1'>
                                <Link href='/'>Home</Link>
                            </li>
                            <li className='text-xl mx-[40px] pt-1'>
                                <Link href='/Search Sanctuary'>
                                    Search Sanctuary
                                </Link>
                            </li>
                            <li className='text-xl mx-[40px] pt-1'>
                                <Link href='/login'>Log In</Link>
                            </li>
                            <li className='text-xl mx-[40px] pt-1'>
                                <Link href='/signup'>Sign Up</Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </div>
    )
}
