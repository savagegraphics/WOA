import React from 'react';
import BottomNavigationComponent from '../components/BottomNavigationComponent';
import AnewSeven from '../layouts/AnewSeven'
import 'tailwindcss/tailwind.css';
import Navie from '../components/Navie'
import Hero from '../components/Hero'
import Tailwind from '../components/Tailwind';


const Home = () => {
  return (
    <div className="overflow-hidden">
      <Navie />
      <Hero />
      <AnewSeven />
      <Tailwind />
      <BottomNavigationComponent />
    </div>
  );
};

export default Home;
