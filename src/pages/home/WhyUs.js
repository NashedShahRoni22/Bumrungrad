import React, { useRef } from "react";
import slider1 from "../../assets/bumrungrad_slider_images/Slider 01.jpg";
import slider2 from "../../assets/bumrungrad_slider_images/Slider 02.jpg";
import slider3 from "../../assets/bumrungrad_slider_images/Slider 03.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./WhyUs.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function WhyUs() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  const sliderImgs = [
    {
      src: slider3,
    },
    {
      src: slider2,
    },
    {
      src: slider1,
    },
  ];
  return (
    <div className="p-5 md:p-10 my-5 md:my-10 md:container md:mx-auto">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-blue">
        Why Choose us?
      </h1>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper mt-5"
      >
        {sliderImgs.map((s) => (
          <SwiperSlide>
            <img src={s.src} alt="" />
          </SwiperSlide>
        ))}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}
