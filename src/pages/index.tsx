import React from 'react';
import BottomNavigationComponent from '../components/BottomNavigationComponent';
import 'tailwindcss/tailwind.css';
import Navie from '../components/Navie'

import Mui from '../registry/Mui'
import Card from '../components/Card';
import Footer from '../components/Footer';
import Tailwindtwo from '../components/Tailwindtwo';
import Landpage from '../components/Landpage';
import Anew from '../layouts/Anew'
import AAHero from '../components/AAHero'
import Wall from '../shop/Wall'
import CTAS from '../guides/CTAS'
import Navbar from '../components/Navbar'
import Gallery from '../shop/Gallery'
import Gallerious from '../shop/Gaallery'


const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Tailwindtwo />
      <Navbar />
      {/* <AAHero /> */}
      <Anew />
      <Mui />
      <Gallery />
      <Wall />
      <Gallerious />
      <Card />
      <CTAS />
      <Landpage />
      <Footer />
      <BottomNavigationComponent />
    </div>
  );
};

export default Home;
