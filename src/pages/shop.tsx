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
import Tailwindtwo from '../components/Tailwindtwo';
import Footer from '../components/Footer';
import Landpage from '../components/Landpage';
import AnewTen from '../layouts/AnewTen';
import AnewOne from '../layouts/AnewOne'
// import LPage from '../shop/LPage';



const shop = () => {

  return (
    <div className='overflow-hidden'>
      <Tailwindtwo />
      <Navbar />
      {/* <Hero /> */}
      <AnewTen />
      <AnewOne/>
      {/* <CardStyle /> */}
      <Landpage />
      <Footer />
      <BottomNavigationComponent />
    </div>
  )
}

export default shop
