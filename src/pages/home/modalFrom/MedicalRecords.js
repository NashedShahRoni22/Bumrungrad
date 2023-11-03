import React, { useState } from 'react'
import { TextField } from '@mui/material'

const MedicalRecords = () => {
  //loader
  const [loader, setLoader] = useState()

  const [passport, setPassport] = useState('')
  const [name, setName] = useState('')
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
      name,
    }
    console.log(getAirAmbulance)

    const formData = new FormData()

    formData.append('passport', passport)
    formData.append('name', name)
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
          window.location.reload();
          alert("Medical record request sent! Our support team will contact you soon.")
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
        className='mt-3 mb-2 md:w-full max-w-screen-lg sm:w-96 py-5'
      >
        <div className='mb-2 flex flex-col'>
          <div>
            <p className='mb-2 font-semibold text-sm'>
              {' '}
              <span className='text-red text-lg'>*</span>Enter Your Name
            </p>
            <TextField onChange={(e) => setName(e.target.value)} fullWidth />
          </div>
          <div className='mt-2'>
            <p className='mt-2 font-semibold text-sm'>
              <span className='text-red text-lg'>*</span> Attach Your Passport
              Copy
            </p>
            <TextField
              type='file'
              onChange={(e) => setPassport(e.target.files[0])}
              fullWidth
              required
            />
          </div>
          <div>
            <p className='mt-2 font-semibold text-sm'>
              {' '}
              <span className='text-red text-lg'>*</span> HN Number
            </p>
            <TextField onChange={(e) => setHnNum(e.target.value)} fullWidth />
          </div>
          <div >
            <p className='mt-2 font-semibold text-sm'>
              {' '}
              <span className='text-red text-lg'>*</span> Report Details
            </p>
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
