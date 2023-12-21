import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../shared/Loader/Loader";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css'

export default function SingleCenter() {
  const { id } = useParams();
  const [loader, setLoader] = useState(false);
  const [center, setCenter] = useState({});
  useEffect(() => {
    setLoader(true);
    fetch(`https://api.bumrungraddiscover.com/api/get/centers/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCenter(data?.response?.data);
        setLoader(false);
      });
  }, [id]);
  return (
    <div className='p-5 my-5 md:container md:mx-auto'>
      {loader ? (
        <Loader />
      ) : (
        <div className='flex flex-col items-center md:flex-row md:items-start gap-5 md:gap-10'>
          <div>
            <LazyLoadImage
              src={center?.cover_photo}
              effect='blur'
              className='h-[250px] md:h-[400px]'
              alt='Bumrungrad International Hospital'
            />
          </div>
          <div className='md:flex-1 flex flex-col gap-5'>
            <h5 className='text-xl font-semibold text-blue'>{center?.name}</h5>
            <p>
              {' '}
              <span className='font-semibold text-xl text-blue'>
                Location:
              </span>{' '}
              <br /> {center?.location}
            </p>
            <p>
              {' '}
              <span className='font-semibold text-xl text-blue'>
                Description:
              </span>{' '}
              <br /> {center?.description}
            </p>
            {center?.informations?.length > 0 && (
              <div>
                <h5 className='text-xl font-semibold text-blue'>
                  Informations
                </h5>
                <ul className='list-disc'>
                  {center?.informations?.map((c, i) => (
                    <li key={i}>{c?.information}</li>
                  ))}
                </ul>
              </div>
            )}
            {center?.conditions?.length > 0 && (
              <div>
                <h5 className='text-xl font-semibold text-blue'>Conditions</h5>
                <ul className='list-disc'>
                  {center?.conditions?.map((c, i) => (
                    <li key={i}>{c?.condition}</li>
                  ))}
                </ul>
              </div>
            )}
            {center?.treatments?.length > 0 && (
              <div>
                <h5 className='text-xl font-semibold text-blue'>Treatments</h5>
                <ul className='list-disc'>
                  {center?.treatments?.map((c, i) => (
                    <li key={i}>{c?.treatment}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
