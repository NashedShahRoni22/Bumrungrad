import React, { useState, useEffect } from 'react'
import { MuiTelInput } from 'mui-tel-input'
import { FormControl, MenuItem, Select, TextField } from '@mui/material'
import { natioNalities } from '../appointment/Nationalities'
const SendQuery = () => {
  const [showFirstForm, setShowFirstForm] = useState(true)
  const [showSecondForm, setShowSecondForm] = useState(false)

  //form data..//
  const [gender, setGender] = useState('')
  const [citizenship, setCitizenship] = useState('')

  //phoneNumberSelect
  const [value, setValue] = useState('')
  const handleChange = (newValue) => {
    setValue(newValue)
  }

  const [countries, setCountries] = useState([])
  useEffect(() => {
    fetch('countries.json')
      .then((res) => res.json())
      .then((data) => setCountries(data))
  }, [])
  //FormShow button
  const handaleshowFirstForm = () => {
    setShowFirstForm(true)
    setShowSecondForm(false)
  }
  const handaleshowSecondForm = () => {
    setShowFirstForm(false)
    setShowSecondForm(true)
  }

  return (
    <section className='flex justify-center'>
      <div className='md mb-14 '>
        <div className='m-10 grid grid-cols-2 gap-2'>
          <button
            onClick={handaleshowFirstForm}
            className={`px-2 py-2.5 md:px-4 md:py-5 font-semibold text-sm md:text-xl shadow text-blue rounded ${
              showFirstForm && 'bg-blue text-white'
            }`}
          >
            <span className='hidden md:block'>To Reach</span> Bumrungrad
            International
          </button>
          <button
            onClick={handaleshowSecondForm}
            className={`px-2 py-2.5 md:px-4 md:py-5 font-semibold text-sm md:text-xl shadow text-blue rounded ${
              showSecondForm && 'bg-blue text-white'
            } `}
          >
            <span className='hidden md:block'>To Reach the</span> Contact Office
          </button>
        </div>
        {/* <div className='w-[full] h-[4px] bg-blue'></div> */}
        <div className='shadow-xl rounded-xl md:py-5 px-10'>
          <div className='w-[350px] md:w-[800px] mx-auto my-0 p-4'>
            <form>
              {showFirstForm && (
                <div>
                  <div>
                    <p className='mb-2.5 font-semibold text-sm'>
                      Type of Inquiry*
                    </p>
                    <TextField fullWidth />
                  </div>
                  <div className='mt-4'>
                    <p className='mb-2.5 font-semibold text-sm'>
                      Search The Doctor's Name or Surname*
                    </p>
                    <TextField fullWidth />
                  </div>
                  <div className='mt-4'>
                    <p className='mb-2.5 font-semibold text-sm'>
                      Condition or Treatment of Interest
                    </p>
                    <TextField fullWidth />
                  </div>
                </div>
              )}

              {showSecondForm && (
                <div className='mt-4'>
                  <p className='mb-2.5 font-semibold text-sm'>
                    Country of Bumrungrad Office*
                  </p>
                  <TextField fullWidth />
                </div>
              )}

              <div className='mt-4'>
                <p className='mb-2.5 font-semibold text-sm'>Your Question *</p>
                <TextField fullWidth multiline rows={2} />
              </div>
              <div className='mt-4'>
                <p className='mb-2.5 font-semibold text-sm'>Hospital Number</p>
                <TextField fullWidth placeholder='Example : HN12345678' />
              </div>
              <div className='mt-4'>
                <p className='mb-2.5 font-semibold text-sm'>First Name*</p>
                <TextField fullWidth />
              </div>
              <div className='mt-4'>
                <p className='mb-2.5 font-semibold text-sm'>Last Name*</p>
                <TextField fullWidth />
              </div>
              <div className='mt-4'>
                <p className='mb-2.5 font-semibold text-sm'>Email*</p>
                <TextField
                  fullWidth
                  placeholder='Example : example123@gmail.com'
                />
              </div>
              <div className='mt-4'>
                <p className='mb-2.5 font-semibold text-sm'>
                  Primary Phone Number
                </p>
                <MuiTelInput
                  value={value}
                  onChange={handleChange}
                  defaultCountry='TH'
                  className='w-[100%]'
                />
              </div>
              <div className='mt-6 grid  md:grid-cols-2 gap-4'>
                <div>
                  <p className='mb-2.5 font-semibold text-sm'>Date of Birth*</p>
                  <TextField
                    type='date'
                    fullWidth
                    placeholder='Please Enter the Date of Birth'
                  />
                </div>
                <div>
                  <FormControl fullWidth>
                    <p className='mb-2.5 font-semibold text-sm'>
                      Select Gender(Required)
                    </p>
                    <Select
                      labelId='demo-simple-select-label'
                      id='demo-simple-select'
                      value={gender}
                      required
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <MenuItem value='Male'>Male</MenuItem>
                      <MenuItem value='Female'>Female</MenuItem>
                      <MenuItem value='Other'>Other</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div>
                  <FormControl fullWidth>
                    <p className='mb-2.5 font-semibold text-sm'>
                      Select Citizenship(Required)
                    </p>
                    <Select
                      labelId='demo-simple-select-label'
                      id='demo-simple-select'
                      value={citizenship}
                      required
                      onChange={(e) => setCitizenship(e.target.value)}
                    >
                      {natioNalities.map((c, i) => (
                        <MenuItem key={i} value={c}>
                          {c}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <div>
                  <p className='mb-2.5 font-semibold text-sm'>
                    Country of Residence*
                  </p>
                  <TextField
                    id='filled-select-currency-native'
                    select
                    fullWidth
                    onChange={(e) => setCountries(e.target.value)}
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
              <hr className='text-blue border-[1.5px] mt-8' />
              <div className='flex justify-center m-5'>
                <button
                  type='submit'
                  className='bg-blue text-white px-14 py-3 rounded'
                >
                  SEND INQUIRY
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SendQuery
