import React from 'react';
import 'tailwindcss/tailwind.css';
import BottomNavigationComponent from '../components/BottomNavigationComponent';
import Navie from '../components/Navie'
import Image from '../guides/Image'
import AnewEight from '../layouts/AnewEight';
import AnewTen from '../layouts/AnewTen';
import Navv from '../components/Navv'
import Navbar from '../components/Navbar'
import Tailwindtwo from '../components/Tailwindtwo';
import Tailwind from '../components/Tailwind';
import Heros from '../components/Heros'
import AHero from '../components/AHero'
import AAHero from '../components/AAHero';
import AnewOne from '../layouts/AnewOne'
import CTAS from '../guides/CTAS'
import Landpage from '../components/Landpage';
import Footer from '../components/Footer';
import Heroes from '../components/Heroes'
import CardStyle from '../components/CardStyle1';



const About = () => {
  return (
    <div className="overflow-hidden">
      <Tailwindtwo />
      <Navbar />
      <Heroes />
      <CardStyle />
      <Tailwind />
      <AHero />
      <Heros />
      <AnewEight />
      <AnewOne />
      <Footer />
      <BottomNavigationComponent />
    </div>
  );
};

export default About;
