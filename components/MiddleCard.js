import React from 'react'
import Image from 'next/image'

function MiddleCard({ img, title }) {
    return (
        <div className='flex items-center m-2 my-5 space-x-4 rounded-xl 
        cursor-pointer hover:bg-gray-100 hover:scale-105 
        transition transform duration-200 ease-Out'>
            <div className="relative h-28 w-28">
                <Image src={img} layout='fill' objectFit='contain' className='rounded-lg' />


            </div>
            <div>
                <h2>{title}</h2>
            </div>


        </div>
    )
}

export default MiddleCard
