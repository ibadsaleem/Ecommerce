import styles from "../../styles/Home.module.css";
import HeadComp from "../../Components/Head";
import Navbar from "../../Components/Navbar";
import Carousel from "../../Components/Carousel";
import Card from "../../Components/Cards";
import Footer from "../../Components/Footer";

export default function Contact() {
  return (
    <div className={styles.container}>
      <HeadComp title="Grocery-Ecommerce Site" />

      <Navbar />

      <Carousel />
      <br />

      <hr />
      <h1 style={{ color: "black", textAlign: "center", fontSize: 35 }}>
        Grocery Products
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
