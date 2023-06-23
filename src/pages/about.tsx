import React from 'react';
import 'tailwindcss/tailwind.css';
import BottomNavigationComponent from '../components/BottomNavigationComponent';
import Navie from '../components/Navie'



const About = () => {
  return (
    <div className="overflow-hidden">
      <Navie />
      <BottomNavigationComponent />
    </div>
  );
};

export default About;
