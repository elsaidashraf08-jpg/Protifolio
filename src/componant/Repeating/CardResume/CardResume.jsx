import React from "react";
import styles from "./CardResume.module.css";
import Data from "../Data/Data";
export default function  CardResume({ title, data, discription }) {
  return (
    <>
      
        <div className={styles.card}>
          <div className="content">
            <div
              className={`${styles.title}   d-flex justify-content-between `}
            >
              <span className=" fw-bold fs-5 ">{title}</span>
            <Data data={data} />
            </div>
            <div className={styles.discription}>
              <p className="fs-ms-6 ">
                {discription}
              </p>
            </div>
          </div>
      </div>
    </>
  );
}
