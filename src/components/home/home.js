import React, { Component} from 'react';
import styles from './home.module.css'
import background from '../../assets/customsBg2.jpg'
import ServerImg from '../../assets/serverImg.svg'
import { useState, useEffect } from 'react';
import LandingMobile from '../../assets/customBgMobile.svg'
import { useTranslation } from 'react-i18next';

function Home() {

  const { t } = useTranslation();

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.home}>
      <div className={styles.blur}></div>
      {isMobile ? (
         <img src={LandingMobile} className={styles.background} />
      ): (
        <img src={background} className={styles.background} />
      )}
      <div className={styles.left}>
        <div>
          <tr></tr>
          <h1>{t('welcome')}</h1>
          <p>{t("desc")}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
