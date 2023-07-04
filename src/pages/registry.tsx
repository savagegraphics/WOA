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
import Navbar from '../components/Navbar';
import AnewSix from '../layouts/AnewSix';
import Tailwindtwo from '../components/Tailwindtwo';
import Gallerious from '../shop/Gaallery'


const registry = () => {
  return (
    <div className='overflow-hidden'>
      <Tailwindtwo />
      <Navbar />
      <MultiCard />
      <CardtOne />
      <CardtTwo />
      <Cardt />
      <Cardty />
      <AnewSix />
      <Gallerious />
      <CTA />
      <Card />
      <Landpage />
      <Footer />
      <BottomNavigationComponent />
    </div>
  )
}

export default registry
