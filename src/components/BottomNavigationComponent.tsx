import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import DescriptionIcon from '@mui/icons-material/Description';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const BottomNavigationComponent = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(router.pathname);

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setActiveTab(newValue);
    router.push(newValue);
  };

  return (
    <BottomNavigation
      value={activeTab}
      onChange={handleTabChange}
      style={{
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
        zIndex: 999, // Adjust the z-index value if needed
        display: window.innerWidth < 900 ? 'flex' : 'none',
      }}
    >
      <BottomNavigationAction label="Home" value="/" icon={<HomeIcon />} />
      <BottomNavigationAction label="Registry" value="/registry" icon={<DescriptionIcon />} />
      <BottomNavigationAction label="Guides" value="/guides" icon={<AppRegistrationIcon />} />
      <BottomNavigationAction label="Shop" value="/shop" icon={<ShoppingBagIcon />} />
    </BottomNavigation>
  );
};

export default BottomNavigationComponent;
