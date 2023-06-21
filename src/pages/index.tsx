import React from 'react';
import BottomNavigationComponent from '../components/BottomNavigationComponent';
import AnewSeven from '../layouts/AnewSeven'
import 'tailwindcss/tailwind.css';
import Navie from '../components/Navie'
import Hero from '../components/Hero'


const Home = () => {
  return (
    <div>
      <Navie />
      <Hero />
      <AnewSeven />
      <BottomNavigationComponent />
    </div>
  );
};

export default Home;
