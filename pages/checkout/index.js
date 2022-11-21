import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getDatabase, ref, onValue } from 'firebase/database'
import Navbar from '../../components/navbar/navbar'
import { provinces } from './provinces'
import Link from 'next/link'

function Checkout() {
    const router = useRouter()
    const pid = router.query
    const db = getDatabase()
    const [item, setItem] = useState([])

    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [paymentType, setPaymentType] = useState('')
    const [province, setProvince] = useState('Bangkok')

    const handleNameInput = (e) => {
        setName(e.target.value)
    }
    const handleAddressInput = (e) => {
        setAddress(e.target.value)
    }
    const handlePostalCode = (e) => {
        setPostalCode(e.target.value)
    }
    const handleProvince = (e) => {
        setProvince(e.target.value)
    }
    const handlePayment = (e) => {
        setPaymentType(e.target.value)
    }
    const starCountRef = ref(db, '/Amulet/' + pid.id)
    useEffect(() => {
        onValue(starCountRef, (snapshot) => {
            setItem(snapshot.val())
        })
    }, [])
    const onSubmit = (e) => {}
    return (
        <div className=''>
            <div className=''>
                <Navbar payment={true} />
            </div>
            <div className=' min-h-screen bg-mutelu_1 bg-cover mt-[1rem]'>
                <div className='flex gap-x-80'>
                    <div className='flex-cols basis-1/2 ml-20'>
                        <div className='grid  border border-black rounded-xl '>
                            <div className='border-b border-black p-5 bg-royal-purple-light rounded-t-xl'>
                                <div className='font-semibold text-white'>
                                    Choose your payment method
                                </div>
                            </div>
                            <div className='flex items-center py-5 bg-white'>
                                <input
                                    id='default-radio-1'
                                    type='radio'
                                    value='Credit'
                                    name='default-radio'
                                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 ml-4'
                                    onChange={handlePayment}
                                />
                                <label
                                    for='default-radio-1'
                                    className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-600 '
                                >
                                    Credit Card/Debit Card
                                </label>
                            </div>
                            <div className='flex items-center border-y border-black py-5 bg-white'>
                                <input
                                    id='default-radio-3'
                                    type='radio'
                                    value='Banking'
                                    name='default-radio'
                                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 ml-4'
                                    onChange={handlePayment}
                                />
                                <label
                                    for='default-radio-3'
                                    className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-600 '
                                >
                                    Online Banking
                                </label>
                            </div>
                            <div className='flex items-center py-5 bg-white rounded-b-xl'>
                                <input
                                    id='default-radio-4'
                                    type='radio'
                                    value='Cash'
                                    name='default-radio'
                                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 ml-4'
                                    onChange={handlePayment}
                                />
                                <label
                                    for='default-radio-4'
                                    className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-600 '
                                >
                                    Cash on Delivery
                                </label>
                            </div>
                        </div>
                        <div className='grid mt-10 border border-black rounded-xl bg-white'>
                            <div className='border-b border-black p-5 bg-royal-purple-light rounded-t-xl'>
                                <div className='font-semibold text-white'>
                                    Delivery Address
                                </div>
                            </div>
                            <form className='m-3' onSubmit={onSubmit}>
                                <label className='form-label inline-block my-2 text-gray-700'>
                                    Name
                                </label>
                                <input
                                    type='text'
                                    className='form-control w-full block px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid 
                                            border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600'
                                    name='name'
                                    onChange={handleNameInput}
                                    placeholder='Enter your name'
                                />
                                <label className='form-label inline-block my-2 text-gray-700'>
                                    Address
                                </label>
                                <textarea
                                    type='text'
                                    className='form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid 
                                border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600'
                                    name='address'
                                    onChange={handleAddressInput}
                                    placeholder='Enter your address'
                                />
                                <div className='flex mt-3'>
                                    <label className='form-label inline-block my-3 text-gray-700'>
                                        Postal Code
                                    </label>
                                    <input
                                        type='text'
                                        className='form-control block px-3 text-gray-700 bg-white bg-clip-padding border border-solid 
                                border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600'
                                        name='postalCode'
                                        onChange={handlePostalCode}
                                        placeholder='Enter your postal code'
                                    />
                                    <label className='form-label inline-block my-3  text-gray-700'>
                                        Province
                                    </label>
                                    <select
                                        className='ml-3'
                                        onChange={handleProvince}
                                    >
                                        {provinces.map((data) => {
                                            return (
                                                <option
                                                    key={data.id}
                                                    value={data.name_en}
                                                >
                                                    {data.name_en}
                                                </option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='basis-1/2 mr-20 w-40 h-auto'>
                        <div className='grid border border-black rounded-xl'>
                            <div className='border-b border-black p-5 bg-royal-purple-light rounded-t-xl'>
                                <div className='font-semibold text-white'>
                                    Order Summary
                                </div>
                            </div>
                            <div className='flex flex-cols bg-white my-5 gap-x-5'>
                                <div className='ml-10 w-[14rem]'>
                                    {item.name}
                                </div>
                                <div className='mr-12'>X{pid.amount}</div>
                                <div className='ml-[1.5rem]'>฿{item.price}</div>
                            </div>
                            <div className='flex flex-cols bg-white my-5 gap-x-5'>
                                <div className='ml-10 w-[14rem]'>Shipping</div>
                                <div className='mr-[6rem]'></div>

                                <div className=''>฿30</div>
                            </div>
                            <div className='flex flex-cols bg-white my-5 gap-x-5'>
                                <div className='ml-10 w-[14rem]'>Total</div>
                                <div className='mr-[6rem]'></div>
                                <div className=''>
                                    ฿{pid.amount * item.price + 30}
                                </div>
                            </div>
                            <div className='flex justify-center bg-white rounded-b-xl'>
                                <Link
                                    href={
                                        '/payment?id=' +
                                        pid.id +
                                        '&amount=' +
                                        pid.amount +
                                        '&paymentType=' +
                                        paymentType
                                    }
                                >
                                    <button className='bg-royal-purple-light m-8 w-48 rounded-xl mt-5 text-l text-white hover:text-royal-purple-light hover:bg-white drop-shadow-xl border border-black'>
                                        Proceed to Payment
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
