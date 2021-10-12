import React from "react";
import styles from "./Quote.module.sass";

const Quote = () => {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: "url(assets/landing-hero-2-full.jpg)" }}
    >
      <h2>
        "Prepare and reach your limitless
        career for your bright future"
      </h2>
    </div>
  );
};

export default Quote;
