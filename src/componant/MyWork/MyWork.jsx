import { useState } from "react";
import styles from "./MyWork.module.css";
import CardWork from "../Repeating/CardWork/CardWork";
import img1 from "../../assets/Image/مطعم.png";
import img2 from "../../assets/Image/wed2.png";
export default function MyWork() {
  let [data, setData] = useState([
    {
      title: "Restaurant Website",
      image: img1,
      comment: ["Web", "Design"],
    },
    {
      title: "E-commerce Website",
      image: img2,
      comment: ["Web2", "Design"],
      link: "https://gamezone-s.netlify.app/"
    },
    {
      title: "Portfolio Website",
      image: img1,
      comment: ["Web3", "Design"],
      link:"https://restaurant-l.netlify.app/"
    },
    ,
    {
      title: "Portfolio Website",
      image: img1,
      comment: ["Web3", "Design"],
        link:""
    },
    {
      title: "Dynamic mobile app development",
      image: img1,
      comment: ["Web3", "Design"],
      link: ""
    },
    {
      title: "Portfolio Website",
      image: img1,
      comment: ["Web3", "Design"],
      link: ""
    },
  ]);

  return (
    <>
      <section className={styles.myWork}>
        <div className="container">
          <div className={`${styles.text_center} text-center mb-5 `}>
            <span className=""> Portfolio</span>
            <h2 className="fs-1">My Work</h2>
          </div>
          <div className="cards">
            <div className="row">
              {data.map((item, index) => {
                return (
                  <CardWork
                    key={index}
                    title={item.title}
                    image={item.image}
                    comment={item.comment}
                    link={item.link}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
