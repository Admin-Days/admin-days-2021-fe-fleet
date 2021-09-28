import React from "react";
import cn from "classnames";
import styles from "./Introduction.module.sass";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const items = [
  {
    title: "Who we are",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper nec in et consequat.",
    color: "#8BC5E5",
  },
  {
    title: "The story of Admin Days",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget in quis dignissim massa in.",
    color: "#92A5EF",
  },
  {
    title: "Our mission",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eu sit faucibus sed ut mauris.",
    color: "#58C27D",
  },
];

const Introduction = () => {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h2 className={cn("h2", styles.title)}>Let's introduce ourselves</h2>
          <div className={cn("info", styles.info)}>
            Say hello to the magic behind Admin Days
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.list}>
              {items.map((x, index) => (
                <div className={styles.item} key={index}>
                  <div
                    className={styles.number}
                    style={{ backgroundColor: x.color }}
                  >
                    0{index + 1}
                  </div>
                  <div className={styles.subtitle}>{x.title}</div>
                  <div className={styles.text}>{x.content}</div>
                </div>
              ))}
            </div>
            <Link className={cn("button", styles.button)} to="/stays-category">
              Get to know us better
            </Link>
          </div>
          <div className={styles.col}>
            <div className={styles.wrapper}>
              <div className={styles.gallery}>
                <div className={cn("travel-bg", styles.bg)}>
                  <img
                    src="/assets/landing-fia-students.jpg"
                    alt="FIA Student"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
