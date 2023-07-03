import Image from 'next/image'

const Gallery = () => {
    return (
        <div className="container mx-auto space-y-12">
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                <Image src="https://source.unsplash.com/640x480/?1" alt="" className="h-80 dark:bg-gray-500 aspect-video" width={600} height={600} />
                <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                    <span className="text-xs uppercase dark:text-gray-400">Join, it&apos;s free</span>
                    <h3 className="text-3xl font-bold">We&apos;re not reinventing the wheel</h3>
                    <p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
                    <button type="button" className="self-start">Action</button>
                </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                <Image src="https://source.unsplash.com/640x480/?2" alt="" className="h-80 dark:bg-gray-500 aspect-video" width={600} height={600} />
                <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                    <span className="text-xs uppercase dark:text-gray-400">Join, it&apos;s free</span>
                    <h3 className="text-3xl font-bold">We&apos;re not reinventing the wheel</h3>
                    <p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
                    <button type="button" className="self-start">Action</button>
                </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                <Image src="https://source.unsplash.com/640x480/?3" alt="" className="h-80 dark:bg-gray-500 aspect-video" width={600} height={600} />
                <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                    <span className="text-xs uppercase dark:text-gray-400">Join, it&apos;s free</span>
                    <h3 className="text-3xl font-bold">We&apos;re not reinventing the wheel</h3>
                    <p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
                    <button type="button" className="self-start">Action</button>
                </div>
            </div>
        </div>
    )
}

export default Gallery;
