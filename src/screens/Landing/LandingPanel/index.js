import React from "react";
import cn from "classnames";
import styles from "./PanelLanding.module.sass";
import { pages } from "../../../mocks/pages";
import { Link } from "react-router-dom";

const PanelLanding = ({ className, classBody }) => {
  return (
    <div className={cn(className, styles.panel)}>
      <div className={styles.background}></div>
      <div className={styles.title}>
        <div className={styles.titleText}>
          <p>Upcoming Event</p>
          <div className={styles.horizontalLine}></div>
        </div>

        <div className={styles.horizontalLineLong}></div>
      </div>

      <div className={cn(styles.body, classBody)}>
        {pages
          .filter((e) => e.images)
          .map((e) => (
            <Link to={e.url}>
              <div key={e.title} className={styles.eventLogo}>
                <img src={e.images} alt={e.title} />
                <p>{e.title}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default PanelLanding;
