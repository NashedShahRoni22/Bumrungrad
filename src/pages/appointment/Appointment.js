import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";

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
  const [doctor, setDoctor] = React.useState("");
  const [medicalDesc, setMedicalDesc] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [shift, setShift] = React.useState("");

  const postData = {
    specialty,
    subSpecialty,
    doctor,
    medicalDesc,
    selectedDate:format(selectedDate, "PP"),
    shift
  };

  // console.log(postData);

  const [doctors, setDoctors] = useState([]);
  const [specialties, setSpecialities] = useState([]);
  const [subSpecialties, setSubSpecialities] = useState([]);

  const handleChange = (event) => {
    setSpeacility(event.target.value);
  };

  const [activeChoose, setActiveChoose] = useState(true);
  const [activeRecommend, setActiveRecommend] = useState(false);
  //get speacilities
  useEffect(() => {
    fetch("https://api.bumrungraddiscover.com/api/get/specialty")
      .then((res) => res.json())
      .then((data) => setSpecialities(data?.response?.data));
  }, []);
  //get sub speacilities
  useEffect(() => {
    if (specialty) {
      fetch(
        `https://api.bumrungraddiscover.com/api/get/selected/sub/specialty/${specialty}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data?.response?.status === 200) {
            setSubSpecialities(data?.response?.data);
          } else {
            console.log(data);
            setSubSpecialities([]);
          }
        });
    }
  }, [specialty]);
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
          if (data.status === 200) {
            setDoctors(data.data);
          } else {
            setDoctors([]);
            console.log(data);
          }
        })
        .catch((error) => console.error(error));
    };
    // Call the fetchData function whenever any state changes
    fetchData();
  }, [specialty, subSpecialty]);

  return (
    <div className="p-5 md:p-10 my-5 md:my-10 md:container md:mx-auto lg:flex lg:flex-col lg:items-center">
      <h1 className="capitalize text-xl md:text-2xl lg:text-3xl font-bold text-blue">
        Appointment
      </h1>
      <div className="my-10 lg:w-1/2">
        {/* top buttons  */}
        <div className="flex justify-between items-center">
          <button
            className={`px-4 py-2 shadow rounded-full border border-blue font-semibold text-xl ${
              (stepperOpen || stepperOpen2 || stepperOpen3) &&
              "bg-blue text-white border-white"
            }`}
          >
            1
          </button>
          <div
            className={`h-1 rounded mx-5 w-full ${
              stepperOpen2 || stepperOpen3 ? "bg-blue" : "bg-cream"
            }`}
          ></div>
          <button
            className={`px-4 py-2 shadow rounded-full border border-blue font-semibold text-xl ${
              (stepperOpen2 || stepperOpen3) &&
              "bg-blue text-white border-white"
            }`}
          >
            2
          </button>
          <div
            className={`h-1 rounded mx-5 w-full ${
              stepperOpen3 ? "bg-blue" : "bg-cream"
            }`}
          ></div>
          <button
            className={`px-4 py-2 shadow rounded-full border border-blue font-semibold text-xl ${
              stepperOpen3 && "bg-blue text-white border-white"
            }`}
          >
            3
          </button>
        </div>
        {/* Appointment form  */}
        <div className="my-5 p-5 shadow rounded">
          {stepperOpen && (
            <div>
              <div className="flex flex-col gap-4">
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
                    label="Select Sub Speacility"
                    onChange={(e) => setSubSpeacility(e.target.value)}
                    disabled={subSpecialties?.length === 0}
                  >
                    {subSpecialties?.map((s, i) => (
                      <MenuItem value={s?.sub_specialty} key={i}>
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
                    className={`px-4 py-2 font-semibold  rounded-full ${
                      activeChoose && "bg-blue text-white"
                    }`}
                    onClick={() => {
                      setActiveRecommend(false);
                      setActiveChoose(true);
                    }}
                  >
                    Choose a Doctor
                  </button>
                  <button
                    className={`px-4 py-2 font-semibold  rounded-full ${
                      activeRecommend && "bg-blue text-white"
                    }`}
                    onClick={() => {
                      setActiveRecommend(true);
                      setActiveChoose(false);
                    }}
                  >
                    Recommend a Doctor
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
                        value={doctor}
                        label="Choose Doctor"
                        onChange={(e) => setDoctor(e.target.value)}
                        disabled={doctors?.length === 0}
                      >
                        {doctors?.map((s, i) => (
                          <MenuItem value={s?.name} key={i}>
                            {s?.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  )}
                  {activeRecommend && (
                    <TextField
                      placeholder="PLEASE DESCRIBE YOUR MEDICAL CONCERN OR SYMPTOMS"
                      fullWidth
                      multiline
                      rows={6}
                      onChange={(e) => setMedicalDesc(e.target.value)}
                    />
                  )}
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  className="mt-5 px-4 py-2 rounded font-semibold text-white bg-blue hover:bg-white border hover:border-blue hover:text-blue duration-300 ease-linear"
                  onClick={handleClick}
                >
                  Next
                </button>
              </div>
            </div>
          )}
          {stepperOpen2 && (
            <div>
              <div className="md:flex gap-5">
                <div className="md:w-1/2 md:border-2 border-blue rounded">
                  <DayPicker
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                  />
                </div>
                <div className="my-10 md:mt-0 md:w-1/2 flex flex-col gap-5">
                  <p>
                    {" "}
                    <span className="font-semibold">Selected Date:</span>{" "}
                    {format(selectedDate, "PP")}
                  </p>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Select Shift
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={shift}
                      label="Select Shift"
                      onChange={(e) => setShift(e.target.value)}
                    >
                      <MenuItem value="Morning">Morning</MenuItem>
                      <MenuItem value="Evening">Evening</MenuItem>
                      <MenuItem value="Night">Night</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <p className="text-center mt-5">
                This is only a tentative booking. Your actual appointment will
                be confirmed by email.
              </p>
              <div className="flex justify-center">
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
