import React from "react";


const Newsletter = () => {
    return (
        <div className="w-full py-16 px-4 text-white">
            <div className="max-w-[1240px] justify-center mx-auto grid lg:grid-cols-2">
                <div className="my-6">
                    <h1 className="md:text-2xl sm:text-xl text-xl font-bold py-2">Want to Stay Updated with the Latest News?</h1>
                    <p>Sign Up for Our Newsletter~</p>
                </div>
                <div className="my-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                        <input className="p-3 flex rounded-lg text-black ml-4 mr-4 justify-center" type="email" placeholder="Type Your Email ..." />
                        <button className="bg-[#ff0000] w-[200px] ml-4 mr-4 rounded-full font-medium my-4 py-2 text-[#9dff00]">Click Here to Subscribe~</button>
                    </div>
                    <p>We respect your data privacy, Read more about our <span className="text-[#ff0000]"><a href="#">Privacy Policy</a></span> Here</p>
                </div>
            </div>
        </div>
    )
}

export default Newsletter