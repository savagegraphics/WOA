import { useState } from 'react';
import Link from 'next/link';
import './Navie.css';
import { RiMenu2Fill, RiMenu3Fill } from 'react-icons/ri';
import { GiShoppingCart, GiRoyalLove } from 'react-icons/gi';

const Navie = () => {
    const [ showNavbar, setShowNavbar ] = useState(false);
    const [ isOpen, setIsOpen ] = useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="container">
                <div className="menu-icon" onClick={ handleShowNavbar }>
                    { isOpen ? (
                        <RiMenu3Fill className="cart" size={ 24 } color="#85586F" onClick={ toggleMenu } />
                    ) : (
                        <RiMenu2Fill className="cart" size={ 24 } color="#85586F" onClick={ toggleMenu } />
                    ) }
                </div>
                <div className="logo">
                    <GiRoyalLove className="w-5 h-5 mr-4" />
                    babylist
                </div>

                <div className={ `nav-elements  ${showNavbar && 'active'}` }>
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/blog">Registry</Link>
                        </li>
                        <li>
                            <Link href="/projects">Shop</Link>
                        </li>
                        <li>
                            <Link href="/about">Guides</Link>
                        </li>
                        <li>
                            <Link href="/contact">Sign Up</Link>
                        </li>
                        <li>
                            <Link href="/contact">Help</Link>
                        </li>
                        <li>
                            <Link href="/contact">Log In</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact Us</Link>
                        </li>
                        <li>
                            <Link href="/contact">FAQ</Link>
                        </li>
                    </ul>
                </div>
                <div className="cart-icon">
                    <GiShoppingCart className="cart" size={ 24 } color="#85586F" />
                </div>
            </div>
        </nav>
    );
};

export default Navie;
