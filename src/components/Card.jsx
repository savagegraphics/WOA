import React from 'react'
import Image from 'next/image'
import Image1 from '../assets/imgback.PNG'




const Card = () => {
    return (
        <div className="flex-wrap items-center justify-center gap-8 mt-12 mb-12 text-left sm:flex">
            <div style={ { background: '#fff' } } className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 p-8 pl-12 mt-6 rounded-lg shadow-lg dark:bg-gray-800">
                <p className="text-gray-500 text-md dark:text-gray-300">
                    <span className="text-lg font-bold text-custom-D14D72">
                        “
                    </span>
                    To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself.
                    <span className="text-lg font-bold text-custom-D14D72">
                        ”
                    </span>
                </p>
                <div className="flex items-center mt-4">
                    <a href="#" className="relative block">
                        <Image alt="profil" src={ Image1 } className="mx-auto object-cover rounded-full h-10 w-10 " />
                    </a>
                    <div className="flex flex-col justify-between ml-2 pl-4">
                        <span className="text-sm font-semibold text-[#85586F]">
                            Monet T.
                        </span>
                        <span className="flex items-center text-gray-500 text-xs dark:text-gray-300">
                            User of Babylist
                        </span>
                    </div>
                </div>
            </div>
            <div style={ { background: '#fff' } } className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 sm:mt-16 md:mt-20 lg:mt-24 p-8 pl-12 mt-6 rounded-lg shadow-lg dark:bg-gray-800">
                <p className="text-gray-500 text-md dark:text-gray-300">
                    <span className="text-lg font-bold text-custom-D14D72">
                        “
                    </span>
                    To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself.
                    <span className="text-lg font-bold text-custom-D14D72">
                        ”
                    </span>
                </p>
                <div className="flex items-center mt-4">
                    <a href="#" className="relative block">
                        <Image alt="profil" src={ Image1 } className="mx-auto object-cover rounded-full h-10 w-10 " />
                    </a>
                    <div className="flex flex-col justify-between ml-2 pl-4">
                        <span className="text-sm font-semibold text-[#85586F]">
                            Omolara M.
                        </span>
                        <span className="flex items-center text-gray-500 text-xs dark:text-gray-300">
                            User of Babylist
                        </span>
                    </div>
                </div>
            </div>
            <div style={ { background: '#fff' } } className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 p-8 pl-12 mt-6 rounded-lg shadow-lg dark:bg-gray-800">
                <p className="text-gray-500 text-md dark:text-gray-300">
                    <span className="text-lg font-bold text-custom-D14D72">
                        “
                    </span>
                    To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself.
                    <span className="text-lg font-bold text-custom-D14D72">
                        ”
                    </span>
                </p>
                <div className="flex items-center mt-4">
                    <a href="#" className="relative block">
                        <Image alt="profil" src={ Image1 } className="mx-auto object-cover rounded-full h-10 w-10 " />
                    </a>
                    <div className="flex flex-col justify-between ml-2 pl-4">
                        <span className="text-sm font-semibold text-[#85586F]">
                            Doja C.
                        </span>
                        <span className="flex items-center text-gray-500 text-xs dark:text-gray-300">
                            User of Babylist
                        </span>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Card