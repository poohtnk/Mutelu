import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Card2({ id, title, price, img, description, num }) {
    return (
        <Link href={'/editProduct?id=' + id}>
            <div className='max-w-screen rounded-2xl shadow-lg bg-slate-50'>
                <div className='flex'>
                    <Image
                        src={img}
                        alt='hello'
                        width={200}
                        height={200}
                        className='object-cover rounded-2xl'
                    />
                    <div className='px-6 py-4 flex-1'>
                        <div className='font-Inter text-xl mb-2 line-clamp-2 h-[4rem]'>
                            {title}
                        </div>
                        <p className='text-gray-700 text-m mb-2 line-clamp-2'>
                            {description}
                        </p>
                        <p className='text-gray-700 text-m mb-2 line-clamp-2'>
                            Stock: {num}
                        </p>
                        <p className='text-gray-700 text-xl'>{price}฿</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
