import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import styles from './services.module.css'
import Calculator from '../../assets/Calculator.svg'
import Book from '../../assets/Book.svg'
import File from '../../assets/File.svg'
import Write from '../../assets/Write.svg'
import Document from '../../assets/document.svg'



const data = [
    {
        name: 'Customs procedures',
        description: 'Cargo clearance procedures according to the corridors Cargo clearance procedures according to the corridors Cargo clearance procedures according to the corridors Cargo clearance procedures according to the corridors Cargo clearance procedures according to the corridors Cargo clearance procedures according to the corridors ',
        img: Calculator
    },
    {
        name: 'Expertise',
        description: 'Passing the necessary stages of examination of cargo to be cleared and assigning codes Passing the necessary stages of examination of cargo to be cleared and assigning codes Passing the necessary stages of examination of cargo to be cleared and assigning codes Passing the necessary stages of examination of cargo to be cleared',
        img: Book
    },
    {
        name: 'Obtaining a Phytosanitary Certificate',
        description: 'Obtaining the appropriate certificate to determine the suitability of the cargo Obtaining the appropriate certificate to determine the suitability of the cargo Obtaining the appropriate certificate to determine the suitability of the cargo Obtaining the appropriate certificate to determine the suitability of the cargo',
        img: File
    },
    {
        name: 'Obtaining a Origin Certificate',
        description: 'Obtaining the appropriate certificate to determine the suitability of the cargo Obtaining the appropriate certificate to determine the suitability of the cargo Obtaining the appropriate certificate to determine the suitability of the cargo Obtaining the appropriate certificate to determine the suitability of the cargo',
        img: Write
    },
    {
        name: 'Taking other customs documents',
        description: '',
        img: Document
    },
]

function Services() {

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
            <h1 className={styles.title}>What Does Customs Brokerage Service Involve?</h1>
            <div className={styles.container}>
                {data.map((item, key) => {
                    return (
                        <div className={styles.service}>
                            <img src={item.img} />
                            <h1>{item.name}</h1>
                            <p>{item.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
     );
}

export default Services;