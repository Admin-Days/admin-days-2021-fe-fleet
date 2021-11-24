import React, { useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";

import cn from "classnames";
import styles from "./CVClinic.module.sass";

import CV from "./CV";
import Main from "./Main";
import Loader from "../../components/Loader";
import Modal from "../../components/Modal";

import firebaseConfig from "../../utils/firebaseConfig";
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  query,
  where,
  getDocs,
} from "firebase/firestore";

initializeApp(firebaseConfig);
const storage = getStorage();
const db = getFirestore();

const CVClinic = () => {
  const { userAuth } = useAuthContext();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Registration modal.
  const [visible, setVisible] = useState(false);

  const handleRegistration = async (e) => {
    e.preventDefault();

    if (userAuth == null || userAuth.isAnonymous) {
      alert("Please sign in to register!");
      return;
    }

    setLoading(true);

    try {
      const q = query(
        collection(db, "registrants"),
        where("email", "==", userAuth.email),
        where("eventId", "==", "events/CV_CLINIC")
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        setLoading(false);
        alert("Already Registered");
        return;
      }

      const cv = e.target[0].files[0];
      await uploadBytes(
        ref(storage, `cv/${userAuth.email}-${Date.now()}`),
        cv
      ).then((snapshot) => {
        getDownloadURL(snapshot.ref).then(async (link) => {
          await addDoc(collection(db, "registrants"), {
            name: userAuth.displayName,
            email: userAuth.email,
            phoneNumber: userAuth.phoneNumber,
            organization: "FIA UI",
            cvUrl: link,
            registrationTimeStamp: serverTimestamp(),
            eventId: `events/CV_CLINIC`,
          });
        });
      });

      setSuccess(true);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.error(e);
      alert("Registration failed!");
    }
  };

  return (
    <>
      <Main />

      <CV onClick={() => setVisible(true)} />

      <Modal visible={visible} onClose={() => setVisible(false)}>
        <div className={cn(styles.login)}>
          <div className={styles.item}>
            <div className={cn("h4", styles.title)}>Register for CV Clinic</div>

            <form
              className={styles.form}
              action=""
              onSubmit={handleRegistration}
            >
              <div class={styles.fileContainer}>
                <h3 style={{ marginBottom: "12px" }}>Upload your CV</h3>
                <input
                  type="file"
                  name="ikm"
                  accept=".png, .jpg, .jpeg, .pdf"
                  required
                />
              </div>

              <button className={cn("button", styles.button)}>Register</button>
            </form>
          </div>
        </div>
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

export default CVClinic;
