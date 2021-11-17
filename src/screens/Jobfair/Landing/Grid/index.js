import React from "react";
import cn from "classnames";
import styles from "./Grid.module.sass";

const Grid = () => {
  return (
    <div className={cn(styles.grid, "container")}>
      <div className={styles.text}>
        <h4>Get to know</h4>
        <h2>Jobfair</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales
          scelerisque velit bibendum quisque nunc urna. Pellentesque netus
          tempus dis nec leo. Ac turpis etiam nisi nulla est facilisis
          pellentesque. Sed commodo hendrerit dolor in maecenas duis a ac
          tortor. Quisque elementum ipsum ut ligula viverra diam arcu. Nullam
          cursus imperdiet ut aliquet elementum tristique mi non. Condimentum ut
          euismod integer fermentum varius praesent. Nec justo, tincidunt at sit
          vitae tristique cras mattis. Consectetur nam ornare molestie erat at
          sagittis duis diam sollicitudin.
        </p>
      </div>
      <div className={cn(styles.top, styles.item)}>
        <img src="assets/jobfair-top.jpg" alt="" />
      </div>
      <div className={cn(styles.bot_1, styles.item)}>
        <img src="assets/jobfair-bot-1.jpg" alt="" />
      </div>
      <div className={cn(styles.bot_2, styles.item)}>
        <img src="assets/jobfair-bot-2.jpg" alt="" />
      </div>
      <div className={cn(styles.bot_3, styles.item)}>
        <img src="assets/jobfair-bot-3.jpg" alt="" />
      </div>
    </div>
  );
};

export default Grid;
