import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { auth, logout } from '../../firebase/config'
import { BasicMenuForActivity, BasicMenuForMyprofile } from './dropdown'
import { NavLink } from './navlink'
import { getDatabase, ref, onValue } from 'firebase/database'

export default function Navbar({ payment }) {
    const [currentUser, setCurrentUser] = useState(null)
    const [currentData, setCurrentData] = useState(null)
    useEffect(() => {
        const db = getDatabase()
        auth.onAuthStateChanged((user) => {
            if (user) {
                setCurrentUser(user)
                const starCountRef = ref(db, '/User/' + user.uid)
                onValue(starCountRef, (snapshot) => {
                    const data = snapshot.val()
                    setCurrentData(data)
                })
            }
        })
    })
    if (payment) {
        return (
            <div className='bg-white text-black drop-shadow-md'>
                <nav className='flex justify-between px-[2rem] py-[1.5rem]'>
                    <div className='flex text-3xl font-bold'>
                        <div className='text-royal-purple'>M</div>
                        <div>utelu</div>
                    </div>
                </nav>
            </div>
        )
    }
    return (
        <div className='bg-white text-black drop-shadow-md'>
            <nav className='flex justify-between px-[2rem] py-[1.5rem]'>
                <div className='flex text-3xl font-bold'>
                    <div className='text-royal-purple'>M</div>
                    <div>utelu</div>
                </div>
                <ul className='menu flex '>
                    {currentUser && currentData ? (
                        <>
                            <li className='text-xl mx-[40px] pt-1 hover:text-royal-purple/80'>
                                <NavLink href='/home'>Home</NavLink>
                            </li>
                            <li className='text-xl mx-[40px] pt-1 hover:text-royal-purple/80'>
                                <NavLink href='/searchAmulet'>Search</NavLink>
                            </li>
                            <li className='text-xl mx-[40px] pt-1 hover:text-royal-purple/80'>
                                <BasicMenuForActivity />
                            </li>
                            <li className='text-xl mx-[40px] pt-1 hover:text-royal-purple/80'>
                                <BasicMenuForMyprofile
                                    name={currentData.firstName}
                                />
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
                                <NavLink href='/login'>Log In</NavLink>
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
