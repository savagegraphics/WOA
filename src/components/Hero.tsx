import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="home">
            <section
                className="relative bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage:
                        "url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)",
                }}
            >
                <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25"></div>

                <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                    <div className="max-w-xl mb-6">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                                PUT ANYTHING
                            </p>
                        </div>
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            Onto your baby
                            <br className="hidden md:block" />
                            registry from{' '}
                            <span className="inline-block text-deepPurple-400">
                                any store
                            </span>
                        </h2>
                        <p className="text-base text-gray-dark md:text-lg">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                            quae. explicabo.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <Link href="/" className="block w-full rounded bg-pink px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
                                Start Your Babylist
                            </Link>

                            <Link href="/" className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto">
                                Find a Babylist
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
