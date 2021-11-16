import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useAuthContext } from "../../../contexts/AuthContext";

import cn from "classnames";
import { setDarkMode } from "../../../utils/dark";
import styles from "./JobfairApply.module.sass";

import Loader from "../../../components/Loader";
import Modal from "../../../components/Modal";
import TextInput from "../../../components/TextInput";

import firebaseConfig from "../../../utils/firebaseConfig";
import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

initializeApp(firebaseConfig);
const storage = getStorage();
const db = getFirestore();

const JobfairApply = () => {
  const history = useHistory();
  const { jobId } = useParams();
  const { userAuth } = useAuthContext();

  useEffect(() => {
    setDarkMode();
  }, []);

  const [jobLoading, setJobLoading] = useState(true);
  const [job, setJob] = useState({});

  const fetchJob = async () => {
    const jobRef = doc(db, "jobs", jobId);
    const jobSnapshot = await getDoc(jobRef);

    if (jobSnapshot.exists()) {
      const data = jobSnapshot.data();
      setJob({
        id: jobSnapshot.id,
        title: data.title,
        companyId: data.companyId,
        city: data.city,
        province: data.province,
        description: data.description,
        responsibilities: data.responsibilities, // Data model -> responsibilities: [{item: "lala"}, {item: "lala"}]
        requirements: data.requirements, // Data model -> responsibilities: [{item: "lala"}, {item: "lala"}]
        majors: data.majors, // Data model -> majors: [{id: "PAS"}, {id: "BAS"}]
        isInternship: data.isInternship,
        isFullTime: data.isFullTime,
        duration: data.duration,
        workFrom: data.workFrom,
        requiredData: data.requiredData,
        tags: data.tags, // Data model -> tags: [{tag: "Keren"}, {tag: "Seru"}]
        attachmentUrl: data.attachmentUrl, // To access, use attachmentUrl.src (if not undefined)
      });
      setJobLoading(false);
    } else {
      // Job id not found
      alert("Job not found!");
      // history.push("/jobfair");
    }
  };

  useEffect(() => {
    fetchJob();
  }, []);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const applyJob = async (e) => {
    e.preventDefault();

    if (userAuth == null || userAuth.isAnonymous) {
      alert("Please sign in to apply!");
      return;
    }
    if (!job) return; // Not finished loading.

    const name = e.target[0].value;
    const phoneNumber = e.target[1].value;
    const email = e.target[2].value;

    const attachment = e.target[3].files[0];

    setLoading(true);

    try {
      if (attachment) {
        await uploadBytes(
          ref(storage, `applications/${jobId}-${userAuth.uid}-${Date.now()}`),
          attachment
        ).then((snapshot) => {
          getDownloadURL(snapshot.ref).then(async (link) => {
            await addDoc(collection(db, "applications"), {
              userId: userAuth.uid,
              userName: name,
              userPhoneNumber: phoneNumber,
              userEmail: email,
              jobId: jobId,
              attachmentUrl: {
                src: link,
              },
              createdTimeStamp: serverTimestamp(),
            });

            setSuccess(true);
            setLoading(false);
          });
        });
      } else {
        await addDoc(collection(db, "applications"), {
          userId: userAuth.uid,
          userName: name,
          userPhoneNumber: phoneNumber,
          userEmail: email,
          jobId: jobId,
          createdTimeStamp: serverTimestamp(),
        });

        setSuccess(true);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      alert("Registration failed!");
      console.log(e);
    }
  };

  return (
    <>
      {jobLoading ? (
        <Loader className={styles.loader} />
      ) : (
        <div className={cn("container", styles.container)}>
          <h1>Apply Now!</h1>
          <p>Apply for position {job.title}</p>

          <form className={styles.form} action="" onSubmit={applyJob}>
            <TextInput
              className={styles.field}
              name="name"
              type="text"
              placeholder="Full Name"
              required
            />

            <TextInput
              className={styles.field}
              name="email"
              type="email"
              placeholder="Email"
              required
            />

            <TextInput
              className={styles.field}
              name="phoneNum"
              type="number"
              placeholder="Phone Number"
              required
            />

            {job.requiredData && (
              <p class={styles.attachmentHint}>
                Required attachments:
                <br /> {job.requiredData}
              </p>
            )}

            {job.requiredData && (
              <div class={styles.fileContainer}>
                <h3 className={styles.files}>Attachment</h3>
                <input
                  type="file"
                  name="attachment"
                  accept=".pdf,.zip"
                  required
                />
              </div>
            )}

            <button className={cn("button", styles.button)}>Apply</button>
          </form>
        </div>
      )}

      <Modal visible={loading}>
        <div className={styles.loadingContainer}>
          <Loader className={styles.loader} />
          <h1 className={styles.loadingText}>Loading...</h1>
        </div>
      </Modal>

      <Modal
        visible={success}
        onClose={() => history.push(`/jobfair/job/${jobId}`)}
      >
        <h1>Successfully Applied!</h1>
      </Modal>
    </>
  );
};

export default JobfairApply;
