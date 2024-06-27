import React from 'react'
import packageimg from '../../assets/insurance/Bumrungrad  Hospital_Packages-Promotion1.png'
import weacceptimg from '../../assets/insurance/Bumrungrad  Hospital_We-Accept-Active2.png'
import goodvibesimg from '../../assets/insurance/Bumrungrad  Hospital_Good-Vibes-2023.png'
import img1 from '../../assets/insurance/Bumrungrad  Hospital_Allianz-Ayudhya1.jpg'

import OneWeAccept from './OneWeAccept'
import { Helmet, HelmetProvider } from 'react-helmet-async'
const WeAccept = () => {
  const questionsAns = [
    {
      question: 'Thailand Company Direct Billing Contracts',
      datas: [
        {
          ans: 'Allianz Ayudhya General Insurance',
          img: img1,
        },
        {
          ans: 'Allianz Ayudhya General Insurance',
          img: img1,
        },
        {
          ans: 'Allianz Ayudhya General Insurance',
          img: img1,
        },
      ],
    },
    {
      question: 'Thailand Company Direct Billing Contracts',
      datas: [
        {
          ans: 'Allianz Ayudhya General Insurance',
          img: img1,
        },
        {
          ans: 'Allianz Ayudhya General Insurance',
          img: img1,
        },
        {
          ans: 'Allianz Ayudhya General Insurance',
          img: img1,
        },
      ],
    },
  ]
  return (
    <section className='mx-5 md:container md:mx-auto'>
      <HelmetProvider>
        {' '}
        <Helmet>
          <meta charSet='utf-8' />
          <title>
            Bumrungrad Hospital: Accepted Insurance | Your Healthcare Path
          </title>
          <meta
            name='description'
            content='Discover care at Bumrungrad International Hospital. Explore insurance plans for seamless healthcare. Your well-being is our priority.
'
          />
          <link
            rel='canonical'
            href='https://discoverinternationalmedicalservice.com/insurance-we-accept'
          />
        </Helmet>
      </HelmetProvider>
      <div className='h-[20vh] md:h-[30vh] lg:h-[50vh] insurance-back relative flex justify-center items-center'>
        <div className='absolute top-0 h-full w-full bg-black/60'></div>
        <h1 className='uppercase text-xl text-center md:text-2xl lg:text-3xl font-bold text-white z-10'>
          Insurance
        </h1>
      </div>

      <div className='mx-10 my-10'>
        {questionsAns?.map((questionans, i) => (
          <OneWeAccept key={i} i={i} questionans={questionans} />
        ))}
      </div>
      <div className=' my-10 bg-cream'>
        <div className='flex justify-center flex-wrap p-10'>
          <img
            src={packageimg}
            alt='Bumrungrad International Hospital'
            srcset=''
          />
          <img
            src={weacceptimg}
            alt='Bumrungrad International Hospital'
            srcset=''
          />
          <img
            src={goodvibesimg}
            alt='Bumrungrad International Hospital'
            srcset=''
          />
        </div>
      </div>
    </section>
  )
}

export default WeAccept
