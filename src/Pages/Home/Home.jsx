import {
  Button,
  Speakers,
  Sponsors,
  About,
  GalleryCarousel,
  EventCard,
} from "../../Components";

import style from "./Home.module.scss";

import Data from "../../Data/EventCardData.json";
const dummy = Data.cardDataArray;

const Home = () => {
  return (
    <main className={style.home}>
      <h1>Home Page for Srijan 2023</h1>
      <Button type="button" />
      <About />
      <GalleryCarousel />
      <EventCard
        size="small"
        id={dummy[0].id}
        content={dummy[0].content}
        title1={dummy[0].title1}
        title2={dummy[0].title2}
        image={dummy[0].image}
      />
      <EventCard
        size="large"
        id={dummy[0].id}
        content={dummy[0].content}
        title1={dummy[0].title1}
        title2={dummy[0].title2}
        image={dummy[0].image}
      />
      <Speakers />

      <Sponsors />
    </main>
  );
};

export default Home;
