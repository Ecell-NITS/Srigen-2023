import React, { useEffect, useState } from "react";
// eslint-disable-next-line import/no-unresolved
import { InView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";
import style from "./About.module.scss";
const About = ({ backgroundColor }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [isIntersecting, setIntersecting] = useState(false);

  const sectionBg = {
    background: backgroundColor.startsWith("linear-gradient")
      ? backgroundColor
      : backgroundColor,
  };

  return (
    <section className={style.about} style={sectionBg}>
      <div className={style.abt_out}>
        <div className={style.abt_txt}>
          <div className={style.abt_event} data-aos="fade-up">
            <div className={style.abt_head}>
              <h1>
                <span className={style.aboutti}>About</span>{" "}
                <span className={style.abt_span}>The Event</span>
              </h1>
            </div>
            <div className={style.abt_content}>
              <p>
                Get ready to embark on a journey of innovation and entrepreneurship like
                never before, as NIT Silchar&lsquo;s Entrepreneurship Cell proudly
                presents ‘SriGen’! This event serves as a common platform for
                collaboration and community-building among corporate experts and ambitious
                young entrepreneurs hailing from NIT Silchar and esteemed institutions
                nationwide. A number of events such as Startup Expo, Assam Startup
                ,webinars and speaker sessions are held under SriGen with the primary goal
                of giving shape to creative ideas proposed by brilliant minds. It
                encourages innovative thinking, networking, and turning ideas into
                real-world ventures, preparing students for the business world&lsquo;s
                challenges and opportunities.
              </p>
            </div>
          </div>
          <InView threshold={0.3} onChange={(inView) => setIntersecting(inView)}>
            <div className={style.abt_nits} data-aos="fade-up">
              <div className={style.abt_head}>
                <h1>
                  <span className={style.aboutti}>About</span>{" "}
                  <span className={style.abt_span}>NIT Silchar</span>
                </h1>
              </div>
              <div className={style.abt_content}>
                <p>
                  National Institute of Technology (NIT) Silchar is one of the premier
                  engineering institutes in India. Established in 1967 as a Regional
                  Engineering College (REC), it was upgraded to the status of an NIT in
                  2002. The Institute is known for its rigorous academic standards and
                  quality faculty. It encourages students and faculty to engage in
                  research projects, publish papers, and contribute to technological
                  advancements.It has been actively promoting entrepreneurship and
                  innovation among its students and faculty. The institute recognizes the
                  importance of fostering an entrepreneurial mindset and supporting
                  startups that can contribute to economic growth and technological
                  innovation.
                </p>
              </div>
            </div>
          </InView>
        </div>
        <div className={`${style.abt_anim} ${!isIntersecting || style.abt_animRotate} `}>
          <div
            className={`${style.logo_circle_l} ${
              !isIntersecting || style.logo_circle_lSmall
            } `}
          >
            <img
              src="/images/about1.png"
              alt=""
              className={`${style.about_logo1} ${
                !isIntersecting || style.about_logo1Hidden
              } ${!isIntersecting || style.hidden}`}
            />
          </div>
          <div className={`${style.circle}`}></div>
          <div
            className={`${style.logo_circle_s} ${
              !isIntersecting || style.logo_circle_sScale
            }`}
          >
            <img
              src="/images/about2.png"
              alt=""
              className={`${style.about_logo2} ${!isIntersecting && style.hidden} ${
                !isIntersecting || style.about_logo2Flip
              } `}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
