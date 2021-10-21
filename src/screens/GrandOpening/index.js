import React, { useState } from "react";
import styles from "./GrandOpening.module.sass";
import Main from "./Main";
import Speaker from "./Speaker";
import Description from "./Description";
import Loader from "../../components/Loader";
import Modal from "../../components/Modal";
import Register from "./Register";

import firebaseConfig from "../../utils/firebaseConfig";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

initializeApp(firebaseConfig);
const db = getFirestore();

const GrandOpening = () => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // State for registration form.
  const [registered, setRegistered] = useState(false);

  const onRegister = async ({ nama, email, noTelp, institusi }) => {
    setLoading(true);

    try {
      await addDoc(collection(db, "registrants"), {
        name: nama,
        email: email,
        phoneNumber: noTelp,
        organization: institusi,
        registrationTimeStamp: serverTimestamp(),
        eventId: "events/GRAND_OPENING",
      });
      setRegistered(true);

      setSuccess(true);
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

      <Speaker title="Starting off with a bang" />
      <Description />

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
        <h1>Successfully Registered!</h1>
      </Modal>
    </>
  );
};

export default GrandOpening;
