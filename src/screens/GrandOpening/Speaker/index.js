import React from "react";
import cn from "classnames";
import styles from "./Speaker.module.sass";
import Card from "../Card";

const speakers = [
  {
    title: "Ichwan Sukardi",
    options: [{ title: "Managing Partner - Tax RSM Indonesia" }],
    src: "/assets/go-speaker-ichwan.jpg",
    srcSet: "/assets/go-speaker-ichwan.jpg",
  },
  {
    title: "Rini Riyanti",
    options: [{ title: "Founder and Director of Tiga Enterprise and 8 Dimensi" }],
    src: "/assets/go-speaker-rini.jpg",
    srcSet: "/assets/go-speaker-rini.jpg",
  },
  {
    title: "Herry Budhiazhari Salim",
    options: [{ title: "Vice President and Head of Walt Disney Business Development Indonesia" }],
    src: "/assets/go-speaker-herry.jpg",
    srcSet: "/assets/go-speaker-herry.jpg",
  },
];

const Speaker = ({ title }) => {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h2 className={cn("h2", styles.title)}>{title}</h2>
          <div className={cn("info", styles.info)}>
            The spectacular speakers welcoming you to ADM Days
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.list}>
            {speakers.map((x, index) => (
              <Card className={styles.card} item={x} key={index} car />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speaker;
