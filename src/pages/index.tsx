import React from 'react';
import BottomNavigationComponent from '../components/BottomNavigationComponent';
import 'tailwindcss/tailwind.css';
import Navie from '../components/Navie'
import Hero from '../components/Hero'
import Tailwind from '../components/Tailwind';
import Mui from '../registry/Mui'
import Card from '../components/Card';
import Footer from '../components/Footer';
import Tailwindtwo from '../components/Tailwindtwo';
import Landpage from '../components/Landpage';
import AnewSix from '../layouts/AnewSix';
import AnewTen from '../layouts/AnewTen';
import Anew from '../layouts/Anew'



const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Navie />
      <Hero />
      <Mui />
      <Tailwind />
      <AnewSix />
      <Anew />
      <AnewTen />
      <Card />
      <Tailwindtwo />
      <Landpage />
      <Footer />
      <BottomNavigationComponent />
    </div>
  );
};

export default Home;
