import {
  Button,
  Speakers,
  Sponsors,
  About,
  GalleryCarousel,
  // EventCard,
  NewCard,
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
      <Speakers />
      <GalleryCarousel />
      <NewCard
        size="small"
        id={dummy[0].id}
        content={dummy[0].content}
        title1={dummy[0].title1}
        title2={dummy[0].title2}
        image={dummy[0].image}
      />
      <NewCard
        size="large"
        id={dummy[0].id}
        content={dummy[0].content}
        title1={dummy[0].title1}
        title2={dummy[0].title2}
        image={dummy[0].image}
      />

      <Sponsors />
    </main>
  );
};

export default Home;
