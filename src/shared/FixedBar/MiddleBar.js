import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import EventAvailableIcon from '@mui/icons-material/EventAvailable'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import { Link } from 'react-router-dom'

export default function MiddleBar() {
  return (
    <section className='flex justify-center mx-5'>
      <div className='flex gap-1 justify-center bg-blue backdrop-blur-xl rounded-xl'>
        <Link
          to='/find'
          className='rounded-l-xl flex flex-col md:flex-row  gap-2.5 px-3 py-2 md:px-6 md:py-4 hover:bg-green items-center duration-300 ease-linear cursor-pointer text-white'
        >
          <SearchIcon sx={{ fontSize: '24px' }} />
          <p className='text-[16px] text-center flex gap-1'>
            Find <span className='hidden md:block'>Doctor</span>{' '}
          </p>
        </Link>
        <Link
          to='/appointment'
          className='flex flex-col md:flex-row  gap-2.5 px-3 py-2 md:px-6 md:py-4 hover:bg-green items-center duration-300 ease-linear cursor-pointer text-white'
        >
          <EventAvailableIcon sx={{ fontSize: '24px' }} />
          <p className='text-[16px] text-center flex gap-1'>
            {' '}
            <span className='hidden md:block'>Book</span> Appointment
          </p>
        </Link>
        <Link
          to='/send_query'
          className='rounded-r-xl flex flex-col md:flex-row  gap-2.5 px-3 py-2 md:px-6 md:py-4 hover:bg-green items-center duration-300 ease-linear cursor-pointer text-white'
        >
          <HelpOutlineIcon sx={{ fontSize: '24px' }} />

          <p className='text-[16px] text-center flex gap-1'>
            {' '}
            <span className='hidden md:block'>Send</span> Query
          </p>
        </Link>
      </div>
    </section>
  )
}
