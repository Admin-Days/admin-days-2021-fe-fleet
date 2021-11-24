import React from "react";
import cn from "classnames";
import styles from "./Footer.module.sass";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={cn("container", styles.sponsorContainer)}>
        <h4 className={styles.title}>Sponsored By</h4>
        <a
          className={styles.sponsorLink}
          href="https://www.rsm.global/indonesia/en"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={styles.sponsor}
            src="/assets/landing-sponsor.png"
            alt="sponsor"
          />
        </a>
      </div>

      <div className={cn("container", styles.partnerContainer)}>
        <h4 className={styles.title}>Partnership By</h4>
        <a
          className={styles.partnerLink}
          href="http://inamart.co.id/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={styles.partner}
            src="/assets/landing-partner.png"
            alt="sponsor"
          />
        </a>
      </div>

      <div className={cn("container", styles.mediaPartnerContainer)}>
        <h4 className={styles.title}>Media Partners</h4>
        <picture>
          <source
            media="(max-width:576px)"
            srcSet="/assets/landing-media-partners-sm.png"
          />
          <source
            media="(max-width:768px)"
            srcSet="/assets/landing-media-partners-md.png"
          />
          <img
            className={styles.mediaPartners}
            src="/assets/landing-media-partners.png"
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
