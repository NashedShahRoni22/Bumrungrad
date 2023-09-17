import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CachedIcon from "@mui/icons-material/Cached";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function FindDoctor() {
  const [advanceBox, setAdvanceBox] = useState(false);

  const [name, setName] = React.useState("");
  const [speacility, setSpeacility] = React.useState("");
  const [subSpeacility, setSubSpeacility] = React.useState("");
  const [lang, setLang] = React.useState("");
  const [day, setDay] = React.useState("");
  const [time, setTime] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [doctors, setDoctors] = useState([]);
  // console.log(day);

  const [specialties, setSpecialities] = useState([]);
  const [subSpecialties, setSubSpecialities] = useState([]);
  const weekdays = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];

  //get speacilities
  useEffect(() => {
    fetch("https://api.bumrungraddiscover.com/api/get/specialty")
      .then((res) => res.json())
      .then((data) => setSpecialities(data?.response?.data));
  }, []);

  //get sub speacilities
  useEffect(() => {
    if (speacility) {
      fetch(
        `https://api.bumrungraddiscover.com/api/get/selected/sub/specialty/${speacility}`
      )
        .then((res) => res.json())
        .then((data) => setSubSpecialities(data?.response?.data));
    }
  }, [speacility]);

  //get doctors
  useEffect(() => {
    // Create a function to fetch data based on the URL
    const fetchData = () => {
      // Create a query string based on your query states
      const queryParams = `name=${name}&specialty=${speacility}&sub_specialty=${subSpeacility}&lang=${lang}&gender=${gender}&schedule=${time}`;
      // Create the base URL
      const baseUrl = "https://api.bumrungraddiscover.com/api/doctor/search";
      // Create the final URL by appending the query string if it's not empty
      const finalUrl = queryParams ? `${baseUrl}?${queryParams}` : baseUrl;
      // Fetch data from the API
      fetch(finalUrl)
        .then((res) => res.json())
        .then((data) => setDoctors(data?.response?.data))
        .catch((error) => console.error(error));
    };
    // Call the fetchData function whenever any state changes
    fetchData();
  }, [name, speacility, subSpeacility, lang, day, time, gender]);

  return (
    <section className="min-h-screen">
      <div id="finddoctor" className="flex items-center">
        <div className="container mx-10 md:mx-auto p-10 rounded-tl-3xl rounded-br-3xl bg-white shadow-xl md:w-1/2 lg:w-1/3">
          <h1 className="text-3xl font-semibold text-blue text-center">
            Find A Doctor
          </h1>
          <div className="flex flex-col gap-4 mt-10">
            <TextField
              id="outlined-basic"
              label="Enter Doctor Name"
              variant="outlined"
              fullWidth
              onChange={(e) => setName(e.target.value)}
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Select Speacility
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={speacility}
                label="Select Speacility"
                onChange={(e) => setSpeacility(e.target.value)}
              >
                {specialties.map((s, i) => (
                  <MenuItem value={s?.id} key={i}>
                    {s?.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Select Sub Speacility
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={subSpeacility}
                label="Select Sub Speacility"
                onChange={(e) => setSubSpeacility(e.target.value)}
                disabled={subSpecialties.length === 0}
              >
                {subSpecialties.map((s, i) => (
                  <MenuItem value={s?.specialty_id} key={i}>
                    {s?.sub_specialty}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <button
              onClick={() => setAdvanceBox(!advanceBox)}
              className="bg-blue rounded px-4 py-3 text-white flex justify-between"
            >
              Advance Search
              {advanceBox ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
            </button>
          </div>
        </div>
      </div>
      {advanceBox && (
        <form className="relative my-5 lg:w-1/2 mx-10 md:container md:mx-auto pt-20 px-10 pb-10 bg-white/90 rounded-tl-3xl shadow-md shadow-blue">
          <button
            onClick={() => setAdvanceBox(!advanceBox)}
            className="absolute top-2 right-2 bg-red text-white rounded"
          >
            <CloseIcon />
          </button>
          <div className="grid gap-4 md:grid-cols-2">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Language</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={lang}
                label="Language"
                onChange={(e) => setLang(e.target.value)}
              >
                <MenuItem value={1}>English</MenuItem>
                <MenuItem value={2}>Thai</MenuItem>
                <MenuItem value={3}>Indian</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Day</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={day}
                label="Day"
                onChange={(e) => setDay(e.target.value)}
              >
                {weekdays.map((w, i) => (
                  <MenuItem value={i + 1} key={i}>
                    {w}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Time</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={time}
                label="Time"
                onChange={(e) => setTime(e.target.value)}
              >
                <MenuItem value={1}>Morning</MenuItem>
                <MenuItem value={2}>Evening</MenuItem>
                <MenuItem value={3}>Night</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={gender}
                label="Gender"
                onChange={(e) => setGender(e.target.value)}
              >
                <MenuItem value={1}>Female</MenuItem>
                <MenuItem value={2}>Male</MenuItem>
              </Select>
            </FormControl>
          </div>
          <button className="px-4 py-2 bg-blue border border-blue hover:bg-white hover:text-blue duration-300 ease-linear mt-4 rounded flex items-center gap-5 text-white">
            Clear Filters
            <CachedIcon />
          </button>
        </form>
      )}

      <div className="my-5 p-10 mx-5 md:container md:mx-auto shadow-xl rounded-xl">
        {
          doctors?.length > 0 ?
          <p className="text-xl font-semibold">Total Doctors: {doctors?.length}</p>
          :
          <p className="text-xl font-semibold text-red text-center">No Doctors Found</p>
        }
      </div>
    </section>
  );
}
