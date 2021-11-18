import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import styles from "./JobFairHub.module.sass";
import { setDarkMode } from "../../../utils/dark";

import Icon from "../../../components/Icon";

const JobFairHub = () => {
  const history = useHistory();

  useEffect(() => {
    setDarkMode();
  }, []);

  return (
    <>
      <div className={styles.section}>
        <button
          className={styles.back_btn}
          onClick={() => history.push("/jobfair")}
        >
          <Icon name="back" color="#777E91" size="28" viewBox="0 -3 28 28" />
          <span>Back</span>
        </button>

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

      <a
        href="https://wa.me/6289677807616"
        target="_blank"
        rel="noreferrer"
        style={{
          position: "fixed",
          bottom: "32px",
          right: "40px",
          display: "flex",
          alignItems: "center",
          padding: "8px 20px",
          background: "#221C34",
          border: "2px solid #353945",
          boxSizing: "border-box",
          boxShadow: "0px 32px 64px -32px rgba(0, 0, 0, 0.1)",
          borderRadius: "12px",
          color: "#FFFFFF",
        }}
      >
        <img
          src="/assets/whatsapp.png"
          alt="Whatsapp"
          style={{ marginRight: "12px" }}
        />
        Contact Person
      </a>
    </>
  );
};

export default JobFairHub;
