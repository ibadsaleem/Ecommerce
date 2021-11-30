import styles from "../styles/Home.module.css";
import HeadComp from "../components/Head";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Image from "next/image";
import Card from "../components/Cards";
import Categories from "../components/Categories";
import HomePage from "../pages/Home";
import "../styles/Home.module.css";
import Footer from "../components/Footer";
export default function Contact() {
  return (
    <div className={styles.container}>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Carousel />
      <br />

      <hr />
      <h1 style={{ color: "black", textAlign: "center", fontSize: 35 }}>
        Our Products
      </h1>
      <hr />
      <br />
      <div className="container">
        <div className="row  d-flex justify-content-around">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="row d-flex justify-content-around">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="row d-flex justify-content-around">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="row d-flex justify-content-around">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="row d-flex justify-content-around">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
}