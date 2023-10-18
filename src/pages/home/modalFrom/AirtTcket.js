import React, { useState } from 'react'
import { TextField } from '@mui/material'
import { useEffect } from 'react'
const AirtTcket = () => {
  //loader
  const [loader, setLoader] = useState()
  //Input field states
  const [flydate, setFlydate] = useState('')
  const [passport, setPassport] = useState('')
  const [country, setCountry] = useState('')
  const [destination, setDestination] = useState('')

  //data state
  const [countries, setCountries] = useState([])
  useEffect(() => {
    fetch('countries.json')
      .then((res) => res.json())
      .then((data) => setCountries(data))
  }, [])

  const handaleAirTicket = (event) => {
    setLoader(true)
    event.preventDefault()
    const form = event.target

    const getAirTicket = {
      booking_date: flydate,
      doc: passport,
      country: country,
      destination: destination
    }
    console.log(getAirTicket)
    const formData = new FormData()
    formData.append('booking_date', flydate)
    formData.append('doc', passport)
    formData.append('country', country)
    formData.append('destination', destination)

    fetch('https://api.bumrungraddiscover.com/api/add/air/ticket', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          console.log(data)
          setLoader(false)
        }
      })
      .catch((error) => console.error(error))

    form.reset()
  }
  return (
    <div>
      <form
        onSubmit={handaleAirTicket}
        className='mt-3 mb-2 md:w-full max-w-screen-lg sm:w-96'
      >
        <div className='mb-2 flex flex-col gap-6'>
          <div className='mt-2'>
            <p className='mb-2.5 font-semibold text-sm'>Enter Your Fly Date</p>
            <TextField
              type='date'
              onChange={(e) => setFlydate(e.target.value)}
              fullWidth
              required
            />
          </div>
          <div className='mt-2'>
            <p className='mb-2.5 font-semibold text-sm'>
              Attach Your Passport Copy
            </p>
            <TextField
              type='file'
              onChange={(e) => setPassport(e.target.files[0])}
              fullWidth
              required
            />
          </div>
          <div className='mt-2'>
            <p className='mb-2.5 font-semibold text-sm'>From Country</p>
            <TextField
              id='filled-select-currency-native'
              select
              fullWidth
              onChange={(e) => setCountry(e.target.value)}
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

          <div className='mt-2'>
            <p className='mb-2.5 font-semibold text-sm'>To Country</p>
            <TextField
              id='filled-select-currency-native'
              select
              fullWidth
              onChange={(e) => setDestination(e.target.value)}
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
          {loader ? 'Loading...' : 'Submit'}
        </button>
      </form>
    </div>
  )
}

export default AirtTcket
