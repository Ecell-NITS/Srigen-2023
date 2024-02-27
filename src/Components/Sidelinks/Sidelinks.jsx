/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import style from "./Sidelinks.module.scss";

const Sidelinks = () => {
  const handleLinkedin = () => {
    window.open("https://www.linkedin.com/company/srijan-nit-silchar", "_blank");
  };

  const handleFacebook = () => {
    window.open("https://www.facebook.com/srijan.nits", "_blank");
  };

  const handleInstagram = () => {
    window.open("https://www.instagram.com/srijan_nits/?hl=en", "_blank");
  };

  return (
    <div className={style.iconcontainer}>
      <div className={style.iconimgcont}>
        <button onClick={handleLinkedin}>
          <FiLinkedin className={style.icon} />
        </button>
      </div>
      <div className={style.iconimgcont}>
        <button onClick={handleFacebook}>
          {" "}
          <FiFacebook className={style.icon} />
        </button>
      </div>
      <div className={style.iconimgcont}>
        <button onClick={handleInstagram}>
          {" "}
          <AiOutlineInstagram className={style.icon} />
        </button>
      </div>
      <div className={style.iconimgcont}>
        <img src="/images/Line1.png" alt="line" />
      </div>
    </div>
  );
};

export default Sidelinks;
