import React from "react";
import styles from "./Data.module.css";
export default function Data({ data }) {
  return (
    <>
      <div className={` ${styles.data} px-lg-4 py-lg-2 `}>{data}</div>
    </>
  );
}
