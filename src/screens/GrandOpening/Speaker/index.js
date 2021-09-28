import React from "react";
import cn from "classnames";
import styles from "./Live.module.sass";
import Card from "../Card";

const speakers = [
  {
    title: "Tim Cook",
    options: [{ title: "CEO of Apple" }],
    src: "/images/content/card-pic-1.jpg",
    srcSet: "/images/content/card-pic-1@2x.jpg",
    comment:
      "Tim Cook’s here and ready to talk about the diverse world of management in the digital era. Tune in as he shares his exclusive tips and tricks to success in this growing market.",
  },
  {
    title: "Tim Cook",
    options: [{ title: "CEO of Apple" }],
    src: "/images/content/card-pic-1.jpg",
    srcSet: "/images/content/card-pic-1@2x.jpg",
    comment:
      "Tim Cook’s here and ready to talk about the diverse world of management in the digital era. Tune in as he shares his exclusive tips and tricks to success in this growing market.",
  },
];

const Speaker = ({ title }) => {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h2 className={cn("h2", styles.title)}>{title}</h2>
          <div className={cn("info", styles.info)}>
            The spectacular speakers welcoming you to Admin Days
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
