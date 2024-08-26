import React from 'react'
import Hero from '../home/Hero'
import Navbar from '../home/Navbar'
import Backtop from '../footer/Backtop'
import Form from '../home/Form'

const Home = () => {
    return (
        <>
            <Hero />
            <Form />
            <Navbar />
            <Backtop />
        </>
    )
}

export default Home