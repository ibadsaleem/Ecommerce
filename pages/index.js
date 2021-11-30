import Head from "next/head";
import styles from "../styles/Home.module.css";
import HeadComp from "../components/Head";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Image from 'next/image';
import Cards from "../components/Cards";
import HomePage from "../pages/Home";
import "../styles/Home.module.css";
import Footer from "../components/Footer";
import SignIn from "./SignIn";
export default function Home() {
  const classcheck = "btn-primary";
  return (
    <div className={styles.container}>
      <HomePage/>

      </div>
  );
}
