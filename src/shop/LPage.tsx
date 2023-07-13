import React from 'react';
import './LPage.css';


const products = [
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMHByb2R1Y3RzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$1,135',
        color: 'Black',
    },
    {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://media.istockphoto.com/id/871227836/photo/young-mother-browses-down-baby-aisle-in-supermarket.webp?b=1&s=170667a&w=0&k=20&c=S1JBbt5Am2wUgNKGGwrWVAUTB8euVe67kXRSUiYVe9s=',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$835',
    
    },
    {
        id: 3,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://media.istockphoto.com/id/526495161/photo/baby-accessories.webp?b=1&s=170667a&w=0&k=20&c=aXBUMBBn1_wPZeuDZrRvddDSU3zZHY1LTNoczc7XPW8=',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$605',
        color: 'Black',
    },
    {
        id: 4,
        name: 'Basic Tee',
        href: '#',
        imageSrc: "https://media.istockphoto.com/id/1255573365/photo/baby-girl-little-hands-holding-transparent-plastic-bottle-of-oil-on-light-pink-table.webp?b=1&s=170667a&w=0&k=20&c=3bIYA2UWvaH4usxL5b4vmjnuV_bYnMj0MM1Avi1NHnI=",
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$3,500',
        color: 'Black',
    },
    {
        id: 5,
        name: 'Basic Tee',
        href: '#',
        imageSrc: "https://media.istockphoto.com/id/1419157355/photo/home-pamper-routine-with-baby.webp?b=1&s=170667a&w=0&k=20&c=ws7LfWYpR6AmIYwF39MNRYGBhJKFXEeg1KncrlrFEHw=",
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$3,500',
        color: 'Black',
    },
    {
        id: 6,
        name: 'Basic Tee',
        href: '#',
        imageSrc: "https://media.istockphoto.com/id/523967463/photo/pacifier.webp?b=1&s=170667a&w=0&k=20&c=h0OdSfrWMC2U91lQUiP0jvqlCQGLf1q9dvA4aavMGQU=",
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$3,500',
        color: 'Black',
    },
    {
        id: 7,
        name: 'Basic Tee',
        href: '#',
        imageSrc: "https://media.istockphoto.com/id/625379326/photo/organic-cosmetic-children-for-bath-on-wooden-bakground-close-up.webp?b=1&s=170667a&w=0&k=20&c=Zsrhv2BInxdUvtgXg8PFo6ZxRbc5GZd5A4G-8F_3zfk=",
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$3,500',
        color: 'Black',
    },
    {
        id: 8,
        name: 'Basic Tee',
        href: '#',
        imageSrc: "https://media.istockphoto.com/id/859936614/photo/baby-products-in-a-nursery.webp?b=1&s=170667a&w=0&k=20&c=-_XzB5OZCZWV136CUhkexiQVbtTXDrd-66QZRDuz1bQ=",
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$3,500',
        color: 'Black',
    },
    {
        id: 9,
        name: 'Basic Tee',
        href: '#',
        imageSrc: "https://media.istockphoto.com/id/184623092/photo/childrens-accessories.webp?b=1&s=170667a&w=0&k=20&c=EGfT7blB-onawZsEf5fNsNNQdGYMEyu7877Hpwx33vQ=",
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$3,500',
        color: 'Black',
    },
    {
        id: 10,
        name: 'Basic Tee',
        href: '#',
        imageSrc: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFieSUyMHByb2R1Y3RzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$3,500',
        color: 'Black',
    },
    {
        id: 11,
        name: 'Basic Tee',
        href: '#',
        imageSrc: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFieSUyMHByb2R1Y3RzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$3,500',
        color: 'Black',
    },
    {
        id: 12,
        name: 'Basic Tee',
        href: '#',
        imageSrc: "https://plus.unsplash.com/premium_photo-1661679055213-4d018ebf7164?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJhYnklMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$3,500',
        color: 'Black',
    }, 
    
    // More products...
]


const LPage = () => {
  return (
    <div className="main">
    <ul className="cards custom-grid-cols-2">
      {products.map((product) => (
 <li key={product.id}  className="cards_item">
 <div className="card mb-8" tabIndex={2}>
   <div className="card_image"> 
   <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                /></div>
   <div className="card_content">
     <div className="card_text">
        <p>{product.name}</p>
        <p>{product.imageAlt}</p>
       <span className="note">{product.price}</span>
     </div>
   </div>
 </div>
</li>
      ))}
     
    </ul>
  </div>
  );
};

export default LPage;
