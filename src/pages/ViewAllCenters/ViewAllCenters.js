import { Divider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import Loader from '../../shared/Loader/Loader'
import { Helmet, HelmetProvider } from 'react-helmet-async'

export default function ViewAllCenters() {
  const [loader, setLoader] = useState(false)
  const [slides, setSlides] = useState([])

  useEffect(() => {
    setLoader(true)
    fetch('https://api.bumrungraddiscover.com/api/get/centers')
      .then((res) => res.json())
      .then((data) => {
        setSlides(data?.response?.data)
        setLoader(false)
      })
  }, [])
  return (
    <div className='p-5 my-5 md:container md:mx-auto'>
      <HelmetProvider>
        {' '}
        <Helmet>
          <meta charSet='utf-8' />
          <title>Bumrungrad Hospital: Premier Care Clinics & Centers</title>
          <meta
            name='description'
            content="Discover premier care at Bumrungrad Hospital's top clinics & centers. Tailored healthcare for your well-being. Experience excellence today."
          />
          <link
            rel='canonical'
            href='https://bumrungraddiscover.com/clinic_centers'
          />
        </Helmet>
      </HelmetProvider>
      <div className='flex justify-between items-center'>
        <h1 className='capitalize text-xl md:text-2xl lg:text-3xl font-bold text-blue'>
          Clinic & Centers
        </h1>
      </div>
      <div className='my-5'>
        <Divider />
      </div>
      {loader ? (
        <Loader />
      ) : (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5'>
          {/* cards  */}
          {slides?.map((sc, i) => (
            <div
              key={i}
              className='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'
            >
              <div>
                <img
                  className='min-h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'
                  src={sc?.cover_photo}
                  alt='Bumrungrad Hospital'
                />
              </div>
              <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent from-black/70 via-black/60 to-black/70'></div>
              <div className='absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center p-5 text-center transition-all duration-500 group-hover:translate-y-0'>
                <h2 className='mb-1 md:mb-3 font-dmserif md:text-xl font-bold text-white'>
                  {sc?.name}
                </h2>
                <p className='text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                  <span className='md:hidden'>
                    {sc?.description.slice(0, 60)} ...
                  </span>
                  <span className='hidden md:block lg:hidden'>
                    {sc?.description.slice(0, 100)} ...
                  </span>
                  <span className='hidden lg:block'>
                    {sc?.description.slice(0, 200)} ...
                  </span>
                </p>
                <Link
                  to={`/clinic_centers/${sc?.id}`}
                  className=' mt-3 bg-white shadow-xl rounded py-1 md:py-2 px-2 md:px-4 font-com text-sm capitalize text-blue font-semibold'
                >
                  See More
                </Link>
                <Link className='mt-1 hidden text-white px-1 py-1 rounded-full bg-blue'>
                  <ArrowOutwardIcon />
                </Link>
              </div>
            </div>
          ))}
          <div className='custom-pagination mt-5 flex gap-2 justify-center'></div>
        </div>
      )}
    </div>
  )
}
