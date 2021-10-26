import React from "react";
import cn from "classnames";
import styles from "./Footer.module.sass";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={cn("container", styles.container)}>
        <h4 className={styles.title}>Media Partners</h4>
        <picture>
          <source
            media="(max-width:576px)"
            srcSet="/assets/landing-media-partners-sm.jpg"
          />
          <source
            media="(max-width:768px)"
            srcSet="/assets/landing-media-partners-md.jpg"
          />
          <img
            className={styles.partners}
            src="/assets/landing-media-partners.jpg"
            alt="media-partners"
          />
        </picture>
      </div>
      <div className={styles.bottom}>
        <div className={styles.copyright}>
          Copyright © 2021 BEM FIA. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
