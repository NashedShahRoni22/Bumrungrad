import React, { useEffect, useState } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import Loader from '../../shared/Loader/Loader'
import { Link } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

export default function ParentPackages() {
  const [loader, setLoader] = useState(false)
  const [packages, setPackages] = useState([])
  //const [currentPage, setCurrentPage] = useState(1)

  // console.log(`current page is ${currentPage}`)
  // const itemsPerPage = 4

  // const numberOfpage = Math.ceil(packages.length / itemsPerPage)
  // console.log(`number page is ${numberOfpage}`)
  // const pageIndex = Array.from({ length: numberOfpage }, (_, idx) => idx + 1)
  // console.log(pageIndex)

  // const handlePageChange = (pageNumber) => {
  //   setCurrentPage(pageNumber)
  //   console.log(pageNumber, 'right')
  // }
  // const indexOfLastItem = currentPage * itemsPerPage
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage

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
            content="Discover Bumrungrad International Hospital's tailored healthcare for wellness. Start your journey to optimal health with our comprehensive packages.

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
            <div
              key={i}
              className='flex flex-col justify-between  gap-2 shadow'
            >
              <LazyLoadImage
                src={p?.cover_photo}
                effect='blur'
                alt='Bumrungrad International Hospital'
              />
              <div className='p-2.5 h-[210px]'>
                <p className='font-semibold text-blue md:text-xl'>{p?.title}</p>
                <p className='pb-5'>{p?.description.slice(0, 150)}</p>
              </div>
              <Link
                to={`/package_details/${p.id}`}
                className='group bg-blue text-white p-2.5 w-full flex justify-center gap-2 rounded-bl rounded-br '
              >
                <RemoveRedEyeIcon />
                <span className='capitalize'>See Packages</span>
              </Link>
            </div>
          ))}
        </div>
      )}
      {/* <div className='flex justify-center gap-x-3'>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage < 2}
          className='border border-solid border-blue-700 px-5 py-3 bg-blue text-white rounded'
        >
          Previous
        </button>
        {pageIndex.map((index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={
              currentPage === index + 1
                ? 'border border-solid border-blue-700 px-5 py-3 bg-blue text-white rounded'
                : 'border border-solid border-blue-700 px-5 py-3 rounded'
            }
          >
            {index}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage > numberOfpage}
          className='border border-solid border-blue-700 px-5 py-3 bg-blue text-white rounded'
        >
          Next
        </button>
      </div> */}
    </section>
  )
}
