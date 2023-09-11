import React from "react";
import airimg from "../../assets/service_logo/air_ambulance.png";
import airpickup from "../../assets/service_logo/air_pickup.png";
import airticket from "../../assets/service_logo/air_ticket.png";
import appointment from "../../assets/service_logo/appointment.png";
import hotelReservation from "../../assets/service_logo/hotel_reservation.png";
import orderMedicine from "../../assets/service_logo/order_medicine.png";
import teleMedicine from "../../assets/service_logo/telemedicine.png";
import visaProcessing from "../../assets/service_logo/visa_processing.png";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";

const services = [
  {
    name: "Book Appointment",
    img: appointment,
  },
  {
    name: "Air Ambulance",
    img: airimg,
  },
  {
    name: "Order Medicine",
    img: orderMedicine,
  },
  {
    name: "Visa Processing",
    img: visaProcessing,
  },
  {
    name: "Tele Medicine",
    img: teleMedicine,
  },
  {
    name: "Hotel Reservation",
    img: hotelReservation,
  },
  {
    name: "Air Ticket",
    img: airticket,
  },
  {
    name: "Air Pickup",
    img: airpickup,
  },
];

export default function Services() {
  return (
    <div className="p-5 md:p-10 my-5 md:my-10 md:container md:mx-auto">
      <h1 className="uppercase text-xl md:text-2xl lg:text-3xl font-bold text-blue">
        Our Services
      </h1>
      <div className="my-5">
        <Divider />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {services.map((s, i) => (
          <Link
            key={i}
            className="cursor-pointer flex flex-col lg:flex-row gap-4 items-center shadow-xl hover:translate-y-5 duration-300 ease-linear p-4 rounded-xl"
          >
            <img src={s.img} alt={s.name} className="h-[100px] w-[100px]" />
            <h5 className="text-center font-semibold text-blue">{s.name}</h5>
          </Link>
        ))}
      </div>
    </div>
  );
}
