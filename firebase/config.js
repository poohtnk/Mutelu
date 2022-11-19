import { initializeApp } from 'firebase/app'
import { getDatabase, set, ref } from 'firebase/database'
import { getAnalytics } from 'firebase/analytics'
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

const firebaseConfig = {
    apiKey: 'AIzaSyA-fSx_8vdi5kTe2_xvSiDS5OO6In6BIm0',
    authDomain: 'mutelu-f5e49.firebaseapp.com',
    databaseURL:
        'https://mutelu-f5e49-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'mutelu-f5e49',
    storageBucket: 'mutelu-f5e49.appspot.com',
    messagingSenderId: '541175842795',
    appId: '1:541175842795:web:2f810d570e8cdfeaca7bae',
    measurementId: 'G-FSC67BK1R7',
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const db = getFirestore(app)
const database = getDatabase(app)
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
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (err) {
        console.error(err)
        alert('Login Unsuccessful')
    }
}

const registerWithEmailAndPassword = async (
    firstName,
    lastName,
    email,
    password
) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user
        await set(ref(database, 'User/' + user.uid), {
            uid: user.uid,
            email: email,
            firstName: firstName,
            lastName: lastName,
            role: 'user',
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
    database,
}
