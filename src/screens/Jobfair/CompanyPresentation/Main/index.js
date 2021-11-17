import React from "react";
import cn from "classnames";

import styles from "./Main.module.sass";
import Panel from "../../../../components/Panel";

const Main = ({ onRegister }) => {
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
            <h1 className={cn("hero", styles.title)}>Company Presentation</h1>
            <div className={cn("info", styles.info)}>
              Information session for job opportunities
            </div>
          </div>
        </div>

        <Panel
          className={styles.panel}
          classBody={styles.panelBody}
          classButton={styles.panelButton}
          icon="arrow-next"
          onButtonClick={onRegister}
        >
          <div className={styles.row}>
            <div className={cn("info", styles.panelInfo)}>
              Register to grab an exclusive seat!
              <br />
              Will be held on Nov 21, 2021 10:00 AM
            </div>
          </div>
        </Panel>
      </div>
    </div>
  );
};

export default Main;
