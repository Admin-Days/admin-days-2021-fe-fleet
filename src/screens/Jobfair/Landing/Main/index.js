import React from "react";
import { useHistory } from "react-router-dom";

import cn from "classnames";
import styles from "./Main.module.sass";

import Panel from "../../../../components/Panel";

const Main = ({companies, jobs}) => {

  const history = useHistory()

  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.preview}>
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet="/assets/jobfair-hero.jpg"
            />
            <img src="/assets/jobfair-hero.jpg" alt="Main" />
          </picture>

          <div className={styles.wrap}>
            <h1 className={cn("hero", styles.title)}>Job Fair</h1>
            <div className={cn("info", styles.info)}>
              Explore your future right here
            </div>
          </div>
        </div>

        <Panel
          className={styles.panel}
          classBody={styles.panelBody}
          classButton={styles.panelButton}
        >
          <div className={styles.row}>
            <div className={cn("info", styles.panelInfo)}>
              <div className={styles.item}>
                <h2>{companies.length}</h2>
                <h5>Companies</h5>
              </div>

              <div className={styles.itemGap}></div>
              <div className={styles.item}>
                <h2>{jobs.length}</h2>
                <h5>Jobs</h5>
              </div>

              <div className={styles.itemGap}></div>
              <div className={styles.item}>
                <h2>{jobs.filter(e => e.isInternship).length}</h2>
                <h5>Internships</h5>
              </div>

              <div className={styles.itemGap}></div>
              <div className={styles.item}>
                <h2>{jobs.filter(e => e.isFullTime).length}</h2>
                <h5>Full Times</h5>
              </div>
            </div>
            
            <button className={styles.button} onClick={() => history.push("/jobfair/hub")}>Join today</button>
          </div>
        </Panel>
      </div>
    </div>
  );
};

export default Main;
