import React from 'react';
import './LastCard.css'

const LastCard = () => {
  return (
    <div className="grid md:grid-cols-3 gap-4 sm:grid-cols-2 custom-grid-cols-2">
      <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
        <img
          src="https://source.unsplash.com/random/300x300/?2"
          alt=""
          className="object-cover object-center w-full rounded-t-md h-60 dark:bg-gray-500"
        />
           <div className="flex flex-row justify-between p-6 space-y-0">
  <button
    type="button"
    className="flex items-center justify-start w-full pt-1 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900"
  >
    Read more
  </button>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-8 flex items-right justify-self-right"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
</div>
      </div>
      <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
        <img
          src="https://source.unsplash.com/random/300x300/?2"
          alt=""
          className="object-cover object-center w-full rounded-t-md h-60 dark:bg-gray-500"
        />
       <div className="flex flex-row justify-between p-6 space-y-0">
  <button
    type="button"
    className="flex items-center justify-start w-full pt-1 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900"
  >
    Read more
  </button>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-8 flex items-right justify-self-right"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
</div>

      </div>
      <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
        <img
          src="https://source.unsplash.com/random/300x300/?2"
          alt=""
          className="object-cover object-center w-full rounded-t-md h-60 dark:bg-gray-500"
        />
           <div className="flex flex-row justify-between p-6 space-y-0">
  <button
    type="button"
    className="flex items-center justify-start w-full pt-1 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900"
  >
    Read more
  </button>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-8 flex items-right justify-self-right"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
</div>
      </div>
      <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
        <img
          src="https://source.unsplash.com/random/300x300/?2"
          alt=""
          className="object-cover object-center w-full rounded-t-md h-60 dark:bg-gray-500"
        />
           <div className="flex flex-row justify-between p-6 space-y-0">
  <button
    type="button"
    className="flex items-center justify-start w-full pt-1 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900"
  >
    Read more
  </button>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-8 flex items-right justify-self-right"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
</div>
      </div>
    </div>
  );
};

export default LastCard;



// import React from 'react'
// import './LastCard.css'



// const products = [
//     {
//         id: 1,
//         href: '#',
//         imageSrc: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMHByb2R1Y3RzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
//         title: 'Kelsie Meyer',
//     },
//     {
//         id: 2,
//         href: '#',
//         imageSrc: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMHByb2R1Y3RzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
//         title: 'Mark Carusso',
//     },
//     {
//         id: 3,
//         href: '#',
//         imageSrc: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMHByb2R1Y3RzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
//         title: 'Taylor Green',
//     },
//     {
//         id: 4,
//         href: '#',
//         imageSrc: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMHByb2R1Y3RzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
//         title: 'Isaiah Jian',
//     },
// ]

// const LastCard = () => {
//   return (
//     <div className='root'>
//   <div className="wrap custom-grid-cols-2 ">
//   {products.map((product) => (
//   <div key={product.id} className="box">
//     <div className="box-top">
//       <img className="box-image" 
//         src={product.imageSrc}
//     />
//       <div className="title-flex">
//         <h3 className="box-title">{product.title}</h3>
//       </div>
//         </div>
//   </div> 
//   ) )}
// </div>
//     </div>
//   )
// }

// export default LastCard
