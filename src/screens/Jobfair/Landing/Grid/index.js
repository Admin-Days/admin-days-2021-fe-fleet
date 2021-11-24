import React from "react";
import { useHistory } from "react-router-dom";

import cn from "classnames";
import styles from "./Grid.module.sass";

const Grid = () => {
  const history = useHistory()

  return (
    <div className={cn(styles.grid, "container")}>
      <div className={styles.text}>
        <h4>Get to know</h4>
        <h2>Job & Intership Fair</h2>
        <p>
          Job and Internship Fair is one of a series of Administration Days
          events to accommodate FIA ​​UI students to meet virtually with
          companies that open job vacancies/internships by the job prospects of
          the majors at FIA UI. In addition, there are also company
          presentations through virtual meetings.
        </p>
        <button className={styles.button} onClick={() => history.push("/jobfair/hub")}>Let's go</button>
      </div>

      <div className={cn(styles.top, styles.item)}>
        <img src="assets/jobfair-top.jpg" alt="" />
      </div>

      <div className={cn(styles.bot_1, styles.item)}>
        <img src="assets/jobfair-bot-1.jpg" alt="" />
      </div>
      
      <div className={cn(styles.bot_2, styles.item)}>
        <img src="assets/jobfair-bot-2.jpg" alt="" />
      </div>

      <div className={cn(styles.bot_3, styles.item)}>
        <img src="assets/jobfair-bot-3.jpg" alt="" />
      </div>
    </div>
  );
};

export default Grid;
