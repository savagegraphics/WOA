import React from 'react';
import Image from 'next/image';

const AnewSeven = () => {
    return (
        <div className="px-4 py-16 pl-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-2">
                <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
                        <svg className="text-teal-900 w-7 h-7" viewBox="0 0 24 24">
                            {/* SVG paths */ }
                        </svg>
                    </div>
                    <div className="max-w-xl mb-10">
                        <h2 className="text-3xl font-extrabold text-[#85586F] dark:text-white sm:text-4xl">
                            <span className="block">
                                FREE Hello Baby Box
                            </span>
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg mt-10">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                            quae. explicabo.
                        </p>
                    </div>
                    <div>
                        <button type="button" style={ { backgroundColor: '#85586F' } } className="py-2 px-4 hover:bg-white focus:ring-D14D72-500 focus:ring-offset-D14D72-200 text-white w-sm transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Get started
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-center -mx-4 lg:pl-8">
                    <div className="flex flex-col items-end px-3">
                        <Image
                            className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                            src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                            alt=""
                            width={ 1260 }
                            height={ 750 }
                        />
                        <Image
                            className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                            alt=""
                            width={ 1260 }
                            height={ 750 }
                        />
                    </div>
                    <div className="px-3">
                        <Image
                            className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                            src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                            alt=""
                            width={ 1260 }
                            height={ 750 }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnewSeven
