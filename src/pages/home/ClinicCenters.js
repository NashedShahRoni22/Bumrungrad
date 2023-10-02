import React from "react";
import eyeimg from "../../assets/clinic_center/Eye-Center.jpg";
import prideimg from "../../assets/clinic_center/Pride-Clinic.jpg";
import digestdiseaseimg from "../../assets/clinic_center/Diogonal.jpg";
import breastimg from "../../assets/clinic_center/Breast-Clinic.jpg";
import neuroscienceimg from "../../assets/clinic_center/Neurologist-Clinic.jpg";
import womensimg from "../../assets/clinic_center/Women-Center.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import 'swiper/css/pagination';
import './ClinicCenters.css';
// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";

const swiperslides = [
  {
    img: eyeimg,
    name: "Eye Center",
    desc: "Building A, 18th Floor",
  },
  {
    img: prideimg,
    name: "Pride Clinic",
    desc: "Building A (Clinical Building), 16th Floor, Counter A (16A)",
  },
  {
    img: digestdiseaseimg,
    name: "Digest Center",
    desc: "Building B, 2nd floor, North Wing",
  },
  {
    img: breastimg,
    name: "Breast Center",
    desc: "Building A, 16th floor",
  },
  {
    img: neuroscienceimg,
    name: "Neuro Science",
    desc: "Building A, 19th floor",
  },
  {
    img: womensimg,
    name: "Womens Center",
    desc: "Building B, 2nd floor, North Wing of Main Building",
  },
];

export default function ClinicCenters() {
  return (
    <div className="p-5 md:p-10 my-5 md:my-10 md:container md:mx-auto rounded-xl shadow-xl">
      <div className="flex justify-between items-center">
        <h1 className="capitalize text-xl md:text-2xl lg:text-3xl font-bold text-blue">Clinic & Centers</h1>
        <Link className="px-4 py-2 border border-blue text-blue hover:bg-blue hover:text-white duration-300 ease-linear font-semibold">
          View All
        </Link>
      </div>
      <div className="my-5">
        <Divider />
      </div>
      <div>
        <Swiper
          effect={"coverflow"}
          centeredSlides={true}
          breakpoints={{
            // Small screens (up to 640px)
            0: {
              slidesPerView: 2,
            },
            // Medium screens (from 641px to 768px)
            768: {
              slidesPerView: 3,
            },
            // Large screens (from 769px and above)
            1024: {
              slidesPerView: 5,
            },
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {swiperslides.map((sc, i) => (
            <SwiperSlide key={i}>
              <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div>
                  <img
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                    src={sc.img}
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent from-black/70 via-black/60 to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center p-5 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 className="mb-3 font-dmserif text-xl font-bold text-white">
                    {sc.name}
                  </h1>
                  <p className="text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {sc.desc.slice(0, 100)}
                  </p>
                  <Link className="mt-3 bg-white shadow-xl rounded-xl py-2 px-3.5 font-com text-sm capitalize text-blue font-semibold">
                    See More
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination mt-5 flex gap-2 justify-center"></div>
      </div>
    </div>
  );
}
