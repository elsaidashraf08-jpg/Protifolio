import React from "react";
import styles from "./CardServices.module.css";
// import img from "../../../assets/Image/2.png";
export default function CardServices({ title, description , icon}) {
  return (
    <>
      <div className="col-md-3 col-sm-6 mb-4 g-5 ">
        <div className={`${styles.card}`}>
          <div className="image">
            <i class={`${icon} ${styles.icon} `}></i>
          </div>
          <h4 className="fs-4">{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}
