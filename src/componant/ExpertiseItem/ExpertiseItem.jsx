import React, { useEffect, useState, useRef } from "react";
import styles from "./ExpertiseItem.module.css";

export default function ExpertiseItem({ icon, ratio, name }) {

  const [count, setCount] = useState(0);
  const [startCount, setStartCount] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();

  }, []);

  useEffect(() => {

    if (!startCount) return;

    let start = 0;

    const interval = setInterval(() => {
      start++;

      if (start <= ratio) {
        setCount(start);
      } else {
        clearInterval(interval);
      }

    }, 30);

    return () => clearInterval(interval);

  }, [startCount, ratio]);

  return (
    <div className="col-6 col-md-2 col-sm-4 mb-4 ">
      <div
        ref={cardRef}
        className={`d-flex flex-column align-items-center text-white rounded-pill ${styles.card}`}
        style={{ marginTop: 100 - ratio + "px" }}
      >

        <div
          className={`${styles.image_card} text-center rounded-circle d-flex align-items-center justify-content-center mb-3`}
        >
          <img src={icon} alt="" className="w-50" />
        </div>

        <div className="card-body d-flex flex-column align-items-center justify-content-end">
          <span className={`fs-2 fw-bold ${styles.percentage}`}>
            {count}%
          </span>

          <span className={`fw-normal ${styles.name}`}>
            {name}
          </span>
        </div>

      </div>
    </div>
  );
}