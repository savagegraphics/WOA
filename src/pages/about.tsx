import React from 'react';
import BottomNavigationComponent from '../components/BottomNavigationComponent';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <h1 className="text-2xl font-bold mb-4">About</h1>
      {/* Your page content */}
      {/* Example content */}
      <p className="mb-4">This is the content of your about page.</p>

      <div className="flex-grow"></div> {/* To push the bottom navigation to the bottom */}

      {/* Include the BottomNavigationComponent */}
      <BottomNavigationComponent />
    </div>
  );
};

export default About;
