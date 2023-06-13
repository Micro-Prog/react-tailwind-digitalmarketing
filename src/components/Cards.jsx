import React from "react";
import One from '../assets/single.png'
import Two from '../assets/double.png'
import Three from '../assets/triple.png'
import Typed from 'react-typed'

const Cards = () => {
    return (
        <div className="w-full py-[10rem] px-4 bg-white">
            <div className="max-w-[1240px] mx-auto grid md:mx-2 md:grid-cols-3 gap-8">
                <div className="bg-gray-100 w-full items-center shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-150">
                    <img className="bg-transparent w-20 mx-auto mt-[-3rem] bg-white" src={One} alt="One"/>
                    <Typed 
                        className="text-2xl font-bold text-center py-8"
                        strings={['Single User']} 
                        typeSpeed={120} 
                        backSpeed={130} 
                        loop
                    />
                    <p className="text-center text-[#ff0000] text-4xl font-bold">$199</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b border-cyan-500 mx-8 mt-4">Limited Emails</p>
                        <p className="py-2 border-b border-cyan-500 mx-8">Limited Platform Usage</p>
                        <p className="py-2 border-b border-cyan-500 mx-8">Monthly Reports</p>
                    </div>
                    <button className="bg-[#ff0000] w-[200px] ml-4 mr-4 rounded-full font-medium mx-auto mt-4 my-4 py-2 text-[#9dff00]">Start Free Trial</button>
                </div>

                <div className="w-full items-center shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-150">
                    <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Two} alt="One"/>
                    <Typed 
                        className="text-2xl font-bold text-center py-8"
                        strings={['Multiple Users']} 
                        typeSpeed={120} 
                        backSpeed={130} 
                        loop
                    />                    
                    <p className="text-center text-[#ff0000] text-4xl font-bold">$399</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b border-cyan-500 mx-8 mt-4">Up to 10,000 Emails</p>
                        <p className="py-2 border-b border-cyan-500 mx-8">10 Hours Daily Platform Usage</p>
                        <p className="py-2 border-b border-cyan-500 mx-8">Monthly Reports</p>
                    </div>
                    <button className="bg-[#ff0000] w-[200px] ml-4 mr-4 rounded-full font-medium mx-auto mt-4 my-4 py-2 text-[#9dff00]">Start Free Trial</button>
                </div>

                <div className="bg-gray-100 w-full items-center shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-150">
                    <img className="bg-transparent w-20 mx-auto mt-[-3rem] bg-white" src={Three} alt="One"/>
                    <Typed 
                        className="text-2xl font-bold text-center py-8"
                        strings={['Unlimited Users']} 
                        typeSpeed={120} 
                        backSpeed={130} 
                        loop
                    />                    
                    <p className="text-center text-[#ff0000] text-4xl font-bold">$599</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b border-cyan-500 mx-8 mt-4">Unlimited Emails</p>
                        <p className="py-2 border-b border-cyan-500 mx-8">Unlimited Platform Usage</p>
                        <p className="py-2 border-b border-cyan-500 mx-8">Monthly Reports</p>
                    </div>
                    <button className="bg-[#ff0000] w-[200px] ml-4 mr-4 rounded-full font-medium mx-auto mt-4 my-4 py-2 text-[#9dff00]">Start Free Trial</button>
                </div>
            </div>
        </div>
    )
}

export default Cards;