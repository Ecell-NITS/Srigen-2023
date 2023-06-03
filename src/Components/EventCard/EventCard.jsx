import React from "react";
import { Link } from "react-router-dom";
import Lstyles from "./Large.module.scss";
import Sstyles from "./Small.module.scss";
const EventCard = ({ content, title1, id, size, image }) => {
  /*  NEW CARD DOCS:
     size =  small OR large
      - small width is 250px and will break at 500px and become 100% of the width
      - large width is 500px and will break at 800px and become 100% of the width 
      - large will also break at 500px again to become identical to small
      - props : - title1 : front heading
                - title2 : backside heading
                - content: content on backside
                - image : background image on front
                - id : event id

   */

  const styles = size === "small" ? Sstyles : Lstyles;
  return (
    <div
      key={id}
      className={styles.col}
      // ={{ width: props.width }}
      onTouchStart={(event) => event.currentTarget.classList.toggle("hover")}
    >
      <div className={styles.container}>
        <div className={styles.front} style={{ backgroundImage: `url(${image})` }}>
          <div className={styles.inner}>
            <p>{title1}</p>
            {/* <span>{props.subTitle}</span> */}
          </div>
        </div>
        <div className={styles.back}>
          <div className={styles.inner}>
            <div className={styles.backSide}>
              <h1 className={styles.backHead}>{title1}</h1>
              <p className={styles.para}>{content}</p>
              <div className={styles.buttons}>
                <Link to="/" className={styles.btn}>
                  Register
                </Link>
                <Link to="/" className={styles.btn}>
                  Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
