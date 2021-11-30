import styles from "../styles/Home.module.css";
import HeadComp from "../components/Head";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Image from "next/image";
import Cards from "../components/Cards";
import Categories from "../components/Categories";
import HomePage from "../pages/Home";
import "../styles/Home.module.css";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <br /><br /><br /><br /><br /><br />
      <Carousel />
      <br />

      <hr />
      <h1 style={{ color: "black", textAlign: "center", fontSize: 35 }}>
        Categories
      </h1>
      <hr />
      <br />
      <Categories />
    <br/>
      <hr />
      <h1 style={{ color: "black", textAlign: "center", fontSize: 35 }}>
        Featured Products <sup><span className="badge bg-danger" style={{fontSize:14}}>Sale <span style={{color:'yellow'}}>🔥</span> </span></sup>
        <br/>
      </h1>
      <hr />
      <div className="container ">
        <div className="row  d-flex justify-content-around">
          <Cards />
          <Cards />
          <Cards />
        </div>
        <div className="row d-flex justify-content-around">
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>

      <br />
      <br />
      <Footer />
    </div>
  );
}
