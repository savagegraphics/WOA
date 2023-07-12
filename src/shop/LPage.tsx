import React from 'react';
import './LPage.css';


const products = [
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$1,135',
        color: 'Black',
    },
    {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$835',
    
    },
    {
        id: 3,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$605',
        color: 'Black',
    },
    {
        id: 4,
        name: 'Basic Tee',
        href: '#',
        imageSrc: "https://assets.codepen.io/652/photo-1544510808-91bcbee1df55.jpeg",
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$3,500',
        color: 'Black',
    },
    {
        id: 5,
        name: 'Basic Tee',
        href: '#',
        imageSrc: "https://assets.codepen.io/652/photo-1544510808-91bcbee1df55.jpeg",
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$3,500',
        color: 'Black',
    },
    {
        id: 6,
        name: 'Basic Tee',
        href: '#',
        imageSrc: "https://assets.codepen.io/652/photo-1544510808-91bcbee1df55.jpeg",
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$3,500',
        color: 'Black',
    },
    {
        id: 7,
        name: 'Basic Tee',
        href: '#',
        imageSrc: "https://assets.codepen.io/652/photo-1544510808-91bcbee1df55.jpeg",
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$3,500',
        color: 'Black',
    },
    {
        id: 8,
        name: 'Basic Tee',
        href: '#',
        imageSrc: "https://assets.codepen.io/652/photo-1544510808-91bcbee1df55.jpeg",
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$3,500',
        color: 'Black',
    },
    {
        id: 9,
        name: 'Basic Tee',
        href: '#',
        imageSrc: "https://assets.codepen.io/652/photo-1544510808-91bcbee1df55.jpeg",
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$3,500',
        color: 'Black',
    },
    {
        id: 10,
        name: 'Basic Tee',
        href: '#',
        imageSrc: "https://images.unsplash.com/photo-1528218635780-5952720c9729?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJlZ25hbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$3,500',
        color: 'Black',
    },
    {
        id: 11,
        name: 'Basic Tee',
        href: '#',
        imageSrc: "https://media.istockphoto.com/id/1398759152/photo/pregnant-woman-with-husband-and-son-at-home.webp?b=1&s=170667a&w=0&k=20&c=NyCENYSjINBb4WIjNxMfwGRsL7xdH6fG3FWP6YRBuKw=",
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$3,500',
        color: 'Black',
    },
    {
        id: 12,
        name: 'Basic Tee',
        href: '#',
        imageSrc: "https://images.unsplash.com/photo-1586102728466-46b99b3bc411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByZWduYW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
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
