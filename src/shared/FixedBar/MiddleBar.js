import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import EventAvailableIcon from '@mui/icons-material/EventAvailable'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import { Link } from 'react-router-dom'

import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import { AiFillCloseCircle } from 'react-icons/ai'

import apoointDoctor from '../../assets/appointment doctor.jpg'
import healthScrenning from '../../assets/health Screnning.jpg'

export default function MiddleBar() {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

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
        <button
          onClick={handleClickOpen}
          className='flex flex-col md:flex-row  gap-2.5 px-3 py-2 md:px-6 md:py-4 hover:bg-green items-center duration-300 ease-linear cursor-pointer text-white'
        >
          <EventAvailableIcon sx={{ fontSize: '24px' }} />
          <p className='text-[16px] text-center flex gap-1'>
            {' '}
            <span className='hidden md:block'>Book</span> Appointment
          </p>
        </button>
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

      <React.Fragment>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
          <DialogContent className='relative'>
            <div className='flex justify-between'>
              <h5 className='font-semibold md:text-xl capitalize'>
                Choose appointment type
              </h5>
              <button onClick={handleClose}>
                <AiFillCloseCircle className='text-2xl md:text-4xl text-red' />
              </button>
            </div>
            <div className='flex mt-5 gap-2'>
              <div className=''>
                <Link to='/check_up' className='relative'>
                  <div className='absolute z-10 top-0 h-[100%] w-full bg-black/50 rounded-lg'></div>
                  <div className='absolute bottom-0 z-30 w-full bg-blue rounded-bl-lg rounded-br-lg'>
                    <h2 className='text-white md:font-medium text-sm md:text-xl text-center p-1 md:py-3'>
                      Health Screnning
                    </h2>
                  </div>

                  <img
                    src={healthScrenning}
                    alt='Bumrungrad Hospital'
                    srcset=''
                    className='rounded-lg'
                  />
                </Link>
              </div>
              <div className=''>
                <Link to='/appointment' className='relative'>
                  <div className='absolute z-10 top-0 h-[100%] w-full bg-black/50 rounded-lg'></div>
                  <div className='absolute bottom-0 z-30 w-full bg-blue rounded-bl-lg rounded-br-lg'>
                    <h2 className='text-white md:font-medium text-sm md:text-xl text-center p-1 md:py-3'>
                      Doctor Schedule
                    </h2>
                  </div>
                  <img
                    src={apoointDoctor}
                    alt='Bumrungrad Hospital'
                    srcset=''
                    className='rounded-lg'
                  />
                </Link>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </React.Fragment>
    </section>
  )
}
