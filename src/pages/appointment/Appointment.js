import React, { useState } from "react";

export default function Appointment() {
  const [stepperOpen, setStepperOpen] = useState({
    status: true,
    id:1
  })
  return (
    <div className="p-5 md:p-10 my-5 md:my-10 md:container md:mx-auto">
      <h1 className="capitalize text-xl md:text-2xl lg:text-3xl font-bold text-blue">
        Appointment
      </h1>
      <div>
        <div className="flex justify-between">
          <p className="px-4 py-2 shadow">1</p>
          <p className="px-4 py-2 shadow">2</p>
          <p className="px-4 py-2 shadow">3</p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
            saepe in iste, quidem voluptatem praesentium recusandae sed at?
            Eveniet, esse!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
            saepe in iste, quidem voluptatem praesentium recusandae sed at?
            Eveniet, esse!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
            saepe in iste, quidem voluptatem praesentium recusandae sed at?
            Eveniet, esse!
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
}
