import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../shared/Loader/Loader'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const OneBlog = () => {
  const { id } = useParams()
  const [loader, setLoader] = useState(true)
  const [oneBlog, setBlog] = useState({})
   useEffect(() => {
     fetch(`https://api.bumrungraddiscover.com/api/get/blogs/${id}`)
       .then((res) => res.json())
       .then((data) => {
         setBlog(data.data)
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
            <LazyLoadImage
              src={oneBlog?.blogImage}
              alt='Bumrungrad International Hospital'
              effect='blur'
              className='lg:h-[40vh]'
              srcset=''
            />
          </div>
          <div className=''>
            <h5 className='font-semibold text-blue text-xl'>
              {oneBlog?.blogTitle}
            </h5>
            <p className='my-3'>{oneBlog?.blogDescription}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default OneBlog