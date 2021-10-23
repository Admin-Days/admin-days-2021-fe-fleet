import React, { useState } from "react";
import styles from "./Webinar.module.sass";
import Main from "./Main";

import firebaseConfig from "../../utils/firebaseConfig";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

import Modal from "../../components/Modal";
import Loader from "../../components/Loader";

import Register from "./Register";
import Speaker from "./Speaker";
import Work from "./Work";

initializeApp(firebaseConfig);
const db = getFirestore();

const webinarLinks = {
  1: "https://bit.ly/WebinarMoneyManagement2021",
  2: "https://bit.ly/WebinarMasterOrJob2021",
  3: "https://bit.ly/WebinarPostGraduatePlan2021",
};

const Webinar = () => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [webinarLink, setWebinarLink] = useState("");

  // State for registration form.
  const [registered, setRegistered] = useState(false);

  const onRegister = async ({
    nama,
    email,
    noTelp,
    institusi,
    webinarNumber,
  }) => {
    setLoading(true);

    try {
      await addDoc(collection(db, "registrants"), {
        name: nama,
        email: email,
        phoneNumber: noTelp,
        organization: institusi,
        registrationTimeStamp: serverTimestamp(),
        eventId: `events/WEBINAR_${webinarNumber}`,
      });
      setRegistered(true);

      setWebinarLink(webinarLinks[webinarNumber]);
      setSuccess(true);
      navigator.clipboard.writeText(webinarLinks[webinarNumber])

      setLoading(false);
      setVisible(false);
    } catch (e) {
      setLoading(false);
    }
  };

  return (
    <>
      <Main
        onRegister={() => {
          if (registered) alert("Already registered!");
          setVisible(!registered);
        }}
      />
      <Speaker />
      <Work />

      <Modal visible={visible} onClose={() => setVisible(false)}>
        <Register onRegister={onRegister} />
      </Modal>

      <Modal visible={loading}>
        <div className={styles.loadingContainer}>
          <Loader className={styles.loader} />
          <h1 className={styles.loadingText}>Loading...</h1>
        </div>
      </Modal>

      <Modal visible={success} onClose={() => setSuccess(false)}>
        <div className={styles.success}>
          <h1 className={styles.successHeader}>Successfully Registered!</h1>

          <p className={styles.successDescription}>
            Please join to the Whatsapp group on:
          </p>

          <a href={webinarLink} className={styles.successLink}>
            {webinarLink}
          </a>

          <p className={styles.successDescription}>
            Link is copied to clipboard!
          </p>
        </div>
      </Modal>
    </>
  );
};

export default Webinar;
