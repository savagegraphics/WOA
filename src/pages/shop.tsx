import React from 'react'
import BottomNavigationComponent from '../components/BottomNavigationComponent';
import Navie from '../components/Navie'
import 'tailwindcss/tailwind.css';
import Cart from '../guides/Cart'
import Wall from '../shop/Wall'




const shop = () => {
  return (
    <div className='overflow-hidden'>
      <Navie />
      <Cart />
      <Wall />
      <BottomNavigationComponent />
    </div>
  )
}

export default shop
