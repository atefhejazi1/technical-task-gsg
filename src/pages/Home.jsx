import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Characters from '../components/Characters'
import Locations from '../components/Locations'
import Episodes from '../components/Episodes'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Characters />
            <Locations />
            <Episodes />
            <Footer />
        </>
    )
}

export default Home