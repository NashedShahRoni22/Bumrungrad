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
import CallMadeIcon from "@mui/icons-material/CallMade";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
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
  console.log(doctors);
  const [query, setQuery] = useState({});
  // const postData = {
  //   name,
  //   speacility,
  //   subSpeacility,
  //   lang,
  //   day,
  //   time,
  //   gender,
  // };
  // console.log(postData);
  const [specialties, setSpecialities] = useState([]);
  const [subSpecialties, setSubSpecialities] = useState([]);
  const weekdays = [
    { name: "Saturday" },
    { name: "Sunday" },
    { name: "Monday" },
    { name: "Tuesday" },
    { name: "Wednesday" },
    { name: "Thursday" },
    { name: "Friday" },
  ];
  const languages = [
    { name: "Thai" },
    { name: "English" },
    { name: "Arabic" },
    { name: "Chinese" },
    { name: "Dutch" },
    { name: "French" },
    { name: "German" },
    { name: "Hindi" },
    { name: "Japanese" },
    { name: "Spanish" },
    { name: "Urdo" },
  ];

  const times = [{ name: "Morning" }, { name: "Evening" }, { name: "Night" }];
  const genders = [{ name: "Male" }, { name: "Female" }];

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
      const queryParams = `name=${name}&specialty=${speacility}&sub_specialty=${subSpeacility}&lang=${lang}&gender=${gender}&shift=${time}&day=${day}`;
      // Create the base URL
      const baseUrl = "https://api.bumrungraddiscover.com/api/search/doctor";
      // Create the final URL by appending the query string if it's not empty
      const finalUrl = queryParams ? `${baseUrl}?${queryParams}` : baseUrl;
      // Fetch data from the API
      fetch(finalUrl)
        .then((res) => res.json())
        .then((data) => {
          setDoctors(data.data);
          setQuery(data.query);
          setLoader(false);
          // console.log(data.query);
        })
        .catch((error) => console.error(error));
    };
    // Call the fetchData function whenever any state changes
    fetchData();
  }, [name, speacility, subSpeacility, lang, day, time, gender]);

  return (
    <section className='min-h-screen'>
      {/* search field  */}
      <div id='finddoctor' className='flex items-center'>
        <div className='container mx-5 md:mx-auto p-10 md:p-12 rounded-xl bg-white shadow-xl md:w-1/2 lg:w-1/3'>
          <h1 className='text-xl md:text-3xl font-semibold text-blue text-center'>
            Find A Doctor
          </h1>
          <div className='flex flex-col gap-4 mt-5 md:mt-10'>
            <TextField
              id='outlined-basic'
              label='Enter Doctor Name'
              variant='outlined'
              fullWidth
              onChange={(e) => setName(e.target.value)}
            />
            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>
                Select Speacility
              </InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={speacility}
                label='Select Speacility'
                onChange={(e) => setSpeacility(e.target.value)}
              >
                {specialties?.map((s, i) => (
                  <MenuItem value={s?.name} key={i}>
                    {s?.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>
                Select Sub Speacility
              </InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={subSpeacility}
                label='Select Sub Speacility'
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
            <button
              onClick={() => setAdvanceBox(!advanceBox)}
              className='bg-blue rounded px-4 py-3 text-white hidden md:flex justify-between'
            >
              Advance Search
              {advanceBox ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
            </button>
            <button
              onClick={handleClickOpen}
              className='md:hidden bg-blue rounded px-4 py-3 text-white flex justify-between'
            >
              More Serach
              {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile View Search Fields */}
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={true}
        maxWidth={'lg'}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
        className='md:hidden'
      >
        <DialogTitle
          id='alert-dialog-title'
          className='text-center text-blue !font-semibold'
        >
          {'Your Preferences'}
        </DialogTitle>
        <DialogContent>
          <form className='py-1.5'>
            <div className='grid gap-4 md:grid-cols-2'>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>Language</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={lang}
                  label='Language'
                  onChange={(e) => setLang(e.target.value)}
                >
                  {languages.map((l, i) => (
                    <MenuItem value={l.name} key={i}>
                      {l.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>Day</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={day}
                  label='Day'
                  onChange={(e) => setDay(e.target.value)}
                >
                  {weekdays.map((w, i) => (
                    <MenuItem value={w.name} key={i}>
                      {w.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>Time</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={time}
                  label='Time'
                  onChange={(e) => setTime(e.target.value)}
                >
                  {times.map((t, i) => (
                    <MenuItem key={i} value={t.name}>
                      {t.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>Gender</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={gender}
                  label='Gender'
                  onChange={(e) => setGender(e.target.value)}
                >
                  {genders.map((g, i) => (
                    <MenuItem value={g.name} key={i}>
                      {g.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </form>
        </DialogContent>
        <DialogActions className='!flex !justify-center mb-5'>
          <Button
            onClick={handleClose}
            variant='contained'
            className='!bg-blue !shadow-none'
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
      {/* Tab View Search Fields */}
      {advanceBox && (
        <>
          <form className='hidden md:block relative mt-5 mb-10 lg:w-1/2 mx-5 md:container md:mx-auto pt-16 px-10 pb-10 bg-white/90 rounded-xl shadow-md shadow-blue'>
            <button
              onClick={() => setAdvanceBox(!advanceBox)}
              className='absolute top-2 right-2 bg-red text-white rounded'
            >
              <CloseIcon />
            </button>
            <div className='grid gap-4 md:grid-cols-2'>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>Language</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={lang}
                  label='Language'
                  onChange={(e) => setLang(e.target.value)}
                >
                  {languages.map((l, i) => (
                    <MenuItem value={l.name} key={i}>
                      {l.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>Day</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={day}
                  label='Day'
                  onChange={(e) => setDay(e.target.value)}
                >
                  {weekdays.map((w, i) => (
                    <MenuItem value={w.name} key={i}>
                      {w.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>Time</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={time}
                  label='Time'
                  onChange={(e) => setTime(e.target.value)}
                >
                  {times.map((t, i) => (
                    <MenuItem key={i} value={t.name}>
                      {t.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>Gender</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={gender}
                  label='Gender'
                  onChange={(e) => setGender(e.target.value)}
                >
                  {genders.map((g, i) => (
                    <MenuItem value={g.name} key={i}>
                      {g.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <button className='px-4 py-2 bg-blue border border-blue hover:bg-white hover:text-blue duration-300 ease-linear mt-4 rounded flex items-center gap-5 text-white'>
              Clear Filters
              <CachedIcon />
            </button>
          </form>
        </>
      )}
      {/* filters  */}
      {query?.name ||
      query?.specialty ||
      query?.sub_specialty ||
      query?.lang ||
      query?.day ||
      query?.schedule ||
      query?.gender ? (
        <div className='mx-5 mb-5 mt-10 md:container md:mx-auto md:flex gap-2'>
          <p className='text-lg md:text-xl font-semibold'>Filters:</p>
          <div className='flex flex-wrap gap-1'>
            {name && (
              <button
                onClick={() => setName('')}
                className='capitalize border-blue hover:bg-blue hover:text-white duration-300 ease-linear shadow flex items-center gap-1 px-2 py-1 border rounded lg:text-xl'
              >
                {name} <CloseIcon />{' '}
              </button>
            )}
            {query?.specialty && (
              <button
                onClick={() => setSpeacility('')}
                className='capitalize border-blue hover:bg-blue hover:text-white duration-300 ease-linear shadow flex items-center gap-1 px-2 py-1 border rounded lg:text-xl'
              >
                {query?.specialty} <CloseIcon />{' '}
              </button>
            )}
            {query?.sub_specialty && (
              <button
                onClick={() => setSubSpeacility('')}
                className='capitalize border-blue hover:bg-blue hover:text-white duration-300 ease-linear shadow flex items-center gap-1 px-2 py-1 border rounded lg:text-xl'
              >
                {query?.sub_specialty} <CloseIcon />{' '}
              </button>
            )}
            {query?.lang && (
              <button
                onClick={() => setLang('')}
                className='capitalize border-blue hover:bg-blue hover:text-white duration-300 ease-linear shadow flex items-center gap-1 px-2 py-1 border rounded lg:text-xl'
              >
                {query?.lang} <CloseIcon />{' '}
              </button>
            )}
            {query?.day && (
              <button
                onClick={() => setDay('')}
                className='capitalize border-blue hover:bg-blue hover:text-white duration-300 ease-linear shadow flex items-center gap-1 px-2 py-1 border rounded lg:text-xl'
              >
                {query?.day} <CloseIcon />{' '}
              </button>
            )}
            {query?.shift && (
              <button
                onClick={() => setTime('')}
                className='capitalize border-blue hover:bg-blue hover:text-white duration-300 ease-linear shadow flex items-center gap-1 px-2 py-1 border rounded lg:text-xl'
              >
                {query?.shift} <CloseIcon />{' '}
              </button>
            )}
            {query?.schedule && (
              <button
                onClick={() => setDay('')}
                className='capitalize border-blue hover:bg-blue hover:text-white duration-300 ease-linear shadow flex items-center gap-1 px-2 py-1 border rounded lg:text-xl'
              >
                {query?.schedule} <CloseIcon />{' '}
              </button>
            )}
            {query?.gender && (
              <button
                onClick={() => setGender('')}
                className='capitalize border-blue hover:bg-blue hover:text-white duration-300 ease-linear shadow flex items-center gap-1 px-2 py-1 border rounded lg:text-xl'
              >
                {query?.gender} <CloseIcon />{' '}
              </button>
            )}
          </div>
        </div>
      ) : null}

      {/* doctors data  */}
      {loader ? (
        <Loader />
      ) : (
        <div className='mx-5 md:container md:mx-auto mt-5'>
          {doctors?.length > 0 ? (
            <div>
              <p className='text-xl md:text-2xl font-semibold'>
                Found <span className='text-blue'>{doctors?.length}</span>{' '}
                Doctor
              </p>

              <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 my-5'>
                {doctors?.map((d, i) => (
                  <Link
                    to={`/doctor_details/${d.id}`}
                    className='shadow hover:shadow-xl duration-300 ease-linear flex flex-col justify-between'
                    key={i}
                  >
                    <img
                      src={d.cover_photo}
                      alt='Bumrungrad Hospital'
                      className='h-[250px] md:h-[350px] lg:h-[400px] w-full rounded-tl rounded-tr'
                    />
                    <div className='p-2.5'>
                      <p className='md:text-xl text-blue font-semibold'>
                        {d?.name}
                      </p>
                      <p className='mt-2 text-lg'>{d?.specialty}</p>
                    </div>
                    <button className='group bg-blue text-white p-2.5 w-full flex justify-between rounded-bl rounded-br'>
                      <span className='capitalize'>View Profile</span>
                      <span className='group-hover:hidden'>
                        <ArrowForwardIcon />
                      </span>
                      <span className='hidden group-hover:block'>
                        <CallMadeIcon />
                      </span>
                    </button>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div className='min-h-[40vh] shadow-xl rounded p-5 mb-2.5'>
              <Lottie style={style} animationData={notFoundAnim} loop={true} />
              <p className='text-xl font-semibold text-blue text-center'>
                No Doctor Found
              </p>
            </div>
          )}
        </div>
      )}
    </section>
  )
}
