import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import cn from "classnames";
import OutsideClickHandler from "react-outside-click-handler";
import styles from "./User.module.sass";
import Avatar from "react-avatar";

const User = ({ className, username }) => {
  const [visible, setVisible] = useState(false);

  return (
    <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
      <div className={cn(styles.user, className, { [styles.active]: visible })}>
        <button className={styles.head} onClick={() => setVisible(!visible)}>
          <Avatar
            name={username}
            maxInitials={2}
            className={styles.avatar}
            textSizeRatio={2.4}
            size="40"
            color="#48405F"
            round
          />
        </button>

        <div className={styles.body}>
          <div className={styles.btns}>
            <NavLink
              className={cn("button button-small", styles.button)}
              activeClassName={styles.active}
              to="/account-settings"
              onClick={() => setVisible(!visible)}
            >
              Account
            </NavLink>

            <button className={cn("button-stroke button-small", styles.button)}>
              Log out
            </button>
          </div>
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default User;
