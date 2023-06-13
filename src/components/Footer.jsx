import React from "react";
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare
} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-400">
            <div className="">
            <h1 className="w-full text-3xl font-bold text-[#ff0000]">20xMarketing</h1>
            <p className="py-2">This is a sample text for describing 20xMarketing Company!</p>
                <div className="flex sm:w-[50%] justify-between my-6">
                <FaFacebookSquare color="#ff0000" size={30} />
                <FaDribbbleSquare color="#ff0000" size={30} />
                <FaGithubSquare color="#ff0000" size={30} />
                <FaInstagram color="#ff0000" size={30} />
                <FaTwitterSquare color="#ff0000" size={30} />
                </div>
            </div>

            <div className="lg:cols-span-1 gap-8 flex justify-between">
                <div className="">
                    <h6 className="font-medium text-gray-500">Solutions</h6>
                    <ul>
                        <li className="text-[#ff0000] py-1 text-sm">Analytics</li>
                        <li className="text-[#ff0000] py-1 text-sm">Marketing</li>
                        <li className="text-[#ff0000] py-1 text-sm">Insights</li>
                        <li className="text-[#ff0000] py-1 text-sm">Commerce</li>
                        <li className="text-[#ff0000] py-1 text-sm">SEO</li>
                    </ul>
                </div>

                <div className="">
                    <h6 className="font-medium text-gray-500">Support</h6>

                    <ul>
                        <li className="text-[#ff0000] py-1 text-sm">Pricing</li>
                        <li className="text-[#ff0000] py-1 text-sm">Phone Support</li>
                        <li className="text-[#ff0000] py-1 text-sm">Documentation</li>
                        <li className="text-[#ff0000] py-1 text-sm">API Support</li>
                        <li className="text-[#ff0000] py-1 text-sm">Chat</li>
                    </ul>

                </div>

                <div className="">
                    <h6 className="font-medium text-gray-500">Company</h6>

                    <ul>
                        <li className="text-[#ff0000] py-1 text-sm">About</li>
                        <li className="text-[#ff0000] py-1 text-sm">Blog</li>
                        <li className="text-[#ff0000] py-1 text-sm">Jobs</li>
                        <li className="text-[#ff0000] py-1 text-sm">Press</li>
                        <li className="text-[#ff0000] py-1 text-sm">History</li>
                    </ul>

                </div>

                <div className="">
                    <h6 className="font-medium text-gray-500">Legal</h6>

                    <ul>
                        <li className="text-[#ff0000] py-1 text-sm">Claim</li>
                        <li className="text-[#ff0000] py-1 text-sm">Privacy Policy</li>
                        <li className="text-[#ff0000] py-1 text-sm">Terms of Use</li>
                    </ul>

                </div>
            </div>

        </div>
    )
}

export default Footer;