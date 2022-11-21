import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/navbar'
import { useRouter } from 'next/router'
import { getDatabase, ref, onValue } from 'firebase/database'
import Image from 'next/image'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import Link from 'next/link'

function SancResult() {
    const router = useRouter()
    const pid = router.query
    const db = getDatabase()
    const starCountRef = ref(db, '/Sanctuary/' + pid.id)

    useEffect(() => {
        onValue(starCountRef, (snapshot) => {
            setItem(snapshot.val())
        })
    }, [])

    const [item, setItem] = useState([])

    return (
        <div className='min-h-screen bg-mutelu_2 bg-cover'>
            <Navbar />
            <div className='flex mt-[5rem] mx-[20rem] bg-gray-200 p-[5rem] rounded-3xl'>
                <div className='basis-1/2'>
                    <Image
                        src={item.img}
                        alt='hello'
                        width={400}
                        height={400}
                        className='object-cover h-48 w-96 rounded-2xl'
                    />
                </div>
                <div className='mx-[5rem] basis-1/2'>
                    <div className='text-3xl mb-[1rem]'>{item.name}</div>
                    <div className='text-xl mb-[1rem]'>{item.description}</div>
                </div>
            </div>
        </div>
    )
}
export default SancResult
