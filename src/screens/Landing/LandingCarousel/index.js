import React, { useState } from "react";
import styles from "./LandingCarousel.module.sass";
import cn from "classnames";
import { pages } from "../../../mocks/pages";
import { Link } from "react-router-dom";

const LandingCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={cn("section", styles.container)}>
      <div className="container">
        {pages
          .filter((e) => e.desc)
          .map((e, i) => (
            <div
              key={e.id}
              className={cn(styles.carousel, {
                [styles.active]: activeIndex === i,
              })}
            >
              <h3>
                {e.id !== "cv" ? (
                  e.title
                ) : (
                  <span>
                    CV Clinic & <br /> HRD Discussion Class
                  </span>
                )}
              </h3>
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
          
      </div>
    </div>
  );
};

export default LandingCarousel;
