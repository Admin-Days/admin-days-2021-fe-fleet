import React from "react";
import cn from "classnames";
import styles from "./Main.module.sass";
import Panel from "../../../components/Panel";

const Main = ({ onRegister }) => {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.preview}>
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet="/assets/workshop-hero.jpg"
            />
            <img src="/assets/workshop-hero.jpg" alt="Main" />
          </picture>
          <div className={styles.wrap}>
            <h1 className={cn("hero", styles.title)}>Workshop</h1>
            <div className={cn("info", styles.info)}>
              Get ready for some hands on fun
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
              Good news, we’re open to the public!
              <br />
              What’re you waiting for? Join today!
            </div>
          </div>
        </Panel>
      </div>
    </div>
  );
};

export default Main;
