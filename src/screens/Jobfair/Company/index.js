import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { companies, jobs as jobsData } from "../../../mocks/jobfair";
import { setDarkMode } from "../../../utils/dark";
import styles from "./Company.module.sass";
import cn from "classnames";
import Icon from "../../../components/Icon";
import { getYoutubeId } from "../../../utils/video";

const Company = () => {
  const { companyId } = useParams();
  const [companyData, setCompanyData] = useState();
  const [jobs, setJobs] = useState([]);

  const history = useHistory();

  useEffect(() => {
    setDarkMode();
  }, []);

  useEffect(() => {
    setCompanyData(companies.filter((com) => com.id === companyId)[0]);
    setJobs(jobsData.filter((job) => job.companyId === companyId));
  }, [companyId]);

  return (
    <div className={cn(styles.section, "container")}>
      {companyData && (
        <div className={styles.card}>
          <button
            className={styles.back_btn}
            onClick={() => history.push("/jobfair/company-visit")}
          >
            <Icon name="back" color="#777E91" size="28" viewBox="0 -3 28 28" />
            <span>back</span>
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
                <a target="_blank" rel="noreferrer" href={companyData.instagram}>
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
          <div className={styles.row_main}>
            <div
              className={styles.left}
              style={!companyData.video ? { width: "100%" } : { width: "50%" }}
            >
              <h2>{companyData.name}</h2>
              <p>{companyData.description}</p>
              {companyData.brochure && (
                <div className={styles.buttonWrapper}>
                  <a target="_blank" rel="noreferrer" href={companyData.brochure.src}>See pamphlet</a>
                </div>
              )}
            </div>
            {companyData.video && (
              <div className={styles.right}>
                <iframe
                  width="100%"
                  height="300px"
                  src={`https://www.youtube.com/embed/${getYoutubeId(
                    companyData.video
                  )}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Company;
