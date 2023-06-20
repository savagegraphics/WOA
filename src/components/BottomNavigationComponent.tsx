"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Home as HomeIcon, Info as InfoIcon } from '@mui/icons-material';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import DescriptionIcon from '@mui/icons-material/Description';

const BottomNavigationComponent = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(router.pathname);

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setActiveTab(newValue);
    router.push(newValue);
  };

  return (
    <BottomNavigation value={activeTab} onChange={handleTabChange}>
      <BottomNavigationAction label="Home" value="/" icon={<HomeIcon />} />
      <BottomNavigationAction label="About" value="/about" icon={<AppRegistrationIcon />} />
      <BottomNavigationAction label="Registry" value="/registry" icon={<DescriptionIcon />} />
      <BottomNavigationAction label="Shop" value="/shop" icon={<ShoppingBagIcon />} />
    </BottomNavigation>
  );
};


export default BottomNavigationComponent;
