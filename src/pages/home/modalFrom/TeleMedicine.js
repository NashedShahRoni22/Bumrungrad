import React, { useState } from 'react'
import { TextField } from '@mui/material'
const TeleMedicine = () => {
  //loader
  const [loader, setLoader] = useState()

  const [fullName, setFullName] = useState('')
  const [hnNum, setHnNum] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [passportId, setPassportId] = useState('')
  const [nationality, setNationality] = useState('')
  const [residence, setResidence] = useState('')
  const [preferredDate, setPreferredDate] = useState('')
  const [preferredDoctor, setPreferredDoctor] = useState('')
  const [purposeAppoinment, setPurposeAppoinment] = useState('')
  const [investigationDocument, setInvestigationDocument] = useState('')
  const [contactDetails, setContactDetails] = useState('')
  const [paymentType, setPaymentType] = useState('')
  const [epaymentlink, setEpaymentlink] = useState('')
  const [interpreter, setInterpreter] = useState('')
  const [specificConcern, setSpecificConcern] = useState('')

  const handaleAddteleMedicine = (event) => {
    setLoader(true)
    event.preventDefault()
    const form = event.target
    const teleMedicines = {
      fullName,
      hnNum,
      birthDate,
      passportId,
      nationality,
      residence,
      preferredDate,
      preferredDoctor,
      purposeAppoinment,
      investigationDocument,
      contactDetails,
      paymentType,
      epaymentlink,
      interpreter,
      specificConcern,
    }
    console.log(teleMedicines)
    const formData = new FormData()
    formData.append('fullName', fullName)
    formData.append('hnNum', hnNum)
    formData.append('birthDate', birthDate)
    formData.append('passportId', passportId)
    formData.append('nationality', nationality)
    formData.append('residence', residence)
    formData.append('preferredDate', preferredDate)
    formData.append('preferredDoctor', preferredDoctor)
    formData.append('purposeAppointment', purposeAppoinment)
    formData.append('investigationDocument', investigationDocument)
    formData.append('contactDetails', contactDetails)
    formData.append('paymentType', paymentType)
    formData.append('epaymentlink', epaymentlink)
    formData.append('interpreter', interpreter)
    formData.append('specificConcern', specificConcern)

    fetch('https://api.bumrungraddiscover.com/api/add/tele/medicine', {
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
      <form onSubmit={handaleAddteleMedicine}>
        <h1 className='uppercase text-center text-xl mb-4'>patient details</h1>
        <div>
          <p className='mb-2 font-semibold text-sm'>Enter Full Name</p>
          <TextField
            type='text'
            placeholder='Same As In Passport'
            onChange={(e) => setFullName(e.target.value)}
            fullWidth
          />
        </div>
        <div className='mt-3'>
          <p className='mb-2 font-semibold text-sm'>Hospital No.(HN)</p>
          <TextField
            placeholder='Old Patient'
            onChange={(e) => setHnNum(e.target.value)}
            fullWidth
          />
        </div>
        <div className='mt-3'>
          <p className='mb-2 font-semibold text-sm'>Date of Birth</p>
          <TextField
            type='date'
            onChange={(e) => setBirthDate(e.target.value)}
            fullWidth
          />
        </div>
        <div className='mt-3'>
          <p className='mb-2 font-semibold text-sm'>Passport / Id No</p>
          <TextField
            type=''
            placeholder='Enter Number'
            onChange={(e) => setPassportId(e.target.value)}
            fullWidth
          />
        </div>
        <div className='mt-3'>
          <p className='mb-2 font-semibold text-sm'>Nationality</p>
          <TextField
            placeholder='Enter Your Nationality'
            onChange={(e) => setNationality(e.target.value)}
            fullWidth
          />
        </div>
        <div className='mt-3'>
          <p className='mb-2 font-semibold text-sm'>Country of Residence</p>
          <TextField
            placeholder='Enter Your Residence'
            onChange={(e) => setResidence(e.target.value)}
            fullWidth
          />
        </div>
        <div className='mt-3'>
          <p className='mb-2 font-semibold text-sm'>
            Contact Details of Patient
          </p>
          <TextField
            placeholder='Mobile Number / Email Address'
            onChange={(e) => setContactDetails(e.target.value)}
            fullWidth
          />
        </div>
        <h1 className='uppercase text-center text-xl mt-5 mb-5 md:mt-10'>
          appointment details (telemedicine)
        </h1>
        <div className='mt-3'>
          <p className='mb-2 font-semibold text-sm'>
            Preferred Appoinment Date
          </p>
          <TextField
            type='date'
            onChange={(e) => setPreferredDate(e.target.value)}
            fullWidth
          />
        </div>
        <div className='mt-3'>
          <p className='mb-2 font-semibold text-sm mt-3'>Preferred Doctor</p>
          <TextField
            placeholder='Doctor Name'
            onChange={(e) => setPreferredDoctor(e.target.value)}
            fullWidth
          />
        </div>
        <div className='mt-3'>
          <p className='mb-2 font-semibold text-sm mt-3'>
            Purpose of Appoinment
          </p>
          <TextField
            placeholder='Chief Complaint'
            onChange={(e) => setPurposeAppoinment(e.target.value)}
            fullWidth
          />
        </div>
        <div className='mt-3'>
          <p className='mb-2 font-semibold text-sm mt-3'>
            {' '}
            Availlable Investigation Document
          </p>
          <TextField
            type='file'
            onChange={(e) => setInvestigationDocument(e.target.files[0])}
            fullWidth
          />
        </div>
        <div className='mt-3'>
          <p className='mb-2 font-semibold text-sm mt-3'>
            Request for Interpreter
          </p>
          <TextField
            placeholder='Specify The Language'
            onChange={(e) => setInterpreter(e.target.value)}
            fullWidth
          />
        </div>
        <div className='mt-3'>
          <p className='mb-2 font-semibold text-sm mt-3'>Payment Type</p>
          <TextField
            placeholder='E-Payment / Credit card / Bank transfer'
            onChange={(e) => setPaymentType(e.target.value)}
            fullWidth
          />
        </div>
        <div className='mt-3'>
          <p className='mb-2 font-semibold text-sm mt-3'>
            Email for E-payment Link
          </p>
          <TextField
            type='email'
            placeholder='Enter Email'
            onChange={(e) => setEpaymentlink(e.target.value)}
            fullWidth
          />
        </div>
        <div className='mt-3'>
          <p className='mb-2 font-semibold text-sm mt-3'>Specific Concern</p>
          <TextField
            placeholder='Interest'
            onChange={(e) => setSpecificConcern(e.target.value)}
            fullWidth
          />
        </div>
        <div className='my-4 h-[10px]'>
          <button
            type='submit'
            className='bg-blue text-white px-3 py-1 rounded float-left'
          >
            {loader ? 'Loading...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default TeleMedicine
