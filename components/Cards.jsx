import Image from 'next/image';
import React from 'react'
import { FaStar } from "react-icons/fa";

const Cards = () => {
  return (
    <>
            <div data-scroll data-scroll-section data-scroll-speed='.1' className='w-full h-full px-10 mt-10 flex gap-5'>
                    <div className='w-[70%] h-80 bg-[#004D43] relative rounded-lg'>
                            <h1 className='text-6xl font-semibold text-[#CDEA68] absolute top-[50%] right-[42%] -translate-y-(50%) -translate-x-(50%) '>Ochi</h1>
                    </div>
                    <div className='w-[30%] h-80 bg-zinc-800 relative rounded-lg'>
                            <h1 className='text-4xl font-semibold text-white absolute top-[50%] right-[28%] -translate-x-(50%) -translate-y-(50%) rounded-lg'>Cluster</h1>

                            <div className='flex gap-4 absolute top-[65%] left-1/2 -translate-x-[50%] -translate-y-[50%] text-yellow-400'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            </div>
                    </div>
                    <div className='w-[30%] h-80 bg-zinc-800 flex justify-center items-center rounded-lg'>
                            <div className=''>
                                 <Image src='/logo.png' width={150} height={150}></Image>
                            </div>
                    </div>
            </div>
    </>
  )
}

export default Cards