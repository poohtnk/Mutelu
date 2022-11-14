import {
    auth,
    logInWithEmailAndPassword,
    signInWithGoogle,
    logout,
} from '../../firebase/config'
import React, { useState, useContext, useEffect } from 'react'
import Navbar from '../../components/navbar/navbar'
import { useRouter } from 'next/router'
import { getDatabase, ref, onValue } from 'firebase/database'

function Home() {
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
    }, [])

    if (currentUser && currentData) {
        return (
            <>
                <div className='min-h-screen bg-mutelu_1 bg-cover'>
                    <Navbar />
                    <div className='font-Inter text-7xl text-center pt-[20rem]'>
                        Hello
                        <div className='text-royal-purple text-2xl pt-5'>
                            {currentData.firstName}
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className='min-h-screen bg-mutelu_1 bg-cover'>
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
