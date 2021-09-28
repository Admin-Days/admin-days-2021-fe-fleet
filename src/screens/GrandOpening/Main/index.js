import React from "react";
import cn from "classnames";
import styles from "./Main.module.sass";
import Panel from "../../../components/Panel";

const Main = () => {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.preview}>
          <picture>
            <source media="(max-width: 767px)" srcSet="/assets/go-hero.jpg" />
            <img src="/assets/go-hero.jpg" alt="Main" />
          </picture>
          <div className={styles.wrap}>
            <h1 className={cn("hero", styles.title)}>Grand Opening</h1>
            <div className={cn("info", styles.info)}>
              Every grand event needs a<br />
              grand opening
            </div>
          </div>
        </div>

        <Panel
          className={styles.panel}
          classBody={styles.panelBody}
          classButton={styles.panelButton}
          icon="arrow-next"
          // TODO: Add on join button click.
          onButtonClick={() => {}}
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
