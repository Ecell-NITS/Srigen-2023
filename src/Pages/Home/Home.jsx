import {
  // Button,
  Speakers,
  Sponsors,
  About,
  GalleryCarousel,
  EventCard,
  Hero,
} from "../../Components";

import style from "./Home.module.scss";

import Data from "../../Data/EventCardData.json";
const dummy = Data.cardDataArray;

const Home = () => {
  const backgroundColor = "var(--srijan4-gradient-4)";

  return (
    <main className={style.home}>
      {/* <h1>Home Page for Srijan 2023</h1>
      <Button type="button" /> */}
      <Hero />
      <About backgroundColor={backgroundColor} />
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
