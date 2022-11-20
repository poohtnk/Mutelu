import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Navbar from '../../components/navbar/navbar'
import Swal from 'sweetalert2'
import bank from '../../asset/img/bank.jpg'
import Image from 'next/image'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
function Payment() {
    const router = useRouter()
    const pid = router.query
    const [name, setName] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [expDate, setExpDate] = useState('')
    const [CCV, setCCV] = useState('')
    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleCardNumber = (e) => {
        setCardNumber(e.target.value)
    }
    const handleEXPDate = (e) => {
        setExpDate(e.target.value)
    }
    const handleCCV = (e) => {
        setCCV(e.target.value)
    }
    const popup = (e) => {
        Swal.fire({
            title: 'Your order will be processed soon!',
            icon: 'success',
            width: '20rem',
            timer: 5000,
        }).then((result) => {
            router.push('/')
        })
    }
    function checkName(name) {
        if (name == '') return false
        else return true
    }
    function checkCardNumber(num) {
        if (isNaN(num)) {
            return false
        }
        if (num.length != 16) {
            return false
        }
        return true
    }
    function checkCCV(CCV) {
        console.log(CCV)
        if (CCV.length != 3 && !isNaN(CCV)) return false
        else return true
    }
    function checkExpDate(date) {
        var today = new Date()
        var someday = new Date()
        if (date.length != 7) {
            return false
        } else {
            if (parseInt(date[0] + date[1]) > 12) {
                return false
            } else {
                if (date[2] != '/') {
                    return false
                }
                const year = parseInt(date[3] + date[4] + date[5] + date[6])
                const month = parseInt(date[0] + date[1])
                someday.setFullYear(year, month - 1)
                if (someday < today) {
                    return false
                }
            }
        }
        return true
    }
    const submit = (e) => {
        if (
            !checkCardNumber(cardNumber) ||
            !checkExpDate(expDate) ||
            !checkCCV(CCV) ||
            !checkName(name)
        ) {
            if (!checkName(name)) alert('Invalid Name on Card')
            else if (!checkCardNumber(cardNumber)) alert('Invalid Card Number')
            else if (!checkExpDate(expDate)) alert('Invalid Expiration Date')
            else alert('Invalid CCV')
        } else {
            popup()
        }
    }

    if (pid.paymentType == 'Cash') {
        popup()
    } else if (pid.paymentType == 'Banking') {
        return (
            <div>
                <Navbar payment={true} />
                <div className='text-center mt-[4rem]'>
                    <Image src={bank} alt='hello' width={354} height={480} />
                </div>
                <div className='text-center mt-[4rem]'>
                    <div className='font-Inter text-xl'>
                        Please click the button below when done paying
                    </div>
                    <button
                        className='bg-royal-purple-light m-8 w-48 rounded-xl mt-5 text-xl text-white hover:text-royal-purple-light hover:bg-white drop-shadow-xl border border-black'
                        onClick={popup}
                    >
                        Submit
                    </button>
                </div>
            </div>
        )
    } else if (pid.paymentType == 'Credit') {
        return (
            <div>
                <Navbar payment={true} />
                <div className='text-Inter text-4xl text-center mt-[8rem] mb-8 text-royal-purple-light'>
                    Payment
                </div>
                <div className='text-Inter text-xl text-center  bg-white drop-shadow-2xl shadow-black p-4 mx-[30rem]'>
                    <div className='mt-3 px-[2rem]'>
                        <div className='grid grid-cols-4 gap-4 mb-4'>
                            <TextField
                                id='outlined-basic'
                                label='Name on card'
                                variant='outlined'
                                className='col-span-2'
                                onChange={handleName}
                            />
                            <TextField
                                id='outlined-basic'
                                label='Card number (Dashes not required)'
                                variant='outlined'
                                className='col-span-2'
                                onChange={handleCardNumber}
                            />
                            <TextField
                                id='outlined-basic'
                                label='Expiration (MM/YYYY)'
                                variant='outlined'
                                onChange={handleEXPDate}
                            />
                            <TextField
                                id='outlined-basic'
                                label='CVV'
                                variant='outlined'
                                onChange={handleCCV}
                            />
                        </div>
                        <button
                            className='bg-royal-purple-light m-8 w-48 rounded-xl mt-5 text-xl text-white hover:text-royal-purple-light hover:bg-white drop-shadow-xl border border-black'
                            onClick={submit}
                        >
                            Pay
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Payment
