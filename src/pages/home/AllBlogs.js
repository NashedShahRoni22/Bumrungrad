import { Divider } from '@mui/material'
import { useEffect } from 'react'
import { useState } from 'react'
import Loader from '../../shared/Loader/Loader'
import { Link } from 'react-router-dom'

const AllBlogs = () => {
  const [allBlogData, setAllBlogData] = useState()
  const [loader, setLoader] = useState()

  useEffect(() => {
    setLoader(true)
    fetch('https://api.bumrungraddiscover.com/api/get/blogs')
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setAllBlogData(data?.data)
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
          Bumrungrad Health Blogs
        </h1>
        <div className='my-5'>
          <Divider />
        </div>
      </div>
      {loader ? (
        <Loader />
      ) : (
        <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3 my-10'>
          {allBlogData?.map((d, i) => (
            <div
              key={i}
              className='shadow rounded hover:shadow-xl duration-300 ease-linear flex flex-col justify-between'
            >
              <img src={d.blogImage} alt='' className='' />
              <div className='p-4'>
                {' '}
                <h5 className='font-semibold text-blue text-lg'>
                  {d.blogTitle}
                </h5>
                <p className='my-3 text-justify'>
                  {d.blogDescription?.slice(0, 160)} ...
                </p>
              </div>
              <div className='p-4'>
                <Link to={`/one-Blog/${d?.id}`}>
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

export default AllBlogs
