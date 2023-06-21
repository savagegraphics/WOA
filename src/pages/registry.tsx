import React from 'react'
import 'tailwindcss/tailwind.css';
import BottomNavigationComponent from '../components/BottomNavigationComponent';
import Navie from '../components/Navie'
import AnewSeven from '../layouts/AnewSeven'
import GetStarted from '../registry/GetStarted'
import Landpage2 from '../registry/Landpage2'
import Footer from '../components/Footer';
import AnewTwo from '../layouts/AnewTwo'



const registry = () => {
  return (
    <div className='overflow-hidden'>
      <Navie />
      <Landpage2 />
      <AnewSeven />
      <AnewTwo />
      <Footer />
      <BottomNavigationComponent />
    </div>
  )
}

export default registry
