import React, { Component } from 'react';
import styles from './about.module.css'
import Underline from '../../assets/underline.svg'
import Services from '../../assets/services.jpg'


const text = 'Customs-clearance of export and/or import goods requires certain knowledge, time, and human resources. To simplify the work and minimize risks, use the services of expert brokers who will save time and be your representatives in the customs terminal.'

function About() {
    return (
        <div className={styles.aboutUs}>
           <div className={styles.container}>
                <img src={Services} />
                <div className={styles.containerChild}>
                    <h1>Customs Brokerage Services</h1>
                    <p>{text}</p>
                </div>
           </div>
        </div>
    );
}

export default About;