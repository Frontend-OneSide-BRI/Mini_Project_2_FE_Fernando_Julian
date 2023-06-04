import slider1 from "../img/slider1.jpeg";
import slider2 from "../img/slider2.jpeg";
import slider3 from "../img/slider3.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Carousel = () => {
  return (
    <Swiper
      spaceBetween={1}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src={slider1} alt="slider1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider2} alt="slider2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider3} alt="slider3" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
