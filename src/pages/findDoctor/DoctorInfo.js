import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DoctorInfo() {
  const { id } = useParams();
  const [doctor, setDoctor] = useState({});
  useEffect(() => {
    fetch(`https://api.bumrungraddiscover.com/api/search/doctor/${id}`)
      .then((res) => res.json())
      .then((data) => setDoctor(data.response.data));
  });
  return (
    <section className="doctor-bg">
      <div className="p-5 md:p-10 md:container md:mx-auto">
        <div className="md:flex gap-16 items-center">
          <div className="md:w-1/2">
            <img src={doctor.image} alt="" className="border-2 border-blue" />
          </div>
          <div className="mt-5 md:mt-0 md:w-1/2 text-blue text-center">
            <p className="text-3xl md:text-[48px] font-semibold">
              {/* {doctor.name} */}
              Nashed Shah Roni
            </p>
            <p className="mt-4 text-xl md:text-2xl lg:text-3
            
            xl capitalize">
              <span className="font-semibold">Expertises</span> <br />
              {doctor.specialty}
            </p>
            <p className="mt-4 text-xl md:text-2xl lg:text-3
            
            xl capitalize">
              <span className="font-semibold">Specialties</span> <br />
              {doctor.sub_specialty}
            </p>
            <p className="mt-4 text-xl md:text-2xl lg:text-3
            
            xl capitalize">
              <span className="font-semibold">Language</span> <br />{" "}
              {doctor.lang}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
