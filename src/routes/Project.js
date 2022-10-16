import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero2 from '../components/Hero2'
import Pricing from '../components/Pricing'
import Work from '../components/Work'

function Project() {
    return (
        <div>
            <Navbar/>
            <Hero2 heading="PROJECTS." text="Some of my Projects"/>
            <Work/>
            <Pricing/>
            <Footer/>
        </div>
    )
}

export default Project