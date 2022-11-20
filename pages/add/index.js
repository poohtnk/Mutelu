import { FormControl, TextField, createTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/navbar'
import { getDatabase, ref, set, push } from 'firebase/database'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'

function Add() {
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState(0)
    const [productStock, setProductStock] = useState(0)
    const [productDescription, setProductDescription] = useState('')
    const database = getDatabase()
    // const ref = ref('Amulet/1')
    const [productImg, setProductImg] = useState('')
    const router = useRouter()
    const onSubmit = (e) => {
        e.preventDefault()
        push(ref(database, 'Amulet'), {
            name: productName,
            price: productPrice,
            quantity: productStock,
            description: productDescription,
            img: productImg,
        })
        Swal.fire({
            title: 'Product is added!',
            icon: 'success',
            width: '20rem',
            timer: 5000,
        }).then((result) => {
            router.push('/manage')
        })
    }
    const handleProductNameInput = (e) => {
        setProductName(e.target.value)
    }
    const handleProductPriceInput = (e) => {
        setProductPrice(e.target.value)
    }
    const handleProductStockInput = (e) => {
        setProductStock(e.target.value)
    }
    const handleProductDescriptionInput = (e) => {
        setProductDescription(e.target.value)
    }
    const handleProductImgInput = (e) => {
        setProductImg(e.target.value)
    }

    return (
        <div className='min-h-screen bg-mutelu_1 bg-cover'>
            <Navbar />
            <div className='flex place-content-center mt-[8rem]'>
                <div className='flex p-6 rounded-lg shadow-lg bg-royal-purple-light text-white max-w-screen-2xl'>
                    <form onSubmit={onSubmit}>
                        <FormControl fullWidth>
                            <div className='text-3xl'>General Information</div>
                            <label className>Product Image Url</label>
                            <input
                                type='text'
                                className='form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid 
                                border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600'
                                name='productName'
                                onChange={handleProductImgInput}
                            />
                            <label className>Product Name</label>
                            <input
                                type='text'
                                className='form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid 
                                border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600'
                                name='productName'
                                onChange={handleProductNameInput}
                            />
                            <label className>Price</label>
                            <input
                                type='text'
                                className='form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid 
                                border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600'
                                name='productPrice'
                                onChange={handleProductPriceInput}
                            />
                            <label className>Stock</label>
                            <input
                                type='text'
                                className='form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid 
                                border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600'
                                name='productStock'
                                onChange={handleProductStockInput}
                            />
                            <label>Description</label>
                            <TextField
                                id='productDescription'
                                className='w-full border-8 border-another-purple '
                                variant='outlined'
                                rows={8}
                                multiline
                                required
                                onChange={handleProductDescriptionInput}
                            />
                        </FormControl>
                        <button
                            className='w-full p-1 rounded-lg mt-2 text-white font-bold hover:text-royal-purple-light hover:bg-white'
                            type='submit'
                        >
                            Add a Product
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Add
