import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import './Wall.css'


const Content = () => {
    return (
        <div className="bg-indigo-50 mt-8 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-dark sm:text-4xl md:mx-auto">
                    Congratulations!
                </h2>
                <p className="text-base text-gray md:text-lg">
                    We&apos;re on this journey with you. Join millions of families who have used Babylist as thier baby registry.
                </p>
            </div>
            <div className="flex items-center mb-8 sm:justify-center">
                <Link
                    href="/"
                    className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deepPurple-400 hover:bg-deepPurple-700 focus:shadow-outline focus:outline-none"
                >
                    Create Your Babylist
                </Link>
            </div>
            <div className="grid max-w-screen-lg gap-8 row-gap-5 mb-8 sm:grid-cols-2 custom-grid-cols-2 lg:grid-cols-4 sm:mx-auto">
                <Image
                    className="object-cover w-full h-56 rounded shadow-lg"
                    src="https://media.istockphoto.com/id/1241928379/photo/we-are-cute-family.webp?b=1&s=170667a&w=0&k=20&c=QNjmkHiOvD7_9PRS-6fA0HZvVw8JnQC1H0uODJO28cI="
                    alt=""
                    width={600}
                    height={600}
                />
                <Image
                    className="object-cover w-full h-56 rounded shadow-lg"
                    src="https://media.istockphoto.com/id/510040197/photo/multi-generation-family-sitting-on-sofa-with-newborn-baby.webp?b=1&s=170667a&w=0&k=20&c=F-tgYo0Q0VOkgIBmKSKIQcEG7ZoWM_9i6_wVxjGfxT0="                    alt=""
                    width={600}
                    height={600}
                />
                <Image
                    className="object-cover w-full h-56 rounded shadow-lg"
                    src="https://media.istockphoto.com/id/1383967827/photo/young-parents-with-their-baby-girl-at-home.webp?b=1&s=170667a&w=0&k=20&c=vi35IBszIAuqkKm7Pl2a8MCxz7PggC161dYJ9UsX8_I="
                    alt=""
                    width={600}
                    height={600}
                />
                <Image
                    className="object-cover w-full h-56 rounded shadow-lg"
                    src="https://media.istockphoto.com/id/515193570/photo/happy-family-with-newborn-baby.webp?b=1&s=170667a&w=0&k=20&c=gtTPQWgkwomEiIChvn0UbmRl55YUUXg-Ltjy98jzzsI="
                    alt=""
                    width={600}
                    height={600}
                />
            </div>
            <div className="container mx-auto mb-6 px-5 py-2 lg:px-28 lg:pt-4">
                <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-1/2 p-1 md:p-2">
                            <Image
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://images.unsplash.com/photo-1581952975975-08cd95a728d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFtaWx5JTIwYW5kJTIwbmV3JTIwYm9ybnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <Image
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://media.istockphoto.com/id/930508142/photo/spending-time-with-our-new-family-member.webp?b=1&s=170667a&w=0&k=20&c=w2wXvjHGnelWTEpQjV7eAz6KE5aNLcwnkzleZAQ-2P0="
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <Image
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://media.istockphoto.com/id/1128249047/photo/you-are-my-biggest-achievment.webp?b=1&s=170667a&w=0&k=20&c=4olZMaeNlndKrZP5pmpGTogIfhQYNfAwL6JXPXCo1O4="
                                width={1000}
                                height={500}
                            />
                        </div>
                    </div>
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <Image
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://media.istockphoto.com/id/1215892497/photo/family-bonding-time.webp?b=1&s=170667a&w=0&k=20&c=pv6Jos3BUTCmynTWXiAi39KE_6eitO8qZGcYpbcxzlo="
                                width={1000}
                                height={500}
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <Image
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://media.istockphoto.com/id/1492289657/photo/young-family-showing-baby-boy-to-relatives-online.webp?b=1&s=170667a&w=0&k=20&c=XseexrgRnoc_wAAmiTXjlM0Z4VnbCwAD2mGcrMDk_o0="
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <Image
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://plus.unsplash.com/premium_photo-1680229009174-ed58a258b63d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZhbWlseSUyMGFuZCUyMG5ldyUyMGJvcm58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;

