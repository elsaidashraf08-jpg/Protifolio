import React from "react";
import styles from "./Home.module.css";
import logo from "../../assets/Image/hand.png";
import IMAGE from "../../assets/Image/17.png";
import IMAGE2 from "../../assets/Image/1.png";
import person from "../../assets/Image/12.png";
import Social from "../Repeating/Social/Social";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {
  AOS.init({
    duration: 1000,
    once: true,
  });

  return (
    <section className="hero overflow-hidden">
      <div className="container" data-aos="fade-up">
        <div className={`row align-items-center ${styles.heroRow}`}>
          <div className={`col-lg-6   text-white ${styles.heroText}`}>
            <h1 className={styles.title}>
              Hey{" "}
              <img
                src={logo}
                alt="Hand"
                className={styles.hand}
                style={{ width: "40px" }}
              />{" "}
              I'm Alsayed
            </h1>
            <div className="my-3">
              <span
                className={`${styles.subtitle} fs-1 border border-white p-2 rounded-2`}
              >
                Web Developer
              </span>
            </div>
            <p className={`mt-4 fs-6 ${styles.description}`}>
              I'm  Elsayed Ashraf, a Front-End Developer building modern web
              experiences with clean code and creative precision
            </p>

            <div
              className={`d-flex flex-wrap align-items-center flex-column flex-lg-row  mt-5   ${styles.link}`}
            >
              <a
                href="#"
                className={`${styles.hireMe} me-0 me-lg-5`}
       
      
              >
               download CV
                <i
                  className={`fa-solid fa-arrow-right-long ${styles.hireMeIcon}`}
                ></i>
              </a>
              <div className="social d-flex gap-3 mt-3 mt-sm-0">
                <Social
                  icon="fa-facebook-f"
                  url="https://www.facebook.com/sayed.ashraf.5477272"
                />
                <Social
                  icon="fa-linkedin"
                  url="https://www.linkedin.com/in/elsaid-ashraf-490b44304"
                />
                <Social
                  icon="fa-whatsapp"
                  url="https://wa.me/qr/XGA6RRWIPPAMM1"
                />
              </div>
            </div>
          </div>

          <div className="col-lg-6   d-none d-lg-block">
            <div className={styles.heroImgContainer}>
              <img
                src={IMAGE2}
                className={styles.backgroundImg}
                alt="background"
              />
              <img src={IMAGE} className={styles.heroImg} alt="star" />
              <img src={person} className={styles.personImg} alt="person" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
