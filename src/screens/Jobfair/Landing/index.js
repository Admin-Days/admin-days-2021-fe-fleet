import React, { useEffect, useState } from "react";
import { setDarkMode } from "../../../utils/dark";

import Main from "./Main";

import firebaseConfig from "../../../utils/firebaseConfig";
import { initializeApp } from "firebase/app";
import {
  collection,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import Grid from "./Grid";
import MockUp from "./MockUp";

initializeApp(firebaseConfig);
const db = getFirestore();

const JobfairLanding = () => {
  useEffect(() => {
    setDarkMode();
  }, []);

  const [companiesLoading, setCompaniesLoading] = useState(true);
  const [companies, setCompanies] = useState([]);

  const fetchCompanies = async () => {
    const companiesRef = collection(db, "companies");
    const companiesSnapshot = await getDocs(companiesRef);

    const tempCompanies = [];
    companiesSnapshot.forEach((doc) => {
      const data = doc.data();
      tempCompanies.push({
        id: doc.id,
        name: data.name,
        logoUrl: data.logoUrl, // To access, use logoUrl.src (if not undefined)
        address: data.address,
        description: data.description,
        website: data.websiteUrl,
        header: data.headerUrl, // To access, use headerUrl.src (if not undefined)
        linkedin: data.linkedin,
        twitter: data.twitter,
        instagram: data.instagram,
        facebook: data.facebook,
        youtube: data.youtube,
        video: data.videoUrl, // Company profile video
        brochure: data.brochureUrl, // To access, use brochureUrl.src (if not undefined)
      });
    });

    setCompanies(tempCompanies);
    setCompaniesLoading(false);
  };

  const [jobsLoading, setJobsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const jobsRef = collection(db, "jobs");
    const jobsSnapshot = await getDocs(jobsRef);

    const tempJobs = [];
    jobsSnapshot.forEach((doc) => {
      const data = doc.data();
      tempJobs.push({
        id: doc.id,
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
    });

    setJobs(tempJobs);
    setJobsLoading(false);
  };

  useEffect(() => {
    fetchCompanies();
    fetchJobs();
  }, []);
  
  return (
    <>
      <Main companies={companies} jobs={jobs}/>
      <Grid />
      <MockUp />
    </>
  );
};

export default JobfairLanding;
