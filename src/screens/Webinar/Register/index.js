import React, { useState } from "react";
import cn from "classnames";
import styles from "./Register.module.sass";

import Dropdown from "../../../components/Dropdown";
import TextInput from "../../../components/TextInput";

const Register = ({ onRegister }) => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [noTelp, setNoTelp] = useState("");
  const [institusi, setInstitusi] = useState("");

  const webinars = [
    "Webinar 1: Money Management",
    "Webinar 2: Master Or Job",
    "Webinar 3: Post-Graduate Plan",
  ];
  const [webinar, setWebinar] = useState(webinars[0]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    onRegister({ nama, email, noTelp, institusi, webinarNumber: parseInt(webinar[8]) });
  };

  return (
    <div className={cn(styles.login)}>
      <div className={styles.item}>
        <div className={cn("h3", styles.title)}>
          Register for
          <br />
          Webinar!
        </div>

        <form className={styles.fieldset} onSubmit={handleSubmit}>
          <Dropdown value={webinar} setValue={setWebinar} options={webinars} />

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

          <TextInput
            className={styles.field}
            label="Asal Institusi"
            name="institusi"
            type="text"
            value={institusi}
            onChange={(e) => setInstitusi(e.target.value)}
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
