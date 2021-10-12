import cn from "classnames";
import styles from "./Description.module.sass";
import Gallery from "../Gallery";

const gallery = [
  "/assets/go-gallery-1.png",
  "/assets/go-gallery-2.png",
  "/assets/go-gallery-3.png",
  "/assets/go-gallery-4.png",
];

const Description = ({ classSection }) => {
  return (
    <div className={cn("section", classSection, styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <div className={cn("stage", styles.stage)}>A big welcome to</div>
          <h2 className={cn("h2", styles.title)}>ADM Days</h2>
          <div className={styles.info}>
            Grand Opening is the opening event for the entire series of
            Administration Days activities which officially presents the deans
            and agencies involved to motivate IKM FIA UI in planning and
            preparing post-campus activities which will be filled with ILUNI
            TALKS and CEO Talking. We invite you to this event in the form of a
            webinar.
          </div>
        </div>
        <Gallery className={styles.gallery} items={gallery} type="cars" />
      </div>
    </div>
  );
};

export default Description;
