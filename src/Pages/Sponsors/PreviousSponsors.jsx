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
              src="/logos/edt.webp"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini2} ${styles.brandLogo}`}
              src="/logos/blackmarble.png"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini3} ${styles.brandLogo}`}
              src="/logos/cubelelo.png"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini4} ${styles.brandLogo}`}
              src="/logos/gfg.png"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini5} ${styles.brandLogo}`}
              src="/logos/truescholar.png"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini1} ${styles.brandLogo}`}
              src="/logos/assamstartup.png"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini2} ${styles.brandLogo}`}
              src="/logos/finlatics.png"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini3} ${styles.brandLogo}`}
              src="/logos/pnb.avif"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini4} ${styles.brandLogo}`}
              src="/logos/kwikpic.png"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini5} ${styles.brandLogo}`}
              src="/logos/sstart.png"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini1} ${styles.brandLogo}`}
              src="/logos/engineerhub.png"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini2} ${styles.brandLogo}`}
              src="/logos/stockgro.png"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini3} ${styles.brandLogo}`}
              src="/logos/youngep.png"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini4} ${styles.brandLogo}`}
              src="/logos/anterprer.png"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini5} ${styles.brandLogo}`}
              src="/logos/ivycamp.png"
            />
          </div>
        </div>
        <div className={styles.lastcol}>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini1} ${styles.brandLogo}`}
              src="/logos/jantagroup.png"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini2} ${styles.brandLogo}`}
              src="/logos/learning.png"
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
              src="/logos/edt.webp"
            />
          </div>
          <div className={styles.brandItem}>
            <p className={styles.brandText}>powered by</p>
            <img
              alt="text"
              className={`${styles.brandLogo3} ${styles.brandLogo}`}
              src="/logos/blackmarble.png"
            />
          </div>
          <div className={styles.brandItem}>
            <p className={styles.brandText}>powered by</p>
            <img
              alt="text"
              className={`${styles.brandLogo4} ${styles.brandLogo}`}
              src="/logos/gfg.png"
            />
          </div>
          <div className={styles.brandItem}>
            <p className={styles.brandText}>powered by</p>
            <img
              alt="text"
              className={`${styles.brandLogo2} ${styles.brandLogo}`}
              src="/logos/truescholar.png"
            />
          </div>
          <div className={styles.brandItem}>
            <p className={styles.brandText}>powered by</p>
            <img
              alt="text"
              className={`${styles.brandLogo3} ${styles.brandLogo}`}
              src="/logos/pnb.avif"
            />
          </div>
          <div className={styles.brandItem}>
            <p className={styles.brandText}>powered by</p>
            <img
              alt="text"
              className={`${styles.brandLogo4} ${styles.brandLogo}`}
              src="/logos/finlatics.png"
            />
          </div>
          <div className={styles.brandItem}>
            <p className={styles.brandText}>powered by</p>
            <img
              alt="text"
              className={`${styles.brandLogo2} ${styles.brandLogo}`}
              src="/logos/assamstartup.png"
            />
          </div>
          <div className={styles.brandItem}>
            <p className={styles.brandText}>powered by</p>
            <img
              alt="text"
              className={`${styles.brandLogo3} ${styles.brandLogo}`}
              src="/logos/kwikpic.png"
            />
          </div>
          <div className={styles.brandItem}>
            <p className={styles.brandText}>powered by</p>
            <img
              alt="text"
              className={`${styles.brandLogo4} ${styles.brandLogo}`}
              src="/logos/engineerhub.png"
            />
          </div>
          <div className={styles.brandItem}>
            <p className={styles.brandText}>powered by</p>
            <img
              alt="text"
              className={`${styles.brandLogo2} ${styles.brandLogo}`}
              src="/logos/cubelelo.png"
            />
          </div>
          <div className={styles.brandItem}>
            <p className={styles.brandText}>powered by</p>
            <img
              alt="text"
              className={`${styles.brandLogo3} ${styles.brandLogo}`}
              src="/logos/sstart.png"
            />
          </div>
          <div className={styles.brandItem}>
            <p className={styles.brandText}>powered by</p>
            <img
              alt="text"
              className={`${styles.brandLogo4} ${styles.brandLogo}`}
              src="/logos/stockgro.png"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PreviousSponsors;
