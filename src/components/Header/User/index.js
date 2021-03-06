import React, { useState } from "react";
import cn from "classnames";
import OutsideClickHandler from "react-outside-click-handler";
import styles from "./User.module.sass";
import Avatar from "react-avatar";
import { useAuthContext } from "../../../contexts/AuthContext";

const User = ({ className, username, logout }) => {
  const [visible, setVisible] = useState(false);
  const { userAuth } = useAuthContext();

  return (
    <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
      <div className={cn(styles.user, className, { [styles.active]: visible })}>
        <button className={styles.head} onClick={() => setVisible(!visible)}>
          {Boolean(userAuth == null || userAuth.isAnonymous) ? (
            <h4>Login</h4>
          ) : (
            <Avatar
              name={username}
              maxInitials={2}
              className={styles.avatar}
              textSizeRatio={2.4}
              size="40"
              color="#48405F"
              round
            />
          )}
        </button>

        <div className={styles.body}>
          <div className={styles.btns}>
            {/* <NavLink
              className={cn("button button-small", styles.button)}
              activeClassName={styles.active}
              to="/account-settings"
              onClick={() => setVisible(!visible)}
            >
              Account
            </NavLink> */}

            <button
              className={cn("button-stroke button-small", styles.button)}
              onClick={logout}
            >
              Log out
            </button>
          </div>
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default User;
