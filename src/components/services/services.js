import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import styles from './services.module.css'
import Calculator from '../../assets/Calculator.svg'
import Book from '../../assets/Book.svg'
import File from '../../assets/File.svg'
import Write from '../../assets/Write.svg'
import Document from '../../assets/document.svg'
import { useTranslation } from 'react-i18next';

function Services() {

    const { t } = useTranslation();

    const data = [
        {
            name: t("service1"),
            img: Calculator
        },
        {
            name: t("service2"),
            img: Book
        },
        {
            name: t("service3"),
            img: File
        },
        {
            name: t("service4"),
            img: Write
        },
        {
            name: t("service5"),
            img: Document
        },
    ]

    const [scrolling, setScrolling] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    return ( 
        <div className={styles.services}>
            <tr className={styles.tr1}></tr>
            <h1 className={styles.title}>{t("servicesTitle")}</h1>
            <div className={styles.container}>
                {data.map((item, key) => {
                    return (
                        <div className={styles.service}>
                            <img src={item.img} />
                            <h1>{item.name}</h1>
                        </div>
                    )
                })}
            </div>
        </div>
     );
}

export default Services;