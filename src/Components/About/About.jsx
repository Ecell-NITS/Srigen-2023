import React, { useEffect } from "react";
import { InView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";
import style from "./About.module.scss";
import logo1 from "../../../public/images/about1.png";
import logo2 from "../../../public/images/about2.png";
const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className={style.about}>
      <div className={style.abt_out}>
        <div className={style.abt_txt}>
          <div className={style.abt_event} data-aos="fade-up">
            <div className={style.abt_head}>
              <h1>
                About <span className={style.abt_span}>The Event</span>
              </h1>
            </div>
            <div className={style.abt_content}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, augue
                mattis condimentum gravida ultrices nunc sagittis, faucibus lacus. Ornare
                urna nibh pellentesque odio senectus habitasse eu enim sit. Urna enim
                egestas diam nulla sit. About NIT Silchar Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nisi, augue mattis condimentum gravida
                ultrices nunc sagittis, faucibus lacus. Ornare urna nibh pellentesque odio
                senectus habitasse eu enim sit. Urna enim egestas diam nulla sit.
              </p>
            </div>
          </div>
          <InView threshold={0.5} onChange={(inView) => console.log("Inview:", inView)}>
            <div className={style.abt_nits} data-aos="fade-up">
              <div className={style.abt_head}>
                <h1>
                  About <span className={style.abt_span}>NIT Silchar</span>
                </h1>
              </div>
              <div className={style.abt_content}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, augue
                  mattis condimentum gravida ultrices nunc sagittis, faucibus lacus.
                  Ornare urna nibh pellentesque odio senectus habitasse eu enim sit. Urna
                  enim egestas diam nulla sit. About NIT Silchar Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Nisi, augue mattis condimentum
                  gravida ultrices nunc sagittis, faucibus lacus. Ornare urna nibh
                  pellentesque odio senectus habitasse eu enim sit. Urna enim egestas diam
                  nulla sit.
                </p>
              </div>
            </div>
          </InView>
        </div>
        <div className={style.abt_anim}>
          {/* {myElementIsVisible ? "Yes" : "No"} */}
          <div className={style.logo_circle_l}>
            <img src={logo1} alt="" className={style.about_logo1} />
          </div>
          <div className={style.circle}></div>
          <div className={style.logo_circle_s}>
            <img src={logo2} alt="" className={`${style.about_logo2} ${style.hidden}`} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
