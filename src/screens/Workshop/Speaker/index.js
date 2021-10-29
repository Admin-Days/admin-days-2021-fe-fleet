import React from "react";
import styles from "./Speaker.module.sass";
import cn from "classnames";

const Speaker = ({
  index,
  title,
  sponsorImage,
  presenter,
  subjects,
  datetimePremiere,
  datetimeDeadline,
  onClick
}) => {
  return (
    <div className={cn(styles.section, "container")}>
      <h1>Workshop {index}</h1>
      <div className={cn(styles.row)}>
        <div className={cn(styles.card, styles.speaker)}>
          <h2>{title}</h2>
          <div>
            <span>in collaboration with</span>
            <img src={sponsorImage} alt="sponsor" />
          </div>
          <span>presented by</span>
          <h2>{presenter}</h2>
          <button onClick={onClick}>Register</button>
        </div>
        <div className={styles.gap}></div>
        <div className={styles.column}>
          <div className={cn(styles.card, styles.sideCard)}>
            <span>
              {subjects.[0]}
            </span>
            <img src="assets/workshop-ilustration-1.png" alt="ilustration" />
          </div>
          <div className={styles.gap}></div>
          <div className={cn(styles.card, styles.sideCard)}>
            <span>{subjects.[1]}</span>
            <img src="assets/workshop-ilustration-2.png" alt="ilustration" />
          </div>
        </div>
      </div>
      <div className={cn(styles.card, styles.bottom)}>
        <div>
          <span>premiering:</span>
          <div className={styles.columnMobile}>
            <pre><h3>{datetimePremiere.[0]}, </h3></pre>
            <h3>{datetimePremiere.[1]}</h3>
          </div>
          <h3>{datetimePremiere.[2]}</h3>
        </div>
        <div>
          <span>deadline to register:</span>
          <div className={styles.columnMobile}>
            <pre><h3>{datetimeDeadline.[0]}, </h3></pre>
            <h3>{datetimeDeadline.[1]}</h3>
          </div>
          <h3>{datetimeDeadline.[2]}</h3>
        </div>
      </div>
    </div>
  );
};

export default Speaker;
