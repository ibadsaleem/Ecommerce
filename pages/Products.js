import styles from "../styles/Home.module.css";
import HeadComp from "../components/Head";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Card from "../components/Cards";
import "../styles/Home.module.css";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className={styles.container}>
      <HeadComp title="Products-Ecommerce Site" />

      <Navbar />

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
