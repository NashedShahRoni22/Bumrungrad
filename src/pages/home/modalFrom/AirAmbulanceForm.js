import React from 'react'

import { TextField } from '@mui/material'
const AirAmbulanceForm = () => {
  const addPatient = (event) => {
    event.preventDefault()
    const form = event.target
    const date = form.date.value
    const file = form.file.value
    const caseSummary = form.caseSummary.value
    const briflySummary = form.writeBrifly.value

    const getAirAmbulance = {
      date,
      file,
      caseSummary,
      briflySummary,
    }
    //console.log( getAirAmbulance)
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
        onSubmit={addPatient}
        className='mt-3 mb-2 md:w-full max-w-screen-lg sm:w-96'
      >
        <div className='mb-2 flex flex-col gap-6'>
          <div className='h-[50px]'>
            <p className='mb-2 font-semibold text-sm'>Enter Date</p>
            <TextField type='date' name='date' fullWidth required />
          </div>
          <div className='h-[50px] mt-4'>
            <p className='mb-1 font-semibold text-sm'>
              Attach Your Passport Copy
            </p>
            <TextField type='file' name='file' fullWidth required />
          </div>
          <div className='mt-4'>
            <p className='mb-2 font-semibold text-sm'>Upload Case Summary</p>
            <TextField
              multiline
              name='caseSummary'
              rows={2}
              fullWidth
              required
            />
          </div>
          <div>
            <p className='mb-2 font-semibold text-sm'>Write In Brifley</p>
            <TextField
              multiline
              name='writeBrifly'
              rows={2}
              fullWidth
              required
            />
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

export default AirAmbulanceForm
