import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col mx-auto lg:flex-row">
                <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-800">
                    <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                        <Image src="https://images.babylist.com/image/upload/f_auto,q_auto:best,c_scale,w_768/v1688495563/hello-baby/All_Pink_Baby_Gear.jpg" alt="" className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96 lg:min-h-auto" width={1200} height={800} />
                    </div>
                </div>
                <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:mt-28 lg:w-1/2 xl:w-2/5 dark:bg-violet-400 dark:text-gray-900">
                    <div className="flex space-x-2 sm:space-x-4">
                        <div className="space-y-2">
                            <h1 className="text-4xl md:text-4xl sm:text-2xl font-bold leading">Embracing Barbiecore: All Pink Everything</h1>
                            <p className="leadi">Praesentium ea et neque distinctio quas eius repudiandae quaerat obcaecati voluptatem.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
