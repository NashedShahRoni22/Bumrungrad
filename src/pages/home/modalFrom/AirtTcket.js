import React, { useState } from 'react'
import { TextField } from '@mui/material'
import { useEffect } from 'react'
const AirtTcket = () => {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    fetch('countries.json')
      .then((res) => res.json())
      .then((data) => setCountries(data))
  }, [])

  const airTicket = (event) => {
    event.preventDefault()
    const form = event.target
    const flyDate = form.date.value
    const countryName = form.country.value
    const getAirTicket = {
      flyDate,
      countryName,
    }
    //console.log(getAirTicket)
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
        onSubmit={airTicket}
        className='mt-3 mb-2 md:w-full max-w-screen-lg sm:w-96'
      >
        <div className='mb-2 flex flex-col gap-6'>
          <div className='mt-4'>
            <p className='mb-2.5 font-semibold text-sm'>Enter Your Fly date</p>
            <TextField type='date' name='date' fullWidth required />
          </div>
          <div>
            <p className='mb-2.5 font-semibold text-sm'>From Country</p>
            <TextField
              id='filled-select-currency-native'
              select
              fullWidth
              name='country'
              required
              SelectProps={{
                native: true,
              }}
              helperText='Please select your country'
            >
              {countries.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </TextField>
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

export default AirtTcket
