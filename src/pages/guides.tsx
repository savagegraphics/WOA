import React from 'react';
import 'tailwindcss/tailwind.css';
import BottomNavigationComponent from '../components/BottomNavigationComponent';
import Navie from '../components/Navie'
import Image from '../guides/Image'
import AnewEight from '../layouts/AnewEight';
import AnewTen from '../layouts/AnewTen';
import Navv from '../components/Navv'
import Navbar from '../components/Navbar'



const About = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <AnewTen />
      <AnewEight />
      <BottomNavigationComponent />
    </div>
  );
};

export default About;
