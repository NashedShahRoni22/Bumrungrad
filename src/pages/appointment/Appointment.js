import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function Appointment() {
  // stepper functionality
  const [stepperOpen, setStepperOpen] = useState(true);
  const [stepperOpen2, setStepperOpen2] = useState(false);
  const [stepperOpen3, setStepperOpen3] = useState(false);

  const handleClick = () => {
    setStepperOpen(false);
    setStepperOpen2(true);
  };
  const handleClick2Next = () => {
    setStepperOpen2(false);
    setStepperOpen3(true);
  };
  const handleClick2Prev = () => {
    setStepperOpen(true);
    setStepperOpen2(false);
  };
  const handleClick3Prev = () => {
    setStepperOpen2(true);
    setStepperOpen3(false);
  };

  //manage data
  const [specialty, setSpeacility] = React.useState("");
  const [subSpecialty, setSubSpeacility] = React.useState("");
  const [doctors, setDoctors] = useState([]);
  console.log(doctors);
  const [specialties, setSpecialities] = useState([]);
  const [subSpecialties, setSubSpecialities] = useState([]);

  const handleChange = (event) => {
    setSpeacility(event.target.value);
  };
  const handleChange2 = (event) => {
    setSubSpeacility(event.target.value);
  };

  const [activeChoose, setActiveChoose] = useState(true);
  const [activeRecommend, setActiveRecommend] = useState(false);
  // get doctors name
  useEffect(() => {
    // setLoader(true);
    // Create a function to fetch data based on the URL
    const fetchData = () => {
      // Create a query string based on your query states
      const queryParams = `specialty=${specialty}&sub_specialty=${subSpecialty}`;
      // Create the base URL
      const baseUrl = "https://api.bumrungraddiscover.com/api/search/doctor";
      // Create the final URL by appending the query string if it's not empty
      const finalUrl = queryParams ? `${baseUrl}?${queryParams}` : baseUrl;
      // Fetch data from the API
      fetch(finalUrl)
        .then((res) => res.json())
        .then((data) => {
          setDoctors(data.data);
          // setLoader(false);
        })
        .catch((error) => console.error(error));
    };
    // Call the fetchData function whenever any state changes
    fetchData();
  }, [specialty, subSpecialty]);
  //get speacilities
  useEffect(() => {
    fetch("https://api.bumrungraddiscover.com/api/get/specialty")
      .then((res) => res.json())
      .then((data) => setSpecialities(data?.response?.data));
  }, []);
  //get sub speacilities
  // useEffect(() => {
  //   if (specialty) {
  //     fetch(
  //       `https://api.bumrungraddiscover.com/api/get/selected/sub/specialty/${specialty}`
  //     )
  //       .then((res) => res.json())
  //       .then((data) => setSubSpecialities(data?.response?.data));
  //   }
  // }, [specialty]);

  return (
    <div className="p-5 md:p-10 my-5 md:my-10 md:container md:mx-auto">
      <h1 className="capitalize text-xl md:text-2xl lg:text-3xl font-bold text-blue">
        Appointment
      </h1>
      <div className="my-10">
        <div className="flex justify-between">
          <button
            className={`px-4 py-2 shadow rounded-full border border-blue font-semibold text-xl ${
              stepperOpen && "bg-blue text-white border-white"
            }`}
          >
            1
          </button>
          <button
            className={`px-4 py-2 shadow rounded-full border border-blue font-semibold text-xl ${
              stepperOpen2 && "bg-blue text-white border-white"
            }`}
          >
            2
          </button>
          <button
            className={`px-4 py-2 shadow rounded-full border border-blue font-semibold text-xl ${
              stepperOpen3 && "bg-blue text-white border-white"
            }`}
          >
            3
          </button>
        </div>
        <div className="my-5">
          {stepperOpen && (
            <div>
              <div className="flex flex-col gap-4 md:flex-row">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Select Speciality
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={specialty}
                    label="Select Speciality"
                    onChange={handleChange}
                  >
                    {specialties?.map((s, i) => (
                      <MenuItem key={i} value={s?.name}>
                        {s?.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Select Sub Speciality
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={subSpecialty}
                    label="Select Sub Speciality"
                    onChange={handleChange2}
                  >
                    {subSpecialties?.map((s, i) => (
                      <MenuItem key={i} value={s?.sub_specialty}>
                        {s?.sub_specialty}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              {/* select or choose  */}
              <div>
                <div className="my-4 flex gap-4">
                  <button
                    className={`px-4 py-2 font-semibold  rounded-xl ${
                      activeChoose && "bg-blue text-white"
                    }`}
                    onClick={() => {
                      setActiveRecommend(false);
                      setActiveChoose(true);
                    }}
                  >
                    Choose
                  </button>
                  <button
                    className={`px-4 py-2 font-semibold  rounded-xl ${
                      activeRecommend && "bg-blue text-white"
                    }`}
                    onClick={() => {
                      setActiveRecommend(true);
                      setActiveChoose(false);
                    }}
                  >
                    Recommend
                  </button>
                </div>
                <div>
                  {activeChoose && (
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Choose Doctor
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={subSpecialty}
                        label="Choose Doctor"
                        onChange={handleChange2}
                      >
                        {subSpecialties?.map((s, i) => (
                          <MenuItem key={i} value={s?.sub_specialty}>
                            {s?.sub_specialty}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  )}
                  {
                    activeRecommend && 
                    <TextField label="" />
                  }
                </div>
              </div>
              <button
                className="mt-5 px-4 py-2 rounded font-semibold text-white bg-blue hover:bg-white border hover:border-blue hover:text-blue duration-300 ease-linear"
                onClick={handleClick}
              >
                Next
              </button>
            </div>
          )}
          {stepperOpen2 && (
            <div>
              <p>India</p>
              <button
                className="mt-5 px-4 py-2 rounded font-semibold text-white bg-blue hover:bg-white border hover:border-blue hover:text-blue duration-300 ease-linear"
                onClick={handleClick2Prev}
              >
                Prev
              </button>
              <button
                className="mt-5 px-4 py-2 rounded font-semibold text-white bg-blue hover:bg-white border hover:border-blue hover:text-blue duration-300 ease-linear"
                onClick={handleClick2Next}
              >
                Next
              </button>
            </div>
          )}
          {stepperOpen3 && (
            <div>
              <p>Australlia</p>
              <button
                className="mt-5 px-4 py-2 rounded font-semibold text-white bg-blue hover:bg-white border hover:border-blue hover:text-blue duration-300 ease-linear"
                onClick={handleClick3Prev}
              >
                Prev
              </button>
            </div>
          )}
        </div>
      </div>
      <div></div>
    </div>
  );
}
