import React, { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import OutsideClickHandler from "react-outside-click-handler";
import cn from "classnames";
import styles from "./Modal.module.sass";
import Icon from "../Icon";

const Modal = ({ outerClassName, visible, onClose, children }) => {
  const escFunction = useCallback(
    (e) => {
      if (e.keyCode === 27) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  const scrollRef = document.getElementById("scroll-ref-id");

  useEffect(() => {
    visible ? disableBodyScroll(scrollRef) : enableBodyScroll(scrollRef);
  }, [visible, scrollRef]);

  return createPortal(
    visible && (
      <div className={styles.modal} id="scroll-ref-id">
        <div className={cn(styles.outer, outerClassName)}>
          <OutsideClickHandler onOutsideClick={onClose}>
            {children}
            {onClose && (
              <button className={styles.close} onClick={onClose}>
                <Icon name="close" size="24" />
              </button>
            )}
          </OutsideClickHandler>
        </div>
      </div>
    ),
    document.body
  );
};

export default Modal;
