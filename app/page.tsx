'use client'
import Navbar from '@/components/Nav'
import Landing from '@/components/Landing'
import Marquee from '@/components/Marquee'
import About from '@/components/About'
import Eyes from '@/components/Eyes'
import Projects from '@/components/Projects'
import Cards from '@/components/Cards'
import Footer from '@/components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

const page = () => {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
          <div className='min-h-screen bg-zinc-900 '>
                  <Navbar />
                  <Landing />
                  <Marquee />
                  <About />
                  <Eyes />
                  <Projects />
                  <Cards />
                  <Footer />
          </div>
    </>
  )
}

export default page