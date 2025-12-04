import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Characters from '../components/Characters'
import Locations from '../components/Locations'

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Characters />
            <Locations />
        </>
    )
}

export default Home