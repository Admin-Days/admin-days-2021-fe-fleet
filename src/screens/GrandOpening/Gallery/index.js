import cn from "classnames";
import styles from "./Gallery.module.sass";

const Gallery = ({ className, items }) => {
  return (
    <>
      <div className={cn(styles.gallery, className)}>
        <div className={styles.list}>
          {items.map((x, index) => (
            <div className={styles.preview} key={index}>
              <img src={x} alt="Gallery"></img>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
