import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../shared/Loader/Loader'

const OneNews = () => {
  const { id } = useParams()
  const [loader, setLoader] = useState(true)
  const [oneNews, setNews] = useState({})
  useEffect(() => {
    fetch(`https://api.bumrungraddiscover.com/api/get/news/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setNews(data.data)
        setLoader(false)
      })
  }, [id])
  return (
    <div className='p-5 my-5 md:container md:mx-auto'>
      {loader ? (
        <Loader />
      ) : (
        <div className='flex flex-col gap-8 lg:flex-row'>
          <div className='lg:w-1/2'>
            <img
              src={oneNews?.newsImage}
              alt=''
              className='lg:h-[40vh]'
              srcset=''
            />
          </div>
          <div className=''>
            <h5 className='font-semibold text-blue text-xl'>
              {oneNews?.newsTitle}
            </h5>
            <p className='my-3'>{oneNews?.newsDescription}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default OneNews
