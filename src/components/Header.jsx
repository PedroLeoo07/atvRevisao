import React from "react";
import styles from "../styles/Header.module.css";

export default function Header({title, subtitle, totalProducts}) {
  return (
    <div className={styles.header} >
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <p>
        📊 Total de produtos: {totalProducts}
      </p>
    </div>
  );
}