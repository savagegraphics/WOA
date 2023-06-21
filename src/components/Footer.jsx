import React from 'react';
import './Footer.css';
import Link from 'next/link';
import { FaDiscord, FaFacebook, FaTwitter, FaGithub, FaInstagram, FaLinkedin, } from 'react-icons/fa';
import { GiRoyalLove } from 'react-icons/gi';





const year = new Date().getFullYear();

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-logo'>
                <Link href="/" className='social-logo'>
                    <GiRoyalLove className="w-5 h-5 mr-4" />
                    Babylist
                </Link>
            </div>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Registry</h2>
                        <Link href="/">Why Babylist</Link>
                        <Link href="/">Find Registry</Link>
                        <Link href="/">Create Registry</Link>
                        <Link href="/">Baby Registry Checklist</Link>
                        <Link href="/">15% Registry Discount</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link href="/">Team</Link>
                        <Link href="/">Our Story</Link>
                        <Link href="/">Experience</Link>
                        <Link href="/">Jobs, Press</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Guides</h2>
                        <Link href="/shop">Best Car Seats</Link>
                        <Link href="/shop">Best Stroller</Link>
                        <Link href="/shop">Best Baby Carriers</Link>
                        <Link href="/shop">Best Baby Bottles</Link>
                        <Link href="/shop">Best Baby Products</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Support</h2>
                        <Link href="/contact">Help</Link>
                        <Link href="/contact">Contact Us</Link>
                        <Link href="/contact">Shipping</Link>
                        <Link href="/contact">Returns</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='social-icons'>
                        <Link
                            className='social-icon-link facebook'
                            href="/"
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <FaFacebook className="w-5 h-5" />
                        </Link>
                        <Link
                            className='social-icon-link instagram'
                            href="/"
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <FaInstagram className="w-5 h-5" />
                        </Link>
                        <Link
                            className='social-icon-link discord'
                            href="/"
                            target='_blank'
                            aria-label='Discord'
                        >
                            <FaDiscord className="w-5 h-5" />
                        </Link>
                        <Link
                            className='social-icon-link twitter'
                            href="/"
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <FaTwitter className="w-5 h-5" />
                        </Link>
                        <Link
                            className='social-icon-link twitter'
                            href="/"
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <FaLinkedin className="w-5 h-5" />
                        </Link>
                        <Link
                            className='social-icon-link github'
                            href="/"
                            target='_blank'
                            aria-label='Github'
                        >
                            <FaGithub className="w-5 h-5" />
                        </Link>
                    </div>
                    <small className='website-rights'>Babylist™ © { year }. ALL Right Reserved.</small>
                </div>
            </section>
        </div>
    );
}

export default Footer;