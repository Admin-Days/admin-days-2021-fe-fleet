import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import cn from "classnames"
import styles from "./CompanyVisit.module.sass";
import { setDarkMode } from "../../../utils/dark";

import Icon from "../../../components/Icon";
import { companies } from "../../../mocks/jobfair";

const CompanyVisit = () => {
  const history = useHistory();

  useEffect(() => {
    setDarkMode();
  }, []);

  return (
    <div className={styles.section}>
      <button
        className={styles.back_btn}
        onClick={() => history.push("/jobfair/hub")}
      >
        <Icon name="back" color="#777E91" size="28" viewBox="0 -3 28 28" />
        <span>Back</span>
      </button>

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
