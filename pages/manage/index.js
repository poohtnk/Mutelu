import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/navbar'
import { useRouter } from 'next/router'
import { getDatabase, ref, onValue } from 'firebase/database'
import Image from 'next/image'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import Link from 'next/link'
function Manage() {
    const router = useRouter()
    const pid = router.query
    const db = getDatabase()
    const starCountRef = ref(db, '/Amulet/' + pid.id)
    useEffect(() => {
        onValue(starCountRef, (snapshot) => {
            setItem(snapshot.val())
        })
    }, [])

    const [item, setItem] = useState([])
    const [num, setNum] = useState(1)
    const increaseNum = (e) => {
        if (num < item.quantity) {
            setNum(num + 1)
        } else {
        }
    }
    const decreaseNum = (e) => {
        if (num > 1) {
            setNum(num - 1)
        } else {
        }
    }
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
