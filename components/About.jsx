import Image from "next/image"

const About = () => {
    return (
        <>
            <div data-scroll data-scroll-speed='-.1' className="w-full bg-[#CDEA68] ">
                <div className="py-14 px-14 font-['Neue_Montreal']">
                    <h5 className=" text-5xl tracking-tight ">Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h5>

                    <div className="border-zinc-800 border-t-[1px] text-white mt-12">
                    </div>

                    <div className="flex justify-between">
                    <div className="w-1/2 font-['Neue_Montreal'] mt-10">
                        <h1 className="text-4xl font-semibold">Our approch</h1>
                        <button className="bg-zinc-900 px-6 py-3 rounded-full text-white font-light mt-4 flex justify-center items-center gap-3 uppercase">Read More
                                <div className="h-2 w-2 bg-white rounded-full"></div>
                        </button>   

                    </div>
                        <div className="h-[75vh] w-1/2 mt-10 ">
                                <Image className="bg-cover w-full h-full" src='/asad.jpg' width={440} height={440}></Image>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default About