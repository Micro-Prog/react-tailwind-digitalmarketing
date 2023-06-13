import React from "react";
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className="w-[480px] mx-auto my-4 " src={Laptop} alt='laptop' />
                <div className="flex flex-col justify-center">
                    <p className="text-[#ff0000] font-bold">Data Analytics</p>
                    <h1 className="md:text-4xl sm:text-3xl font-bold py-2">Manage Your Digital Marketing Efforts</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <button className="bg-[#ff0000] w-[200px] rounded-lg font-medium my-4 mx-auto py-2 md:mx-0 text-[#eaff00]">
                            Click Here to Learn More~
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Analytics