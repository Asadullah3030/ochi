import { motion } from "framer-motion";
import Image from "next/image";
import { FaLongArrowAltUp } from "react-icons/fa";

const Landing = () => {
  return (
    <>
      <div data-scroll data-scroll-section data-scroll-speed='-.4' className='w-full h-screen bg-zinc-900 pt-1 text-lg'>
        <div className='masker mt-40 text-8xl text-white leading-[5.5vw] tracking-tighter px-10'>
          <h1 className="font-['Neue_Montreal'] font-semibold leading-none tracking-tight">WE CREATE</h1>
        </div>

        <div className='masker  text-8xl text-white leading-[5.5vw]tracking-tighter px-10'>
            <div className="flex items-center ">
                  <motion.div initial={{width: 0}} animate={{width:"10%"}} transition={{ease: [0.76, 0, 0.24, 1], duration:1}} className="w-[120px] h-[71px] rounded-sm">
                       <Image src='/download.jpg' width={122} height={99}></Image>
                  </motion.div>
                  <h1 className="font-['Neue_Montreal'] font-semibold leading-none tracking-tight ">EYE-OPENING</h1>
            </div>
        </div>

        <div className='masker font-["Founders Grotesk"] font-semibold text-8xl text-white leading-[5.5vw] tracking-tighter px-10'>
          <h1 className="font-['Neue_Montreal'] leading-none tracking-tight">PRESENTATIONS</h1>
        </div>
        <div className='border-t-[2px] border-zinc-800 mt-28'></div>

        <div className='flex justify-between items-center py-5 px-10'>
          {['For public and private companies', 'From the first pitch to IPO'].map((item, index) => (<p key={index} className='text-white text-sm leading-none tracking-tighter'>{item}</p>))}

          <div className='start flex justify-center gap-3'>
            <div className='uppercase text-white border-[2px] border-zinc-800 text-sm px-3 py-2 rounded-full '>
              <button>Start the Project</button>

            </div>
            <div className="border-zinc-800 border-[2px] text-white flex justify-center items-center px-2 rounded-full">
              <span className="rotate-[45deg]">
                <FaLongArrowAltUp />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing