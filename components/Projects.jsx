import { motion } from "framer-motion"
import Image from "next/image"

const Projects = () => {
    return (
        <>
            <div className='py-10'>
                <div className='text-5xl border-b-[1px] px-10 pb-10 border-zinc-700 text-white tracking-tight font-["Neue_Montreal"]'><h1>Featured projects</h1></div>
            </div>

            <div className="mt-1">
                <div className="w-full h-full flex gap-10 px-10 ">
                    <div className="w-full h-[80vh] bg-green-400 ">
                            <div className="w-full h-full bg-yellow-200 relative">
                                <Image className="w-full h-full bg-cover" src='/left.png' width={500} height={500}></Image>

                                <h1 className="text-6xl font-semibold text-orange-500 absolute right-[-16%] top-1/2 -translate-y-50% z-[9]">

                                {'FYDE'.split('').map((item,index)=> 
                                <motion.sapn>{item}</motion.sapn>)}
                                </h1>
                            </div>
                    </div>
                    <div className="w-full h-[80vh] bg-green-400 ">

                    <div className="w-full h-full bg-yellow-200 relative">
                                <Image className="w-full h-full bg-cover" src='/right.jpg' width={500} height={500}></Image>

                                <h1 className="text-6xl font-semibold text-orange-500 absolute left-[-16%] top-1/2 -translate-y-50%">
                                {'VISE'.split('').map((item,index)=> 
                                <span>{item}</span>)}
                                </h1>
                            </div>
                    </div>
                </div>
            </div>

        </>
    )
}
// transition-all ease-linear duration-100
export default Projects