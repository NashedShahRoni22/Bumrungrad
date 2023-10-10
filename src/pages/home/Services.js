import airimg from '../../assets/service_logo/air_ambulance.png'
import airpickup from '../../assets/service_logo/air_pickup.png'
import airticket from '../../assets/service_logo/air_ticket.png'
import appointment from '../../assets/service_logo/appointment.png'
import hotelReservation from '../../assets/service_logo/hotel_reservation.png'
import orderMedicine from '../../assets/service_logo/order_medicine.png'
import teleMedicine from '../../assets/service_logo/telemedicine.png'
import visaProcessing from '../../assets/service_logo/visa_processing.png'
import { Link } from 'react-router-dom'
import { Divider } from '@mui/material'
import AirAmbulanceForm from './modalFrom/AirAmbulanceForm'
import OrderMedicine from './modalFrom/OrderMedicine'
import AirtTcket from './modalFrom/AirtTcket'
import AirPickup from './modalFrom/AirPickup'

const services = [
  {
    name: 'Book Appointment',
    img: appointment,
    pageTo: '/appointment',
  },
  {
    id: 2,
    name: 'Air Ambulance',
    img: airimg,
    form: <AirAmbulanceForm />,
  },
  {
    id: 3,
    name: 'Order Medicine',
    img: orderMedicine,
    form: <OrderMedicine />,
  },
  {
    id: 4,
    name: 'Visa Processing',
    img: visaProcessing,
  },
  {
    id: 5,
    name: 'Tele Medicine',
    img: teleMedicine,
  },
  {
    id: 6,
    name: 'Hotel Reservation',
    img: hotelReservation,
  },
  {
    id: 7,
    name: 'Air Ticket',
    img: airticket,
    form: <AirtTcket />,
  },
  {
    id: 8,
    name: 'Air Pickup',
    img: airpickup,
    form: <AirPickup />,
  },
]

export default function Services(props) {
  const handleOpen = props.handaleOpen
  const getData = props.getData

  return (
    <div className='p-5 md:p-10 my-5 md:my-10 md:container md:mx-auto'>
      <h1 className='capitalize text-xl md:text-2xl lg:text-3xl font-bold text-blue'>
        Our Services
      </h1>
      <div className='my-5'>
        <Divider />
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
        {services.map((s, i, id) => (
          <>
            {' '}
            <Link
              to={s.pageTo}
              onClick={() => {
                handleOpen(id)
                getData(s)
              }}
              key={i}
              className='cursor-pointer flex flex-col lg:flex-row gap-4 items-center shadow-class hover:translate-y-5 duration-300 ease-linear p-4 rounded-xl'
            >
              <img src={s.img} alt={s.name} className='h-[100px] w-[100px]' />
              <h5 className='text-center font-semibold text-blue'>{s.name}</h5>
            </Link>
          </>
        ))}
      </div>
    </div>
  )
}
