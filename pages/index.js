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
    // const { currentUser } = useContext(AuthContext)
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setCurrentUser(user)
            }
        })
    })
    console.log(currentUser)
    if (currentUser) {
        router.push('/home')
    }
    return (
        <div>
            <Navbar />
            <div className='text-7xl text-center pt-20'>
                Welcome to Mutelu Page!
            </div>
        </div>
    )
}
