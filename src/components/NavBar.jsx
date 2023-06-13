import React, { useState } from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'


const NavBar = () => {

    const [nav, setNav] = useState(true);
    const handleNav = () => {
        setNav(!nav);
    } 

    return (


        <div className="flex text-white justify-between items-center h-24 max-w-[1240px] mx-auto px-4"> 
            <h1 className="w-full text-3xl font-bold text-[#9dff00]">20xMarketing</h1>
            <ul className="hidden md:flex">
                <li className="p-4">Home</li>
                <li className="p-4">Company</li>
                <li className="p-4">Resources</li>
                <li className="p-4">About</li>
                <li className="p-4">Contact</li>
            </ul>

            <div className="block md:hidden" onClick={handleNav}>
                { !nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} /> }

            <div className={!nav ? 'fixed bg-[#08025a] left-0 top-0 h-full w-[60%] ease-in-out duration-700 border-r border-r-gray-900 opacity-90' : 'fixed left-[-100%]' }>
            
            <h1 className="w-full text-3xl font-bold text-[#9dff00] m-4">20xMarketing</h1>

            <ul className="uppercase p-4">
                <li className="p-4 border-b border-gray-400">Home</li>
                <li className="p-4 border-b border-gray-400">Company</li>
                <li className="p-4 border-b border-gray-400">Resources</li>
                <li className="p-4 border-b border-gray-400">About</li>
                <li className="p-4 border-b border-gray-400">Contact</li>
            </ul>
            </div>

            </div>

        </div> 
    )
}

export default NavBar;