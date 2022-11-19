import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getDatabase, ref, onValue } from 'firebase/database'
import Navbar from '../../components/navbar/navbar'

function Payment() {
    const router = useRouter()
    const pid = router.query
    console.log(pid)
    const db = getDatabase()
    const [item, setItem] = useState([])
    const starCountRef = ref(db, '/Amulet/' + pid.id)
    useEffect(() => {
        onValue(starCountRef, (snapshot) => {
            setItem(snapshot.val())
        })
    }, [])
    return (
        // <div className='p-5'>
        //     <Navbar payment={true} />
        //     <div className='flex flex-row mt-[5rem] p-[1rem] bg-red-400 drop-shadow-2xl rounded-xl'>
        //         <div className='basis-1/2 min-w-screen py-5 rounded-md bg-green-400 ml-5'>
        //             <div>
        //                 <div>Choose your payment</div>
        //                 <input
        //                     id='search-box'
        //                     className=' w-[15rem] rounded-xl pl-3 py-2 border-2 border-black'
        //                     // onChange={filterBySearch}
        //                     placeholder='Search product here...'
        //                 />
        //             </div>
        //         </div>
        //         <div className='basis-1/2 bg-purple-400 rounded-xl'>
        //             <div>
        //                 <div>Choose your payment</div>
        //                 <input
        //                     id='search-box'
        //                     className=' w-[15rem] rounded-xl pl-3 py-2 border-2 border-black'
        //                     // onChange={filterBySearch}
        //                     placeholder='Search product here...'
        //                 />
        //             </div>
        //         </div>
        //     </div>
        //     {/* <div>{pid.amount * item.price}</div> */}
        // </div>
        <div className=''>
            <div className='p-5'>
                <Navbar payment={true} />
            </div>
            <div className=' min-h-screen bg-mutelu_1 bg-cover '>
                <div className='flex gap-x-80'>
                    <div className='flex-cols basis-1/2 ml-20'>
                        <div className='grid  border border-black rounded-xl '>
                            <div className='border-b border-black p-5 bg-royal-purple-light rounded-t-xl'>
                                <div className='font-semibold'>Choose your payment method</div>
                            </div>
                            <div className='flex items-center py-5 bg-white'>
                                <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 ml-4" />
                                <label for="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 ">Credit Card</label>
                            </div>
                            <div className="flex items-center border-t border-black py-5 bg-white">
                                <input id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 ml-4" />
                                <label for="default-radio-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 ">Debit Card</label>
                            </div>
                            <div className="flex items-center border-y border-black py-5 bg-white">
                                <input id="default-radio-3" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 ml-4" />
                                <label for="default-radio-3" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 ">Online Banking</label>
                            </div>
                            <div className="flex items-center py-5 bg-white rounded-b-xl">
                                <input id="default-radio-4" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 ml-4" />
                                <label for="default-radio-4" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 ">Cash on Delivery</label>
                            </div>

                        </div>
                        <div className='grid mt-20 border border-black rounded-xl bg-white'>
                            <div className='border-b border-black p-5 bg-royal-purple-light rounded-t-xl'>
                                <div className='font-semibold'>Delivery Address </div>
                            </div>
                            <div className='grid mt-2'>
                                <div id='name' className='ml-5'>Huang Renjun</div>
                                <div id='address' className='ml-5'>999 Phuttamonthon 4 Road, Salaya, Nakhon Pathom 73170 Thailand</div>
                                <div id='mobile' className='ml-5'>Mobile - 0812345678</div>
                            </div>
                            <button className='bg-royal-purple-light m-8 w-48 rounded-xl mt-5 text-l text-white hover:text-royal-purple-light hover:bg-white drop-shadow-xl border border-black'>
                                Add another Address
                            </button>
                        </div>
                    </div>
                    <div className='basis-1/2 mr-20 w-40 h-auto'>
                    <div className='grid border border-black rounded-xl'>
                            <div className='border-b border-black p-5 bg-royal-purple-light rounded-t-xl'>
                                <div className='font-semibold'>Order Summary </div>
                            </div>
                            {/* <div className='m-5'>{item.name} X{pid.amount} ฿{item.price}</div> */}
                            <div className='flex flex-cols bg-white my-5'>
                                <div className='flex ml-10 mr-36 '>
                                {item.name}
                                </div>
                                <div className='mr-20'>
                                X{pid.amount}
                                </div>
                                <div className=''>
                                ฿{item.price}
                                </div>
                            </div>
                            <div className='flex bg-white my-5'>
                                <div className='bg-white ml-10 mr-36'>
                                Shipping
                                </div>
                                <div className='ml-[168px] bg-white'>
                                ฿30
                                </div>
                            </div>

                            <div className='flex bg-white my-5'>
                                <div className='bg-white ml-10 mr-36'>
                                Total
                                </div>
                                <div className='ml-[196px] bg-white'>
                                ฿{pid.amount * item.price + 30}
                                </div>
                            </div>
                            <div className='flex justify-center bg-white rounded-b-xl'>
                            <button className='bg-royal-purple-light m-8 w-48 rounded-xl mt-5 text-l text-white hover:text-royal-purple-light hover:bg-white drop-shadow-xl border border-black'>
                                Place to Order
                            </button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
