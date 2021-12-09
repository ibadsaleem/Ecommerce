import styles from "../styles/Home.module.css";
import HeadComp from "../Components/Head";
import Navbar from "../Components/Navbar";
import Carousel from "../Components/Carousel";
import Cards from "../Components/Cards";
import Categories from "../Components/Categories";
import "../styles/Home.module.css";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <HeadComp title="Home-Ecommerce Site" />
      <Navbar />
      <Carousel />
      <br />

      <hr />
      <h1 style={{ color: "black", textAlign: "center", fontSize: 35 }}>
        Categories
      </h1>
      <hr />
      <br />
      <Categories />
      <br />
      <hr />
      <h1 style={{ color: "black", textAlign: "center", fontSize: 35 }}>
        Featured Products{" "}
        <sup>
          <span className="badge bg-danger" style={{ fontSize: 14 }}>
            Sale <span style={{ color: "yellow" }}>🔥</span>{" "}
          </span>
        </sup>
        <br />
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
