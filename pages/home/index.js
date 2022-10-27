import {
    auth,
    logInWithEmailAndPassword,
    signInWithGoogle,
    logout,
} from '../../firebase/config'
import React, { useState, useContext, useEffect } from 'react'
import Navbar from '../../components/navbar'
import { useRouter } from 'next/router'
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
        if (!currentUser) {
            router.push('/')
        }
    })

    if (currentUser) {
        return (
            <>
                <Navbar />
                <div>Hello {currentUser.email}</div>
                <button onClick={logout}>Logout</button>
            </>
        )
    }
}
export default Home
