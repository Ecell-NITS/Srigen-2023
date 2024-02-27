import style from "./Hero.module.scss";

const Hero = () => {
  const handleScroll = () => {
    document.getElementById("astronaut").style.marginLeft = `${window.scrollY * -0.5}px`;
    document.getElementById("rocket").style.marginTop = `${window.scrollY * -1.5}px`;
    document.getElementById("rocks").style.marginTop = `${window.scrollY * -0.5}px`;
    document.getElementById("text").style.marginLeft = `${window.scrollY * 0.7}px`;
  };

  window.addEventListener("scroll", handleScroll);
  return (
    <div className={style.container} onScroll={handleScroll}>
      <img
        className={style.bg}
        src="https://res.cloudinary.com/dmvik1vtf/image/upload/v1693216721/bg_hqgu2o.webp"
        alt="bg"
      />
      <img
        className={style.rocket}
        id="rocket"
        src="https://res.cloudinary.com/dmvik1vtf/image/upload/v1693217742/rocket_lq97jf.webp"
        alt="rocket"
      />
      <img
        className={style.rocks}
        id="rocks"
        src="https://res.cloudinary.com/dmvik1vtf/image/upload/v1693218694/rocks_l5lams.webp"
        alt="rocks"
      />
      <img
        className={style.srigentext}
        id="text"
        src="https://res.cloudinary.com/dmvik1vtf/image/upload/v1693219453/srigentext_pfb2dg.webp"
        alt="srigentext"
      />
      <img
        className={style.cliff}
        src="https://res.cloudinary.com/dmvik1vtf/image/upload/v1693217098/cliff_dsg8l2.webp"
        alt="cliff"
      />
      <img
        className={style.bridge}
        src="https://res.cloudinary.com/dmvik1vtf/image/upload/v1693216882/bridge_idqs4g.webp"
        alt="bridge"
      />
      <img
        className={style.astronaut}
        id="astronaut"
        src="https://res.cloudinary.com/dmvik1vtf/image/upload/v1693216512/astronaut_vhtypt.webp"
        alt="astronaut"
      />
    </div>
  );
};

export default Hero;
