import React, { useEffect } from "react";
import { withRouter, useLocation } from "react-router-dom";
import { clearAllBodyScrollLocks } from "body-scroll-lock";

import styles from "./Page.module.sass";
import Header from "../Header";
import Footer from "../Footer";

const Page = ({
  separatorHeader,
  children,
  footerHide,
  wide,
  notAuthorized,
}) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    clearAllBodyScrollLocks();
  }, [pathname]);

  return (
    <>
      <div className={styles.page}>
        <Header
          wide={wide}
          separatorHeader={separatorHeader}
          notAuthorized={notAuthorized}
        />
        <div className={styles.inner}>{children}</div>
        {!footerHide && <Footer />}
      </div>
    </>
  );
};

export default withRouter(Page);
