'use client'
import React, { useEffect, useState } from 'react'




const Eyes = () => {

    const [rotate, setRotate] = useState(0)

    useEffect(() => {
        window.addEventListener("mousemove",(e)=>{
            let mouseY = e.clientY;
            let mouseX = e.clientX;
                // difference X & Y
                let deltaY = mouseY - window.innerWidth/2
                let deltaX = mouseX - window.innerHeight/2

                var angle = Math.atan2(deltaY,deltaX) * (360/Math.PI)
                setRotate(angle -360);
        })
    })

    return (
        <>
            <div data-scroll data-scroll-speed='-.2' className='w-full h-screen overflow-hidden '>
                <div  className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>

                    <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-10'>

                        <div className='flex items-center justify-center w-[12vw] h-[12vw] bg-zinc-100 rounded-full'>
                            <div className='h-[7.5vw] w-[7.5vw] bg-zinc-900 rounded-full relative'>
    <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-7'>
                                <div className='h-[2vw] w-[2vw] bg-zinc-100 rounded-full'></div>
                            </div>
                            </div>
                        </div>

                        <div className='w-[12vw] h-[12vw] bg-zinc-100 rounded-full justify-center items-center justify flex'>
                        <div className='relative h-[7.5vw] w-[7.5vw] bg-zinc-900 rounded-full'>
                        <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-7'>
                                <div className='h-[2vw] w-[2vw] bg-zinc-100 rounded-full'></div>
                            </div>
                        </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Eyes