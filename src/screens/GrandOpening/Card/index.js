import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Card.module.sass";

const Item = ({ className, item, row, car }) => {
  return (
    <Link
      className={cn(
        className,
        styles.card,
        { [styles.row]: row },
        { [styles.car]: car }
      )}
      to={item.url}
    >
      <div className={styles.preview}>
        <img  srcSet={`${item.srcSet} 2x`} src={item.src} alt="Speaker" />
      </div>

      <div className={styles.body}>
        <div className={styles.line}>
          <div className={styles.title}>{item.title}</div>
        </div>

        <div className={styles.options}>
          {item.options.map((x, index) => (
            <div className={styles.option} key={index}>
              {x.title}
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default Item;
