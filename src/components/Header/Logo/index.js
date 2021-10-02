import React from "react";
import cn from "classnames";
import styles from "./Logo.module.sass";

const Logo = () => {
  return (
    <div className={cn(styles.container)}>
      <img
        className={cn(styles.logo, styles.bemLogo)}
        src="/assets/navbar-bem-logo.svg"
        alt="BEM FIA Logo"
      />
      <div className={cn(styles.divider)}></div>
      <img
        className={cn(styles.logo, styles.admDaysLogo)}
        src="/assets/navbar-adm-days-logo.svg"
        alt="ADM Days Logo"
      />
    </div>
  );
};

export default Logo;
