import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { setDarkMode } from "../../../utils/dark";
import styles from "./JobFairHub.module.sass";

const JobFairHub = () => {
  const history = useHistory();

  useEffect(() => {
    setDarkMode();
  }, []);

  return (
    <div className={styles.section}>
      <h1>Job & Intership Fair Hub</h1>
      <div className={styles.image}>
        <div
          onClick={() => history.push("/jobfair/company-visit")}
          className={styles.cp}
        ></div>
        <div
          onClick={() => history.push("/jobfair/company-presentation")}
          className={styles.cv}
        ></div>
        <picture>
          <source
            srcSet="/assets/jobfair-hub-m.png"
            media="(max-width: 767px)"
          />
          <img src="/assets/jobfair-hub.jpg" alt="Job Fair Hub" />
        </picture>
      </div>
    </div>
  );
};

export default JobFairHub;
