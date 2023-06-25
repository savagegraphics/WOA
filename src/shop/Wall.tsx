import Image from 'next/image';
import './Wall.css'

const ProductDetails = () => {
    return (
        <div className="bg-gradient-to-r from-yellow-200 to-pink-200 min-h-screen flex items-center justify-center">
            <div className="shadow-lg rounded-md bg-white text-center overflow-hidden mx-auto my-20 h-350 w-700">
                <div className="relative text-left overflow-hidden p-8 h-full flex flex-col">
                    <h1 className="inline-block relative text-3xl text-gray-800 font-bold mb-4">
                        CHRISTMAS TREE
                        <span className="absolute top-0 right-0 transform translate-x-3 -translate-y-3 bg-pink-200 rounded-2px text-sm py-1 px-2">
                            Featured
                        </span>
                    </h1>
                    <div className="flex items-center justify-center mb-6">
                        <div className="text-2xl">
                            <i className="fa fa-star text-yellow-500 mr-1"></i>
                            <i className="fa fa-star text-yellow-500 mr-1"></i>
                            <i className="fa fa-star text-yellow-500 mr-1"></i>
                            <i className="fa fa-star text-yellow-500 mr-1"></i>
                            <i className="fa fa-star-o text-yellow-500"></i>
                        </div>
                    </div>
                    <p className="text-gray-600 mb-8">
                        " Let's spread the joy, here is Christmas, the most awaited day of the year. Christmas Tree is what one need the most. Here is the correct tree which will enhance your Christmas."
                    </p>
                    <div className="flex justify-center">
                        <button className="btn bg-blue-500 text-white flex items-center space-x-2 px-4 py-2 rounded-full">
                            <span className="text-lg">$250</span>
                            <span>
                                <i className="fa fa-shopping-cart"></i>
                            </span>
                            <span className="font-bold">Get now</span>
                        </button>
                    </div>
                </div>
                <div className="relative overflow-hidden h-full w-60">
                    <Image
                        src="https://images.unsplash.com/photo-1606830733744-0ad778449672?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNocmlzdG1hcyUyMHRyZWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        className="hover:scale-105 transform transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-90 text-white flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Description</h2>
                            <ul>
                                <li className="text-lg mb-2">
                                    <strong>Height:</strong> 5 Ft
                                </li>
                                <li className="text-lg mb-2">
                                    <strong>Shade:</strong> Olive green
                                </li>
                                <li className="text-lg mb-2">
                                    <strong>Decoration:</strong> balls and bells
                                </li>
                                <li className="text-lg mb-2">
                                    <strong>Material:</strong> Eco-Friendly
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
