import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CTAS = () => {
    return (
        <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
            <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                <Image src="https://source.unsplash.com/random/301x301/" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" width={400} height={200} />
                <Image alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?0" width={400} height={200} />
                <Image alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?1" width={400} height={200} />
                <Image alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?2" width={400} height={200} />
                <Image alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?3" width={400} height={200} />
                <Image alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?4" width={400} height={200} />
                <Image alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?5" width={400} height={200} />
                <Image alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?6" width={400} height={200} />
                <Image alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?7" width={400} height={200} />
                <Image src="https://source.unsplash.com/random/302x302/" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" width={400} height={200} />
            </div>
        </section>
    );
};

export default CTAS;
