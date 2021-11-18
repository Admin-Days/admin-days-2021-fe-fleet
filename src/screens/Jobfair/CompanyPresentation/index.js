import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../../contexts/AuthContext";

import cn from "classnames";
import { setDarkMode } from "../../../utils/dark";
import styles from "./CompanyPresentation.module.sass";

import Main from "./Main";
import Register from "./Register";
import Loader from "../../../components/Loader";
import Modal from "../../../components/Modal";
import Panel from "../../../components/Panel";

import { companies } from "../../../mocks/jobfair";

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
  const zoomLink =
    "https://us02web.zoom.us/j/86204906094?pwd=SytqN21GUEVBZVl0a3RtWTBBczh4UT09";

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
    <>
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

      <div
        className={cn("container", styles.container)}
        style={{ position: "relative" }}
      >
        <Panel className={styles.panel}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className={cn("info", styles.panelInfo)}>
              <b>Session 1</b>
              10.30 - 12.00
            </div>

            <div className={styles.sessionLogoContainer}>
              <div className={styles.logoContainer}>
                <img
                  className={styles.logo}
                  src="https://firebasestorage.googleapis.com/v0/b/adm-days.appspot.com/o/companies%2FSQnQczfzN6jiIcdvttFK%2FlogoUrl?alt=media&token=9d158b21-10f8-4b9a-86f8-73b3d540c4bc"
                  alt="Logo OJK"
                />
              </div>

              <div className={styles.logoContainer}>
                <img
                  className={styles.logo}
                  src="https://firebasestorage.googleapis.com/v0/b/adm-days.appspot.com/o/companies%2FjNd9uytzkEonriOknTdi%2FlogoUrl?alt=media&token=7803b400-a119-48c6-bac6-a468422d3b6b"
                  alt="Logo Kemenkeu"
                />
              </div>

              <div className={styles.logoContainer}>
                <img
                  className={styles.logo}
                  src="https://firebasestorage.googleapis.com/v0/b/adm-days.appspot.com/o/companies%2FNEWCHLvUPLyHwlQnHG0W%2FlogoUrl?alt=media&token=317e7a59-dbb0-4950-8c1f-be060041ac82"
                  alt="Logo Bappenas"
                />
              </div>

              <div className={styles.logoContainer}>
                <img
                  className={styles.logo}
                  src="https://firebasestorage.googleapis.com/v0/b/adm-days.appspot.com/o/companies%2FqmaCEX9LaFRsQJWaOtrE%2FlogoUrl?alt=media&token=c89af404-37d3-46fb-8ba7-c578d251885b"
                  alt="Logo LKPP"
                />
              </div>
            </div>
          </div>
        </Panel>
      </div>

      <div
        className={cn("container", styles.container)}
        style={{ position: "relative", marginTop: "40px" }}
      >
        <Panel className={styles.panel}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className={cn("info", styles.panelInfo)}>
              <b>Session 2</b>
              13.00 - 15.30
            </div>

            <div className={styles.sessionLogoContainer}>
              <div className={styles.logoContainer}>
                <img
                  className={styles.logo}
                  src="https://firebasestorage.googleapis.com/v0/b/adm-days.appspot.com/o/companies%2Fjatis%20mobile.png?alt=media&token=c228e864-fbdb-4d0d-84ba-482ec9e435a0"
                  alt="Logo Jatis Mobile"
                />
              </div>

              <div className={styles.logoContainer}>
                <img
                  className={styles.logo}
                  src="https://firebasestorage.googleapis.com/v0/b/adm-days.appspot.com/o/companies%2FKWAlG10RHrT49IhZoyWu%2FlogoUrl?alt=media&token=048115c9-2aac-491d-9369-9579aa194fa5"
                  alt="Logo Inamart"
                />
              </div>

              <div className={styles.logoContainer}>
                <img
                  className={styles.logo}
                  src="https://firebasestorage.googleapis.com/v0/b/adm-days.appspot.com/o/companies%2Fv6tnZ8QbfYijxPd3GE1a%2FlogoUrl?alt=media&token=e08e5150-af29-45c2-ab30-896034e08057"
                  alt="Logo Keyta"
                />
              </div>

              <div className={styles.logoContainer}>
                <img
                  className={styles.logo}
                  src="https://firebasestorage.googleapis.com/v0/b/adm-days.appspot.com/o/companies%2F3mhHdJiBqjZ7WPzaVetJ%2FlogoUrl?alt=media&token=f4c35257-f76e-43c1-a862-b8985337d963"
                  alt="Logo Mazars"
                />
              </div>

              <div className={styles.logoContainer}>
                <img
                  className={styles.logo}
                  src="https://firebasestorage.googleapis.com/v0/b/adm-days.appspot.com/o/companies%2FuXr6oC9yo5ne3M2dRrOb%2FlogoUrl?alt=media&token=4e6d4573-6ad5-4e21-a3f4-8972b94e9080"
                  alt="Logo RSM"
                />
              </div>

              <div className={styles.logoContainer}>
                <img
                  className={styles.logo}
                  src="https://firebasestorage.googleapis.com/v0/b/adm-days.appspot.com/o/companies%2F8KqRAC0uXv4ZyYzWWtSn%2FlogoUrl?alt=media&token=3aff13b5-0638-4b62-9f0b-7cfcb29a28b8"
                  alt="Logo Dojobox"
                />
              </div>
            </div>
          </div>
        </Panel>
      </div>

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
    </>
  );
};

export default CompanyPresentation;
