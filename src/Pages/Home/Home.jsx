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

      {dummy.map((data) => (
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

      <Speakers />

      <Sponsors />
    </main>
  );
};

export default Home;
