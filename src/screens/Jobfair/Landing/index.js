import React, { useEffect } from "react";
import { setDarkMode } from "../../../utils/dark";

import Grid from "./Grid";
import Main from "./Main";
import MockUp from "./MockUp";

import { companies, jobs } from "../../../mocks/jobfair";

const JobfairLanding = () => {
  useEffect(() => {
    setDarkMode();
  }, []);

  return (
    <>
      <Main companies={companies} jobs={jobs} />
      <Grid />
      <MockUp />

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
        <img src="/assets/icons/whatsapp.png" alt="Whatsapp" style={{ marginRight: "12px" }} />
        Contact Person
      </a>
    </>
  );
};

export default JobfairLanding;
