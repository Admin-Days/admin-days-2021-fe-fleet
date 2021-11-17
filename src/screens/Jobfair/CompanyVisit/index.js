import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { companies } from "../../../mocks/jobfair";
import { setDarkMode } from "../../../utils/dark";
import styles from "./CompanyVisit.module.sass";
import cn from "classnames"

const CompanyVisit = () => {
  const history = useHistory();

  useEffect(() => {
    setDarkMode();
  }, []);

  return (
    <div className={styles.section}>
      <h1>Company Visit</h1>
      <div className={cn(styles.companies)}>
        {companies.map((com) => (
          <img onClick={() => history.push(`/jobfair/company-visit/${com.id}`)} id={com.id} src={com.image} alt={com.name} />
        ))}
      </div>
    </div>
  );
};

export default CompanyVisit;
