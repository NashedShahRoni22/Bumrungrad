import React, { useEffect, useState } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import Loader from '../../shared/Loader/Loader'
import { Link } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'

export default function ParentPackages() {
  const [loader, setLoader] = useState(false)
  const [packages, setPackages] = useState([])

  useEffect(() => {
    setLoader(true)
    fetch('https://api.bumrungraddiscover.com/api/get/package')
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setPackages(data?.data)
          setLoader(false)
        } else {
          console.log(data)
          setLoader(false)
        }
      })
  }, [])
  return (
    <section className='mx-5 md:container md:mx-auto py-10'>
      <HelmetProvider>
        {' '}
        <Helmet>
          <meta charSet='utf-8' />
          <title>
            Bumrungrad Hospital: Explore Comprehensive Healthcare Packages
          </title>
          <meta
            name='description'
            content="Explore Bumrungrad Hospital's comprehensive healthcare packages for personalized wellness. Your path to optimal health begins here. #HealthcarePackages
"
          />
          <link
            rel='canonical'
            href='https://bumrungraddiscover.com/packages'
          />
        </Helmet>
      </HelmetProvider>
      <h2 className='text-xl font-semibold md:text-2xl lg:text-3xl capitalize text-blue'>
        our packages
      </h2>
      {loader ? (
        <Loader />
      ) : (
        <div className='my-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {packages.map((p, i) => (
            <div key={i} className='flex flex-col justify-between gap-2 shadow'>
              <img src={p?.cover_photo} alt='Bumrungrad Hospital' />
              <div className='p-2.5'>
                <p className='font-semibold text-blue md:text-xl'>{p?.title}</p>
                <p>{p?.description.slice(0, 200)}</p>
              </div>
              <Link
                to={`/package_details/${p.id}`}
                className='group bg-blue text-white p-2.5 w-full flex justify-center gap-2 rounded-bl rounded-br'
              >
                <RemoveRedEyeIcon />
                <span className='capitalize'>See Packages</span>
              </Link>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
