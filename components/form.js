import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Image from 'next/image'
export function UserForm({ preloadedValues }) {
    const { register, handleSubmit } = useForm({
        defaultValues: preloadedValues,
    })
    const [productName, setProductName] = useState(preloadedValues.name)
    const onSubmit = (data) => {
        alert(JSON.stringify(data))
    }
    const handleProductNameInput = (e) => {
        setProductName(e.target.value)
    }
    console.log(preloadedValues)
    return (
        <div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='bg-white drop-shadow-2xl mx-[10rem] rounded-3xl'
            >
                <div className='flex  p-[2rem] rounded-3xl'>
                    <div className='basis-1/2'>
                        <Image
                            src={preloadedValues.img}
                            alt='hello'
                            width={400}
                            height={400}
                            className='object-cover h-48 w-96 rounded-2xl'
                        />
                    </div>
                    <div className='basis-1/2'>
                        <div className='grid grid-cols-2'>
                            <div className='text-3xl'>Product Name</div>
                            <input
                                {...register('name')}
                                placeholder='Product Name'
                                type='text'
                                onChange={handleProductNameInput}
                                className='border border-black text-2xl'
                            />
                            <div className='text-3xl'>Price</div>
                            <input
                                {...register('price')}
                                placeholder='Price'
                                type='text'
                            />
                        </div>
                    </div>
                </div>

                <button>Submit</button>
            </form>
        </div>
    )
}
