import React from "react";
import styles from "./QualityServices.module.css";
import CardServices from "../Repeating/cardServices/CardServices";
import AOS from "aos";
import "aos/dist/aos.css";
export default function QualityServices() {
  AOS.init({
    duration: 1000,
    once: true,
  });
  return (
    <>
      <section className={styles.cardServices}>
        <div className="container" data-aos="fade-up">
          <div className={`${styles.cardServicesContent} text-center  `}>
            <span className=""> Services</span>
            <h2 className="fs-1">My Quality Services</h2>
          </div>
          <div className="cards">
            <div className="row">
              <CardServices description="I design and develop websites that look great on any device, making sure they're fast, modern, and easy to use." title="Responsive Website Design"  icon ="fa-solid fa-mobile"/>
              <CardServices description="I build interactive and scalable web apps with React, focusing on performance and a smooth user experience." title="React Front-End Development" icon = "fa-brands fa-react" />
              <CardServices description="I turn ideas and designs into pixel-perfect, user-friendly interfaces with clean, maintainable code." title="UI Implementation" icon ="fa-solid fa-paint-brush" />
              <CardServices description="I improve website speed, accessibility, and SEO so every project I deliver runs smoothly and reaches more people." title="Performance Optimization" icon ="fa-solid fa-tachometer-alt" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
