import React, { useEffect, useState } from 'react';
import styles from './navbar.module.css';
import {Link} from 'react-scroll'
import ChangeLanguage from '../changeLanguage/changeLanguage';
import Login from '../../assets/telephone.svg'
import Hamburger from '../../assets/hamburgerMenu.svg'
import HamburgerScrolled from '../../assets/hamburgerScrolled.svg'
import Login1 from '../../assets/telephoneBlue1.svg'
import CustomsLogo from '../../assets/customsLogo.svg'
import CustomsLogoColored from '../../assets/logoColored.svg'

function Navbar() {

  const [scrolling, setScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) { // Adjust 50 to the point where you want the background to appear
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {isMobile ? (
        <div className={`${styles.mobileNav} ${scrolling ? styles.navbarScrolled : ""}`}>
          {scrolling ? (
              <img src={HamburgerScrolled} className={styles.hamburger} />
          ): (
            <img src={Hamburger} className={styles.hamburger} />
          )}
          {scrolling ? (
              <img src={CustomsLogoColored} className={styles.logo} />
          ): (
            <img src={CustomsLogo} className={styles.logo} />
          )}
          <div className={styles.mobileNavItems}>
            <ChangeLanguage/>
            {scrolling ? (
            <img src={Login1} className={styles.login}/>
            ): (
              <img src={Login} className={styles.login}/>
            )}
        </div>
        </div>
      ): (
        <div className={`${styles.navbar} ${scrolling ? styles.navbarScrolled : ""}`}>
          {scrolling ? (
              <img src={CustomsLogoColored} className={styles.logo} />
          ): (
            <img src={CustomsLogo} className={styles.logo} />
          )}
          <div className={styles.navbarItems}>
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Services</Link>
        <Link>Offers</Link>
        <Link>Contact</Link>
      </div>
        <ChangeLanguage/>
        {scrolling ? (
        <img src={Login1} className={styles.login}/>
        ): (
          <img src={Login} className={styles.login}/>
        )}
        <p className={styles.number}>032 2 242 242</p>
        </div>
      )}
    </div>
  );
}

export default Navbar;
