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

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <BottomNavigation value={activeTab} onChange={handleTabChange}>
      <Link href="/">
        <BottomNavigationAction label="Home" value="/" icon={<HomeIcon />} selected={activeTab === '/'} />
      </Link>
      <Link href="/about">
        <BottomNavigationAction label="About" value="/about" icon={<AppRegistrationIcon />} selected={activeTab === '/about'} />
      </Link>
      <Link href="/registry">
        <BottomNavigationAction label="Registry" value="/registry" icon={<DescriptionIcon />} selected={activeTab === '/registry'} />
      </Link>
      <Link href="/shop">
        <BottomNavigationAction label="Shop" value="/shop" icon={<ShoppingBagIcon />} selected={activeTab === '/shop'} />
      </Link>
    </BottomNavigation>
  );
};

export default BottomNavigationComponent;
