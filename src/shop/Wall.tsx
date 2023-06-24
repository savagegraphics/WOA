import Image from "next/image";

export default function Wall() {
    return (
        <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
            <div className="container mx-auto space-y-12">
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                    <div className="relative lg:w-1/2">
                        <div className="h-80 w-full aspect-w-16 aspect-h-9 dark:bg-gray-500">
                            <Image src="https://source.unsplash.com/640x480/?1" alt="" layout="fill" objectFit="cover" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                        <span className="text-xs uppercase dark:text-gray-400">Join, it&apos;s free</span>
                        <h3 className="text-3xl font-bold">We&apos;re not reinventing the wheel</h3>
                        <p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
                        <button type="button" className="self-start">Action</button>
                    </div>
                </div>
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm">
                    <div className="h-80 w-full aspect-w-16 aspect-h-9 dark:bg-gray-500">
                        <Image src="https://source.unsplash.com/640x480/?3" alt="" layout="fill" objectFit="cover" />
                    </div>
                    <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                        <span className="text-xs uppercase dark:text-gray-400">Join, it's free</span>
                        <h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
                        <p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
                        <button type="button" className="self-start">Action</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
