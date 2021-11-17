import React from "react";
import cn from "classnames";
import styles from "./MockUp.module.sass";
import { useHistory } from "react-router-dom";

const MockUp = () => {

  const history = useHistory()

  return (
    <div className={cn(styles.section, "container")}>
      <h1>What to look forward to</h1>
      <h6>A sneak peak at Jobfair</h6>
      <img src="/assets/jobfair-mockup.png" alt="mockup" />
      <button onClick={() => history.push("/jobfair/hub")}>Join now</button>
    </div>
  );
};

export default MockUp;
