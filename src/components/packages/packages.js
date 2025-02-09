import React, { Component } from 'react';
import styles from './packages.module.css'
import Services from '../../assets/services.jpg'
import { useState } from "react";
import { useTranslation } from 'react-i18next';

function Packages() {

  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    companyName: "",
    name: "",
    email: "",
    number: "",
    cargo: "",
    route: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // To display submission status

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = "https://formspree.io/f/xqaavjjj"; // Replace with your Formspree form endpoint
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };

    try {
      const response = await fetch(endpoint, options);
      if (response.ok) {
        setStatus(t("status"));
        setFormData({ name: "", email: "", number: "", message: "", route: "", cargo: "", companyName: ""}); // Reset form
      } else {
        setStatus("Failed to send the message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("An error occurred. Please try again later.");
    }
  };

    return ( 
        <div className={styles.packagesDiv}>
          <h1 className={styles.title}>{t("contactTitle")}</h1>
            <div className={styles.container}>
                <img src={Services} />
                <div className={styles.containerChild}>
                  <form onSubmit={handleSubmit}>
                  <input
                      type="text"
                      name="companyName"
                      placeholder={t("input1")}
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="text"
                      name="name"
                      placeholder={t("input2")}
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder={t("input3")}
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="number"
                      name="number"
                      placeholder={t("input4")}
                      value={formData.number}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="text"
                      name="cargo"
                      placeholder={t("input5")}
                      value={formData.cargo}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="text"
                      name="route"
                      placeholder={t("input6")}
                      value={formData.route}
                      onChange={handleChange}
                      required
                    />
                    <textarea
                      name="message"
                      placeholder={t("input7")}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                    <button type="submit">{t("send")}</button>
                  </form>
                  {status && <p>{status}</p>}
                </div>
           </div>
        </div>
     );
}

export default Packages;