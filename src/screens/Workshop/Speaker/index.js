import React from "react";
import styles from "./Speaker.module.sass";
import cn from "classnames";

const Speaker = () => {
  return (
    <div className={cn(styles.section, "container")}>
      <h1>Workshop 1</h1>
      <div className={cn(styles.row)}>
        <div className={cn(styles.card, styles.speaker)}>
          <h2>How to Develop a Content Strategy in Digital Marketing</h2>
          <div>
            <span>in collaboration with</span>
            <img src="assets/workshop-inamart.png" alt="inamart" />
          </div>
          <span>presented by</span>
          <h2>Agung Ari Wibowo</h2>
          <button>Register</button>
        </div>
        <div className={styles.gap}></div>
        <div className={styles.column}>
          <div className={cn(styles.card, styles.sideCard)}>
            <span>Comprehensive Digital <br className={styles.br} /> Marketing</span>
            <img src="assets/workshop-ilustration-1.png" alt="ilustration" />
          </div>
          <div className={styles.gap}></div>
          <div className={cn(styles.card, styles.sideCard)}>
            <span>Step by Step Developing a Content Strategy</span>
            <img src="assets/workshop-ilustration-2.png" alt="ilustration" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speaker;
