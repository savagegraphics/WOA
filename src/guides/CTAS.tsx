import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CTAS = () => {
    return (
        <div
            style={{
                backgroundImage:
                    'url("https://browsecat.art/sites/default/files/spring-color-background-129145-1112746-6858151.png")', backgroundSize: 'cover',
            }} className="container max-w-xl p-6 py-12 mx-auto space-y-24 rounded lg:px-8 lg:max-w-7xl">
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                    <h3 className="text-2xl font-bold tracki sm:text-3xl dark:text-gray-50">Pregnancy</h3>
                    <p className="mt-3 text-lg dark:text-gray-400">Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos etiam regione ut, persius eripuit quo id. Sit te euismod tacimates.</p>
                    <div className="mt-12 space-y-12">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                    </svg>

                                </div>
                            </div>
                            <div className="ml-4">
                                <h4 className="text-lg font-medium leadi dark:text-gray-50">Week by Week</h4>
                                <p className="mt-2 dark:text-gray-400">Ex usu illum iudico molestie. Pro ne agam facete mediocritatem, ridens labore facete mea ei. Pro id apeirian dignissim.</p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                    </svg>

                                </div>
                            </div>
                            <div className="ml-4">
                                <h4 className="text-lg font-medium leadi dark:text-gray-50">First Trimester</h4>
                                <p className="mt-2 dark:text-gray-400">Amet utinam aliquando ut mea, malis admodum ocurreret nec et, elit tibique cu nec. Nec ex maluisset inciderint, ex quis.</p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="ml-4">
                                <h4 className="text-lg font-medium leadi dark:text-gray-50">Second Trimester</h4>
                                <p className="mt-2 dark:text-gray-400">At sed possim oporteat probatus, justo graece ne nec, minim commodo legimus ut vix. Ut eos iudico quando soleat, nam modus.</p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="ml-4">
                                <h4 className="text-lg font-medium leadi dark:text-gray-50">Third Trimester</h4>
                                <p className="mt-2 dark:text-gray-400">At sed possim oporteat probatus, justo graece ne nec, minim commodo legimus ut vix. Ut eos iudico quando soleat, nam modus.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div aria-hidden="true" className="mt-10 lg:mt-0">
                    <Image src="https://images.babylist.com/image/upload/f_auto,q_auto,w_960/v1634258832/babylist-couple_hunoqz.png" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" width={600} height={400} />
                </div>
            </div>
        </div>
    );
};

export default CTAS;
