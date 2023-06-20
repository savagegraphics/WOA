import React from 'react';
import BottomNavigationComponent from '../components/BottomNavigationComponent';
import Drawer from '../components/Drawer'
const Home = () => {
  return (
    <div>
      <Drawer/>
      <h1>Welcome to My Page</h1>
      {/* Your page content */}
      {/* Example content */}
      <p>This is the content of your page.</p>

      <BottomNavigationComponent />
    </div>
  );
};

export default Home;
