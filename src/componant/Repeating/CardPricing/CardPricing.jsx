import React from "react";
import styles from "./CardPricing.module.css";

export default function CardPricing( {title , description , price , services} ) {
  return (
    <>
      <div className="col-lg-6 ">
        <div className={`${styles.card} p-4`}>
          <div className={`${styles.title}`}>
            <h4 className="text-white fs-3 fw-bold m-0">{title}</h4>
            <span>{description}</span>
          </div>
          <div className=" d-flex flex-column  gap-3 mt-4 ">
            <p className="text-white fs-2 fw-bold m-0">{price} <span className=" fs-6 fw-normal">/ hour</span></p>
            <div className="services">
              <ul className={`${styles.cardServicesContent} list-style-none d-flex     flex-wrap   gap-1 gap-md-0   `}>
                {services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
            <button className={`${styles.order} m-0`}   onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 10000, behavior: "smooth" });
                }} href="#contact">Order New</button>
          </div>
        </div>
      </div>
    </>
  );
}
