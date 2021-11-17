import React, { useState } from "react";
import cn from "classnames";
import styles from "./Register.module.sass";

import TextInput from "../../../../components/TextInput";

const Register = ({ onRegister }) => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [noTelp, setNoTelp] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    onRegister({ nama, email, noTelp });
  };

  return (
    <div className={cn(styles.login)}>
      <div className={styles.item}>
        <div className={cn("h3", styles.title)}>
          Register for
          <br />
          Company Presentation!
        </div>

        <form className={styles.fieldset} onSubmit={handleSubmit}>
          <TextInput
            className={styles.field}
            label="Nama Lengkap"
            name="nama"
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
          />

          <TextInput
            className={styles.field}
            label="Email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <TextInput
            className={styles.field}
            label="Nomor Telepon"
            name="noTelp"
            type="tel"
            value={noTelp}
            onChange={(e) => setNoTelp(e.target.value)}
            required
          />

          <input
            type="submit"
            value="Register"
            className={cn("button", styles.button, styles.field)}
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
