import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { auth, logout } from '../../firebase/config'
import { BasicMenuforActivity, BasicMenuforMyprofile } from './dropdown'
import { NavLink } from './navlink'
export default function Navbar({ fixed }) {
    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setCurrentUser(user)
            }
        })
    })
    return (
        <div className='bg-white text-black drop-shadow-md'>
            <nav className='flex justify-between px-[2rem] py-[1.5rem]'>
                <div className='flex text-3xl font-bold'>
                    <div className='text-royal-purple'>M</div>
                    <div>utelu</div>
                </div>
                <ul className='menu flex '>
                    {currentUser ? (
                        <>
                            <li className='text-xl mx-[30px] pt-1 hover:text-royal-purple/80'>
                                <NavLink href='/home'>Home</NavLink>
                            </li>
                            <li className='text-xl mx-[30px] pt-1 hover:text-royal-purple/80'>
                                <NavLink href='/searchAmulet'>Search</NavLink>
                            </li>
                            <li className='text-xl mx-[30px] pt-1 hover:text-royal-purple/80'>
                                <BasicMenuforActivity />
                            </li>
                            <li className='text-xl mx-[30px] pt-1 hover:text-royal-purple/80'>
                                <NavLink href='/'>
                                    <button onClick={logout}>Log Out</button>
                                </NavLink>
                            </li>
                            <li className='text-xl mx-[30px] pt-1 text-royal-purple/80'>
                                {currentUser.email}
                            </li>
                        </>
                    ) : (
                        <>
                            <li className='text-xl mx-[40px] pt-1 hover:text-royal-purple/80'>
                                <NavLink href='/'>Home</NavLink>
                            </li>
                            <li className='text-xl mx-[40px] pt-1 hover:text-royal-purple/80'>
                                <NavLink href='/searchAmulet'>Search</NavLink>
                            </li>
                            <li className='text-xl mx-[40px] pt-1 hover:text-royal-purple/80'>
                                <NavLink
                                    href='/login'
                                    activestyle={{ fontWeight: 'bold' }}
                                >
                                    Log In
                                </NavLink>
                            </li>
                            <li className='text-xl mx-[40px] pt-1 hover:text-royal-purple/80'>
                                <NavLink href='/signup'>Sign Up</NavLink>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </div>
    )
}
