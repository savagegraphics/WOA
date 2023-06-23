import React from 'react'
import 'tailwindcss/tailwind.css';
import BottomNavigationComponent from '../components/BottomNavigationComponent';
import Navie from '../components/Navie'
import AnewSeven from '../layouts/AnewSeven'
import GetStarted from '../registry/GetStarted'
import Landpage2 from '../registry/Landpage2'
import Footer from '../components/Footer';
import AnewEight from '../layouts/AnewEight';
import AnewTen from '../layouts/AnewTen';
import CTA from '../registry/CTA';
import Landpage from '../components/Landpage';
import Card from '../components/Card';
// import MultiCard from '../registry/MultiCard';
import Carding from '../registry/Carding';
import Hero from '../components/Hero';


const registry = () => {
  return (
    <div className='overflow-hidden'>
      <Navie />
      <Hero />
      {/* <MultiCard /> */}
      <Carding />
      <AnewSeven />
      <AnewEight />
      <AnewTen />
      <Card />
      <CTA />
      <Landpage />
      <Footer />
      <BottomNavigationComponent />
    </div>
  )
}

export default registry
