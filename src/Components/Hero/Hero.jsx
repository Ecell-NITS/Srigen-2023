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
      <img className={style.bg} src="/images/bg.png" alt="bg" />
      <img className={style.rocket} id="rocket" src="/images/rocket.png" alt="rocket" />
      <img className={style.rocks} id="rocks" src="/images/rocks.png" alt="rocks" />
      <img
        className={style.srigentext}
        id="text"
        src="/images/srigentext.png"
        alt="srigentext"
      />
      <img className={style.cliff} src="/images/cliff.png" alt="cliff" />
      <img className={style.bridge} src="/images/bridge.png" alt="bridge" />
      <img
        className={style.astronaut}
        id="astronaut"
        src="/images/astronaut.png"
        alt="astronaut"
      />
    </div>
  );
};

export default Hero;
