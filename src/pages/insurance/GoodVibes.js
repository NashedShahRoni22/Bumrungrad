import React from 'react'
import packageimg from '../../assets/insurance/Bumrungrad  Hospital_Packages-Promotion1.png'
import weacceptimg from '../../assets/insurance/Bumrungrad  Hospital_We-Accept-Active2.png'
import goodvibesimg from '../../assets/insurance/Bumrungrad  Hospital_Good-Vibes-2023.png'
import virtualBookImg from '../../assets/insurance/Bumrungrad  Hospital_virtualBook.png'
import AmbulanceImg from '../../assets/insurance/Bumrungrad  Hospital_Amb-EN1200.jpg'
import OneGoodVibes from './OneGoodVibes'

const GoodVibes = () => {
  const questionsAns = [
    {
      question: 'Virtual Book Good Vibes Magazine',
      datas: [
        {
          ans: '',
          img: virtualBookImg,
          url: 'https://bumrungrad.aflip.in/good_vibes_EN.html?utm_source=poster&utm_medium=qrcode&utm_campaign=flipbook-good-vibes-EN-for-17-aug-23',
          target: '_blank',
          imgclass: 'w-[80%] h-[50%] mx-auto',
        },
      ],
    },
    {
      question:
        'Goodvibes : Bed-to-Bed Service :  Free Ambulance service distance within 250 Kilometers ',
      datas: [
        {
          text: 'text-2xl text-center text-blue',
          ans: 'Bed-to-Bed Service :  Free Ambulance service distance within 250 Kilometers ',
          img: AmbulanceImg,
          imgclass: 'w-[80%] h-[50%] mx-auto',
        },
      ],
    },
    {
      question: 'Insurance',
      datas: [
        {
          text: 'text-sm text-blue md:ml-8 hover:underline',
          ans: 'Allianz Ayudhya General Insurance',
          imgclass: 'hidden',
          url: 'https://www.bumrungrad.com/getattachment/e3a84b54-f33d-4c2a-b597-0d8a84797b54/BH-Package-Good-Vibes-2023-EN-AAGI-03-250523-01.jpg?lang=en-US',
          target: '_blank',
          hr: <hr className='mt-5 md:ml-5 md:mr-5'></hr>,
        },
        {
          text: 'text-sm text-blue md:ml-8 hover:underline',
          ans: 'Insured of AIA',
          imgclass: 'hidden',
          url: 'https://www.bumrungrad.com/getattachment/d1113139-d465-4bfa-8543-c499e11d9fe6/BH-Package-Good-Vibes-2023-EN-AIA-04-250523-01.jpg?lang=en-US',
          target: '_blank',
          hr: <hr className='mt-5 md:ml-5 md:mr-5'></hr>,
        },
        {
          text: 'text-sm text-blue md:ml-8 hover:underline',
          ans: 'Insured of Allianz Ayudhya',
          imgclass: 'hidden',
          url: 'https://www.bumrungrad.com/getattachment/c81a4f50-646b-4640-bb34-6333c854ec18/AZAY-EN.pdf?lang=en-US',
          target: '_blank',
          hr: <hr className='mt-5 md:ml-5 md:mr-5'></hr>,
        },
        {
          text: 'text-sm text-blue md:ml-8 hover:underline',
          ans: 'Insured of Bangkok Life Assurance',
          imgclass: 'hidden',
          url: 'https://www.bumrungrad.com/getattachment/6744724d-be95-4833-bfd7-efef209b7dbb/BH-Package-Good-Vibes-2023-EN-Bangkok-Life-Assurance-05-250523-01.jpg?lang=en-US',
          target: '_blank',
          hr: <hr className='mt-5 md:ml-5 md:mr-5'></hr>,
        },
        {
          text: 'text-sm text-blue md:ml-8 hover:underline',
          ans: 'Insured of Chubb Life Assurance',
          imgclass: 'hidden',
          url: 'https://www.bumrungrad.com/getattachment/dfc76ca2-2a45-404c-96ce-ed228560f79d/CHUBB-EN-(1).pdf?lang=en-US',
          target: '_blank',
          hr: <hr className='mt-5 md:ml-5 md:mr-5'></hr>,
        },
        {
          text: 'text-sm text-blue md:ml-8 hover:underline',
          ans: 'Insured of FWD Life Insurance',
          imgclass: 'hidden',
          url: 'https://www.bumrungrad.com/getattachment/60374024-25c5-4cec-b91e-0976388357ea/BH-Package-Good-Vibes-2023-EN-FWD-04-250523-01.jpg?lang=en-US',
          target: '_blank',
          hr: <hr className='mt-5 md:ml-5 md:mr-5'></hr>,
        },
        {
          text: 'text-sm text-blue md:ml-8 hover:underline',
          ans: 'Insured of Luma',
          imgclass: 'hidden',
          url: 'https://www.bumrungrad.com/getattachment/c5d0be45-0cfe-4943-9c6d-5194b7a6b9da/BH-Package-Good-Vibes-2023-EN-Luma-02-250523-01.jpg?lang=zh-CN',
          target: '_blank',
          hr: <hr className='mt-5 md:ml-5 md:mr-5'></hr>,
        },
        {
          text: 'text-sm text-blue md:ml-8 hover:underline',
          ans: 'Insured of Muang Thai Life Assurance',
          imgclass: 'hidden',
          url: 'https://www.bumrungrad.com/getattachment/faa906e9-4ba7-45c2-a913-2243e5926d37/Muangthai-Life-EN.pdf?lang=en-US',
          target: '_blank',
          hr: <hr className='mt-5 md:ml-5 md:mr-5'></hr>,
        },
        {
          text: 'text-sm text-blue md:ml-8 hover:underline',
          ans: 'Insured of Ocean Life',
          imgclass: 'hidden',
          url: 'https://www.bumrungrad.com/getattachment/91787b72-a896-4c84-880d-2eac4aef64df/BH-Package-Good-Vibes-2023-EN-OCEAN-LIFE-03-250523-01.jpg?lang=en-US',
          target: '_blank',
          hr: <hr className='mt-5 md:ml-5 md:mr-5'></hr>,
        },
        {
          text: 'text-sm text-blue md:ml-8 hover:underline',
          ans: 'Insured of Pacific Cross Health',
          imgclass: 'hidden',
          url: 'https://www.bumrungrad.com/getattachment/74226707-063c-4d49-921d-31b6a4217e43/BH-Package-Good-Vibes-2023-EN-Pacific-Cross-04-250523-01.jpg?lang=en-US',
          target: '_blank',
          hr: <hr className='mt-5 md:ml-5 md:mr-5'></hr>,
        },
        {
          text: 'text-sm text-blue md:ml-8 hover:underline',
          ans: 'Insured of Phillip Life',
          imgclass: 'hidden',
          url: 'https://www.bumrungrad.com/getattachment/d52130b1-f794-47d1-9429-a2c29ebc0850/BH-Package-Good-Vibes-2023-EN-PhillipLife-03-250523-01.jpg?lang=en-US',
          target: '_blank',
          hr: <hr className='mt-5 md:ml-5 md:mr-5'></hr>,
        },
        {
          text: 'text-sm text-blue md:ml-8 hover:underline',
          ans: 'Insured of Prudential Life Assurance',
          imgclass: 'hidden',
          url: 'https://www.bumrungrad.com/getattachment/00d38027-8c1f-4d83-9e3c-4702cd72795e/BH-Package-Good-Vibes-2023-EN-PRUDENTIAL-04-250523-01.jpg?lang=en-US',
          target: '_blank',
          hr: <hr className='mt-5 md:ml-5 md:mr-5'></hr>,
        },
        {
          text: 'text-sm text-blue md:ml-8 hover:underline',
          ans: 'Insured of Rabbit Life',
          imgclass: 'hidden',
          url: 'https://www.bumrungrad.com/getattachment/5cdd992e-ceb8-4ee9-827e-da053ce442b6/MicrosoftTeams-image-(59).png?lang=en-US',
          target: '_blank',
          hr: <hr className='mt-5 md:ml-5 md:mr-5'></hr>,
        },
        {
          text: 'text-sm text-blue md:ml-8 hover:underline',
          ans: 'Insured of Samsung Life Insurance',
          imgclass: 'hidden',
          url: 'https://www.bumrungrad.com/getattachment/5e08e877-3c2f-4218-8e7a-c63af2c328eb/Samsung-EN.pdf?lang=en-US',
          target: '_blank',
          hr: <hr className='mt-5 md:ml-5 md:mr-5'></hr>,
        },
        {
          text: 'text-sm text-blue md:ml-8 hover:underline',
          ans: 'Insured of SCB Protect',
          imgclass: 'hidden',
          url: 'https://www.bumrungrad.com/getattachment/afa3e92a-6f29-4b17-b34a-886bdbf50fb4/BH-Package-Good-Vibes-2023-EN-SCB-04-250523-01.jpg?lang=en-US',
          target: '_blank',
          hr: <hr className='mt-5 md:ml-5 md:mr-5'></hr>,
        },
        {
          text: 'text-sm text-blue md:ml-8 hover:underline',
          ans: 'Insured of Thailife',
          imgclass: 'hidden',
          url: 'https://www.bumrungrad.com/getattachment/40a06b71-ced8-4d0e-a4f9-9d1626f469e2/BH-Package-Good-Vibes-2023-EN-Thailife-04-250523-01.pdf?lang=en-US',
          target: '_blank',
          hr: <hr className='mt-5 md:ml-5 md:mr-5'></hr>,
        },
        {
          text: 'text-sm text-blue md:ml-8 hover:underline',
          ans: 'Insured of Tokio marine Life',
          imgclass: 'hidden',
          url: 'https://www.bumrungrad.com/getattachment/a14045fd-b242-424f-bc38-bb474c25548c/BH-Package-Good-Vibes-2023-EN-TOKIO-Marine-04-250523-01.jpg?lang=en-US',
          target: '_blank',
          hr: <hr className='mt-5 md:ml-5 md:mr-5'></hr>,
        },
      ],
    },
    {
      question: 'International organization',
      datas: [
        {
          text: 'text-sm text-blue md:ml-8 hover:underline',
          ans: 'Cigna',
          imgclass: 'hidden',
          url: 'https://www.bumrungrad.com/getattachment/37db0970-ebea-497c-9a5e-45800465f25f/1.png?lang=en-US',
          target: '_blank',
          hr: <hr className='mt-5 md:ml-5 md:mr-5'></hr>,
        },
        {
          text: 'text-sm text-blue md:ml-8 hover:underline',
          ans: 'United Nations',
          imgclass: 'hidden',
          url: 'https://www.bumrungrad.com/getattachment/8ca76b52-42e5-4c71-9b7d-e743142da874/2.png?lang=en-US',
          target: '_blank',
          hr: <hr className='mt-5 md:ml-5 md:mr-5'></hr>,
        },
        {
          text: 'text-sm text-blue md:ml-8 hover:underline',
          ans: 'TRI CARE',
          imgclass: 'hidden',
          url: 'https://www.bumrungrad.com/getattachment/a6dd469e-f2ed-4217-9fdc-0db3867cd8a3/3.png?lang=en-US',
          target: '_blank',
          hr: <hr className='mt-5 md:ml-5 md:mr-5'></hr>,
        },
        {
          text: 'text-sm text-blue md:ml-8 hover:underline',
          ans: 'AFSPA',
          imgclass: 'hidden',
          url: 'https://www.bumrungrad.com/getattachment/e1c1034e-1256-4dcd-a734-4fbc0237e4e7/4.png?lang=en-US',
          target: '_blank',
          hr: <hr className='mt-5 md:ml-5 md:mr-5'></hr>,
        },
        {
          text: 'text-sm text-blue md:ml-8 hover:underline',
          ans: 'ICRC',
          imgclass: 'hidden',
          url: 'https://www.bumrungrad.com/getattachment/d16975c7-4bf9-45fa-a3f5-4feb9b54c3d8/5.png?lang=en-US',
          target: '_blank',
          hr: <hr className='mt-5 md:ml-5 md:mr-5'></hr>,
        },
        {
          text: 'text-sm text-blue md:ml-8 hover:underline',
          ans: 'US Embassy - BlueCross BlueShield',
          imgclass: 'hidden',
          url: 'https://www.bumrungrad.com/getattachment/90ac2024-6c15-4d10-84bb-bd7e0c69a6e0/6.png?lang=en-US',
          target: '_blank',
          hr: <hr className='mt-5 md:ml-5 md:mr-5'></hr>,
        },
      ],
    },
    {
      question: 'International School',
      datas: [
        {
          text: 'text-sm text-blue md:ml-8 hover:underline',
          ans: 'International School Bangkok',
          imgclass: 'hidden',
          url: 'https://www.bumrungrad.com/getattachment/be7b61aa-9a98-4623-aa8a-c0484cfd1fbe/MicrosoftTeams-image-(60).png?lang=en-US',
          target: '_blank',
          hr: <hr className='mt-5 md:ml-5 md:mr-5'></hr>,
        },
        {
          text: 'text-sm text-blue md:ml-8 hover:underline',
          ans: 'International School Phuket',
          imgclass: 'hidden',
          url: 'https://www.bumrungrad.com/getattachment/b965920c-4190-4e33-9da7-6c4c4520f648/MicrosoftTeams-image-(59).png?lang=en-US',
          target: '_blank',
          hr: <hr className='mt-5 md:ml-5 md:mr-5'></hr>,
        },
      ]
    },
  ]
  return (
    <section className='mx-5 md:container md:mx-auto'>
      <div className='h-[20vh] md:h-[30vh] lg:h-[50vh] insurance-goodvibes relative flex justify-center items-center'>
        <div className='absolute top-0 h-full w-full bg-black/60'></div>
        <h1 className='uppercase text-xl text-center md:text-2xl lg:text-3xl font-bold text-white z-10'>
          Insurance Good Vibes 2024
        </h1>
      </div>
      <div className='mx-10 my-10'>
        {questionsAns?.map((questionans, i) => (
          <OneGoodVibes key={i} i={i} questionans={questionans} />
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

export default GoodVibes
