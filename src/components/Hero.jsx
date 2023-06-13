import React from "react";
import Typed from 'react-typed'


const Hero = () => {
    return (
        <div className="text-white max-w-[800px] justify-center mt-[-94px] w-full h-screen mx-auto text-center flex flex-col">
            <p className="text-[#ff0000] text-3xl font-bold p-2">Let's Grow With Us</p>
            <h1 className="md:text-5xl sm:text-4xl text-4xl font-bold md:py-6">We Specialize in Digital Marketing</h1>
            <div>
                <p className="md:text-3xl sm:text-2xl font-bold py-4">Fast, Flexible, and Fascinating</p>
                <Typed 
                className="md:text-3xl sm:text-2xl font-bold md:pl-4 pl-2"
                strings={['Digital Marketing', 'Copywriting', 'SEO']} 
                typeSpeed={120} 
                backSpeed={130} 
                loop/>
            </div>
            <p className="md:text-2xl text-xl font-bold text-gray-500 py-2">
                We've Got a New Method for Marketing!
            </p>
            <button className="bg-[#ff0000] text-[#9dff00] w-[200px] rounded-lg font-medium my-6 mx-auto py-2">
                Get Started Now!
            </button>
        </div>
    )
}

export default Hero;