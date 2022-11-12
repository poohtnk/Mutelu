import { useState, useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import Navbar from '../components/navbar/navbar'
import {
    auth,
    logInWithEmailAndPassword,
    signInWithGoogle,
    logout,
} from '../firebase/config'
export default function Home() {
    const router = useRouter()
    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setCurrentUser(user)
            }
        })
    })
    if (currentUser) {
        router.push('/home')
    }
    return (
        <>
            <div className='min-h-screen bg-mutelu_1 bg-cover'>
                <Navbar />
                <div className='font-Inter text-7xl text-center pt-[20rem]'>
                    MUTELU
                </div>
            </div>
        </>
    )
}
