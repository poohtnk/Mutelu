import React, { useEffect, useState } from 'react'
import {
    auth,
    logInWithEmailAndPassword,
    signInWithGoogle,
    logout,
} from '../../firebase/config'
import { useAuthState } from 'react-firebase-hooks/auth'
import Link from 'next/link'
import { signInWithEmailAndPassword } from 'firebase/auth'
import Navbar from '../../components/navbar'

class Login extends React.Component {
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const [user, loading, error] = useAuthState(auth)
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            currentUser: null,
            message: '',
        }
    }
    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    currentUser: user,
                })
            }
        })
    }
    onChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value,
        })
    }
    onSubmit = (e) => {
        e.preventDefault()
        console.log('Pass')
        console.log(this.state)
        const { email, password } = this.state
        console.log(email, password)
        // TODO: implement signInWithEmailAndPassword()
        logInWithEmailAndPassword(email, password)
            .then((response) => {
                console.log('response', response)
                this.setState({
                    currentUser: response.user,
                })
            })
            .catch((error) => {
                console.log(error.message)
                this.setState({
                    message: error.message,
                })
            })
    }
    render() {
        const { message, currentUser } = this.state

        if (currentUser) {
            return (
                <div>
                    <p>Hello {currentUser.email}</p>
                    <button onClick={logout}>Logout</button>
                    <Link href='/login'>Logout</Link>
                </div>
            )
        }
        return (
            <>
                <Navbar />
                <div className='flex place-content-center mt-[12rem]'>
                    <div className='flex p-6 rounded-lg shadow-lg bg-white max-w-sm items-center text-black'>
                        <form className='' onSubmit={this.onSubmit}>
                            <div className='text-center text-3xl'>Log In</div>
                            <label className='form-label inline-block my-2 text-gray-700'>
                                Email
                            </label>
                            <input
                                type='text'
                                className='form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid 
                                border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600'
                                name='email'
                                onChange={this.onChange}
                                placeholder='E-mail Address'
                            />
                            <label className='form-label inline-block my-2 text-gray-700'>
                                Password
                            </label>
                            <input
                                type='password'
                                className='form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600'
                                name='password'
                                onChange={this.onChange}
                                placeholder='Password'
                            />
                            <button
                                className='w-full bg-sky-500 p-1 rounded-lg mt-2 text-white font-bold'
                                type='submit'
                            >
                                Login
                            </button>
                            <div>
                                <Link href='/reset'>Forgot Password</Link>
                            </div>
                            <div>
                                Do not have an account?{' '}
                                <Link href='/signup'>Register</Link> now.
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default Login
