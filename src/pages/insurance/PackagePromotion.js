import React from 'react'
import packageimg from '../../assets/insurance/Bumrungrad  Hospital_Packages-Promotion1.png'
import weacceptimg from '../../assets/insurance/Bumrungrad  Hospital_We-Accept-Active2.png'
import goodvibesimg from '../../assets/insurance/Bumrungrad  Hospital_Good-Vibes-2023.png'
import virtualBookImg from '../../assets/insurance/Bumrungrad  Hospital_virtualBook.png'
import fairpromotionImg from '../../assets/insurance/Bumrungrad  Hospital_fairpromotion.jpg'
import aiamyanmerImg from '../../assets/insurance/Bumrungrad  Hospital_aiaMyanmer.jpg'
import fluvaccineImg from '../../assets/insurance/Bumrungrad  Hospital_fluvaccine.jpg'
import ayudhayaImg from '../../assets/insurance/Bumrungrad  Hospital_MicrosoftTeams-image-(63).jpg'
import axaImg from '../../assets/insurance/Bumrungrad  Hospital_Aw-BH-AXA-05-260623.jpg'

import OnePromotion from './OnePromotion'
const PackagePromotion = () => {
  const questionsAns = [
    {
      question: 'Virtual Book Medical Assistance Company',
      img: virtualBookImg,
      url: 'https://bumrungrad.aflip.in/good_vibes_EN.html?utm_source=poster&utm_medium=qrcode&utm_campaign=flipbook-good-vibes-EN-for-17-aug-23',
      target: '_blank',
    },
    {
      question: 'Insurance Health Fair Promotion 2023',
      img: fairpromotionImg,
    },
    {
      question: 'AIA Myanmar',
      img: aiamyanmerImg,
    },
    {
      question: 'AIA Flu Vaccine',
      img: fluvaccineImg,
    },
    {
      question: 'Allianz Ayudhya',
      img: ayudhayaImg,
    },
    {
      question: 'Krungthai-AXA – iHealthy Platinum',
      img: axaImg,
    },
  ]
  return (
    <section className='mx-5 md:container md:mx-auto'>
      <div className='h-[20vh] md:h-[30vh] lg:h-[50vh] insurance-packagePromotion relative flex justify-center items-center'>
        <div className='absolute top-0 h-full w-full bg-black/60'></div>
        <h1 className='uppercase text-xl text-center md:text-2xl lg:text-3xl font-bold text-white z-10'>
          Insurance Packages and Promotion 2024
        </h1>
      </div>
      <div className='mx-10 my-10'>
        {questionsAns?.map((questionans, i) => (
          <OnePromotion key={i} i={i} questionans={questionans} />
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

export default PackagePromotion
