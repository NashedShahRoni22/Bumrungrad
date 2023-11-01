import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loader from '../../shared/Loader/Loader'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
const ChildPackage = () => {
  const [loader, setLoader] = useState()
  const { id } = useParams()
  const [childPackage, setChildPackage] = useState([])

  useEffect(() => {
    setLoader(true)
    fetch(`https://api.bumrungraddiscover.com/api/get/sub/packages/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setChildPackage(data?.data)
          setLoader(false)
        }
        setLoader(false)
      })
  }, [id])
  return (
    <section className='mx-5 md:container md:mx-auto py-10'>
      {loader ? (
        <Loader />
      ) : (
        <div>
          {childPackage?.length > 0 ? (
            <>
              <h2 className='md:ml-8 text-xl font-semibold md:text-2xl lg:text-3xl capitalize text-blue'>
                our packages
              </h2>
              <div className='md:ml-8 my-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {' '}
                {childPackage.map((cp, i) => (
                  <div
                    key={i}
                    className='flex flex-col justify-between gap-2 shadow'
                  >
                    <img src={cp?.cover_photo} alt='' />
                    <div className='p-2.5'>
                      <p className='font-semibold text-blue md:text-xl'>
                        {cp?.title}
                      </p>
                      <p>{cp?.description.slice(0, 200)}</p>
                    </div>
                    <Link
                      to={`/childPackage_details/${cp.id}`}
                      className='group bg-blue text-white p-2.5 w-full flex justify-center gap-2 rounded-bl rounded-br'
                    >
                      <RemoveRedEyeIcon />
                      <span className='capitalize'>View Package</span>
                    </Link>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <p className='min-h-[80vh] flex justify-center items-center text-3xl font-semibold'>
              Data Not Found
            </p>
          )}
        </div>
      )}
    </section>
  )
}

export default ChildPackage
