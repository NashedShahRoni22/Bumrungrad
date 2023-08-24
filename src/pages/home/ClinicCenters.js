import React from "react";
import eyeimg from "../../assets/ClinicCenters/eye_care.png";
import prideimg from "../../assets/ClinicCenters/pride_clinic.png";
import digestdiseaseimg from "../../assets/ClinicCenters/digestive_disease.png";
import breastimg from "../../assets/ClinicCenters/breast_center.png";
import neuroscienceimg from "../../assets/ClinicCenters/neuroscience.png";
import womens from "../../assets/ClinicCenters/womens_center.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
// import required modules
import { EffectCoverflow } from "swiper/modules";
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
    name: "Digest Disease Center",
    desc: "Building B, 2nd floor, North Wing, Main Lobby escalators to the 2 floor, turn left",
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
    img: womens,
    name: "Womens Center",
    desc: "Building B, 2nd floor, North Wing of Main Building",
  },
];

export default function ClinicCenters() {
  return (
    <div className="py-10 px-10 my-10 md:container md:mx-auto rounded-xl shadow-xl">
      <h1 className="text-[32px] font-bold text-blue text-center">Clinic & Centers</h1>
      <div className="my-5">
        <Divider />
      </div>
      <div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          breakpoints={{
            // Small screens (up to 640px)
            640: {
              slidesPerView: 1,
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
          // pagination={true}
          modules={[EffectCoverflow]}
          className="mySwiper"
        >
          {swiperslides.map((sc, i) => (
            <SwiperSlide key={i}>
              <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div class="h-96 w-72">
                  <img
                    class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                    src={sc.img}
                    alt=""
                  />
                </div>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent from-black/70 via-black/60 to-black/70"></div>
                <div class="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center p-5 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 class="font-dmserif text-xl font-bold text-white">
                    {sc.name}
                  </h1>
                  <p class="mb-3 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {sc.desc.slice(0,100)}
                  </p>
                  <Link class="bg-white shadow-xl rounded-xl py-2 px-3.5 font-com text-sm capitalize text-blue font-semibold">
                    See More
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
