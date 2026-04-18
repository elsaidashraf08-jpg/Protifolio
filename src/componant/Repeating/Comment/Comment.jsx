import React from 'react'
import styles from "./Comment.module.css"
export default function Comment({Comment}) {
  return (
    <span className={`${styles.comment} mx-1`}>{Comment}</span>
  )
}
