import Image from 'next/image'

const Gallery = () => {
    return (
        <div className="container mx-auto space-y-12">
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                <Image src="https://source.unsplash.com/640x480/?1" alt="" className="h-80 dark:bg-gray-500 aspect-video" width={600} height={600} />
                <div className="flex flex-col justify-center items-center flex-1 p-6 dark:bg-gray-900">
                    <span className="text-xs uppercase pb-2 dark:text-gray-400">Join, it&apos;s free</span>
                    <h3 className="text-4xl text-deepPurple-400 font-bold">Anything From Any Store</h3>
                    <p className="my-6 dark:text-gray-400">Add any item from any store.</p>
                </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                <Image src="https://source.unsplash.com/640x480/?2" alt="" className="h-80 dark:bg-gray-500 aspect-video" width={600} height={600} />
                <div className="flex flex-col justify-center items-center flex-1 p-6 dark:bg-gray-900">
                    <span className="text-xs uppercase pb-2 dark:text-gray-400">15%</span>
                    <h3 className="text-4xl text-deepPurple-400 font-bold">Discount </h3>
                    <p className="my-6 dark:text-gray-400">15% completion discount to the Babylist shop.</p>
                </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                <Image src="https://source.unsplash.com/640x480/?3" alt="" className="h-80 dark:bg-gray-500 aspect-video" width={600} height={600} />
                <div className="flex flex-col justify-center items-center flex-1 p-6 dark:bg-gray-900">
                    <span className="text-xs uppercase pb-2 dark:text-gray-400">Gifts</span>
                    <h3 className="text-4xl text-deepPurple-400 font-bold">Personal and Meaningful</h3>
                    <p className="my-6 dark:text-gray-400">Add meaningful gifts you can&apos;t buy in stores.</p>
                </div>
            </div>
        </div>
    )
}

export default Gallery;
