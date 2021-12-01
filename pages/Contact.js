import styles from "../styles/Home.module.css";
import HeadComp from "../components/Head";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import "../styles/Home.module.css";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className={styles.container}>
      <HeadComp title="Contact-Ecommerce Site" />

      <Navbar />

      <Carousel />
      <br />

      <hr />
      <h1 style={{ color: "black", textAlign: "center", fontSize: 35 }}>
        Contact US
      </h1>
      <hr />
      <br />

      <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-around">
            {/* Column 1 */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.631252086849!2d67.17675411450688!3d24.94462889802336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33819c79ed18b%3A0x7aab1764214dd75!2sSaima%20Jinnah%20Avenue%20Apartments%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1638251604359!5m2!1sen!2s"
              width="600"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
          <div className="col d-flex justify-content-around hello">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem
          </div>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
}
