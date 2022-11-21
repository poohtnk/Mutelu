import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/navbar'
import { useRouter } from 'next/router'
import { getDatabase, ref, onValue } from 'firebase/database'
import Image from 'next/image'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import Link from 'next/link'
import { UserForm } from '../../components/form'
function EditProduct() {
    const router = useRouter()
    const pid = router.query
    const db = getDatabase()
    const starCountRef = ref(db, '/Amulet/' + pid.id)
    const [item, setItem] = useState(null)
    const [num, setNum] = useState(1)
    useEffect(() => {
        onValue(starCountRef, (snapshot) => {
            setItem(snapshot.val())
        })
    }, [])

    return (
        <div className='min-h-screen bg-mutelu_2 bg-cover'>
            <Navbar />
            <div className='container mt-[5rem]'>
                {item ? (
                    <UserForm preloadedValues={item} pid={pid.id} />
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        </div>
    )
}

export default EditProduct
