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
      <Main companies={companies} jobs={jobs}/>
      <Grid />
      <MockUp />
    </>
  );
};

export default JobfairLanding;
