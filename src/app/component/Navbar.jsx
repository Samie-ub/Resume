"use client"

import React, { useEffect, useState } from 'react';
import styles from '../styles/navbar.module.css';
import Link from 'next/link';

function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div className={`${styles.navbarContainer} ${scrollPosition > 4? styles.scrolled : ''}`}>
      <Link href="/">
        <h1>
          FunFlex
          <img
            width="10"
            height="10"
            src="https://img.icons8.com/material-sharp/24/14a800/filled-circle.png"
            alt="filled-circle"
          />
        </h1>
      </Link>
    </div>
  );
}

export default Navbar;
