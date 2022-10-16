import { initializeApp } from 'firebase/app'

import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from 'firebase/auth'
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
} from 'firebase/firestore'

const config = {
    apiKey: "AIzaSyDensOAuaYbos3CihROOF4HYndQnq3XvOY",
    authDomain: "practical-software-mutelu.firebaseapp.com",
    projectId: "practical-software-mutelu",
    storageBucket: "practical-software-mutelu.appspot.com",
    messagingSenderId: "93983625927",
    appId: "1:93983625927:web:66aae73b938a77c0e3e4e2"
}

const app = initializeApp(config)
const auth = getAuth(app)
const db = getFirestore(app)
const googleProvider = new GoogleAuthProvider()

const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider)
        const user = res.user
        const q = query(collection(db, 'users'), where('uid', '==', user.uid))
        const docs = await getDocs(q)
        if (docs.docs.length === 0) {
            await addDoc(collection(db, 'users'), {
                uid: user.uid,
                name: user.displayName,
                authProvider: 'google',
                email: user.email,
            })
        }
    } catch (err) {
        console.error(err)
        alert(err.message)
    }
}

const logInWithEmailAndPassword = async (email, password) => {
    console.log('logIn Is Called')
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (err) {
        console.error(err)
        alert(err.message)
    }
}

const registerWithEmailAndPassword = async (firstName, lastName, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user
        await addDoc(collection(db, 'users'), {
            uid: user.uid,
            firstName,
            lastName,
            authProvider: 'local',
            email,
        })
    } catch (err) {
        console.error(err)
        alert(err.message)
    }
}

const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email)
        alert('Password reset link sent!')
    } catch (err) {
        console.error(err)
        alert(err.message)
    }
}

const logout = () => {
    signOut(auth)
}

export {
    auth,
    db,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
}
