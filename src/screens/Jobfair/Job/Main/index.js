import React from "react";
import cn from "classnames";
import styles from "./Main.module.sass";

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
            <h1 className={cn("hero", styles.title)}>Job Fair</h1>
            <div className={cn("info", styles.info)}>
            Explore your future right here
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
