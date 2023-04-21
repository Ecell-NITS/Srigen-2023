import styles from "./EventTab.module.scss";
import EventCard from "../EventCard/EventCard";
import DayData from "../../Data/EventDaysInfo.json";

const EventTab = () => {
  const { day1 } = DayData;

  return (
    <div className={styles.container}>
      {/* .......................HEADING......................... */}
      <div className={styles.head}>
        <h1>
          <span>Event</span> List
        </h1>
        <div>
          <img className={styles.logo} src="/logos/Vector.png" alt="logo " />
        </div>
      </div>

      {/* ......................DAYS........................ */}
      <div className={styles.days}>
        <span className={styles.active}>
          Day1 <div className={styles.highlight}></div>
        </span>
        <hr />
        <div className={styles.inactive}>
          <span>Day2</span>
          <span>Day3</span>
        </div>
      </div>

      {/* .......................CARDS........................ */}
      <div className={styles.cards}>
        {day1.map((data) => (
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
  );
};

export default EventTab;
