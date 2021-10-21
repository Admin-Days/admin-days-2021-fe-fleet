import React from "react";
import cn from "classnames";
import styles from "./Speaker.module.sass";
import Gallery from "../Gallery";

const speakers1 = [
  {
    name: "Annisa Steviani",
    role: "Certificated Financial Planner",
    datetime: new Date(2021, 9, 30, 9, 45),
    image: "/assets/webinar-1-speaker-annisa.jpg",
  },
  {
    name: "Nadia Amalia",
    role: "Co-Founder & CEO Cerdik Mapan",
    datetime: new Date(2021, 9, 30, 9, 45),
    image: "/assets/webinar-1-speaker-nadia.jpg",
  }
]

const speakers2 = [
  {
    name: "Hans Topril",
    role: "StuNed Scholarship Awardee Maastricht University",
    datetime: new Date(2021, 10, 6, 9, 45),
    image: "/assets/webinar-2-speaker-hans.jpg",
  },
  {
    name: "Indah Shafira",
    role: "Research Analyst - The World Bank",
    datetime: new Date(2021, 10, 6, 9, 45),
    image: "/assets/webinar-2-speaker-indah.jpg",
  }
]

const speakers3 = [
  {
    name: "Wafa Taftazani",
    role: "Indonesia Lead APAC Partnership at Google",
    datetime: new Date(2021, 10, 13, 9, 45),
    image: "/assets/webinar-3-speaker-wafa.jpg",
  },
  {
    name: "Keke Genio",
    role: "Co-Founder Lokapoin",
    datetime: new Date(2021, 10, 13, 9, 45),
    image: "/assets/webinar-3-speaker-keke.jpg",
  }
]

const Speaker = () => {
  return (
    <div className={cn("section")}>
      <div className={cn("container", styles.body)}>
        <h2>Who to look forward to</h2>
        <p className={styles.subtitle}>The upcoming and exciting speakers of Administration Days</p>

        <p className={styles.webinar}>Webinar 1 : Money Management</p>
        <div className={styles.row}>
          {speakers1.map((e) => (
            <Gallery {...e} />
          ))}
        </div>

        <p className={styles.webinar}>Webinar 2 : Master or Job</p>
        <div className={styles.row}>
          {speakers2.map((e) => (
            <Gallery {...e} />
          ))}
        </div>

        <p className={styles.webinar}>Webinar 3 : Post-Graduate Plan</p>
        <div className={styles.row}>
          {speakers3.map((e) => (
            <Gallery {...e} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speaker;
