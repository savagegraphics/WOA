import React from 'react';
import Link from 'next/link';

const SectionComponent = () => {
    return (
        <section className="bg-gray-100 dark:bg-gray-800 mt-8 lg:py-12 lg:flex lg:justify-center">
            <div className="overflow-hidden bg-white dark:bg-gray-900 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
                <div className="lg:w-1/2">
                    <div
                        className="h-64 bg-cover lg:h-full lg:float-right lg:w-2/3"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
                            backgroundPosition: 'top',
                        }}
                    ></div>
                </div>
                <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
                    <p className="text-sm leading-4 mb-6 font-medium sm:text-pink dark:sm:text-slate-400">
                        15% DISCOUNT
                    </p>

                    <h2 className="text-2xl font-semibold text-gray mb-4 dark:text-white md:text-3xl">
                        15% completion discount to the
                        <span className="text-indigo-500"> Babylist shop.</span>
                    </h2>

                    <p className="mt-4 text-gray-500 dark:text-gray-300">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
                        modi reprehenderit vitae exercitationem aliquid dolores ullam
                        temporibus enim expedita aperiam mollitia iure consectetur dicta
                        tenetur, porro consequuntur saepe accusantium consequatur.
                    </p>

                    <div className="inline-flex w-full mt-6 sm:w-auto">
                        <Link
                            href="#"
                            className="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-gray rounded-lg hover:bg-gray-dark focus:ring focus:ring-gray-light focus:ring-opacity-80"
                        >
                            Start Now
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionComponent;
