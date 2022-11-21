import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/navbar'
import Link from 'next/link'
function Manage() {
    return (
        <div className='min-h-screen bg-mutelu_2 bg-cover'>
            <Navbar />
            <div className='container'>
                <div className='mx-[15rem] mt-[5rem]'>
                    <div className='font-inter text-center text-5xl pt-20 tracking-widest'>
                        Manage Product
                    </div>
                    <div className='place-content-center'>
                        <div className='flex flex-col items-center m-4'>
                            <Link href='/add'>
                                <button className='bg-royal-purple-light px-20 py-1.5 rounded-3xl  mt-5 text-2xl text-white hover:text-royal-purple-light hover:bg-white'>
                                    Add a product
                                </button>
                            </Link>
                            <Link href='/edit'>
                                <button className='bg-royal-purple-light px-20 py-1.5 rounded-3xl mt-5 text-2xl text-white hover:text-royal-purple-light hover:bg-white'>
                                    Edit a product
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Manage
