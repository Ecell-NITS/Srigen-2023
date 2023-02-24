import React from "react";
import { Icon } from "@iconify/react";
import style from "./TeamCard.module.scss";

const TeamCard = () => {
  return (
    <div className={style.cardContainer}>
      <div className={style.cardImage}>
        <img src="/images/tom.png" alt="Member" />
      </div>
      <div className={style.cardBody}>
        <div className={style.mediaLinks}>
          <a
            aria-label="Social Media"
            href="https://www.facebook.com/ronny.kumar.7186896"
          >
            <Icon className={style.Links} icon="ri:facebook-circle-fill" />
          </a>
          <a
            aria-label="Social Media"
            href="https://www.linkedin.com/in/bipangshu-saha-2aab9b228/"
          >
            <Icon className={style.Links} icon="mdi:linkedin" />
          </a>
        </div>
        <div className={style.memberName}>Bipangshu Saha</div>
        <div className={style.memberDesignation}>Developer</div>
      </div>
    </div>
  );
};

export default TeamCard;
