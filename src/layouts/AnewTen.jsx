import Reactimg from 'react';
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <div className="bg-indigo-50 lg:mt-4 lg:mb-4 rounded px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between lg:flex-row">
                <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
                    <div className="max-w-xl mb-6">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                                PUT ANYTHING
                            </p>
                        </div>
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            Onto your baby { ' ' }
                            <br className="hidden md:block" />
                            registry from{ ' ' }
                            <span className="inline-block text-deepPurple-400">
                                any store
                            </span>
                        </h2>
                        <p className="text-base text-gray-dark md:text-lg">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                            quae. explicabo.
                        </p>
                    </div>
                    <div className="flex flex-col items-center md:flex-row">
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-deepPurple-400 hover:bg-deep-Purple-700 focus:shadow-outline focus:outline-none"
                        >
                            <span className="mr-3">Start Shopping</span>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-4"
                            >
                                <polyline
                                    fill="none"
                                    stroke="currentColor"
                                    strokeMiterlimit="10"
                                    points="4,4 22,4 19,14 4,14 "
                                />
                                <circle
                                    cx="4"
                                    cy="22"
                                    r="2"
                                    strokeLinejoin="miter"
                                    strokeLinecap="square"
                                    stroke="none"
                                    fill="currentColor"
                                />
                                <circle
                                    cx="20"
                                    cy="22"
                                    r="2"
                                    strokeLinejoin="miter"
                                    strokeLinecap="square"
                                    stroke="none"
                                    fill="currentColor"
                                />
                                <polyline
                                    fill="none"
                                    stroke="currentColor"
                                    strokeMiterlimit="10"
                                    points="1,1 4,4 4,14 2,18 23,18 "
                                />
                            </svg>
                        </Link>
                        <Link
                            href="/"
                            aria-label=""
                            className="inline-flex items-center font-semibold text-indigo-400 transition-colors duration-200 hover:text-deepPurple-700"
                        >
                            Get 15% discount
                        </Link>
                    </div>
                </div>
                <div className="relative lg:w-1/2">
                    <Image
                        className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                        src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                        alt=""
                        width={ 500 }
                        height={ 500 }
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
