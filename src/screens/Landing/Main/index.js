import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Main.module.sass";
import Location from "../../../components/Location";
import DateRange from "../../../components/DateRange";
import Travelers from "../../../components/Travelers";
import PanelLanding from "../LandingPanel";

const Main = () => {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.preview}>
          <picture>
            <img src="/assets/landing-hero-1.jpg" alt="Main" />
          </picture>
        </div>
        <PanelLanding
          className={styles.panel}
          menu
          classBody={styles.body}
          onSearch={() => console.log("Search")}
        >
          <div className={styles.row}>
            <Location
              className={styles.location}
              icon="location"
              description="Where are you going?"
              placeholder="Location"
            />
            <DateRange
              className={styles.date}
              icon="calendar"
              description="Add date"
              startDatePlaceholderText="Check in"
              endDatePlaceholderText="Check out"
              displayFormat="MMM DD, YYYY"
            />
            <Travelers
              className={styles.travelers}
              title="Travelers"
              description="Add guests"
              icon="user"
            />
          </div>
        </PanelLanding>
      </div>
    </div>
  );
};

export default Main;
