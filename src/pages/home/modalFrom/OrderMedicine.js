import React from 'react'
import { TextField } from '@mui/material'
const OrderMedicine = () => {
  const orderMedicine = (event) => {
    event.preventDefault()
    const form = event.target

    const prescription = form.prescription.value
    const medicineName = form.medicine.value
    const medicineQuantity = parseInt(form.quantity.value)

    const getOrderMedicine = {
      prescription,
      medicineName,
      medicineQuantity,
    }
    //console.log(getOrderMedicine)
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
        onSubmit={orderMedicine}
        className='mt-3 mb-2 md:w-full max-w-screen-lg sm:w-96'
      >
        <div className='mb-2 flex flex-col gap-6'>
          <div className='h-[50px] mt-4'>
            <p className='mb-1 font-semibold text-sm'>
              Upload Your Prescription
            </p>
            <TextField type='file' name='prescription' fullWidth required />
          </div>
          <div className='mt-4'>
            <p className='mb-2 font-semibold text-sm'>Medicine Name</p>
            <TextField multiline name='medicine' rows={2} fullWidth required />
          </div>
          <div>
            <p className='mb-2 font-semibold text-sm'>Medicine Quantity</p>
            <TextField name='quantity' fullWidth required />
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

export default OrderMedicine
