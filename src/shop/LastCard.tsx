import React from 'react'
import './LastCard.css'



const products = [
    {
        id: 1,
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMHByb2R1Y3RzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        title: 'Kelsie Meyer',
    },
    {
        id: 2,
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMHByb2R1Y3RzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        title: 'Mark Carusso',
    },
    {
        id: 3,
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMHByb2R1Y3RzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        title: 'Taylor Green',
    },
    {
        id: 4,
        href: '#',
        imageSrc: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMHByb2R1Y3RzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        title: 'Isaiah Jian',
    },
]

const LastCard = () => {
  return (
    <div className='root'>
  <div className="wrap custom-grid-cols-2 ">
  {products.map((product) => (
  <div key={product.id} className="box">
    <div className="box-top">
      <img className="box-image" 
        src={product.imageSrc}
    />
      <div className="title-flex">
        <h3 className="box-title">{product.title}</h3>
      </div>
        </div>
  </div> 
  ) )}
</div>
    </div>
  )
}

export default LastCard
