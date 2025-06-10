import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Features from './components/Features'
import WorkFlow from './components/WorkFlow'
import Price from './components/Price'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar/>

<div className='max-w-7xl mx-auto pt-20 px-6'>
        <HeroSection/>
        <Features/>
        <WorkFlow/>
        <Price/>
        <Testimonials/>
        <Footer/>
</div>


    </>
  )
}

export default App
