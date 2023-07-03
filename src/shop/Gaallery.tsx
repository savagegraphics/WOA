import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
                <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
                    <div className="max-w-xl mb-6">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase bg-teal-accent-400 text-teal-900 rounded-full">Brand new</p>
                        </div>
                        <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6">
                            Use Babylist
                            <br className="hidden md:block" />
                            on all your{' '}
                            <span className="inline-block text-deep-purple-accent-400"> devices.</span>
                        </h2>
                        <p className="text-gray-700 text-base md:text-lg">Get started from the comfort of your own home. Prefer using your mobile device to surf the interwebs? Use our free iPhone, iPad, and Android apps!</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Link href="/" className="w-32 transition duration-300 hover:shadow-lg">
                            <Image src="https://kitwind.io/assets/kometa/app-store.png" className="object-cover object-top w-full h-auto mx-auto" alt="" width={600} height={600} />
                        </Link>
                        <Link href="/" className="w-32 transition duration-300 hover:shadow-lg">
                            <Image src="https://kitwind.io/assets/kometa/google-play.png" className="object-cover object-top w-full h-auto mx-auto" alt="" width={600} height={600} />
                        </Link>
                    </div>
                </div>
                <div className="flex items-center justify-center lg:w-1/2">
                    <div className="w-2/5">
                        <Image src="https://kitwind.io/assets/kometa/one-girl-phone.png" className="object-cover" alt="" width={600} height={600} />
                    </div>
                    <div className="w-5/12 -ml-16 lg:-ml-32">
                        <Image src="https://kitwind.io/assets/kometa/two-girls-phone.png" className="object-cover" alt="" width={600} height={600} />
                    </div>
                </div>
            </div>
            <Link href="/"
                aria-label="Scroll down"
                className="flex items-center justify-center w-10 h-10 mx-auto text-gray-600 hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400 duration-300 transform border border-gray-400 rounded-full hover:shadow hover:scale-110"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
                </svg>
            </Link>
        </div>
    );
};


export default Header