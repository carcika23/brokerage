import React, { useState, useEffect, useRef } from 'react';
import styles from './customsPrice.module.css'
import { Carousel, Card, Button, Modal, Table } from 'antd';


function CustomsPrice() {

  const columns = [
    {
      title: "#",
      dataIndex: "number",
      key: "number",
      width: "5%",
      align: "center",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Customs Corridor",
      dataIndex: "corridor",
      key: "corridor",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      align: "center",
    },
  ];

  const data = [
    {
      key: "1",
      number: 1,
      name: "Advance declaration",
      corridor: "",
      price: "$100",
    },
    {
      key: "2",
      number: 2,
      name: "Customs Procedure (Exp/Imp)",
      corridor: "Green",
      price: "$100",
    },
    {
      key: "3",
      number: 3,
      name: "Customs Procedure (Exp/Imp)",
      corridor: "Yellow",
      price: "$120",
    },
    {
      key: "4",
      number: 4,
      name: "Customs Procedure (Exp/Imp)",
      corridor: "Red",
      price: "$160",
    },
    {
      key: "5",
      number: 5,
      name: "Expertise",
      corridor: "",
      price: "$100",
    },
    {
      key: "6",
      number: 6,
      name: "Complex declaration (more than 15 commodity codes)",
      corridor: "Any of them",
      price: "$10/item",
    },
    {
      key: "7",
      number: 7,
      name: "Phytosanitary certificate",
      corridor: "",
      price: "$50",
    },
    {
      key: "8",
      number: 8,
      name: "Origin certificate",
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
          <h1 className={styles.title}>Customs Brokerage Price</h1>
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
          <p className={styles.warning}> * Prices are determined per one customs declaration, the price does not include customs fees and other government taxes.</p>
        </div> 
    );
}

export default CustomsPrice;