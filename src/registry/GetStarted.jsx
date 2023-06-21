import React from 'react'
import { FiPlusSquare, FiSearch } from 'react-icons/fi'
import Image from 'next/image'
import Imageg from "../assets/preg.jpg"
import Imagebg from "../assets/fam8.jpg"
import Imagebg2 from "../assets/preg2.jpg"




const GetStarted = () => {
    return (
        <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
            <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
                <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                    <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl md:text-custom-D14D72 dark:sm:text-white">Put anything onto your baby
                        registry from any store.</h1>
                    <p className="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400"><a href="#"> Start your Babylist</a></p>
                </div>
                <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
                    <Image src={ Imagebg } alt="" className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full" loading="lazy" />
                    <Image src={ Imagebg2 } alt="" className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy" />
                    <Image src={ Imageg } alt="" className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy" />
                </div>
                <div className="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
                    <button type="button" style={ { backgroundColor: "#D14D72" } } className=" bg-custom-D14D72 hover:bg-D14D72-700 focus:ring-D14D72-500 focus:ring-offset-D14D72-200 text-white text-sm leading-6 font-medium mr-4 mb-4 mt-4 py-2 px-3 rounded-lg">Find a Babylist Registry</button>
                    <button type="button" style={ { backgroundColor: "azure" } } className=" bg-custom-transparent hover:bg-custom-[D14D72] hover:text-D14D72 focus:ring-D14D72-500 focus:ring-offset-D14D72-200 text-custom-D14D72 text-sm leading-6 font-medium m-4 py-2 px-3 rounded-lg">Find a Babylist Registry</button>
                </div>
                <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
                    This sunny and spacious room is for those traveling light and looking for a comfy and cosy place to lay their head for a night or two. This beach house sits in a vibrant neighborhood littered with cafes, pubs, restaurants and supermarkets and is close to all the major attractions such as Edinburgh Castle and Arthur&apos;s Seat.
                </p>
            </div>
        </main>

    )
}

export default GetStarted