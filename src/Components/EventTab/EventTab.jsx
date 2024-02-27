import { useState } from "react";
import styles from "./EventTab.module.scss";
import EventCard from "../EventCard/EventCard";
import DayData from "../../Data/EventDaysInfo.json";
import EventCarousal from "../EventCarousal/EventCarousal";

const EventTab = () => {
  const { day1, day2, day3 } = DayData;
  const [dayId, setDay] = useState(day1);
  const [activeBar, setActiveBar] = useState(styles.activeOne);
  const [bar, setBar] = useState({
    one: styles.long,
    two: styles.short,
    three: styles.short,
  });

  const TabChange = (e) => {
    const [id] = e.currentTarget.id;

    if (id === "1") {
      setDay(day1);

      setBar({
        one: styles.long,
        two: styles.short,
        three: styles.short,
      });
      setActiveBar(styles.activeOne);
    }

    if (id === "2") {
      setDay(day2);
      setBar({
        one: styles.short,
        two: styles.long,
        three: styles.short,
      });
      setActiveBar(styles.activeTwo);
    }
    if (id === "3") {
      setDay(day3);

      setBar({
        one: styles.short,
        two: styles.short,
        three: styles.long,
      });
      setActiveBar(styles.activeThree);
    }
  };

  return (
    <div className={styles.container}>
      {/* .......................HEADING......................... */}
      <div className={styles.head}>
        <h1 className={styles.heading}>
          <span className={styles.headingGradient}>Event</span> List
        </h1>
        <div className={styles.logo}>
          <img className={styles.logoBorder} src="/logos/Ellipse.png" alt="" />
          <img className={styles.logoImage} src="/logos/Vector.png" alt="logo " />
        </div>
      </div>

      <div className={styles.eventTabs}>
        {/* ......................DAYS........................ */}
        <div className={styles.days}>
          <button id="1" onClick={TabChange} className={styles.dayBtn}>
            Day1
          </button>
          <hr className={bar.one} />
          <button id="2" onClick={TabChange} className={styles.dayBtn}>
            Day2
          </button>
          <hr className={bar.two} />
          <button id="3" onClick={TabChange} className={styles.dayBtn}>
            Day3
          </button>
          <hr className={bar.three} />
          <hr className={activeBar} />
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

      {/* .....................   phone view ................... */}

      <div className={styles.eventCarousal}>
        <EventCarousal />
      </div>
    </div>
  );
};

export default EventTab;
