import Head from "next/head";
import styles from "../styles/Home.module.css";
import HomePage from "../pages/Home";
import "../styles/Home.module.css";

export default function Home() {
  const classcheck = "btn-primary";
  return (
    <div className={styles.container}>
      <HomePage />
    </div>
  );
}
