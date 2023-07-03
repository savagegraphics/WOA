import React from 'react';
import BottomNavigationComponent from '../components/BottomNavigationComponent';
import 'tailwindcss/tailwind.css';
import Navie from '../components/Navie'
import Tailwind from '../components/Tailwind';
import Mui from '../registry/Mui'
import Card from '../components/Card';
import Footer from '../components/Footer';
import Tailwindtwo from '../components/Tailwindtwo';
import Landpage from '../components/Landpage';
import AnewSix from '../layouts/AnewSix';
import Anew from '../layouts/Anew'
import Heros from '../components/Heros'
import AAHero from '../components/AAHero'
import Wall from '../shop/Wall'
import CTAS from '../guides/CTAS'
import CTASS from '../guides/CTASS'
import Navbar from '../components/Navbar'
import Gallery from '../shop/Gallery'
import Gallerious from '../shop/Gaallery'


const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Navbar />
      {/* <AAHero /> */}
      <Anew />
      <Mui />
      <Tailwindtwo />
      <Gallery />
      <CTASS />
      <AnewSix />
      <Wall />
      <Heros />
      <Tailwind />
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
