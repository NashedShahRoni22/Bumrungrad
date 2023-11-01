import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../shared/Loader/Loader'

const ChildPackageDetails = () => {
  const [loader, setLoader] = useState()
  const { id } = useParams()
  const [childDetailsPackage, setChildDetailsPackage] = useState({})

  useEffect(() => {
    setLoader(true)
    fetch(`https://api.bumrungraddiscover.com/api/get/sub/package/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setChildDetailsPackage(data?.data)
          setLoader(false)
        }
        setLoader(false)
      })
  }, [id])
  return (
    <section className='mx-5 md:container md:mx-auto py-10'>
      {loader ? (
        <Loader></Loader>
      ) : (
        <div>childDetailsPackage :{childDetailsPackage.title}</div>
      )}
    </section>
  )
}

export default ChildPackageDetails
