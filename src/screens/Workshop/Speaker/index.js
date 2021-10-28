import React from "react";
import styles from "./Speaker.module.sass";
import cn from "classnames";

const Speaker = () => {
  return (
    <div className={cn(styles.section, "container")}>
      <h1>How to Develop a Content Strategy in Digital Marketing</h1>
      <div className={cn(styles.row, styles.subtitle)}>
        <span>presented by</span>
        <div style={{width: 8}}></div>
        <img src="assets/workshop-inamart.png" alt="inamart" />
      </div>
      <div className={cn(styles.row)}>
        <div className={cn(styles.card, styles.speaker)}>
          <span>Speaker</span>
          <img src="assets/workshop-speaker.jpg" alt="speaker" />
        </div>
        <div className={styles.gap}></div>
        <div className={styles.column}>
          <div className={cn(styles.card, styles.sideCard)}>
            <span>Comprehensive Digital <br /> Marketing</span>
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
