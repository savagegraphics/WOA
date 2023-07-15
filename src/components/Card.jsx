import React from 'react'
import Image from 'next/image'
import Image1 from '../assets/preg.jpg'
import Image2 from '../assets/preg4.jpg'
import Image3 from '../assets/nate.jpg'
import Link from 'next/link'



const Card = () => {
    return (
        <div className="bg-indigo-50 flex-wrap items-center justify-center gap-8 mt-12 mb-12 pb-16 pt-10 text-left sm:flex">
            <div style={ { background: '#fff' } } className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 p-8 pl-12 mt-6 rounded-lg shadow-lg dark:bg-gray-800">
                <p style={ { color: '#606C5D' } } className="text-[#6a1a447d] text-md dark:text-gray-300">
                    <span className="text-lg font-bold text-custom-D14D72">
                        “
                    </span>
                  The guides and reviews are so helpful. I had no idea what I truly needed and your site helped me navigate it all. 
                    <span className="text-lg font-bold text-custom-D14D72">
                        ”
                    </span>
                </p>
                <div className="flex items-center mt-4">
                    <Link href="/" className="relative block">
                        <Image alt="profil" src={ Image1 } className="mx-auto object-cover rounded-full h-10 w-10 " />
                    </Link>
                    <div className="flex flex-col justify-between ml-2 pl-4">
                        <span className="text-sm font-semibold text-[#85586F]">
                            Monet T.
                        </span>
                        <span style={ { color: '#606C5D' } } className="flex items-center text-[#6a1a447d] text-xs dark:text-gray-300">
                            User of Babylist
                        </span>
                    </div>
                </div>
            </div>
            <div style={ { background: '#fff' } } className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 sm:mt-12 md:mt-6 lg:mt-24 p-8 pl-12 mt-6 rounded-lg shadow-lg dark:bg-gray-800">
                <p style={ { color: '#606C5D' } } className="text-[#6a1a447d] text-md dark:text-gray-300">
                    <span className="text-lg font-bold text-custom-D14D72">
                        “
                    </span>
                Babylist is so much more thaan a registry, they become a part of your journey into parenthood.
                    <span className="text-lg font-bold text-custom-D14D72">
                        ”
                    </span>
                </p>
                <div className="flex items-center mt-4">
                    <Link href="/" className="relative block">
                        <Image alt="profil" src={ Image2 } className="mx-auto object-cover rounded-full h-10 w-10 " />
                    </Link>
                    <div className="flex flex-col justify-between ml-2 pl-4">
                        <span style={ { color: '#606C5D' } } className="text-sm font-semibold text-[#85586F]">
                            Omolara M.
                        </span>
                        <span style={ { color: '#606C5D' } } className="flex items-center text-[#6a1a447d] text-xs dark:text-gray-300">
                            User of Babylist
                        </span>
                    </div>
                </div>
            </div>
            <div style={ { background: '#fff' } } className="w-full sm:w-1/2 sm:mb-8 md:mb-10 md:w-1/2 lg:w-1/4 p-8 pl-12 mt-6 rounded-lg shadow-lg dark:bg-gray-800">
                <p style={ { color: '#606C5D' } } className="text-[#6a1a447d] text-md dark:text-gray-300">
                    <span className="text-lg font-bold text-custom-D14D72">
                        “
                    </span>
                    It has been SO much easier giving everyone ONE registry to look at that even compares prices for you
                    <span className="text-lg font-bold text-custom-D14D72">
                        ”
                    </span>
                </p>
                <div className="flex items-center mt-4">
                    <Link href="/" className="relative block">
                        <Image alt="profil" src={ Image3 } className="mx-auto object-cover rounded-full h-10 w-10 " />
                    </Link>
                    <div style={ { color: '#606C5D' } } className="flex flex-col justify-between ml-2 pl-4">
                        <span className="text-sm font-semibold text-[#85586F]">
                            Doja C.
                        </span>
                        <span style={ { color: '#606C5D' } } className="flex items-center text-[#6a1a447d] text-xs dark:text-gray-300">
                            User of Babylist
                        </span>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Card