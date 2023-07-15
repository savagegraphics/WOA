import React from 'react'

const HerosTwo = () => {
  return (
    <div>
    <div className="sm:mb-10 mb-8 lg:mt-8 lg:grid lg:grid-cols-5 md:grid-cols-none md:bg-gray-300 bg-gray-300 lg:bg-white lg:h-full">
        <div className=" px-10 py-10 max-w-md m-auto lg:col-span-2 mt-6 mb-28 shadow-xl rounded-xl lg:mt-10 md:shadow-xl md:rounded-xl lg:shadow-none lg:rounded-none lg:w-full lg:mb-10 lg:px-5 lg:pt-5 lg:pb-5 lg:max-w-lg bg-white">
            <img className="h-64 sm:h-52 sm:w-full sm:object-cover lg:hidden object-center mt-2 rounded-lg shadow-2xl" src="https://res.cloudinary.com/babylist/image/upload/f_auto,q_auto:best,c_scale,w_768/v1591830055/hello-baby/pregnant-during-summer-survival-guide-header.jpg" alt="Ad- woman on a beach" />
            <h1 className="mt-5 font-thin text-3xl sm:text-2xl lg:mt-7">Pregnant During the Summer: A Babylist Survival Guide</h1>
            <h1 className="text-lg text-gray-600 text-justify pt-2">Lorem ipsum dolor sit amet, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h1>
        </div>

        <div className="hidden relative lg:block  lg:col-span-3">
            <img className="absolute ml-8 inset-0 w-full h-full object-cover object-center" src="https://res.cloudinary.com/babylist/image/upload/f_auto,q_auto:best,c_scale,w_768/v1591830055/hello-baby/pregnant-during-summer-survival-guide-header.jpg" alt="Ad- woman on a beach" />
        </div>
    </div>
</div>
  )
}

export default HerosTwo
