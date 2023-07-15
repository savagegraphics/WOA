import React from 'react';
import './LastCard.css';


const card = [
  {
    id: 1,
    imageSrc: "https://source.unsplash.com/random/300x300/?2",
    name: 'Sale'
  },
  {
    id: 2,
    imageSrc: "https://source.unsplash.com/random/300x300/?2",
    name: 'Summer Shop'
  },
  {
    id: 3,
    imageSrc: "https://source.unsplash.com/random/300x300/?2",
    name: 'New Arrivals'
  },
  {
    id: 4,
    imageSrc: "https://source.unsplash.com/random/300x300/?2",
    name: 'Coming Soon'
  },
  {
    id: 5,
    imageSrc: "https://source.unsplash.com/random/300x300/?2",
    name: 'Top Registered'
  },
  {
    id: 6,
    imageSrc: "https://source.unsplash.com/random/300x300/?2",
    name: 'Newborn Must-Have'
  },
  {
    id: 7,
    imageSrc: "https://source.unsplash.com/random/300x300/?2",
    name: 'Only at Babylist'
  },
  {
    id: 8,
    imageSrc: "https://source.unsplash.com/random/300x300/?2",
    name: 'Try-it Kits'
  },
  {
    id: 9,
    imageSrc: "https://source.unsplash.com/random/300x300/?2",
    name: 'Clothing & Accessories'
  },
  {
    id: 10,
    imageSrc: "https://source.unsplash.com/random/300x300/?2",
    name: 'Nursery'
  },
  {
    id: 11,
    imageSrc: "https://source.unsplash.com/random/300x300/?2",
    name: 'Furniture'
  },
  {
    id: 12,
    imageSrc: "https://source.unsplash.com/random/300x300/?2",
    name: 'Play & Activity'
  },
  {
    id: 13,
    imageSrc: "https://source.unsplash.com/random/300x300/?2",
    name: 'Nursing & Feeding'
  },
  {
    id: 14,
    imageSrc: "https://source.unsplash.com/random/300x300/?2",
    name: 'Diapering'
  },
  {
    id: 15,
    imageSrc: "https://source.unsplash.com/random/300x300/?2",
    name: 'Strollers'
  },
  {
    id: 16,
    imageSrc: "https://source.unsplash.com/random/300x300/?2",
    name: 'Car Seats'
  },
  {
    id: 17,
    imageSrc: "https://source.unsplash.com/random/300x300/?2",
    name: 'Travel Systems'
  },
  {
    id: 18,
    imageSrc: "https://source.unsplash.com/random/300x300/?2",
    name: 'Carriers'
  },
  {
    id: 19,
    imageSrc: "https://source.unsplash.com/random/300x300/?2",
    name: 'Toys & Books'
  },
  {
    id: 20,
    imageSrc: "https://source.unsplash.com/random/300x300/?2",
    name: 'Bath & Potty'
  },
  {
    id: 21,
    imageSrc: "https://source.unsplash.com/random/300x300/?2",
    name: 'Health & Safety'
  },
  {
    id: 22,
    imageSrc: "https://source.unsplash.com/random/300x300/?2",
    name: 'Eco-Friendly'
  },
  {
    id: 23,
    imageSrc: "https://source.unsplash.com/random/300x300/?2",
    name: 'Monitors & Cameras'
  },
  {
    id: 24,
    imageSrc: "https://source.unsplash.com/random/300x300/?2",
    name: 'Gift Cards, Favors'
  },
  {
    id: 25,
    imageSrc: "https://source.unsplash.com/random/300x300/?2",
    name: 'Gift Shop'
  },
  {
    id: 26,
    imageSrc: "https://source.unsplash.com/random/300x300/?2",
    name: 'Gift Sets'
  },
]

const LastCard = () => {
  return (
    <div className="grid md:grid-cols-3 gap-4 sm:grid-cols-2 custom-grid-cols-2">
       {card.map((product) => (
      <div key={product.id}  className="max-w-xs rounded-2xl shadow-md dark:bg-gray-900 dark:text-gray-100">
        <img
 src={product.imageSrc}
           alt=""
          className="object-cover object-center w-full rounded-t-2xl h-60 dark:bg-gray-500"
        />
           <div className="flex flex-row justify-between p-6 space-y-0">
  <button
    type="button"
    className="flex items-center justify-start w-full pt-1 font-thin tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900"
  >
    {product.name}
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
      ))}
 </div>
  );
};

export default LastCard;
