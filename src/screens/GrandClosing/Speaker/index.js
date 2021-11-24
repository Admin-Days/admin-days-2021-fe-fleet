import React from "react";
import cn from "classnames";
import styles from "./Speaker.module.sass";

const Speaker = ({ title }) => {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h2 className={cn("h2", styles.title)}>Going out with a bang</h2>
          <div className={cn("info", styles.info)}>
          The spectacular speakers giving a farewell to Administration Days
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.list}>
            <img src="/assets/gc-speaker-1.png" alt="Speaker-1" />
            <img src="/assets/gc-speaker-2.png" alt="Speaker-1" />
          </div>
        </div>
      </div>
      <img className={styles.ilustration} src="/assets/gc-ilustration.png" alt="Ilust" />
    </div>
  );
};

export default Speaker;
