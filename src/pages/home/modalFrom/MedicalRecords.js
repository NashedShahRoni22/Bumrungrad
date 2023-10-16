import React, { useState } from 'react'
import { TextField } from '@mui/material'

const MedicalRecords = () => {
  //loader
  const [loader, setLoader] = useState()

  const [passport, setPassport] = useState('')
  const [hnNum, setHnNum] = useState('')
  const [caseSummary, setCaseSummary] = useState('')

  const addPatient = (event) => {
    setLoader(true)
    event.preventDefault()
    const form = event.target
    const getAirAmbulance = {
      passport,
      hnNum,
      caseSummary,
    }
    console.log(getAirAmbulance)

    const formData = new FormData()

    formData.append('passport', passport)
    formData.append('caseSummary', caseSummary)
    formData.append('hnNum', hnNum)

    fetch('https://api.bumrungraddiscover.com/api/add/medical/report', {
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
        onSubmit={addPatient}
        className='mt-3 mb-2 md:w-full max-w-screen-lg sm:w-96'
      >
        <div className='mb-2 flex flex-col gap-6'>
          <div className='mt-2'>
            <p className='mb-2 font-semibold text-sm'>
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
            <p className='mb-2 font-semibold text-sm'>HN Number</p>
            <TextField onChange={(e) => setHnNum(e.target.value)} fullWidth />
          </div>
          <div className='mt-2'>
            <p className='mb-2 font-semibold text-sm'>Report Details</p>
            <TextField
              multiline
              onChange={(e) => setCaseSummary(e.target.value)}
              rows={4}
              fullWidth
            />
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

export default MedicalRecords