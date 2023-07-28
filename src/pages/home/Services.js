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
    name: "air ambulance",
    img: airimg,
  },
  {
    name: "air pickup",
    img: airpickup,
  },
  {
    name: "air ticket",
    img: airticket,
  },
  {
    name: "doctor appointment",
    img: appointment,
  },
  {
    name: "hotel reservation",
    img: hotelReservation,
  },
  {
    name: "order medicine",
    img: orderMedicine,
  },
  {
    name: "tele medicine",
    img: teleMedicine,
  },
  {
    name: "visa processing",
    img: visaProcessing,
  },
];

export default function Services() {
  return (
    <div className="p-10 shadow-xl rounded-xl">
      <h1 className="text-[32px] font-bold text-center text-blue mb-5">Our Services</h1>
      <Divider/>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-5 my-5">
        {services.map((s,i) => (
          <Link key={i} className="cursor-pointer flex flex-col lg:flex-row gap-4 items-center hover:shadow-xl duration-300 ease-linear p-4 rounded-xl">
            <img src={s.img} alt={s.name} className="h-[100px] w-[100px]"/>
            <h5 className="uppercase text-center font-semibold text-blue">{s.name}</h5>
          </Link>
        ))}
      </div>
    </div>
  );
}
