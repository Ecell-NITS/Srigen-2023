import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <div className={styles.containerContact}>
        <p className={styles.contactHeader}>
          Contact<span className={styles.infoGrad}> Info</span>
        </p>
        <div className={styles.credInfo}>
          <p className={styles.credItems}>
            Address
            <span className={styles.credText}>
              <a
                href="https://www.google.com/maps/place/Startup+Centre,+NIT+Silchar/@21.2875346,82.943514,15z/data=!4m15!1m8!3m7!1s0x374e491f73d2d93d:0x40b0c4ddd14239f4!2sStartup+Centre,+NIT+Silchar!8m2!3d24.7577034!4d92.7895376!10e5!16s%2Fg%2F11h1klwlpg!3m5!1s0x374e491f73d2d93d:0x40b0c4ddd14239f4!8m2!3d24.7577034!4d92.7895376!16s%2Fg%2F11h1klwlpg?entry=ttu"
                target="_blank"
                rel="noreferrer"
              >
                National Institute of Technology Silchar Cachar, Assam
              </a>
            </span>
          </p>
          <p className={styles.credItems}>
            Website
            <span className={styles.credText}>
              <a href="https://ecellnits.org" target="_blank" rel="noreferrer">
                www.ecellnits.org
              </a>
            </span>
          </p>
          <p className={styles.credItems}>
            Email
            <span className={styles.credText}>
              <a href="mailto:ecell@nits.ac.in">ecell@nits.ac.in</a>
            </span>
          </p>
          <p className={styles.credItemsphone}>
            Phone Number
            <span className={styles.credText}>
              <a href="tel:+91-xxxxxxxxxx">+91-xxxxxxxxxx</a>
            </span>
          </p>
          <p className={styles.credItemsmobile}>
            Phone No.
            <span className={styles.credText}>
              <a href="tel:+91-xxxxxxxxxx">+91-xxxxxxxxxx</a>
            </span>
          </p>
        </div>
      </div>
      <div className={styles.containerFooter}>
        <p className={styles.footerDesc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, purus tincidunt
          tellus eros. Feugiat velit id sed sit id velit, adipiscing pulvinar orci. Et,
          bibendum nibh pellentesque id sagittis adipiscing lorem. Elit egestas bibendum
          morbi vitae, nullam nunc sagittis eget.
        </p>
        <div className={styles.iconSection}>
          <a
            href="https://www.facebook.com/srijan.nits"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiFacebook className={styles.facebookIcon} />
          </a>
          <a
            href="https://www.instagram.com/srijan_nits/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineInstagram className={styles.instaIcon} />
          </a>
          <a
            href="https://www.linkedin.com/company/srijan-nit-silchar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin className={styles.linkedinIcon} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
