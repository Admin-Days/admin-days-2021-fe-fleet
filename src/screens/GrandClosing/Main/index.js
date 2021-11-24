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
            <source media="(max-width: 767px)" srcSet="/assets/gc-hero.jpg" />
            <img src="/assets/gc-hero.jpg" alt="Main" />
          </picture>
          <div className={styles.wrap}>
            <h1 className={cn("hero", styles.title)}>Grand Closing</h1>
            <div className={cn("info", styles.info)}>
              Every grand event needs a<br />
              grand closing
            </div>
          </div>
        </div>

        <Panel icon="arrow-next" onButtonClick={onRegister}>
          <div className={styles.row}>
            <div className={cn("info", styles.panelInfo)}>
              Don’t miss out Admin Days’ last event!
            </div>
          </div>
        </Panel>
      </div>
    </div>
  );
};

export default Main;
