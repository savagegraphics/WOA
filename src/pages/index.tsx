import React from 'react';
import BottomNavigationComponent from '../components/BottomNavigationComponent';
import AnewSeven from '../layouts/AnewSeven'
import 'tailwindcss/tailwind.css';
import Navie from '../components/Navie'


const Home = () => {
  return (
    <div>
      <Navie />
      <AnewSeven />
      <BottomNavigationComponent />
    </div>
  );
};

export default Home;
