import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import EventCard from "../EventCard/EventCard";
import styles from "./EventCarousal.module.scss";
import Data from "../../Data/EventCardData.json";
const EventCarousal = () => {
  return (
    <div className={styles.main}>
      <Swiper
        className={styles.MySwiper}
        slidesPerView={1}
        effect="coverflow"
        grabCursor={1}
        centeredSlides={1}
        loop={1}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 1000,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 10,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        navigation={{
          nextEl: "#right",
          prevEl: "#left",
          clickable: true,
        }}
        // swiper end
      >
        {/* <div className={styles.controller}>
          <div id="left" className={styles.prev}>
            <IoIosArrowBack />
          </div>
          <div id="right" className={styles.next}>
            {" "}
            <IoIosArrowForward />
          </div>
        </div> */}

        <div>
          {Data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className={styles.Box}>
                <EventCard
                  size="small"
                  id={item.id}
                  content={item.content}
                  title1={item.title1}
                  title2={item.title2}
                  image={item.image}
                />
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default EventCarousal;
