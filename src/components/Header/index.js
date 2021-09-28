import React, { useState } from "react";
import cn from "classnames";
import styles from "./Header.module.sass";
import { Link } from "react-router-dom";
import Image from "../Image";
import Dropdown from "./Dropdown";
import User from "./User";
import Icon from "../Icon";
import Modal from "../Modal";
import Login from "../Login";
import { useHistory } from "react-router";
import Logo from "./Logo";


const pages = [
  {
    title: "Home",
    url: "/",
    icon: "mdHome"
  },
  {
    title: "Grand Opening",
    url: "/grand-opening",
    icon: "mdCampaign"
  },
  // {
  //   title: "Jobfair",
  //   url: "/jobfair",
  //   icon: "mdWork",
  // },
  {
    title: "Webinar",
    url: "/webinar",
    icon: "mdCamMic",
  },
  {
    title: "Workshop",
    url: "/workshop",
    icon: "mdMode",
  },
  {
    title: "CV Clinic & HRD Discussion Class",
    url: "/workshop",
    icon: "mdMessage"
  },
  // {
  //   title: "Grand Closing",
  //   url: "/grand-closing",
  //   icon: "mdHome",
  // },
];

const items = [
  {
    menu: [
      {
        title: "Messages",
        icon: "comment",
        url: "/messages",
      },
      {
        title: "Bookings",
        icon: "home",
        url: "/bookings",
      },
      {
        title: "Wishlists",
        icon: "email",
        url: "/wishlists",
      },
    ],
  },
  {
    menu: [
      {
        title: "List your property",
        icon: "building",
        url: "/list-your-property",
      },
      {
        title: "Host an experience",
        icon: "flag",
        url: "/your-trips",
      },
    ],
  },
];

const Header = ({ separatorHeader, wide, notAuthorized }) => {
  const [visibleNav, setVisibleNav] = useState(false);
  const [visible, setVisible] = useState(false);

  const history = useHistory()

  const currentPage = pages.filter(e => e.url === history.location.pathname)[0]?.title

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
              items={pages}
              title={currentPage}
              setValue={setVisibleNav}
            />
          </div>
          {notAuthorized ? (
            <button className={styles.login} onClick={() => setVisible(true)}>
              <Icon name="user" size="24" />
            </button>
          ) : (
            <User className={styles.user} items={items} />
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
