import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { setDarkMode } from "../../../utils/dark";

import Main from "./Main";

import firebaseConfig from "../../../utils/firebaseConfig";
import { initializeApp } from "firebase/app";
import {
  doc,
  getDoc,
  getFirestore,
} from "firebase/firestore";

initializeApp(firebaseConfig);
const db = getFirestore();

const JobfairJob = () => {
  const history = useHistory();
  const { jobId } = useParams();

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
        tags: data.tags, // Data model -> tags: [{tag: "Keren"}, {tag: "Seru"}]
        attachmentUrl: data.attachmentUrl, // To access, use attachmentUrl.src (if not undefined)
      });
      setJobLoading(false);

      fetchCompany(data.companyId);
    } else {
      // Job id not found
      alert("Job not found!");
      // history.push("/jobfair");
    }
  };

  const [companyLoading, setCompanyLoading] = useState(true);
  const [company, setCompany] = useState({});

  const fetchCompany = async (companyId) => {
    const companyRef = doc(db, "companies", companyId);
    const companySnapshot = await getDoc(companyRef);

    if (companySnapshot.exists()) {
      const data = companySnapshot.data();
      setCompany({
        id: companySnapshot.id,
        name: data.name,
        logoUrl: data.logoUrl, // To access, use logoUrl.src (if not undefined)
        address: data.address,
        description: data.description,
        website: data.website,
        header: data.headerUrl, // To access, use headerUrl.src (if not undefined)
        linkedin: data.linkedin,
        twitter: data.twitter,
        instagram: data.instagram,
        facebook: data.facebook,
        youtube: data.youtube,
        video: data.videoUrl, // Company profile video
        brochure: data.brochureUrl, // To access, use brochureUrl.src (if not undefined)
      });
      setCompanyLoading(false);
    } else {
      // Company id not found
      alert("Company not found!");
      // history.push("/jobfair");
    }
  };

  useEffect(() => {
    fetchJob();
  }, []);

  useEffect(() => {
    if (!jobLoading) console.log(job);
  }, [job, jobLoading]);

  useEffect(() => {
    if (!companyLoading) console.log(company);
  }, [company, companyLoading]);

  return (
    <>
      <Main />
    </>
  );
};

export default JobfairJob;
