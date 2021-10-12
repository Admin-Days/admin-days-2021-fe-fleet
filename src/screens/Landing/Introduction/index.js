import React from "react";
import cn from "classnames";
import styles from "./Introduction.module.sass";

const items = [
  {
    title: "Who we are",
    content:
      "We are students of the University of Indonesia's Faculty of Administrative Sciences",
    color: "#8BC5E5",
  },
  {
    title: "The story of ADM Days",
    content:
      "Admin Days is the first anual event held by FIA dedicated to embody our department's strengths and goals.",
    color: "#92A5EF",
  },
  {
    title: "Our mission",
    content:
      "The purpose of holding Administration Days is to assist students in understanding themselves and their environment in making decisions, planning, and directing activities that lead to careers that are by the potential of each student, as well as assisting in improving soft skills students when entering the world of work later.",
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
            Say hello to the magic behind ADM Days
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
            <a
              className={cn("button", styles.button)}
              href="https://bemfiaui.com/"
              target="_blank"
              rel="noreferrer"
            >
              Get to know us better
            </a>
          </div>
          <div className={styles.col}>
            <div className={styles.wrapper}>
              <div className={styles.gallery}>
                <div className={cn("travel-bg", styles.bg)}>
                  <img src="/assets/landing-big-logo.png" alt="FIA Student" />
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
