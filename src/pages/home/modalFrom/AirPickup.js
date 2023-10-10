import React from 'react'
import { TextField } from '@mui/material'
import Appointment from './../../appointment/Appointment'
const AirPickup = () => {
  const orderAirPickup = (event) => {
    event.preventDefault()
    const form = event.target

    const appointmentfile = form.appointmentfile.value
    const airTicketFile = form.airTicketFile.value
    const passengerQuantity = parseInt(form.quantityPassenger.value)

    const getAirPickup = {
      appointmentfile,
      airTicketFile,
      passengerQuantity,
    }
    console.log(getAirPickup)
    /*  fetch('http://localhost:5000/bookings', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          refetch()
        }
      })
 */
    form.reset()
  }
  return (
    <div>
      <form
        onSubmit={orderAirPickup}
        className='mt-3 mb-2 md:w-full max-w-screen-lg sm:w-96'
      >
        <div className='mb-2 flex flex-col gap-6'>
          <div className='h-[50px] mt-4'>
            <p className='mb-1 font-semibold text-sm'>
              Patient Appointment File
            </p>
            <TextField type='file' name='appointmentfile' fullWidth required />
          </div>
          <div className='mt-4'>
            <p className='mb-2 font-semibold text-sm'>Air Ticket File</p>
            <TextField type='file' name='airTicketFile' fullWidth required />
          </div>
          <div>
            <p className='mb-2 font-semibold text-sm'>Number of Passenger</p>
            <TextField name='quantityPassenger' fullWidth required />
          </div>
        </div>
        <button
          type='submit'
          className='bg-blue text-white px-3 py-1 rounded float-left mt-3'
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default AirPickup
