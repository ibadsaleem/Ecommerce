import React from "react";
import Image from "next/image";
import HeadComp from "../components/Head";

import Link from "next/link";
import styles from "../styles/SignIn.module.css";
export default function SignIn() {
  return (
    <div className={styles.body}>
              <HeadComp title='SignIn-Ecommerce Site'/>

      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            User Sign In
          </a>
        </div>
      </nav>
      <div className="container" style={{ marginTop: "7%" }}>
        <div className="row">
          <div className="col-lg d-flex justify-content-center">
            <Image
              src="/Images/logo.png"
              height="100"
              width="150"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <form>
              <input
                type="email"
                placeholder="Enter Email Address"
                className={styles.inp}
              />
              <br />
              <input
                type="password"
                placeholder="Enter Password"
                className={styles.inp}
              />
              <br />
              <button className={`${styles.btn} + btn-dark`}>Sign In</button>
              <Link href='/SignUp'><button className={`${styles.btn} + btn-dark`}>Dont Have an Account? Sign up</button></Link>
              <Link href='/Home'><button className={`${styles.btn} + btn-dark`}>Back To Home</button></Link>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
