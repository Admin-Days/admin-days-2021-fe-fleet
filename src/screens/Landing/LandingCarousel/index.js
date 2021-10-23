import React, { useState } from "react";
import { useHistory } from "react-router";

import cn from "classnames";
import styles from "./LandingCarousel.module.sass";

import { pages } from "../../../mocks/pages";
import Icon from "../../../components/Icon";
import Modal from "../../../components/Modal";

const LandingCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const content = pages.filter((e) => e.ilustration);
  
  const history = useHistory()
  const handleLearnMore = () => {
    if (activeIndex === 0) {
      history.push("/grand-opening")
    } else if (activeIndex === 1) {
      history.push("/webinar")
    } else{
      setShowModal(true)
    }
  }

  return (
    <div className={cn("section", styles.container)}>
      <div className="container">
        <Modal visible={showModal}>
          <div className={styles.modalContent}>
            <h4>Coming Soon</h4>
            <button
              onClick={() => setShowModal(false)}
              className={cn("button", styles.button)}
            >
              Close
            </button>
          </div>
        </Modal>
        {content.map((e, i) => (
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
            <button
              onClick={handleLearnMore}
              className={cn("button", styles.button)}
            >
              Learn more
            </button>
            <img
              className={cn(styles.ilustration, styles[e.id])}
              src={e.ilustration}
              alt={e.title}
            />
          </div>
        ))}
        <div className={styles.buttonWrapper}>
          {content.map((e, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={cn(styles.button, {
                [styles.active]: activeIndex === i,
              })}
            >
              <Icon name={e.icon} size={28} className={styles.icon} />
              <span>{e.title}</span>
            </button>
          ))}
        </div>
        <div className={styles.nextPrevWrapper}>
          <button
            onClick={() =>
              setActiveIndex(
                activeIndex - 1 > 0 ? activeIndex - 1 : content.length - 1
              )
            }
          >
            <Icon name="arrow-prev" className={styles.arrow} size="14" />
          </button>
          <button
            onClick={() =>
              setActiveIndex(
                activeIndex + 1 < content.length - 1 ? activeIndex + 1 : 0
              )
            }
          >
            <Icon name="arrow-next" className={styles.arrow} size="14" />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingCarousel;
