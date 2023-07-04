import Image from 'next/image';
import Imagine from '../assets/fam5.jpg';

const MultiCard = () => {
    return (
        <main className="bg-indigo-100 py-6 px-4 sm:p-6 md:py-10 md:px-8">
            <div className="max-w-4xl m-8 mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
                <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                    <h1 className="mt-1 text-lg font-semibold text-white sm:text-black md:text-2xl dark:sm:text-white">onto your baby registry from any store.</h1>
                    <p className="text-sm leading-4 font-medium text-white sm:text-gray dark:sm:text-slate-400">Put anything </p>
                </div>
                <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
                    <Image src={Imagine} alt="" className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full" loading="lazy" width={600} height={400} />
                    <Image src={Imagine} alt="" className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy" width={400} height={300} />
                    <Image src={Imagine} alt="" className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy" width={400} height={300} />
                </div>
                <div className="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
                    <button type="button" className="bg-indigo-600 text-white text-sm leading-6 mr-4 font-medium py-2 px-3 rounded-lg"> Create Your Babylist</button>
                    <button type="button" className="bg-gray-light text-indigo-600 text-sm leading-6 font-medium py-2 px-3 rounded-lg"> Find a Registry</button>
                </div>

                <div className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
                    <div className="text-center text-3xl mt-8 mb-8">Why Register with Babylist?</div>
                    This sunny and spacious room is for those traveling light and looking for a comfy and cosy place to lay their head for a night or two. This beach house sits in a vibrant neighborhood littered with cafes, pubs, restaurants and supermarkets and is close to all the major attractions such as Edinburgh Castle and Arthur&apos;s Seat.
                </div>
            </div>
        </main>
    );
};

export default MultiCard;
