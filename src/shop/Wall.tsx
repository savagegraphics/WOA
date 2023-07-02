import React from 'react';
import Link from 'next/link';
import Image from 'next/image'


const Content = () => {
    return (
        <div className="bg-indigo-400 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-dark sm:text-4xl md:mx-auto">
                    Congratulations!
                </h2>
                <p className="text-base text-gray-light md:text-lg">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque rem aperiam, eaque ipsa quae.
                </p>
            </div>
            <div className="flex items-center mb-8 sm:justify-center">
                <Link
                    href="/"
                    className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deepPurple-400 hover:bg-deepPurple-700 focus:shadow-outline focus:outline-none"
                >
                    Sign up
                </Link>
            </div>
            <div className="grid max-w-screen-lg gap-8 row-gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-4 sm:mx-auto">
                <Image
                    className="object-cover w-full h-56 rounded shadow-lg"
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt=""
                    width={600}
                    height={600}
                />
                <Image
                    className="object-cover w-full h-56 rounded shadow-lg"
                    src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt=""
                    width={600}
                    height={600}
                />
                <Image
                    className="object-cover w-full h-56 rounded shadow-lg"
                    src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                    alt=""
                    width={600}
                    height={600}
                />
                <Image
                    className="object-cover w-full h-56 rounded shadow-lg"
                    src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt=""
                    width={600}
                    height={600}
                />
            </div>
        </div>
    );
};

export default Content;

