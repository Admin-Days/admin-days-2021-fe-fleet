import React, { useState } from "react";
import cn from "classnames";
import styles from "./Header.module.sass";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import User from "./User";
import Icon from "../Icon";
import Modal from "../Modal";
import Login from "../Login";
import { useHistory } from "react-router";
import Logo from "./Logo";
import { pages } from "../../mocks/pages";

const Header = ({ separatorHeader, wide, notAuthorized }) => {
  const [visibleNav, setVisibleNav] = useState(false);
  const [visible, setVisible] = useState(false);

  const history = useHistory();

  const currentPage = pages.filter(
    (e) => e.url === history.location.pathname
  )[0]?.title;

  return (
    <>
      <div
        className={cn(
          styles.header,
          { [styles.headerBorder]: separatorHeader },
          { [styles.wide]: wide }
        )}
      >
        <div className={cn("container", styles.container)}>
          <Link className={styles.logo} to="/">
            <Logo />
          </Link>
          <div className={cn(styles.wrapper, { [styles.active]: visibleNav })}>
            <Dropdown
              className={styles.drowdown}
              items={pages.filter(
                (e) =>
                  e.title === "Home" ||
                  e.title === "Grand Opening" ||
                  e.title === "Webinar"
              )}
              title={currentPage}
              setValue={setVisibleNav}
            />
          </div>

          {notAuthorized ? (
            <button className={styles.login} onClick={() => setVisible(true)}>
              <Icon name="user" size="24" />
            </button>
          ) : (
            <User className={styles.user} />
          )}

          <button
            className={cn(styles.burger, { [styles.active]: visibleNav })}
            onClick={() => setVisibleNav(!visibleNav)}
          ></button>
        </div>
      </div>
      
      <Modal visible={visible} onClose={() => setVisible(false)}>
        <Login />
      </Modal>
    </>
  );
};

export default Header;
