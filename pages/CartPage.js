import styles from "../styles/Home.module.css";
import HeadComp from "../components/Head";
import Navbar from "../components/Navbar";
import Link from 'next/link'
import Carousel from "../components/Carousel";
import "../styles/Home.module.css";
import Footer from "../components/Footer";
import Table from "../components/Table";
import Modal from '../components/Modal'
import { useState } from "react";
export default function Contact() {
   const [toggle,setToggle]=useState(0);
    const handleClick=()=>{
            setToggle(1);
            console.log(toggle);
   }
  return (
    <div className={styles.container}>
      <HeadComp title="Cart-Ecommerce Site" />

      <Navbar />
      <br />
      <h1 style={{ color: "black", textAlign: "center", fontSize: 35,marginTop:120 }}>
            🛒 My Cart
      </h1>
      <br />
        <Table/>
        <br/>
      <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-around">
            <p className="h4" style={{fontWeight:600}}>Number of Item: 11</p>
          </div>
          <div className="col d-flex justify-content-around">
            <p className="h4 font-weight-bold"  style={{fontWeight:600}}>Total Bill: Rs.2750</p>
          </div>
          <div className="col d-flex justify-content-around">
          <Modal/>
          </div>
        </div>
            
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
}
