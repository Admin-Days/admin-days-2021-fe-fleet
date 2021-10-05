import React from "react";
import { getDateAndMonth, getTime } from "../../../utils/datetime";
import styles from "./Gallery.module.sass";

const Gallery = ({ name, role, datetime, image }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={image} alt="speaker" />
        <div className={styles.float}>
          <h4>{name}</h4>
          <p>{role}</p>
        </div>
      </div>
      <div className={styles.info}>
        <p>speaking on</p>
        <span>
          {getDateAndMonth(datetime)}
          <br />
          {getTime(datetime, "WIB")}
        </span>
      </div>
    </div>
  );
};

export default Gallery;
