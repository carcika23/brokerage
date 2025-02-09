import React, { Component } from 'react';
import styles from './about.module.css'
import Underline from '../../assets/underline.svg'
import Services from '../../assets/services.jpg'
import { useTranslation } from 'react-i18next';

const text = 'Customs-clearance of export and/or import goods requires certain knowledge, time, and human resources. To simplify the work and minimize risks, use the services of expert brokers who will save time and be your representatives in the customs terminal.'

function About() {

    const { t } = useTranslation();

    return (
        <div className={styles.aboutUs}>
           <div className={styles.container}>
                <img src={Services} />
                <div className={styles.containerChild}>
                    <h1>{t("aboutTitle")}</h1>
                    <p>{t("aboutText")}</p>
                </div>
           </div>
        </div>
    );
}

export default About;