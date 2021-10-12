import React from "react";
import cn from "classnames";
import styles from "./Speaker.module.sass";
import { speakers } from "../../../mocks/webinar";
import Gallery from "../Gallery";

const Speaker = () => {
  return (
    <div className={cn("section")}>
      <div className={cn("container", styles.body)}>
        <h2>Who to look forward to</h2>
        <p>The upcoming and exciting speakers of Administration Days</p>
        <div className={styles.row}>
          {speakers.map((e, i) => (
            <Gallery {...e} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speaker;
