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
import Loader from "../../shared/Loader/Loader";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import notFoundAnim from "../../assets/anim/notfound.json";
import Lottie from "lottie-react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Link } from "react-router-dom";

export default function FindDoctor() {
  const [advanceBox, setAdvanceBox] = useState(false);
  const [loader, setLoader] = useState(false);

  //filter modal states
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [name, setName] = React.useState("");
  const [speacility, setSpeacility] = React.useState("");
  const [subSpeacility, setSubSpeacility] = React.useState("");
  const [lang, setLang] = React.useState("");
  const [day, setDay] = React.useState("");
  const [time, setTime] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [doctors, setDoctors] = useState([]);

  // console.log(doctors);
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

  const style = {
    height: 300,
  };

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
    setLoader(true);
    // Create a function to fetch data based on the URL
    const fetchData = () => {
      // Create a query string based on your query states
      const queryParams = `name=${name}&specialty=${speacility}&sub_specialty=${subSpeacility}&lang=${lang}&gender=${gender}&schedule=${time}&day=${day}`;
      // Create the base URL
      const baseUrl = "https://api.bumrungraddiscover.com/api/search/doctor";
      // Create the final URL by appending the query string if it's not empty
      const finalUrl = queryParams ? `${baseUrl}?${queryParams}` : baseUrl;
      // Fetch data from the API
      fetch(finalUrl)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setDoctors(data?.response?.data);
          setLoader(false);
        })
        .catch((error) => console.error(error));
    };
    // Call the fetchData function whenever any state changes
    fetchData();
  }, [name, speacility, subSpeacility, lang, day, time, gender]);

  return (
    <section className="min-h-screen">
      <div id="finddoctor" className="flex items-center">
        <div className="container mx-5 md:mx-auto p-5 md:p-10 rounded-tl-3xl rounded-br-3xl bg-white shadow-xl md:w-1/2 lg:w-1/3">
          <h1 className="text-xl md:text-3xl font-semibold text-blue text-center">
            Find A Doctor
          </h1>
          <div className="flex flex-col gap-4 mt-5 md:mt-10">
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
                {specialties?.map((s, i) => (
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
                disabled={subSpecialties?.length === 0}
              >
                {subSpecialties?.map((s, i) => (
                  <MenuItem value={s?.id} key={i}>
                    {s?.sub_specialty}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <button
              onClick={() => setAdvanceBox(!advanceBox)}
              className="bg-blue rounded px-4 py-3 text-white hidden md:flex justify-between"
            >
              Advance Search
              {advanceBox ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
            </button>
            <button
              onClick={handleClickOpen}
              className="md:hidden bg-blue rounded px-4 py-3 text-white flex justify-between"
            >
              More Serach
              {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
            </button>
          </div>
        </div>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Serach your preference options"}
        </DialogTitle>
        <DialogContent>
          <form className="py-1.5">
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
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="error">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      {advanceBox && (
        <>
          <form className="hidden md:block relative my-5 lg:w-1/2 mx-5 md:container md:mx-auto pt-16 px-10 pb-10 bg-white/90 rounded-tl-3xl shadow-md shadow-blue">
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
        </>
      )}

      {loader ? (
        <Loader />
      ) : (
        <div className="m-5 p-5 md:container md:mx-auto">
          {doctors?.length > 0 ? (
            <div>
              <p className="text-xl md:text-3xl font-semibold">
                Found <span className="text-blue">{doctors?.length}</span>{" "}
                Doctor
              </p>
              {/* filters  */}
              <div className="flex gap-1 my-5">
                {name && (
                  <button className="border-blue hover:shadow-xl duration-300 ease-linear shadow flex items-center gap-1 px-2 py-1 border rounded text-xl">
                    {name} <CloseIcon />{" "}
                  </button>
                )}
                {speacility && (
                  <button className="border-blue hover:shadow-xl duration-300 ease-linear shadow flex items-center gap-1 px-2 py-1 border rounded text-xl">
                    {speacility} <CloseIcon />{" "}
                  </button>
                )}
                {subSpeacility && (
                  <button className="border-blue hover:shadow-xl duration-300 ease-linear shadow flex items-center gap-1 px-2 py-1 border rounded text-xl">
                    {subSpeacility} <CloseIcon />{" "}
                  </button>
                )}
                {lang && (
                  <button className="border-blue hover:shadow-xl duration-300 ease-linear shadow flex items-center gap-1 px-2 py-1 border rounded text-xl">
                    {lang} <CloseIcon />{" "}
                  </button>
                )}
                {day && (
                  <button className="border-blue hover:shadow-xl duration-300 ease-linear shadow flex items-center gap-1 px-2 py-1 border rounded text-xl">
                    {day} <CloseIcon />{" "}
                  </button>
                )}
                {time && (
                  <button className="border-blue hover:shadow-xl duration-300 ease-linear shadow flex items-center gap-1 px-2 py-1 border rounded text-xl">
                    {time} <CloseIcon />{" "}
                  </button>
                )}
                {gender && (
                  <button className="border-blue hover:shadow-xl duration-300 ease-linear shadow flex items-center gap-1 px-2 py-1 border rounded text-xl">
                    {gender} <CloseIcon />{" "}
                  </button>
                )}
              </div>

              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 my-5">
                {doctors?.map((d, i) => (
                  <Link
                    to={`/doctor_details/${d.id}`}
                    key={i}
                    className="relative rounded"
                  >
                    <img
                      src={d.image}
                      alt=""
                      className="min-h-[400px] min-w-[250px] rounded"
                    />
                    <div className="absolute top-0 h-full w-full bg-black/40 overflow-hidden group rounded">
                      <div className="text-white flex flex-col gap-2 justify-end h-full translate-y-12 group-hover:-translate-y-0 duration-300 ease-linear">
                        <p className="md:text-3xl ml-2">{d.name}</p>
                        <p className="text-xl ml-2">{d.specialty}</p>
                        <button className="bg-blue text-white py-2.5 w-full">
                          <EventAvailableIcon />
                          <span className="uppercase ml-2.5">Appointment</span>
                        </button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div className="min-h-[40vh]">
              <Lottie style={style} animationData={notFoundAnim} loop={true} />;
              <p className="text-xl font-semibold text-red text-center">
                No Doctor Found
              </p>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
