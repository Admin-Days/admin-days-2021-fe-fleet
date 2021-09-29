import React from "react";
import styles from "./Quote.module.sass";

const Quote = () => {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: "url(assets/landing-hero-2-full.jpg)" }}
    >
      <h2>
        <span>"Prepare and reach your limitless</span>
        <span>career for your bright future"</span>
      </h2>
    </div>
  );
};

export default Quote;
