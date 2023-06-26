import React from 'react'
import BottomNavigationComponent from '../components/BottomNavigationComponent';
import Navie from '../components/Navie'
import 'tailwindcss/tailwind.css';
import Wall from '../shop/Wall'
import LPage from '../shop/LPage'




const shop = () => {
  return (
    <div className='overflow-hidden'>
      <Navie />
      <LPage />
      <Wall />
      <BottomNavigationComponent />
    </div>
  )
}

export default shop
