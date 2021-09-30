import React from "react";
import cn from "classnames";
import styles from "./Logo.module.sass";

const Logo = () => {
  return (
    <div className={cn(styles.container)}>
      <img
        className={cn(styles.logo, styles.bemLogo)}
        src="/assets/navbar-bem-logo.svg"
        alt="logo bem FIA"
      />
      <div className={cn(styles.divider)}></div>
      <img
        className={cn(styles.logo, styles.admDaysLogo)}
        src="/assets/navbar-adm-days-logo.svg"
        alt="logo Admin Days"
      />
    </div>
  );
};

export default Logo;
