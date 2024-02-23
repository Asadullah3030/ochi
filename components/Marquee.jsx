'use client'
import { motion } from "framer-motion"

const Marquee = () => {
  return (
    <>
            <div data-scroll data-scroll-section data-scroll-speed='.1' className='w-full py-14 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
                        <div className='text border-t-2 border-b-2 overflow-hidden border-zinc-300 flex whitespace-nowrap'>
                                <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{ ease:"linear", duration : 5,repeat: Infinity,}} className='text-[13vw] uppercase  text-white font-bold leading-none tracking-tighter pr-10'>We are Ochi</motion.h1>
                                <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{ ease:"linear", duration : 5,repeat: Infinity,}} className='text-[13vw] uppercase  text-white font-bold leading-none tracking-tighter pr-10'>We are Ochi</motion.h1>
                        </div>
            </div>
    </>
  )
}

export default Marquee