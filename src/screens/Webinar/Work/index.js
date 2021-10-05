import React from "react";
import cn from "classnames";
import styles from "./Work.module.sass";
import Image from "../../../components/Image";

const items = [
  {
    title: "Fixed Schedule",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel proin nam ut id eu lectus feugiat tempor. ",
    src: "/images/content/work-pic-1.png",
    srcSet: "/images/content/work-pic-1@2x.png",
    srcDark: "/images/content/work-pic-dark-1.png",
    srcSetDark: "/images/content/work-pic-dark-1@2x.png",
  },
  {
    title: "Informative",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel proin nam ut id eu lectus feugiat tempor. ",
    src: "/images/content/work-pic-2.png",
    srcSet: "/images/content/work-pic-2@2x.png",
    srcDark: "/images/content/work-pic-dark-2.png",
    srcSetDark: "/images/content/work-pic-dark-2@2x.png",
  },
  {
    title: "Free!",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel proin nam ut id eu lectus feugiat tempor. ",
    src: "/images/content/work-pic-3.png",
    srcSet: "/images/content/work-pic-3@2x.png",
    srcDark: "/images/content/work-pic-dark-3.png",
    srcSetDark: "/images/content/work-pic-dark-3@2x.png",
  },
];

const Work = () => {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h2 className={cn("h2", styles.title)}>
            Welcoming you with open arms
          </h2>
          <div className={cn("info", styles.info)}>
            An Admin Days event exclusively open to the public!
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.line}>
            <svg
              width="839"
              height="137"
              viewBox="0 0 839 137"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M838 4.83887C823.237 25.0088 713.617 137.14 601.48 135.889C497.352 134.728 454.07 -36.7167 262.536 60.1723C94.2489 145.302 53.9174 52.5844 1.07634 1.99272"
                stroke="#E6E8EC"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="4 12"
              />
            </svg>
          </div>
          <div className={styles.list}>
            {items.map((x, index) => (
              <div className={styles.item} key={index}>
                <div className={styles.preview}>
                  <Image
                    srcSet={`${x.srcSet} 2x`}
                    srcSetDark={`${x.srcSetDark} 2x`}
                    src={x.src}
                    srcDark={x.srcDark}
                    alt="Work"
                  />
                </div>
                <div className={styles.subtitle}>{x.title}</div>
                <div className={styles.text}>{x.content}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;