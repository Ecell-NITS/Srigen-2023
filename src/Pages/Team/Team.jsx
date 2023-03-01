import React from "react";
import style from "./Team.module.scss";
import { chiefPatron, patrons, developers } from "../../Data/TeamData";
import { TeamCard } from "../../Components";

const Team = () => {
  return (
    <div className={style.teamContainer}>
      <div className={style.teamHeader}>
        <div className={style.Our}>
          <h1>Our</h1>
        </div>
        <div className={style.Team}>
          <h1>Team</h1>
        </div>
      </div>
      <div className={style.chiefPatron}>
        <div className={style.header}>
          <h1>Chief Patron</h1>
        </div>
        <div className={style.Cards}>
          {chiefPatron.map((event) => {
            return (
              <TeamCard
                name={event.name}
                designation={event.designation}
                image={event.image}
                fblink={event.fblink}
                linkedIn={event.linkedIn}
              />
            );
          })}
        </div>
      </div>
      <div className={style.Patrons}>
        <div className={style.header}>
          <h1>Patrons</h1>
        </div>
        <div className={style.Cards}>
          {patrons.map((event) => {
            return (
              <TeamCard
                name={event.name}
                designation={event.designation}
                image={event.image}
                fblink={event.fblink}
                linkedIn={event.linkedIn}
              />
            );
          })}
        </div>
      </div>
      <div className={style.Developers}>
        <div className={style.header}>
          <h1>Developers</h1>
        </div>
        <div className={style.Cards}>
          {developers.map((event) => {
            return (
              <TeamCard
                name={event.name}
                designation={event.designation}
                image={event.image}
                fblink={event.fblink}
                linkedIn={event.linkedIn}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
