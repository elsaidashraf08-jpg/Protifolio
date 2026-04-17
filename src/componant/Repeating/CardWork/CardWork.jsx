import React from "react";
import styles from "./CardWork.module.css";
import Comment from "../Comment/Comment";
import AOS from "aos";
import "aos/dist/aos.css";
export default function CardWork( { title, comment , image, link }) {
   AOS.init({
    duration: 1000,
    once: true,
  });
  return (
    <>
      <div className="col-lg-6 col-md-6 col-sm-12 text-white mb-4  " data-aos="fade-up">
        <div className={`${styles.card} p-4 rounded-4 `}>
          <div className="card_img ">
            <img src={image} alt="" className="w-100 rounded-4" />
          </div>
          <div className="card_body mt-3">
            <div className="d-flex align-items-center justify-content-between">
              <div>
               { comment.map((item, index) => <Comment key={index} Comment={item} />)}
              
              </div>
              <a className={`${styles.icon}  text-white  `} href={link} target="_blank" rel="noopener noreferrer">
                <i
                  className={`fa-solid fa-arrow-right-long   ${styles.iconArrow} `}
                ></i>
              </a>
            </div>
            <a className={`${styles.card_body_a} fs-4  text-decoration-none  `} href={link} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
