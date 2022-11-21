import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Image from 'next/image'
import { getDatabase, ref, onValue, set, remove } from 'firebase/database'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'

export function UserForm({ preloadedValues, pid }) {
    const { register, handleSubmit } = useForm({
        defaultValues: preloadedValues,
    })
    const [productName, setProductName] = useState(preloadedValues.name)
    const [price, setPrice] = useState(preloadedValues.price)
    const [description, setDescription] = useState(preloadedValues.description)
    const [amount, setAmount] = useState(preloadedValues.quantity)
    const db = getDatabase()
    const handleProductNameInput = (e) => {
        setProductName(e.target.value)
    }
    const handlePrice = (e) => {
        setPrice(e.target.value)
    }
    const handleDescription = (e) => {
        setDescription(e.target.value)
    }
    const handleAmount = (e) => {
        setAmount(e.target.value)
    }
    const router = useRouter()
    const changeProductInfo = (e) => {
        e.preventDefault()
        set(ref(db, 'Amulet/' + pid), {
            name: productName,
            price: price,
            quantity: amount,
            description: description,
            img: preloadedValues.img,
        })
        Swal.fire({
            title: 'Product is edited!',
            icon: 'success',
            width: '20rem',
            timer: 5000,
        }).then((result) => {
            router.push('/manage')
        })
    }
    const deleteProduct = (e) => {
        remove(ref(db, 'Amulet/' + pid))

        Swal.fire({
            title: 'Product is deleted!',
            icon: 'success',
            width: '20rem',
            timer: 5000,
        }).then((result) => {
            router.push('/manage')
        })
    }
    return (
        <div>
            <form className='bg-white drop-shadow-2xl mx-[10rem] rounded-3xl'>
                <div className='flex p-[2rem] rounded-3xl '>
                    <div className='basis-1/2 text-center'>
                        <Image
                            src={preloadedValues.img}
                            alt='hello'
                            width={400}
                            height={400}
                            className='object-cover h-48 w-96 rounded-2xl'
                        />
                    </div>
                    <div className='basis-1/2 '>
                        <div className='grid gap-y-2 grid-cols-1 p-3 '>
                            <div className='text-2xl'>Product Name</div>
                            <input
                                {...register('name')}
                                placeholder='Product Name'
                                type='text'
                                onChange={handleProductNameInput}
                                className='text-xl border-royal-purple-light border-2 rounded-xl pl-3'
                            />
                            <div className='text-2xl'>Price</div>
                            <input
                                {...register('price')}
                                placeholder='Price'
                                type='text'
                                onChange={handlePrice}
                                className='text-xl border-royal-purple-light border-2 rounded-xl pl-3'
                            />
                            <div className='text-2xl'>Description</div>
                            <textarea
                                rows='4'
                                {...register('description')}
                                placeholder='Description'
                                type='text'
                                onChange={handleDescription}
                                className='text-xl border-royal-purple-light border-2 rounded-xl pl-3'
                            />
                            <div className='text-2xl'>Amount</div>
                            <input
                                {...register('quantity')}
                                placeholder='Amount'
                                type='text'
                                onChange={handleAmount}
                                className='text-xl border-royal-purple-light border-2 rounded-xl pl-3'
                            />
                        </div>
                    </div>
                </div>
                <div className='flex px-[2rem] pb-[2rem] rounded-3xl '>
                    <div className='basis-1/3 text-center'></div>
                    <div className='basis-1/3 text-center'>
                        <div className='flex justify-between'>
                            <button
                                onClick={changeProductInfo}
                                className='bg-royal-purple-light p-2 rounded-2xl text-white hover:bg-white hover:text-royal-purple-light'
                            >
                                Save change
                            </button>
                            <button
                                onClick={deleteProduct}
                                className='bg-rose-700 p-2 rounded-2xl text-white hover:bg-white hover:text-rose-700'
                            >
                                Delete Product
                            </button>
                        </div>
                    </div>
                    <div className='basis-1/3 text-center'></div>
                </div>
            </form>
        </div>
    )
}
