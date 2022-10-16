import { getDatabase, ref, set  } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import {withRouter} from '../../pages/api/withRouter';

import Navbar from '../../components/navbar';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
    registerWithEmailAndPassword
} from '../../firebase/config'
import {Navigate} from 'react-router-dom';



class Signup extends React.Component {
    //const [email, setEmail] = useState('')
    //const [password, setPassword] = useState('')
    //const [confirmPassword, setConfirmPassword] = useState('')
    //const [error, setError] = useState('')
    //const navigate = useNavigate()
    //const {setTimeActive} = useAuthValue()
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            message: '',
        }
        // this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = (e) => {
        const {name , value} = e.target;
        this.setState({
            [name]: value,
        })
        }

    onSubmit = (e) => {
        e.preventDefault()
        console.log('Pass')
        console.log(this.state)
        const { firstName, lastName, email, password, confirmPassword } = this.state
        if(password === confirmPassword){

            registerWithEmailAndPassword(firstName, lastName, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                // this.props.navigate('/home')
                this.props.history.push('/home');
            })
            .catch((error) => {
                if (error.code == "auth/email-already-in-use") {
                    alert("The email address is already in use");
                } else if (error.code == "auth/invalid-email") {
                    alert("The email address is not valid.");
                } else if (error.code == "auth/operation-not-allowed") {
                    alert("Operation not allowed.");
                } else if (error.code == "auth/weak-password") {
                    alert("The password is too weak.");
                }
            });
        }
    }
    render() {
        return (
            <>
                <Navbar />
                <div className='flex place-content-center mt-[15rem]'>
                    <div className='flex p-6 rounded-lg shadow-lg bg-white max-w-sm items-center text-black'>
                        <form className='' onSubmit={this.onSubmit}>
                            <label className='form-label inline-block my-2 text-gray-700'>
                                    First Name
                            </label>
                            <input
                                type='text'
                                className='form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid 
                                border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600'
                                name='firstName'
                                onChange={this.onChange}
                                 placeholder='Enter your first name'
                            />
                            <label className='form-label inline-block my-2 text-gray-700'>
                                    Last Name
                            </label>
                            <input
                                type='text'
                                className='form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid 
                                border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600'
                                name='lastName'
                                onChange={this.onChange}
                                 placeholder='Enter your last name'
                            />
                            <label className='form-label inline-block my-2 text-gray-700'>
                                Email
                            </label>
                            <input
                                type='text'
                                className='form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid 
                                border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600'
                                name='email'
                                onChange={this.onChange}
                                placeholder='Enter your email'
                            />
                            <label className='form-label inline-block my-2 text-gray-700'>
                                Password
                            </label>
                            <input
                                type='password'
                                className='form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600'
                                name='password'
                                onChange={this.onChange}
                                placeholder='Enter your password'
                            />
                            <label className='form-label inline-block my-2 text-gray-700'>
                                Confirm Password
                            </label>
                            <input
                                type='password'
                                className='form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounde dm-0 focus:text-gray-700 focus:bg-white focus:border-blue-600'
                                name='confirmPasswordpassword'
                                onChange={this.onChange}
                                placeholder='Confirm your password'
                            />
                            <button
                                className='w-full bg-sky-500 p-1 rounded-lg mt-2 text-white font-bold'
                                type='submit'
                            >
                                Sign Up
                            </button>
                            <div>
                                Already have an account?{' '}
                                <Link href='/login'>log in</Link> now.
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}
export default Signup;