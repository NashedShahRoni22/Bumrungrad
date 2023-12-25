import React, { useRef } from "react";
import slider1 from "../../assets/bumrungrad_slider_images/Bumrungrad  Hospital_Slider 01.png";
import slider2 from '../../assets/bumrungrad_slider_images/Bumrungrad  Hospital_Slider 02.png'
import slider3 from '../../assets/bumrungrad_slider_images/Bumrungrad  Hospital_Slider 03.png'
import slider4 from '../../assets/bumrungrad_slider_images/Bumrungrad  Hospital_Slider 04.png'
import slider5 from '../../assets/bumrungrad_slider_images/Bumrungrad  Hospital_Slider 05.png'
import slider6 from '../../assets/bumrungrad_slider_images/Bumrungrad  Hospital_Slider 06.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./WhyUs.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css'

export default function WhyUs() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  const sliderImgs = [
    {
      src: slider6,
      alt: 'Bumrungrad International Hospital',
    },
    {
      src: slider5,
      alt: 'Bumrungrad International Hospital',
    },
    {
      src: slider4,
      alt: 'Bumrungrad International Hospital',
    },
    {
      src: slider3,
      alt: 'Bumrungrad International Hospital',
    },
    {
      src: slider2,
      alt: 'Bumrungrad International Hospital',
    },
    {
      src: slider1,
      alt: 'Bumrungrad International Hospital',
    },
  ]
  return (
    <div className='p-5 md:p-10 md:container md:mx-auto'>
      <h2 className='capitalize text-xl md:text-2xl lg:text-3xl font-bold text-blue'>
        Our achivements
      </h2>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className='mySwiper my-5 max-h-[85vh]'
      >
        {sliderImgs.map((s, i) => (
          <SwiperSlide key={i}>
            <LazyLoadImage
              src={s.src}
              alt={s.alt}
              effect="blur"
              className='object-cover'
            />
          </SwiperSlide>
        ))}

        <div className='autoplay-progress' slot='container-end'>
          <svg viewBox='0 0 48 48' ref={progressCircle}>
            <circle cx='24' cy='24' r='20'></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  )
}
