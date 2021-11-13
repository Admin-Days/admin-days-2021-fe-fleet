import React from "react";
import styles from "./CV.module.sass";
import cn from "classnames";

const CV = ({onClick}) => {
  return (
    <section className={cn(styles.section, "container")}>
      <div className={styles.text}>
        <h2>Is your CV ready?</h2>
        <p>
          CV Clinic & HRD Discussion Class is one of a series of Administration
          Days events that accommodate students in increasing knowledge about CV
          and interviews so that FIA UI students are better prepared when they
          enter the world of work later. In this CV Clinic & HRD Discussion
          Class, participants had the opportunity to consult personally
          regarding making the right CV. In addition, participants will conduct
          a simulated interview with HR from an agency or company who will later
          provide advice on presenting a CV to make it look professional and
          avoid classic mistakes that usually occur when applying for jobs.
        </p>
        <button onClick={onClick}>Let’s get you prepared!</button>
      </div>
      <img src="./assets/cvclinic-ilustration.png" alt="ilustration" />
    </section>
  );
};

export default CV;
