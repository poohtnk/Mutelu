import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/navbar'
import { useRouter } from 'next/router'
import { getDatabase, ref, onValue } from 'firebase/database'
import Image from 'next/image'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import Link from 'next/link'
function Product() {
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
                    <div className='text-2xl mb-[1rem]'>{item.price}฿</div>
                    <div className='text-xl mb-[1rem]'>
                        In Stock: {item.quantity}
                    </div>
                    <div className='text-xl mb-[1rem]'>{item.description}</div>
                    <div className='flex '>
                        <button
                            onClick={decreaseNum}
                            className='px-1 border border-slate-600'
                        >
                            <RemoveIcon />
                        </button>

                        <div className='text-xl py-1 px-6 border border-slate-600'>
                            {num}
                        </div>
                        <button
                            onClick={increaseNum}
                            className='px-1 border border-slate-600 '
                        >
                            <AddIcon />
                        </button>
                    </div>
                    <Link href={'/payment?id=' + pid.id + '&amount=' + num}>
                        <button className='bg-royal-purple-light px-6 py-1.5 rounded-3xl mt-5 text-2xl text-white hover:text-royal-purple-light hover:bg-white'>
                            Buy
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Product
