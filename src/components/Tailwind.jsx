import React from 'react'
import Image from 'next/image'
import Imageg1 from '../assets/fam5.jpg'
import Imageg0 from '../assets/fam7.jpg'
import Imageback from '../assets/fam8.jpg'



const Tailwind = () => {
    return (
        <div style={ { backgroundColor: '#fff', marginTop: '4rem ' } } className="relative max-w-screen-xl p-4 pl-8 px-4 mx-auto mb-10 bg-white dark:bg-gray-800 sm:px-6 lg:px-8 py-26">
            <div className="relative">
                <div className="grid grid-flow-row-dense grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                    <div className="max-w-2xl md:ml-auto">
                        <p className="text-base font-semibold leading-6 text-[#c24e8a] uppercase">15% Discount</p>
                        <h4 style={ { color: '#c24e8a' } } className="mt-2 text-2xl font-extrabold leading-8 text-custom-D14D72 dark:text-white sm:text-3xl sm:leading-9">
                            Anything From Any Store and also Personal and Meaningful
                        </h4>
                        {/* 
                        <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                            Add any item from any store,                         </p> */}
                        <ul className="grid gap-6 mt-8 md:grid-cols-2">
                            <li className="mt-6 md:mt-0">
                                <div className="flex items-center">
                                    <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 dark:bg-transparent">
                                        <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                        </svg>
                                    </span>
                                    <span className="ml-4 text-base font-medium leading-6 text-dark-500 dark:text-gray-200">
                                        15% completion discount to the Babylist shop.
                                    </span>
                                </div>
                            </li>
                            <li className="mt-6 md:mt-0">
                                <div className="flex items-center">
                                    <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 dark:bg-transparent">
                                        <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                        </svg>
                                    </span>
                                    <span className="ml-4 text-base font-medium leading-6 text-dark-500 dark:text-gray-200">
                                        Add any item from any store.
                                    </span>
                                </div>
                            </li>
                            <li className="mt-6 md:mt-0">
                                <div className="flex items-center">
                                    <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 dark:bg-transparent">
                                        <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                        </svg>
                                    </span>
                                    <span className="ml-4 text-base font-medium leading-6 text-dark-500 dark:text-gray-200">
                                        Add meaningful gifts you can&apos;t buy in stores.
                                    </span>
                                </div>
                            </li>
                            <li className="mt-6 md:mt-0">
                                <div className="flex items-center">
                                    <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 dark:bg-transparent">
                                        <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                        </svg>
                                    </span>
                                    <span className="ml-4 text-base font-medium leading-6 text-dark-500 dark:text-gray-200">
                                        Free tips to get your Baby the best of the best
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-10 md:relative md:-mx-4 md:relative-20">
                        <div className="space-y-4">
                            <div className="flex items-end justify-center space-x-4 md:justify-start">
                                <Image className="w-32 rounded-lg shadow-lg md:w-56" width="200" src={ Imageback } alt="1" />
                                <Image className="w-40 rounded-lg shadow-lg md:w-64" width="260" src={ Imageg0 } alt="2" />
                            </div>
                            <div className="flex items-start justify-center ml-12 space-x-4 md:justify-start">
                                <Image className="w-24 rounded-lg shadow-lg md:w-40" width="170" src={ Imageback } alt="3" />
                                <Image className="w-32 rounded-lg shadow-lg md:w-56" width="200" src={ Imageg1 } alt="4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Tailwind