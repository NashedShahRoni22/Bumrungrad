import { useState } from 'react'
import Loader from '../../shared/Loader/Loader'
import { useEffect } from 'react'
import { Divider } from '@mui/material'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const NewsAll = () => {
  const [allnewsData, setAllNewsData] = useState()
  const [loader, setLoader] = useState()

  useEffect(() => {
    setLoader(true)
    fetch('https://api.discoverinternationalmedicalservice.com/api/get/news')
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setAllNewsData(data?.data)
          setLoader(false)
        } else {
          console.log(data)
          setLoader(false)
        }
      })
  }, [])
  return (
    <div className='p-5 md:p-10 md:container md:mx-auto'>
      <div className=''>
        <h1 className='capitalize text-xl md:text-2xl lg:text-3xl font-bold text-blue'>
          Bumrungrad News
        </h1>
        <div className='my-5'>
          <Divider />
        </div>
      </div>
      {loader ? (
        <Loader />
      ) : (
        <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3 my-10'>
          {allnewsData?.map((d, i) => (
            <div
              key={i}
              className='shadow rounded hover:shadow-xl duration-300 ease-linear flex flex-col justify-between'
            >
              <LazyLoadImage
                src={d.newsImage}
                alt='Bumrungrad International Hospital'
                effect='blur'
                className=''
              />
              <div className='p-4'>
                {' '}
                <h5 className='font-semibold text-blue text-lg'>
                  {d.newsTitle}
                </h5>
                <p className='my-3 text-justify'>
                  {d.newsDescription?.slice(0, 160)} ...
                </p>
              </div>
              <div className='p-4'>
                <Link to={`/one-News/${d?.id}`}>
                  <button className='border border-blue bg-blue hover:bg-white px-2 py-1 rounded hover:text-blue text-white duration-300 ease-linear'>
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default NewsAll
