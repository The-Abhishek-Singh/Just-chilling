import MotionNotionCTA from '@/Component/Cta'
import MotionNotionFinal from '@/Component/fourth'
import MotionNotionHero from '@/Component/hero'
import Footer from '@/Component/main/Footer'
import Navbar from '@/Component/main/Nav'
import MotionNotionBody from '@/Component/second'
import MotionNotionDifferences from '@/Component/third'
import React from 'react'

const page = () => {
  return (
    <div>


    <Navbar/>
    <MotionNotionHero/>
    <MotionNotionBody/>
    <MotionNotionDifferences/>
    <MotionNotionFinal/>
    <MotionNotionCTA/>
    <Footer/>


    </div>
  )
}

export default page