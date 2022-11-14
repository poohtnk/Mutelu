import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getDatabase, ref, onValue } from 'firebase/database'
import Navbar from '../../components/navbar/navbar'

function Payment() {
    const router = useRouter()
    const pid = router.query
    console.log(pid)
    const db = getDatabase()
    const [item, setItem] = useState([])
    const starCountRef = ref(db, '/Amulet/' + pid.id)
    useEffect(() => {
        onValue(starCountRef, (snapshot) => {
            setItem(snapshot.val())
        })
    }, [])
    return (
        <div>
            <Navbar payment={true} />
            <div className='container mt-[5rem] p-[1rem] bg-white drop-shadow-2xl'>
                <div className='flex min-w-screen py-5 rounded-md'>
                    <div>
                        <div>Firstname</div>
                        <input
                            id='search-box'
                            className=' w-[15rem] rounded-xl pl-3 py-2 border-2 border-black'
                            // onChange={filterBySearch}
                            placeholder='Search product here...'
                        />
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
            <div>{pid.amount * item.price}</div>
        </div>
    )
}

export default Payment
