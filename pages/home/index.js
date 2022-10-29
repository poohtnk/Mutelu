import {
    auth,
    logInWithEmailAndPassword,
    signInWithGoogle,
    logout,
} from '../../firebase/config'
import React, { useState, useContext, useEffect } from 'react'
import Navbar from '../../components/navbar/navbar'
import { useRouter } from 'next/router'
import Link from 'next/link'
function Home() {
    const [currentUser, setCurrentUser] = useState(null)
    const router = useRouter()
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setCurrentUser(user)
            }
            console.log(currentUser)
        })
        // if (!currentUser) {
        //     router.push('/login')
        // }
    })

    if (currentUser) {
        return (
            <>
                <div className='min-h-screen bg-background1 bg-cover'>
                    <Navbar />
                    <div className='text-7xl text-center pt-20'>
                        Hello {currentUser.email}
                    </div>
                    <Link href='/'>
                        <button onClick={logout}>Logout</button>
                    </Link>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className='min-h-screen bg-background1 bg-cover'>
                    <Navbar />
                    <div className='text-7xl text-center pt-20'>
                        Welcome to Mutelu Page!
                    </div>
                </div>
            </>
        )
    }
}
export default Home
