import React from "react";
import cn from "classnames";
import styles from "./Footer.module.sass";
import { sponsorLogos } from "../../mocks/sponsors";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={cn("container", styles.container)}>
        <h4 className={styles.title}>Brought to you by</h4>
        <div className={styles.logoWrapper}>
          {sponsorLogos.map((e, i) => (
            <img key={i} className={styles.logo} src={e} alt="sponsor" />
          ))}
        </div>
        <h5 className={styles.subTitle}>Media Partners</h5>
        <div className={styles.logoWrapper}>
          {sponsorLogos.map((e, i) => (
            <img key={i} className={styles.logo} src={e} alt="sponsor" />
          ))}
        </div>
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
