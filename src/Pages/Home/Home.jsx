import { Button, Speakers, Sponsors, About, GalleryCarousel } from "../../Components";

import style from "./Home.module.scss";

const Home = () => {
  return (
    <main className={style.home}>
      <h1>Home Page for Srijan 2023</h1>
      <Button type="button" />
      <About />
      <GalleryCarousel />
      <Speakers />
      <Sponsors />
    </main>
  );
};

export default Home;
