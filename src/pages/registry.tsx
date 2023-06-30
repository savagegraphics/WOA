import React from 'react'
import 'tailwindcss/tailwind.css';
import BottomNavigationComponent from '../components/BottomNavigationComponent';
import Navie from '../components/Navie'
import Footer from '../components/Footer';
import CTA from '../registry/CTA';
import Landpage from '../components/Landpage';
import Card from '../components/Card';
import Carding from '../registry/Carding';
import Cardt from '../registry/Cardt';
import CardtOne from '../registry/CardtOne';
import MultiCard from '../registry/MultiCard';
import Cardty from '../registry/Cardty';
import CardtTwo from '../registry/CardtTwo';
import Navbar from '../components/Navbar'



const registry = () => {
  return (
    <div className='overflow-hidden'>
      <Navbar />
      <MultiCard />
      <CardtOne />
      <CardtTwo />
      <Cardt />
      <Cardty />
      <Carding />
      <CTA />
      <Card />
      <Landpage />
      <Footer />
      <BottomNavigationComponent />
    </div>
  )
}

export default registry
