import React, { useState } from "react";
import styles from "./Workshop.module.sass"
import { workshops } from "../../mocks/workshops";

import Main from "./Main";
import Speaker from "./Speaker";
import Modal from "../../components/Modal";
import Loader from "../../components/Loader";

import { useAuthContext } from "../../contexts/AuthContext";

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

const Workshop = () => {
  const { userAuth } = useAuthContext();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleRegistration = async (workshopId) => {
    if (userAuth == null) {
      alert("Please sign in to register!");
      return;
    }

    setLoading(true);

    try {
      await addDoc(collection(db, "registrants"), {
        name: userAuth.displayName,
        email: userAuth.email,
        phoneNumber: userAuth.phoneNumber,
        organization: "FIA UI",
        registrationTimeStamp: serverTimestamp(),
        eventId: `events/WORKSHOP_${workshopId}`,
      });
      setSuccess(true);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      alert("Registration failed!");
    }
  };

  return (
    <>
      <Main />
      {workshops.map((e, i) => (
        <Speaker
          {...e}
          index={i + 1}
          onClick={() => handleRegistration(i + 1)}
        />
      ))}

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

export default Workshop;
