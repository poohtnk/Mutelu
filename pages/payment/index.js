import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getDatabase, ref, onValue } from 'firebase/database'
import Navbar from '../../components/navbar/navbar'
import Swal from 'sweetalert2'

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
    if (pid.paymentType == 'Cash') {
        Swal.fire({
            title: 'Your order will be proceeded soon!',
            icon: 'success',
            width: '20rem',
            timer: 10000,
        }).then((result) => {
            router.push('/')
        })
    } else if (pid.paymentType == 'Banking') {
        return (
            <div>
                <Navbar payment={true} />
                Banking
            </div>
        )
    } else if (pid.paymentType == 'Credit') {
        return (
            <div>
                <Navbar payment={true} />
                Credit
            </div>
        )
    }
}

export default Payment
