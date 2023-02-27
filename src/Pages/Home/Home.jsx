import { Button, Speakers, Sponsors, About, GalleryCarousel } from "../../Components";
import EventCard from "../../Components/EventCard/EventCard";

import style from "./Home.module.scss";

const Home = () => {
  return (
    <main className={style.home}>
      <h1>Home Page for Srijan 2023</h1>
      <Button type="button" />
      <About />
      <Speakers />
      <GalleryCarousel />
      <EventCard />
      <Sponsors />
    </main>
  );
};

export default Home;
