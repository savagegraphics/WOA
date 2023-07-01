import React from 'react'
import Image from 'next/image'
import fam from '../assets/fam4.jpg'

const Component = () => {
    return (
        <div className="h-screen w-screen">
            <div className="bg-purple w-full h-full p-28 flex items-center justify-center" style={{
                backgroundImage:
                    "url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)",
            }}>
                <div className="max-w-3xl flex h-full m-4 md:m-6">
                    <div className="relative group sm:w-full md:w-1/2 hover:bg-pink border-gray-light border-t border-l border-b border-r md:border-r-0 bg-opacity-5 transition-all duration-300">
                        <nav>
                            <ul className="flex p-4 md:p-6 space-x-6 text-white">
                                {/* <li className="cursor-pointer">Platform</li>
                                <li className="cursor-pointer">Services</li>
                                <li className="cursor-pointer">FAQ</li> */}
                            </ul>
                        </nav>
                        <h1 className="pl-4 md:pl-8 mt-6 md:mt-8 text-2xl text-white font-serif transform group-hover:translate-x-6 duration-300 leading-snug"> Put anything onto your <br /> baby registry <br />  from any store.</h1>
                        <p className="absolute bottom-1 p-4 md:pl-8 text-white text-xs">Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br />Lorem ipsum dolor sit amet consectetur, adipisicing elit..<br />   Nesciunt illo tenetur fuga ducimus numquam ea!</p>
                        <div className="absolute z-50 bottom-32 md:bottom-10 right-0 transform translate-x-12 flex items-center text-center justify-center w-20 h-20 rounded-full bg-white group-hover:bg-green-200 text-purple group-hover:text-gray-light font-semibold cursor-pointer group-hover:scale-110 duration-300 select-none">Sign Up!</div>
                    </div>
                    <div className="md:w-1/2 hidden md:block bg-indigo-700">
                        <Image src="https://media.istockphoto.com/id/1225968768/photo/loving-pregnant-woman-holding-her-belly-while-posing-in-studio.jpg?s=612x612&w=0&k=20&c=Lh-ZJlHdB_Mjc_yog9V5-wduwuecld4B-yAXq2XaqSc=" alt="mobile payment" className="h-full"
                            width={400}
                            height={400} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Component;
