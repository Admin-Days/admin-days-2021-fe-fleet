import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useAuthContext } from "../../../contexts/AuthContext";

import cn from "classnames";
import styles from "./JobfairJob.module.sass";
import { setDarkMode } from "../../../utils/dark";

import Icon from "../../../components/Icon";
import Loader from "../../../components/Loader";
import Modal from "../../../components/Modal";

import { companies, jobs } from "../../../mocks/jobfair";

import firebaseConfig from "../../../utils/firebaseConfig";
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";

initializeApp(firebaseConfig);
const db = getFirestore();

const JobfairJob = () => {
  const history = useHistory();
  const { jobId } = useParams();
  const { userAuth } = useAuthContext();

  const [jobData, setJobData] = useState([]);
  const [companyData, setCompanyData] = useState();

  useEffect(() => {
    setDarkMode();
  }, []);

  useEffect(() => {
    setJobData(jobs.filter((job) => job.id === jobId)[0]);
    setCompanyData(
      companies.filter(
        (com) => com.id === jobs.filter((job) => job.id === jobId)[0].companyId
      )[0]
    );
  }, [jobId]);

  const [loading, setLoading] = useState(false);

  const apply = async () => {
    setLoading(true);

    if (userAuth == null || userAuth.isAnonymous) {
      alert("Please sign in to apply!");
      setLoading(false);
      return;
    }

    const applicationsRef = collection(db, "applications");
    const applicationsSnapshot = await getDocs(applicationsRef);

    let alreadyApplied;
    applicationsSnapshot.forEach((doc) => {
      alreadyApplied =
        doc.data().jobId === jobId && doc.data().userId === userAuth.uid;
    });

    if (alreadyApplied) {
      alert("You have already applied to this job!");
      setLoading(false);
      return;
    }

    setLoading(false);
    history.push(`/jobfair/apply/${jobData.id}`);
  };

  if (!companyData) return <></>;

  return (
    <>
      <div className={cn(styles.section, "container")}>
        <div className={styles.card}>
          <button
            className={styles.back_btn}
            onClick={() =>
              history.push(`/jobfair/company-visit/${companyData.id}`)
            }
          >
            <Icon name="back" color="#777E91" size="28" viewBox="0 -3 28 28" />
            <span>Back</span>
          </button>

          <div className={styles.row_top}>
            <img
              className={styles.logo}
              src={companyData.logoUrl.src}
              alt="company-logo"
            />

            <div className={styles.icons}>
              {companyData.linkedin && (
                <a target="_blank" rel="noreferrer" href={companyData.linkedin}>
                  <img src="/assets/icons/linkedin.png" alt="linkedin" />
                </a>
              )}

              {companyData.instagram && (
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={companyData.instagram}
                >
                  <img src="/assets/icons/instagram.png" alt="instagram" />
                </a>
              )}

              {companyData.twitter && (
                <a target="_blank" rel="noreferrer" href={companyData.twitter}>
                  <img src="/assets/icons/twitter.png" alt="twitter" />
                </a>
              )}

              {companyData.youtube && (
                <a target="_blank" rel="noreferrer" href={companyData.youtube}>
                  <img src="/assets/icons/youtube.png" alt="youtube" />
                </a>
              )}
            </div>
          </div>

          <div className={styles.left}>
            <h2>{jobData.title}</h2>

            <div style={{ display: "flex" }}>
              {jobData.city && (
                <p style={{ marginRight: "4px" }}>{jobData.city},</p>
              )}
              {jobData.province && (
                <p style={{ marginRight: "8px" }}>{jobData.province}</p>
              )}
            </div>

            <div style={{ display: "flex" }}>
              {jobData.isInternship && (
                <p style={{ marginRight: "4px" }}>Internship</p>
              )}
              {jobData.isFullTime ? <p>Full-time</p> : <p>Part-time</p>}
            </div>

            {jobData.majors && (
              <div
                style={{
                  display: "flex",
                  marginTop: "20px",
                  marginBottom: "40px",
                }}
              >
                {jobData.majors.map((major) => (
                  <p className={styles.major} style={{ marginRight: "8px" }}>
                    {major.id}
                  </p>
                ))}
              </div>
            )}

            {jobData.duration && (
              <p>
                <b>Job duration :</b> {jobData.duration}
              </p>
            )}
            {jobData.workFrom && (
              <p>
                <b>Location :</b> {jobData.workFrom}
              </p>
            )}

            <h3 style={{ marginTop: "20px" }}>Description:</h3>
            <p>{jobData.description}</p>

            {jobData.responsibilities && (
              <>
                <h3 style={{ marginTop: "20px" }}>Responsibilities:</h3>
                <ul>
                  {jobData.responsibilities.map((item) => (
                    <li key={item.item}>- {item.item}</li>
                  ))}
                </ul>
              </>
            )}

            {jobData.requirements && (
              <>
                <h3 style={{ marginTop: "20px" }}>Requirements:</h3>
                <ul>
                  {jobData.requirements.map((item) => (
                    <li key={item.item}>- {item.item}</li>
                  ))}
                </ul>
              </>
            )}

            <div className={styles.buttonWrapper} style={{ marginTop: "10px" }}>
              <button onClick={apply}>Apply</button>

              {jobData.attachmentUrl && (
                <>
                  <div className={styles.gap} />
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={jobData.attachmentUrl.src}
                    style={{ backgroundColor: "#777E90" }}
                  >
                    See Attachment
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <Modal visible={loading}>
        <div className={styles.loadingContainer}>
          <Loader className={styles.loader} />
          <h1 className={styles.loadingText}>Loading...</h1>
        </div>
      </Modal>
    </>
  );
};

export default JobfairJob;
