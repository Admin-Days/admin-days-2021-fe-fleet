import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import cn from "classnames";
import styles from "./Company.module.sass";

import { companies, jobs as jobsData } from "../../../mocks/jobfair";
import { setDarkMode } from "../../../utils/dark";

import Icon from "../../../components/Icon";
import { getYoutubeId } from "../../../utils/video";

const Company = () => {
  const { companyId } = useParams();

  const [companyData, setCompanyData] = useState();
  const [jobs, setJobs] = useState([]);

  const [jobIndex, setJobIndex] = useState(0);

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
        <>
          <div className={styles.card}>
            <button
              className={styles.back_btn}
              onClick={() => history.push("/jobfair/company-visit")}
            >
              <Icon
                name="back"
                color="#777E91"
                size="28"
                viewBox="0 -3 28 28"
              />
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
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={companyData.linkedin}
                  >
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
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={companyData.twitter}
                  >
                    <img src="/assets/icons/twitter.png" alt="twitter" />
                  </a>
                )}

                {companyData.youtube && (
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={companyData.youtube}
                  >
                    <img src="/assets/icons/youtube.png" alt="youtube" />
                  </a>
                )}
              </div>
            </div>

            <div className={styles.row_main}>
              <div
                className={styles.left}
                style={
                  !companyData.video ? { width: "100%" } : { width: "50%" }
                }
              >
                <h2>{companyData.name}</h2>
                <p>{companyData.description}</p>

                {companyData.brochure && (
                  <div className={styles.buttonWrapper}>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={companyData.website}
                    >
                      Visit
                    </a>

                    <div className={styles.gap}></div>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={companyData.brochure.src}
                    >
                      See Brochure
                    </a>
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

          <div className={styles.card}>
            <h1>Available Openings</h1>
            
            <div className={styles.row_jobs}>
              <div className={styles.job_items}>
                {jobs.map((job, i) => (
                  <div
                    id={job.id}
                    onClick={() => setJobIndex(i)}
                    className={cn(styles.job_item, {
                      [styles.active]: jobIndex === i,
                    })}
                  >
                    <div className={styles.border}></div>
                    <h3>{job.title}</h3>
                  </div>
                ))}
              </div>

              <div className={styles.description}>
                <div className={styles.description_top}>
                  {jobs[jobIndex].duration && <h5>{`Job duration : ${jobs[jobIndex].duration}`}</h5>}
                  {jobs[jobIndex].workFrom && <h5>{`Location : ${jobs[jobIndex].workFrom}`}</h5>}
                </div>

                <p>{jobs[jobIndex].description}</p>

                <div className={styles.buttonWrapper}>
                  <button onClick={() => history.push(`/jobfair/apply/${jobs[jobIndex].id}`)}>Apply</button>
                  <button onClick={() => history.push(`/jobfair/job/${jobs[jobIndex].id}`)}>Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Company;
