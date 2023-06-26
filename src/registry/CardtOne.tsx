import Image from 'next/image';

function MyComponent() {
    return (
        <div className="flex flex-col justify-center h-screen">
            <div className="relative flex flex-col md:flex-row-reverse md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
                <div className="w-full md:w-1/3 bg-white grid place-items-center">
                    <Image
                        src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt="tailwind logo"
                        className="rounded-xl"
                        width={500}
                        height={500}
                    />
                </div>
                <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                    <div>
                        <h4 className="font-black text-gray-800 md:text-3xl text-xl">
                            The Majestic and Wonderful Bahamas
                        </h4>
                    </div>
                    <p className="md:text-lg text-gray-500 text-base">
                        The best kept secret of The Bahamas is the country&apos;s sheer size and diversity. With 16 major islands, The
                        Bahamas is an unmatched destination
                    </p>
                </div>

            </div>
        </div>
    );
}

export default MyComponent;
