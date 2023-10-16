import React from 'react'
import personImg from '../../../assets/clinic_center/Women-Center.jpg'
import PersonIcon from '@mui/icons-material/Person'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
const VisaProcessing = () => {
  return (
    <div className='flex flex-col justify-center items-center py-5 gap-4 shadow rounded-xl'>
      <div className='mb-2'>
        <img
          src={personImg}
          alt=''
          className='w-[100px] h-[100px] rounded-full mx-auto my-0'
          srcset=''
        />
      </div>
      <div>
        <div className='flex items-center gap-2'>
          <PersonIcon className='text-blue' />
          <p className='text-center text-xl font-semibold'>Abdus Samad</p>
        </div>

        <a
          href='http://wa.me/+8801847284867'
          target='_blank'
          rel='noopener noreferrer'
          alt='whatsApp'
        >
          <div className='flex items-center justify-center gap-2 mt-2'>
            <WhatsAppIcon className='text-green' />
            <p className='text-xl font-semibold'>01847284867</p>
          </div>
        </a>
      </div>
    </div>
  )
}

export default VisaProcessing
