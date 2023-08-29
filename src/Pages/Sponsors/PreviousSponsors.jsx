import React from "react";
import styles from "./Sponsors.module.scss";
const PreviousSponsors = ({ spanColor }) => {
  const PreviousColor = {
    background: spanColor.startsWith("linear-gradient") ? spanColor : spanColor,
  };

  return (
    <>
      <div className={styles.prevSponsors} style={{ userSelect: "none" }}>
        <p className={styles.prevSponsorsheader}>
          Previous{" "}
          <span className={styles.previous_custom} style={PreviousColor}>
            Sponsors
          </span>{" "}
        </p>
        <p className={styles.prevsponsors_text}>
          In previous years, our E-Summit, SriGen, has been fortunate to have received
          sponsorship from a diverse array of companies and organisations. These sponsors
          provided the crucial financial support and resources that allowed us to bring
          the big event to life. Their commitment to fostering innovation and
          entrepreneurship has helped us create a dynamic platform for networking,
          learning, and collaboration. We extend our deepest appreciation to them for
          making our last E-Summit a resounding success while looking forward to the
          prospect of the upcoming SriGen 2023!
        </p>
        <div className={styles.brandGrid2}>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini1} ${styles.brandLogo}`}
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1685354010/Ecell%20website/edtimes_logo_bhl4ec.webp"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini2} ${styles.brandLogo}`}
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1676990266/collaboration-ecell/blackmarble00_q3mowc.png"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini3} ${styles.brandLogo}`}
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1676989598/collaboration-ecell/Cubeleloresized_jimc2g.png"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini4} ${styles.brandLogo}`}
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1676990589/collaboration-ecell/gfgre_xzhxha.png"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini5} ${styles.brandLogo}`}
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1676990660/collaboration-ecell/truscholarres_korsx7.png"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini1} ${styles.brandLogo}`}
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1676990737/collaboration-ecell/assamStartUpres_n2fbxv.png"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini2} ${styles.brandLogo}`}
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1676989494/collaboration-ecell/finlatics_dh1suv.png"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini3} ${styles.brandLogo}`}
              src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676524279/collaboration-ecell/PNB_Icon-resize_aghkjd.png"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini4} ${styles.brandLogo}`}
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1676988769/collaboration-ecell/kwikpicghj_x7cy2p.png"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini5} ${styles.brandLogo}`}
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1676988848/collaboration-ecell/ssstartRe_xea2cl.png"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini1} ${styles.brandLogo}`}
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1693146006/SriGen4.0/coming%20soon/WhatsApp_Image_2023-08-27_at_19.44.00_wn0xmd.webp"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini2} ${styles.brandLogo}`}
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1676989170/collaboration-ecell/stockGroRE_ymge3d.png"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini3} ${styles.brandLogo}`}
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1676989292/collaboration-ecell/yenRE_zgrknu.png"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini4} ${styles.brandLogo}`}
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1676989412/collaboration-ecell/anterprerna_susjet.png"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini5} ${styles.brandLogo}`}
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1676989729/collaboration-ecell/IvyCap_bnxqmc.png"
            />
          </div>
        </div>
        <div className={styles.lastcol}>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini1} ${styles.brandLogo}`}
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1676989825/collaboration-ecell/jantaGroup_apsnyg.png"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini2} ${styles.brandLogo}`}
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1676990018/collaboration-ecell/learningWhileTraveling_bmf0fj.png"
            />
          </div>
        </div>
      </div>

      <div className={styles.prevSponsorsmobile} style={{ userSelect: "none" }}>
        <p className={styles.prevSponsorsheader}>
          Previous{" "}
          <span className={styles.previous_custom} style={PreviousColor}>
            Sponsors
          </span>
        </p>

        <p className={styles.prevsponsors_text}>
          In previous years, our E-Summit, SriGen, has been fortunate to have received
          sponsorship from a diverse array of companies and organisations. These sponsors
          provided the crucial financial support and resources that allowed us to bring
          the big event to life. Their commitment to fostering innovation and
          entrepreneurship has helped us create a dynamic platform for networking,
          learning, and collaboration. We extend our deepest appreciation to them for
          making our last E-Summit a resounding success while looking forward to the
          prospect of the upcoming SriGen 2023!
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
            <img
              alt="text"
              className={`${styles.brandLogomini1} ${styles.brandLogo}`}
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1685354010/Ecell%20website/edtimes_logo_bhl4ec.webp"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini2} ${styles.brandLogo}`}
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1676990266/collaboration-ecell/blackmarble00_q3mowc.png"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini3} ${styles.brandLogo}`}
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1676989598/collaboration-ecell/Cubeleloresized_jimc2g.png"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini4} ${styles.brandLogo}`}
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1676990589/collaboration-ecell/gfgre_xzhxha.png"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini5} ${styles.brandLogo}`}
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1676990660/collaboration-ecell/truscholarres_korsx7.png"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini1} ${styles.brandLogo}`}
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1676990737/collaboration-ecell/assamStartUpres_n2fbxv.png"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini2} ${styles.brandLogo}`}
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1676989494/collaboration-ecell/finlatics_dh1suv.png"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini3} ${styles.brandLogo}`}
              src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676524279/collaboration-ecell/PNB_Icon-resize_aghkjd.png"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini4} ${styles.brandLogo}`}
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1676988769/collaboration-ecell/kwikpicghj_x7cy2p.png"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini5} ${styles.brandLogo}`}
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1676988848/collaboration-ecell/ssstartRe_xea2cl.png"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini1} ${styles.brandLogo}`}
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1693146006/SriGen4.0/coming%20soon/WhatsApp_Image_2023-08-27_at_19.44.00_wn0xmd.webp"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini2} ${styles.brandLogo}`}
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1676989170/collaboration-ecell/stockGroRE_ymge3d.png"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini3} ${styles.brandLogo}`}
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1676989292/collaboration-ecell/yenRE_zgrknu.png"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini4} ${styles.brandLogo}`}
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1676989412/collaboration-ecell/anterprerna_susjet.png"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini5} ${styles.brandLogo}`}
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1676989729/collaboration-ecell/IvyCap_bnxqmc.png"
            />
          </div>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini1} ${styles.brandLogo}`}
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1676989825/collaboration-ecell/jantaGroup_apsnyg.png"
            />
          </div>
        </div>
        <div className={styles.lastcolmobile}>
          <div className={styles.brandItem}>
            <img
              alt="text"
              className={`${styles.brandLogomini2} ${styles.brandLogo}`}
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1676990018/collaboration-ecell/learningWhileTraveling_bmf0fj.png"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PreviousSponsors;
