import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import './ClinicCenters.css'
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules'
import { Divider } from '@mui/material'
import { Link } from 'react-router-dom'

//import clinic images
import spine from '../../../src/assets/Bumrungrad Clinic Images/Bumrungrad  Hospital_Spine Institute.png'
import neuro from '../../../src/assets/Bumrungrad Clinic Images/Bumrungrad  Hospital_Neuroscience Center.png'
import heart from '../../../src/assets/Bumrungrad Clinic Images/Bumrungrad  Hospital_Heart Institute.png'
import digestive from '../../../src/assets/Bumrungrad Clinic Images/Bumrungrad  Hospital_GI Digestive Center.png'
import horizon from '../../../src/assets/Bumrungrad Clinic Images/Bumrungrad  Hospital_Horizon Regional Cancer Center.png'
import colorectal from '../../../src/assets/Bumrungrad Clinic Images/Bumrungrad  Hospital_Colorectal Surgery Center.png'
import urology from '../../../src/assets/Bumrungrad Clinic Images/Bumrungrad  Hospital_Urology Center.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

export default function ClinicCenters() {
  const clinicImages = [
    {
      id: '4',
      img: neuro,
      name: 'Neuroscience Center',
      desc: 'The brain and nervous system are responsible for our movement, behavior, learning, emotions, heart rate, and body temperature, etc. Therefore, if the nervous system suffers an injury or becomes diseased, it can cause serious, permanent, and even life-threatening problems.',
      alt: 'Bumrungrad International Hospital',
    },
    {
      id: '9',
      img: heart,
      name: 'Heart Institute',
      desc: 'Thailand’s society is set to become what is referred to as an ‘aging society’ before the end of 2021 due to the increase in its number of elderly people. This brings with it a host of health issues because our bodies deteriorate with age, placing them at greater risk of disease, especially non-communicable diseases (NCDs), such as coronary heart disease, diabetes, and obesity.',
      alt: 'Bumrungrad International Hospital',
    },
    {
      id: '2',
      img: digestive,
      name: 'Diagnostic Center',
      desc: 'Diagnostic Center at Bumrungrad International Hospital features some of the most advanced diagnostic and therapeutic modalities available in the world today.',
      alt: 'Bumrungrad International Hospital',
    },
    {
      id: '10',
      img: horizon,
      name: 'Horizon Regional Cancer Center',
      desc: 'The Horizon Regional Cancer Center at Bumrungrad International Hospital in Bangkok, Thailand provides comprehensive cancer care and treatment by a multidisciplinary team of cancer specialists, including preventionm, diagnosis, treatment, assessment of treatment plan and management of possible complications, emotional support, nutritional care, pain management, and close monitoring of possible recurrence.',
      alt: 'Bumrungrad International Hospital',
    },
    {
      id: '11',
      img: colorectal,
      name: 'Colorectal Surgery Center',
      desc: "The Outpatient Surgical Center at Bumrungrad International Hospital in Bangkok, Thailand offers a full range of surgical specialties. In most cases patients can arrange consultations with Thailand's premier surgeons with very little waiting time.",
      alt: 'Bumrungrad International Hospital',
    },
    {
      id: '12',
      img: urology,
      name: 'Urology Center',
      desc: "The urinary system acts as the body's drainage system. It removes urine, which is excess waste and water, from the body. In addition to being highly important in the elimination of waste and maintaining the balance of body fluids, the urinary system is also responsible for regulating blood pressure, blood volume, and blood pH levels. A dysfunction in the urinary system will severely affect a person’s health and quality of life.",
      alt: 'Bumrungrad International Hospital',
    },
    {
      id: '8',
      img: spine,
      name: 'Bumrungrad Spine Institute',
      desc: 'Bumrungrad Spine Institute is prepared to provide a comprehensive range of treatment and care for spine-related matters, with the experience of treating more than 12,000 spine patients in 12 years.',
      alt: 'Bumrungrad International Hospital',
    },
  ]
  return (
    <div className='p-5 md:p-10 my-5 md:my-10 md:container md:mx-auto rounded-xl shadow-xl'>
      <div className='flex justify-between items-center'>
        <h2 className='capitalize text-xl md:text-2xl lg:text-3xl font-bold text-blue'>
          Clinic & Centers
        </h2>
        <Link
          to={'/clinic_centers'}
          className='rounded px-2 md:px-4 py-1 md:py-2 border border-blue text-blue hover:bg-blue hover:text-white duration-300 ease-linear'
        >
          View All
        </Link>
      </div>
      <div className='my-5'>
        <Divider />
      </div>
      <div>
        <Swiper
          effect={'coverflow'}
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
            el: '.custom-pagination',
          }}
          modules={[EffectCoverflow, Pagination]}
          className='mySwiper'
        >
          {clinicImages?.map((sc, i) => (
            <SwiperSlide key={i}>
              <div className='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
                <div>
                  <LazyLoadImage
                    className='h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'
                    src={sc?.img}
                    alt={sc?.alt}
                  />
                </div>
                <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent from-black/70 via-black/60 to-black/70'></div>
                <div className='absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center p-5 text-center transition-all duration-500 group-hover:translate-y-0'>
                  <h2 className='mb-1 md:mb-3 font-dmserif md:text-xl font-bold text-white'>
                    {sc?.name}
                  </h2>
                  <p className='text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                    <span className='md:hidden'>
                      {sc?.desc.slice(0, 60)} ...
                    </span>
                    <span className='hidden md:block lg:hidden'>
                      {sc?.desc.slice(0, 100)} ...
                    </span>
                    <span className='hidden lg:block'>
                      {sc?.desc.slice(0, 200)} ...
                    </span>
                  </p>
                  <Link
                    to={`/clinic_centers/${sc?.id}`}
                    className=' mt-3 bg-white shadow-xl rounded py-1 md:py-2 px-2 md:px-4 font-com text-sm capitalize text-blue font-semibold'
                  >
                    See More
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='custom-pagination mt-5 flex gap-2 justify-center'></div>
      </div>
    </div>
  )
}
