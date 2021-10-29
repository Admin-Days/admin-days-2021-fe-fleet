import React, { useState } from "react";
import cn from "classnames";
import styles from "./Header.module.sass";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

import Dropdown from "./Dropdown";
import User from "./User";
import Icon from "../Icon";
import Modal from "../Modal";
import Login from "../Login";
import Logo from "./Logo";
import Loader from "../../components/Loader";

import { pages } from "../../mocks/pages";
import { useAuthContext } from "../../contexts/AuthContext";
import { authSignOut } from "../../utils/Authentication";

const Header = ({ separatorHeader, wide }) => {
  const { userAuth, setUserAuth } = useAuthContext();

  const [visibleNav, setVisibleNav] = useState(false);
  const [visible, setVisible] = useState(false);

  const [signInLoading, setSignInLoading] = useState(false);
  const [signInSuccess, setSignInSuccess] = useState(false);
  const [signInError, setSignInError] = useState("");

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
                  e.title === "Webinar" ||
                  e.title === "Workshop" 
              )}
              title={currentPage}
              setValue={setVisibleNav}
            />
          </div>

          {!userAuth || userAuth.isAnonymous ? (
            <button className={styles.login} onClick={() => setVisible(true)}>
              Login
            </button>
          ) : (
            <User
              className={styles.user}
              username={userAuth.email}
              logout={() => {
                authSignOut((result) => {
                  if (result === "Sign Out Success") {
                    setUserAuth(null);
                  }

                  alert(result);
                });
              }}
            />
          )}

          <button
            className={cn(styles.burger, { [styles.active]: visibleNav })}
            onClick={() => setVisibleNav(!visibleNav)}
          ></button>
        </div>
      </div>

      <Modal visible={visible} onClose={() => setVisible(false)}>
        <Login
          setLoading={setSignInLoading}
          onSuccess={() => {
            setSignInLoading(false);
            setSignInSuccess(true);
          }}
          onError={(error) => {
            setSignInError(error);
            setSignInLoading(false);
            setSignInSuccess(true);
          }}
        />
      </Modal>

      <Modal visible={signInLoading}>
        <div className={styles.loadingContainer}>
          <Loader className={styles.loader} />
          <h1 className={styles.loadingText}>Signing in...</h1>
        </div>
      </Modal>

      <Modal visible={signInSuccess} onClose={() => setSignInSuccess(false)}>
        {signInError === "" ? (
          <h1>Successfully Login!</h1>
        ) : (
          <h1>Failed to sign in! {signInError}</h1>
        )}
      </Modal>
    </>
  );
};

export default Header;
