import React, { useState, useEffect, useRef } from 'react';
import styles from './customsPrice.module.css'
import { Carousel, Card, Button, Modal, Table } from 'antd';
import { useTranslation } from 'react-i18next';


function CustomsPrice() {

  const { t } = useTranslation();

  const columns = [
    {
      title: "#",
      dataIndex: "number",
      key: "number",
      width: "5%",
      align: "center",
    },
    {
      title: t("column1"),
      dataIndex: "name",
      key: "name",
    },
    {
      title: t("column2"),
      dataIndex: "corridor",
      key: "corridor",
    },
    {
      title: t("column3"),
      dataIndex: "price",
      key: "price",
      align: "center",
    },
  ];

  const data = [
    {
      key: "1",
      number: 1,
      name: t("table1"),
      corridor: "",
      price: "$100",
    },
    {
      key: "2",
      number: 2,
      name: t("table2"),
      corridor: t("green"),
      price: "$100",
    },
    {
      key: "3",
      number: 3,
      name: t("table2"),
      corridor: t("yellow"),
      price: "$120",
    },
    {
      key: "4",
      number: 4,
      name: t("table2"),
      corridor: t("red"),
      price: "$160",
    },
    {
      key: "5",
      number: 5,
      name: t("table3"),
      corridor: "",
      price: "$100",
    },
    {
      key: "6",
      number: 6,
      name: t("table4"),
      corridor: t("any"),
      price: "$10/item",
    },
    {
      key: "7",
      number: 7,
      name: t("table5"),
      corridor: "",
      price: "$50",
    },
    {
      key: "8",
      number: 8,
      name: t("table6"),
      corridor: "",
      price: "$40",
    },
  ];

      const [scrolling, setScrolling] = useState(false);
      const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    
      useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
    

    return ( 
        <div className={styles.customsPrice}>
          <h1 className={styles.title}>{t("offersTitle")}</h1>
          <div className={styles.containerTable}>
            <Table
              columns={columns}
              dataSource={data}
              pagination={false}
              bordered
              rowClassName={(record, index) =>
                index % 2 === 0 ? "table-row-light" : "table-row-dark"
              }
            />
          </div>
          <p className={styles.warning}>{t("warning")}</p>
        </div> 
    );
}

export default CustomsPrice;