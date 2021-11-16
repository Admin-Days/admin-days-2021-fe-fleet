import React, { useState } from "react";
import CV from "./CV";
import styles from './CVClinic.module.sass'
import Main from "./Main";

import { useAuthContext } from "../../contexts/AuthContext";

import firebaseConfig from "../../utils/firebaseConfig";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import Modal from "../../components/Modal";
import Loader from "../../components/Loader";

initializeApp(firebaseConfig);
const db = getFirestore();

const CVClinic = () => {

  const { userAuth } = useAuthContext();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleRegistration = async (workshopId) => {
    if (userAuth == null || userAuth.isAnonymous) {
      alert("Please sign in to register!");
      return;
    }

    setLoading(true);

    try {
      const q = query(collection(db, "registrants"), where("email", "==", userAuth.email), where("eventId", "==", "events/CV_CLINIC"))
      const querySnapshot = await getDocs(q)
      if (!querySnapshot.empty) {
        setLoading(false)
        alert("Already Registered")
        return
      }
      await addDoc(collection(db, "registrants"), {
        name: userAuth.displayName,
        email: userAuth.email,
        phoneNumber: userAuth.phoneNumber,
        organization: "FIA UI",
        registrationTimeStamp: serverTimestamp(),
        eventId: `events/CV_CLINIC`,
      });
      setSuccess(true);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.error(e)
      alert("Registration failed!");
    }
  };

  return (
    <>
      <Main />
      <CV onClick={handleRegistration} />
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

export default CVClinic;
