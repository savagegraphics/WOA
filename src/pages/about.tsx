import React from 'react';
import 'tailwindcss/tailwind.css';
import BottomNavigationComponent from '../components/BottomNavigationComponent';
import Navie from '../components/Navie'
import AnewThree from '../layouts/AnewThree'



const About = () => {
  return (
    <div className="overflow-hidden">
      <Navie />
      <AnewThree />
      <BottomNavigationComponent />
    </div>
  );
};

export default About;
