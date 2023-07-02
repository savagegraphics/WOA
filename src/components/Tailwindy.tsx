import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
    return (
        <>
            <div className="flex justify-center items-center pl-12 relative bg-white pt-[120px] pb-[110px] lg:pt-[150px]">
                <div className="container">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4 lg:w-5/12">
                            <div className="hero-content">
                                <h1 className="mb-3 text-4xl font-bold leading-snug text-dark sm:text-[42px] lg:text-[40px] xl:text-[42px]">
                                    Kickstart Startup <br /> Website with TailGrids
                                </h1>
                                <p className="mb-8 max-w-[480px] pr-6 pb-6 pt-6 text-base text-body-color">
                                    With TailGrids, business and students thrive together.
                                    Business can perfectly match their staffing to changing demand
                                    throughout the dayed.
                                </p>
                                <ul className="flex flex-wrap items-center">
                                    <li>
                                        <Link
                                            href="/#"
                                            className="inline-flex items-center justify-center px-6 py-4 text-base font-normal text-center text-white rounded-lg bg-indigo-700 hover:bg-opacity-90 sm:px-10 lg:px-8 xl:px-10"
                                        >
                                            Create Your Babylist
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/#"
                                            className="inline-flex items-center justify-center px-6 py-4 text-base font-normal text-center text-body-color hover:text-primary sm:px-10 lg:px-8 xl:px-10"
                                        >
                                            <span className="mr-2">
                                                <svg
                                                    width="22"
                                                    height="22"
                                                    viewBox="0 0 22 22"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <circle cx="11" cy="11" r="11" fill="#3056D3" />
                                                    <rect
                                                        x="6.90906"
                                                        y="13.3636"
                                                        width="8.18182"
                                                        height="1.63636"
                                                        fill="white"
                                                    />
                                                    <rect
                                                        x="10.1818"
                                                        y="6"
                                                        width="1.63636"
                                                        height="4.09091"
                                                        fill="white"
                                                    />
                                                    <path
                                                        d="M11 12.5454L13.8343 9.47726H8.16576L11 12.5454Z"
                                                        fill="white"
                                                    />
                                                </svg>
                                            </span>
                                            Find a Registry
                                        </Link>
                                    </li>
                                </ul>
                                <div className="pt-16 clients">
                                    <h6 className="flex items-center mb-3 text-xs font-normal text-body-color">
                                        Some Of Our Clients
                                        <span className="ml-2 inline-block h-[1px] w-8 bg-body-color"></span>
                                    </h6>

                                </div>
                            </div>
                        </div>
                        <div className="hidden px-0 lg:block lg:w-1/12"></div>
                        <div className="w-full px-0 lg:w-6/12">
                            <div className="lg:ml-auto lg:text-right">
                                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                                    <Image
                                        src="https://cdn.tailgrids.com/1.0/assets/images/hero/hero-image-01.png"
                                        alt="hero"
                                        className="max-w-full lg:ml-auto"
                                        width={800}
                                        height={600}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
