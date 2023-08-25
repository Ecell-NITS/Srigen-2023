import React from "react";
import styles from "./Sponsors.module.scss";
const PreviousSponsors = ({ spanColor }) => {
  const PreviousColor = {
    background: spanColor.startsWith("linear-gradient") ? spanColor : spanColor,
  };

  return (
    <>
      <div className={styles.prevSponsors}>
        <p className={styles.prevSponsorsheader}>
          Previous{" "}
          <span className={styles.previous_custom} style={PreviousColor}>
            Sponsors
          </span>{" "}
        </p>
        <div className={styles.brandGrid2}>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini1} ${styles.brandLogo}`}
              src="/logos/asus-mini.svg"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini2} ${styles.brandLogo}`}
              src="/logos/devfolio-mini.svg"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini3} ${styles.brandLogo}`}
              src="/logos/mlh-mini.svg"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini4} ${styles.brandLogo}`}
              src="/logos/polygon-mini.svg"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini5} ${styles.brandLogo}`}
              src="/logos/wolf-mini.svg"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini1} ${styles.brandLogo}`}
              src="/logos/asus-mini.svg"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini2} ${styles.brandLogo}`}
              src="/logos/devfolio-mini.svg"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini3} ${styles.brandLogo}`}
              src="/logos/mlh-mini.svg"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini4} ${styles.brandLogo}`}
              src="/logos/polygon-mini.svg"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini5} ${styles.brandLogo}`}
              src="/logos/wolf-mini.svg"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini1} ${styles.brandLogo}`}
              src="/logos/asus-mini.svg"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini2} ${styles.brandLogo}`}
              src="/logos/devfolio-mini.svg"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini3} ${styles.brandLogo}`}
              src="/logos/mlh-mini.svg"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini4} ${styles.brandLogo}`}
              src="/logos/polygon-mini.svg"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini5} ${styles.brandLogo}`}
              src="/logos/wolf-mini.svg"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini1} ${styles.brandLogo}`}
              src="/logos/asus-mini.svg"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini2} ${styles.brandLogo}`}
              src="/logos/devfolio-mini.svg"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini3} ${styles.brandLogo}`}
              src="/logos/mlh-mini.svg"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini4} ${styles.brandLogo}`}
              src="/logos/polygon-mini.svg"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini5} ${styles.brandLogo}`}
              src="/logos/wolf-mini.svg"
            />
          </div>
        </div>
      </div>

      <div className={styles.prevSponsorsmobile}>
        <p className={styles.prevSponsorsheader}>
          Previous{" "}
          <span className={styles.previous_custom} style={PreviousColor}>
            Sponsors
          </span>
        </p>
        <div className={styles.brandItem1}>
          <p className={styles.brandText}>powered by</p>
          <img
            alt="text"
            className={`${styles.brandLogo1} ${styles.brandLogo}`}
            src="/logos/devfolio.png"
          />
        </div>
        <div className={styles.brandGrid}>
          <div className={styles.brandItem}>
            <p className={styles.brandText}>powered by</p>
            <img
              alt="text"
              className={`${styles.brandLogo2} ${styles.brandLogo}`}
              src="/logos/polygon.png"
            />
          </div>
          <div className={styles.brandItem}>
            <p className={styles.brandText}>powered by</p>
            <img
              alt="text"
              className={`${styles.brandLogo3} ${styles.brandLogo}`}
              src="/logos/mlh.png"
            />
          </div>
          <div className={styles.brandItem}>
            <p className={styles.brandText}>powered by</p>
            <img
              alt="text"
              className={`${styles.brandLogo4} ${styles.brandLogo}`}
              src="/logos/wolf.png"
            />
          </div>
          <div className={styles.brandItem}>
            <p className={styles.brandText}>powered by</p>
            <img
              alt="text"
              className={`${styles.brandLogo2} ${styles.brandLogo}`}
              src="/logos/polygon.png"
            />
          </div>
          <div className={styles.brandItem}>
            <p className={styles.brandText}>powered by</p>
            <img
              alt="text"
              className={`${styles.brandLogo3} ${styles.brandLogo}`}
              src="/logos/mlh.png"
            />
          </div>
          <div className={styles.brandItem}>
            <p className={styles.brandText}>powered by</p>
            <img
              alt="text"
              className={`${styles.brandLogo4} ${styles.brandLogo}`}
              src="/logos/wolf.png"
            />
          </div>
          <div className={styles.brandItem}>
            <p className={styles.brandText}>powered by</p>
            <img
              alt="text"
              className={`${styles.brandLogo2} ${styles.brandLogo}`}
              src="/logos/polygon.png"
            />
          </div>
          <div className={styles.brandItem}>
            <p className={styles.brandText}>powered by</p>
            <img
              alt="text"
              className={`${styles.brandLogo3} ${styles.brandLogo}`}
              src="/logos/mlh.png"
            />
          </div>
          <div className={styles.brandItem}>
            <p className={styles.brandText}>powered by</p>
            <img
              alt="text"
              className={`${styles.brandLogo4} ${styles.brandLogo}`}
              src="/logos/wolf.png"
            />
          </div>
          <div className={styles.brandItem}>
            <p className={styles.brandText}>powered by</p>
            <img
              alt="text"
              className={`${styles.brandLogo2} ${styles.brandLogo}`}
              src="/logos/polygon.png"
            />
          </div>
          <div className={styles.brandItem}>
            <p className={styles.brandText}>powered by</p>
            <img
              alt="text"
              className={`${styles.brandLogo3} ${styles.brandLogo}`}
              src="/logos/mlh.png"
            />
          </div>
          <div className={styles.brandItem}>
            <p className={styles.brandText}>powered by</p>
            <img
              alt="text"
              className={`${styles.brandLogo4} ${styles.brandLogo}`}
              src="/logos/wolf.png"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PreviousSponsors;
