import { useState } from "react";
import styles from "./EventTab.module.scss";
import EventCard from "../EventCard/EventCard";
import DayData from "../../Data/EventDaysInfo.json";
import EventCarousal from "../EventCarousal/EventCarousal";

const EventTab = () => {
  const { day1, day2, day3 } = DayData;
  const [dayId, setDay] = useState(day1);

  const TabChange = (e) => {
    const [id] = e.currentTarget.id;

    if (id === "1") {
      setDay(day1);
    }

    if (id === "2") {
      setDay(day2);
    }
    if (id === "3") {
      setDay(day3);
    }
  };

  return (
    <div className={styles.container}>
      {/* .......................HEADING......................... */}
      <div className={styles.head}>
        <h1>
          <span>Event</span> List
        </h1>
        <div className={styles.logo}>
          <img className={styles.logoBorder} src="/logos/Ellipse.png" alt="" />
          <img className={styles.logoImage} src="/logos/Vector.png" alt="logo " />
        </div>
      </div>

      <div className={styles.eventTabs}>
        {/* ......................DAYS........................ */}
        <div className={styles.days}>
          <button id="1" onClick={TabChange} className={styles.active}>
            Day1
          </button>
          <hr />
          <button id="2" onClick={TabChange}>
            Day2
          </button>
          <button id="3" onClick={TabChange}>
            Day3
          </button>
        </div>

        {/* .......................CARDS........................ */}
        <div className={styles.cards}>
          {dayId.map((data) => (
            <EventCard
              key={data.id}
              size="large"
              id={data.id}
              content={data.content}
              title1={data.title1}
              title2={data.title2}
              image={data.image}
            />
          ))}
        </div>
      </div>

      <div className={styles.eventCarousal}>
        <EventCarousal />
      </div>
    </div>
  );
};

export default EventTab;
