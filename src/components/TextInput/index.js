import React, { useState } from "react";
import cn from "classnames";
import styles from "./TextInput.module.sass";
import Icon from "../Icon";

const TextInput = ({ className, label, empty, view, ...props }) => {
  const isPassword = props.type === "password";
  const [type, setType] = useState(isPassword ? "password" : props.type);

  const togglePassword = (e) => {
    e.preventDefault()
    setType(type === "password" ? "text" : "password");
  };

  return (
    <div
      className={cn(
        styles.field,
        { [styles.empty]: empty },
        { [styles.view]: view },
        className
      )}
    >
      {label && <div className={styles.label}>{label}</div>}
      <div className={styles.wrap}>
        <input className={styles.input} {...props} type={type} />

        {view && (
          <button className={styles.toggle} onClick={togglePassword}>
            <Icon name="eye" size="24" />
          </button>
        )}
      </div>
    </div>
  );
};

export default TextInput;
