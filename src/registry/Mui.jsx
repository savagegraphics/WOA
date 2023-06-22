import React from "react";
import Image from "next/image";
import Imageg1 from "../assets/fam6.jpg";
import Imageg2 from "../assets/fam2.jpg";
import Imageg from "../assets/fam4.jpg";

const Mui = () => {
    return (
        <div style={ { background: '#fff', marginTop: '4 rem' } } className="bg-white dark:bg-gray-800  p-6 overflow-hidden relative lg:flex lg:items-center">
            <div className="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                <h2 style={ { color: '#df3d91' } } className="text-3xl font-extrabold text-[#df3d91] dark:text-white sm:text-4xl">
                    <span className="block">FREE Hello Baby Box</span>
                </h2>
                <p className="text-md mt-4 text-gray-400">
                    The state of Utah in the united states is home to lots of beautiful National parks, Bryce national canion park ranks as three of the most magnificient &amp; awe inspiring.
                </p>
                <div className="lg:mt-0 lg:flex-shrink-0">
                    <div className="mt-12 inline-flex rounded-md shadow">
                        <button
                            type="button"
                            style={ { backgroundColor: '#85586F' } }
                            className="py-2 px-4 hover:bg-white focus:ring-D14D72-500 focus:ring-offset-D14D72-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                        >
                            Get started
                        </button>
                    </div>
                    <p style={ { fontSize: '8px' } } className="pt-4 text-sm italic">
                        Some <a className="underline text-custom-85586F" href="">restrictions apply</a>
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-8 p-8 lg:p-24">
                <Image src={ Imageg } className="w-1/2 rounded-lg" alt="Tree" />
                <div>
                    <Image src={ Imageg1 } className="mb-8 rounded-lg" alt="Tree" />
                    <Image src={ Imageg2 } className="rounded-lg" alt="Tree" />
                </div>
            </div>
        </div>
    );
};

export default Mui;
