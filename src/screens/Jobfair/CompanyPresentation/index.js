import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../../contexts/AuthContext";

import cn from "classnames";
import { setDarkMode } from "../../../utils/dark";
import styles from "./CompanyPresentation.module.sass";

import Main from "./Main";
import Register from "./Register";
import Loader from "../../../components/Loader";
import Modal from "../../../components/Modal";

import firebaseConfig from "../../../utils/firebaseConfig";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

initializeApp(firebaseConfig);
const db = getFirestore();

const CompanyPresentation = () => {
  const { userAuth } = useAuthContext();

  useEffect(() => {
    setDarkMode();
  }, []);

  const groupLink = "https://bit.ly/CompanyPresentationAdmDays21";
  const zoomLink = "https://us02web.zoom.us/j/86204906094?pwd=SytqN21GUEVBZVl0a3RtWTBBczh4UT09";

  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // State for registration form.
  const [registered, setRegistered] = useState(false);

  const onRegister = async ({ nama, email, noTelp }) => {
    setLoading(true);

    try {
      await addDoc(collection(db, "registrants"), {
        userId: userAuth.uid,
        name: nama,
        email: email,
        phoneNumber: noTelp,
        organization: "FIA UI",
        registrationTimeStamp: serverTimestamp(),
        eventId: `events/COMPANY_PRESENTATION`,
      });
      setRegistered(true);

      setSuccess(true);
      navigator.clipboard.writeText(zoomLink);

      setLoading(false);
      setVisible(false);
    } catch (e) {
      setLoading(false);
    }
  };

  return (
    <div className={cn("container", styles.container)}>
      <Main
        onRegister={() => {
          if (userAuth == null || userAuth.isAnonymous) {
            alert("Please sign in to register!");
            return;
          }

          if (registered) alert("Already registered!");
          setVisible(!registered);
        }}
      />

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

          <a href={groupLink} className={styles.successLink}>
            {groupLink}
          </a>

          <p className={styles.successDescription}>
            Please save the Zoom meeting link:
          </p>

          <a href={zoomLink} className={styles.successLink}>
            Zoom Link
          </a>

          <p className={styles.successDescription}>
            Zoom link copied to clipboard!
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default CompanyPresentation;
