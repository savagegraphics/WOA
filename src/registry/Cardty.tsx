import Image from 'next/image';
import Link from 'next/link';

function Cardty() {
    return (
        <div className="min-w-screen mt-10 bg-yellow-300 flex items-center p-5 lg:p-10 overflow-hidden relative">
            <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                <div className="md:flex items-center -mx-10">
                    <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                        <div className="relative">
                            <Image
                                src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg"
                                alt=""
                                width={480}
                                height={320}
                                className="w-full relative z-10"
                            />
                            <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-10">
                        <div className="mb-10">
                            <div>   <h1 className="font-bold uppercase text-2xl mb-5">Cash Funds</h1></div>
                            <div>   <p className="text-sm">
                                Start that college fund (or diaper fund) with help from your village. We&apos;ll transfer the cash straight to your bank account.
                            </p></div>
                        </div>
                        <div>

                            <div className="inline-block align-bottom">
                                <Link href="/" className="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900">
                                    How does this work?
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Cardty;
