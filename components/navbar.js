import Link from 'next/link'
import React from 'react'

export default function Navbar({ fixed }) {
    const [navbarOpen, setNavbarOpen] = React.useState(false)
    return (
        <div className='bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-50'>
            <nav className='flex justify-between px-[10rem] py-[1.5rem]'>
                <div className='text-3xl font-bold'>Mutelu</div>
                <ul className='menu flex '>
                    <li className='text-xl mx-[40px] pt-1'>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className='text-xl mx-[40px] pt-1'>
                        <Link href='/login'>Log In</Link>
                    </li>
                    <li className='text-xl mx-[40px] pt-1'>
                        <Link href='/'>Sign Up</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
