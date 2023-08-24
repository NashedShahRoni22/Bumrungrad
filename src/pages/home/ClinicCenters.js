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

const swiperslides = [
  {
    img: eyeimg,
    name: "Eye Center",
    desc: "Examination, treatment and surgical options by experienced ophthalmologists, using advanced technology.",
  },
  {
    img: prideimg,
    name: "Pride Clinic",
    desc: "The services available from the Pride Clinic at Bumrungrad International Hospital cover every dimension of patient care called ‘Holistic Integrated and Personalized Care’.     ",
  },
  {
    img: digestdiseaseimg,
    name: "Digest Disease Center",
    desc: "Screening, diagnosis and treatment of GI problems, including stomach, liver, and bowel diseases, by specialists in Gastroenterology and Hepatology",
  },
  {
    img: breastimg,
    name: "Breast Center",
    desc: "Our breast specialists help women with breast cancer, non-cancerous tumors, lumps, breast pain, fibrocystic disease and other conditions.",
  },
  {
    img: neuroscienceimg,
    name: "Neuro Science",
    desc: "Diagnostic, therapeutic, surgical, rehabilitation services for epilepsy, migraine, dementia, Parkinson's and movement disorders. JCI-accredited stroke program.",
  },
  {
    img: womens,
    name: "Womens Center",
    desc: " Over 60 Ob/Gyn’s, including experts in fetal assessment, pre-natal genetics, high-risk pregnancy, menopause, gynecological and breast cancer. Fertility Clinic.",
  },
];

export default function ClinicCenters() {
  return (
    <div className="py-10 px-10 my-10 md:container md:mx-auto rounded-xl shadow-xl">
      <h1 className="text-[32px] font-bold text-blue">Clinic & Centers</h1>
      <div className="my-10">
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
              <div className="relative group">
                <img
                  src={sc.img}
                  alt=""
                  className="min-w-full min-h-[400px] max-h-[600px]"
                />
                <div className="absolute top-0 h-full w-full bg-black/60 flex items-end">
                  <div className="flex flex-col text-white justify-end gap-1 p-5">
                    <h5 className="text-xl font-semibold">{sc.name}</h5>
                    <p className="">{sc.desc.slice(0, 60)}...</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
