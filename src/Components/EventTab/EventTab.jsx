import styles from "./EventTab.module.scss";
import EventCard from "../EventCard/EventCard";
import Data from "../../Data/EventCardData.json";

const EventTab = () => {
  const dummy = Data.cardDataArray;
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h1>
          <span>Event</span> List
        </h1>
        <div>
          <img className={styles.logo} src="/logos/Vector.png" alt="logo " />
        </div>
      </div>
      <div className={styles.days}>
        <span className={styles.active}>Day1</span>
        <hr />
        <div className={styles.inactive}>
          <span>Day2</span>
          <span>Day3</span>
        </div>
      </div>

      <div className={styles.cards}>
        {dummy.slice(0, 4).map((data) => (
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
