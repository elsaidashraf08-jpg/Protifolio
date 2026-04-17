import React from "react";
import styles from "./Social.module.css";

export default function Social({ icon, url }) {
  return (
    <div className={`${styles.social}  rounded-circle border-light-subtle`}>
      <a
        className={`fa-brands ${icon} ${styles.socialIcon} d-flex align-items-center justify-content-center`}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      ></a>
    </div>
  );
}