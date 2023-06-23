import React from 'react'
import Image from 'next/image'
import profileImage from '../assets/gay.jpg'



const CTA = () => {
    return (
        <div style={ { backgroundColor: '#fff' } } className="p-8 bg-white rounded-lg shadow dark:bg-gray-800">
            <p className="mb-12 text-xl font-normal text-center text-gray-500 dark:text-gray-200">
                Personal Advice from Real People
            </p>
            <div className="flex flex-col items-center md:flex-row justify-evenly">
                <div className="p-4">
                    <div className="mb-4 text-center opacity-90">
                        <a href="#" className="relative block">
                            <Image
                                alt="profile"
                                src={ profileImage }
                                className="mx-auto object-cover rounded-full h-40 w-40"
                            />
                        </a>
                    </div>
                    <div className="text-center">
                        <p className="text-l text-gray-800 dark:text-white">
                            Amber
                        </p>
                        <p className=" text-md font-light text-gray-500 dark:text-gray-200">
                            Happiness Hero
                        </p>
                        <p className="max-w-xs py-4 font-light text-gray-500 text-md dark:text-gray-400">
                            Our Happiness Hero are available via email or live chat. We can help you build your registry, assist your Gift Fivers with purchase, and more!
                        </p>
                    </div>
                    <div className="flex items-center justify-between pt-8 mx-auto text-gray-500 border-t border-gray-200 w-44">

                    </div>
                </div>
            </div>
        </div>

    )
}

export default CTA