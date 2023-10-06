import React from "react";

export default function Appointment() {

  return (
    <div className="p-5 md:p-10 my-5 md:my-10 md:container md:mx-auto">
      <h1 className="capitalize text-xl md:text-2xl lg:text-3xl font-bold text-blue">
        Appointment
      </h1>
      <div className="flex gap-4 mt-5">
        <button className="capitalize px-4 py-2 rounded-xl bg-blue text-white">
          Recommend a Doctor
        </button>
        <button className="capitalize px-4 py-2 rounded-xl bg-blue text-white">
          Choose a Doctor
        </button>
      </div>
      <div>
      </div>
    </div>
  );
}
