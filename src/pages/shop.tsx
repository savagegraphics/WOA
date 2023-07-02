import React from 'react'
import BottomNavigationComponent from '../components/BottomNavigationComponent';
import Navie from '../components/Navie'
import 'tailwindcss/tailwind.css';
import Wall from '../shop/Wall'
import AHero from '../components/AHero'
import Navbar from '../components/Navbar'
import Gallerious from '../shop/Gaallery'
import Hero from '../components/Hero'
import Tailwindy from '../components/Tailwindy';
import CardStyle from '../components/CardStyle1';




const shop = () => {

  return (
    <div className='overflow-hidden'>
      <Navbar />
      {/* <Hero /> */}
      <Tailwindy />
      <CardStyle />
      <Gallerious />
      <AHero />
      <Wall />
      <BottomNavigationComponent />
    </div>
  )
}

export default shop
