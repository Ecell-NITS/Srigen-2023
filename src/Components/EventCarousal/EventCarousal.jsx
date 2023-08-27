import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import EventCard from "../EventCard/EventCard";
import styles from "./EventCarousal.module.scss";
import Data from "../../Data/EventDaysInfo.json";
const EventCarousal = () => {
  const carousalData = Data.DayCarousal;

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
          delay: 2500,
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
        <div>
          {carousalData.map((item) => (
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
