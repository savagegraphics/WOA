import React from 'react'
import BottomNavigationComponent from '../components/BottomNavigationComponent';
import Navie from '../components/Navie'
import 'tailwindcss/tailwind.css';
import Wall from '../shop/Wall'
import LPage from '../shop/LPage'
import AHero from '../components/AHero'
import Navbar from '../components/Navbar'
import Gallerious from '../shop/Gaallery'
import Hero from '../components/Hero'




const shop = () => {

  return (
    <div className='overflow-hidden'>
      <Navbar />
      <Hero />
      <Gallerious />
      <AHero />
      <LPage />
      <Wall />
      <BottomNavigationComponent />
    </div>
  )
}

export default shop
