import React from 'react';
import { BsFilePlus, BsSearch } from 'react-icons/bs';

const Landpage = () => {
    return (
        <div className="w-full p-12 bg-white">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-2">
                <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                    <a href="#" className="block w-full h-full">
                        <div className="w-full p-4 bg-white dark:bg-gray-800">
                            <BsFilePlus className="ml-16 lg:ml-28 mt-8 mb-8" size={ 44 } color='#85586F' />
                            <p className="mb-2 text-xl pl-4 pr-4 font-bold text-[#85586F] dark:text-white">
                                Create a Babylist
                            </p>
                            <p className="font-light pl-4 pr-2 text-gray-400 dark:text-gray-300 text-md">
                                Just a couple steps to start gifts.
                            </p>
                            <button type="button" style={ { backgroundColor: '#85586F' } } className="py-2 px-4 mt-4 mb-4 bg-custom-[#85586F] hover:bg-[D14D72]-700 focus:ring-D14D72-500 focus:ring-offset-D14D72-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Get started
                            </button>
                        </div>
                    </a>
                </div>
                <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                    <a href="#" className="block w-full h-full">
                        <div className="w-full p-4 bg-white dark:bg-gray-800">
                            <BsSearch className="ml-16 lg:ml-28 mt-8 mb-8" size={ 44 } color='#85586F' />
                            <p className="mb-2 text-xl pl-4 pr-4 font-bold text-[#85586F] dark:text-white">
                                Find a Babylist
                            </p>
                            <p className="font-light pl-4 pr-3 lg:pl-2 lg:pr-0 text-gray-400 dark:text-gray-300 text-md">
                                Give  the perfect gift to the new family.
                            </p>
                            <button type="button" style={ { color: '#85586F', } } className="py-2 px-4  mt-4 mb-4 bg-custom-D14D72 hover:bg-D14D72-700 focus:ring-D14D72-500 focus:ring-offset-D14D72-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Get started
                            </button>
                        </div>
                    </a>
                </div>
            </div>
        </div>

    )
}


export default Landpage;
