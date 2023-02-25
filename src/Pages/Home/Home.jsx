import { Button, Speakers } from "../../Components";

import style from "./Home.module.scss";

const Home = () => {
  return (
    <main className={style.home}>
      <h1>Home Page for Srijan 2023</h1>
      <Button type="button" />
      <Speakers />
    </main>
  );
};

export default Home;
