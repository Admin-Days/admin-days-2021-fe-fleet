import React, { useState } from "react";
import styles from "./LandingCarousel.module.sass";
import cn from "classnames";
import { pages } from "../../../mocks/pages";
import { Link } from "react-router-dom";
import Icon from "../../../components/Icon";

const LandingCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={cn("section", styles.container)}>
      <div className="container">
        {pages
          .filter((e) => e.ilustration)
          .map((e, i) => (
            <div
              key={e.id}
              className={cn(styles.carousel, {
                [styles.active]: activeIndex === i,
              })}
            >
              <h3
                dangerouslySetInnerHTML={{ __html: e.titleHTML ?? e.title }}
              ></h3>
              <p>{e.desc}</p>
              <Link className={cn("button", styles.button)} to={e.url}>
                Learn more
              </Link>
              <img
                className={cn(styles.ilustration, styles[e.id])}
                src={e.ilustration}
                alt={e.title}
              />
            </div>
          ))}
        <div className={styles.buttonWrapper}>
          {pages
            .filter((e) => e.ilustration)
            .map((e,i) => (
              <button onClick={() => setActiveIndex(i)} className={cn(styles.button, {[styles.active]: activeIndex === i})}>
                <Icon name={e.icon} size={28} className={styles.icon} />
                <span>{e.title}</span>
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LandingCarousel;
