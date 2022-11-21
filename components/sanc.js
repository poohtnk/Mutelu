import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Card({ id, title, img, description}) {
    return (
        <Link href={'/sancResult?id=' + id}>
            <div className='max-w-sm rounded-2xl shadow-lg bg-slate-50'>
                <Image
                    src={img}
                    alt='hello'
                    width={400}
                    height={400}
                    className='object-cover h-48 w-96 rounded-2xl'
                />
                <div className='px-6 py-4'>
                    <div className='font-Inter text-xl mb-2 line-clamp-2 h-[3rem]'>
                        {title}
                    </div>
                    <p className='text-gray-700 text-m mb-2 line-clamp-2'>
                        {description}
                    </p>
                </div>
            </div>
        </Link>
    )
}
