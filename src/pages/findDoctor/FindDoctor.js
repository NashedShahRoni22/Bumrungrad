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

import notFoundAnim from "../../assets/anim/notfound.json";
import Lottie from "lottie-react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";

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
  const [docName, setDocName] = React.useState("");
  const addDocName = () => {
    setDocName(name);
  };
  const [speacility, setSpeacility] = React.useState("");
  const [subSpeacility, setSubSpeacility] = React.useState("");
  const [lang, setLang] = React.useState("");
  const [day, setDay] = React.useState("");
  const [time, setTime] = React.useState("");
  const [gender, setGender] = React.useState("");

  const [doctors, setDoctors] = useState([]);
  // console.log(doctors);
  const [query, setQuery] = useState({});
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
    { name: "Mandarin" },
    { name: "Punjab" },
    { name: "Hokkin" },
    { name: "Hainan" },
    { name: "Cantonese" },
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

  

  //  const searchDoctors = () => {
  //      setLoader(true)
  //       const queryParams = `name=${name}&specialty=${speacility}&sub_specialty=${subSpeacility}&lang=${lang}&gender=${gender}&shift=${time}&day=${day}`
  //     // Create the base URL
  //     const baseUrl = 'https://api.bumrungraddiscover.com/api/search/doctor'
  //     // Create the final URL by appending the query string if it's not empty
  //     const finalUrl = queryParams ? `${baseUrl}?${queryParams}` : baseUrl
  //     // Fetch data from the API
  //     fetch(finalUrl)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setDoctors(data.data)
  //         setQuery(data.query)
  //         setLoader(false)
  //         // console.log(data.query);
  //       })
  //       .catch((error) => console.error(error))
    
  //  }

  //get doctors
  useEffect(() => {
    setLoader(true);
    // Create a function to fetch data based on the URL
    const fetchData = () => {
      // Create a query string based on your query states
      const queryParams = `name=${docName}&specialty=${speacility}&sub_specialty=${subSpeacility}&lang=${lang}&gender=${gender}&shift=${time}&day=${day}`;
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
  }, [docName, speacility, subSpeacility, lang, day, time, gender]);

  //Pagination Start//

  const [currentPage, setCurrentPage] = useState(1);
  const pageNumberLimit = 5;
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const itemsPerPage = 15;
  const numberOfpage = Math.ceil(doctors.length / itemsPerPage);
  const pageIndex = Array.from({ length: numberOfpage }, (_, idx) => idx + 1);

  const showpageNumber = pageIndex.filter((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return number;
    } else {
      return null;
    }
  });
  console.log(showpageNumber);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePageChangePrev = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  const handlePageChangeNext = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const curentDoctors = doctors.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <section className="min-h-screen">
      {/* search field  */}
      <div id="finddoctor" className="flex items-center">
        <div className="container mx-5 md:mx-auto p-10 md:p-12 rounded-xl bg-white shadow-xl md:w-1/2 lg:w-1/3">
          <h1 className="text-xl md:text-3xl font-semibold text-blue text-center">
            Find A Doctor
          </h1>
          <div className="flex flex-col gap-4 mt-5 md:mt-10">
            <div className="flex">
              <TextField
                id="outlined-basic"
                label="Enter Doctor Name"
                variant="outlined"
                fullWidth
                onChange={(e) => setName(e.target.value)}
              />
              <Button
                onClick={addDocName}
                variant="contained"
                className="!bg-blue"
              >
                <IoSearchOutline className="text-3xl" />
              </Button>
            </div>
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
                  <MenuItem value={s?.name} key={i}>
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
                  <MenuItem value={s?.sub_specialty} key={i}>
                    {s?.sub_specialty}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <button
              // onClick={() => searchDoctors()}
              className='bg-blue rounded px-4 py-3 text-white'
            >
              Search Doctors
            </button>
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
      {/* Mobile View Search Fields */}
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={true}
        maxWidth={"lg"}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="md:hidden"
      >
        <DialogTitle
          id="alert-dialog-title"
          className="text-center text-blue !font-semibold"
        >
          {"Your Preferences"}
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
                  {languages.map((l, i) => (
                    <MenuItem value={l.name} key={i}>
                      {l.name}
                    </MenuItem>
                  ))}
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
                    <MenuItem value={w.name} key={i}>
                      {w.name}
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
                  {times.map((t, i) => (
                    <MenuItem key={i} value={t.name}>
                      {t.name}
                    </MenuItem>
                  ))}
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
        <DialogActions className="!flex !justify-center mb-5">
          <Button
            onClick={handleClose}
            variant="contained"
            className="!bg-blue !shadow-none"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
      {/* Tab View Search Fields */}
      {advanceBox && (
        <>
          <form className="hidden md:block relative mt-5 mb-10 lg:w-1/2 mx-5 md:container md:mx-auto pt-16 px-10 pb-10 bg-white/90 rounded-xl shadow-md shadow-blue">
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
                  {languages.map((l, i) => (
                    <MenuItem value={l.name} key={i}>
                      {l.name}
                    </MenuItem>
                  ))}
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
                    <MenuItem value={w.name} key={i}>
                      {w.name}
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
                  {times.map((t, i) => (
                    <MenuItem key={i} value={t.name}>
                      {t.name}
                    </MenuItem>
                  ))}
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
                  {genders.map((g, i) => (
                    <MenuItem value={g.name} key={i}>
                      {g.name}
                    </MenuItem>
                  ))}
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
      {/* filters  */}
      {
      docName ||
      query?.specialty ||
      query?.sub_specialty ||
      query?.lang ||
      query?.day ||
      query?.schedule ||
      query?.gender ? (
        <div className="mx-5 md:container md:mx-auto p-5">
          <p className="text-lg md:text-xl font-semibold">Filters:</p>
          <div className="flex flex-wrap gap-1 mt-5">
            {docName && (
              <button
                onClick={() => setDocName("")}
                className="capitalize bg-blue text-white duration-300 ease-linear shadow flex items-center gap-1 px-2 py-1 border rounded lg:text-xl"
              >
                {docName} <CloseIcon />{" "}
              </button>
            )}
            {query?.specialty && (
              <button
                onClick={() => setSpeacility("")}
                className="capitalize bg-blue text-white duration-300 ease-linear shadow flex items-center gap-1 px-2 py-1 border rounded lg:text-xl"
              >
                {query?.specialty} <CloseIcon />{" "}
              </button>
            )}
            {query?.sub_specialty && (
              <button
                onClick={() => setSubSpeacility("")}
                className="capitalize bg-blue text-white duration-300 ease-linear shadow flex items-center gap-1 px-2 py-1 border rounded lg:text-xl"
              >
                {query?.sub_specialty} <CloseIcon />{" "}
              </button>
            )}
            {query?.lang && (
              <button
                onClick={() => setLang("")}
                className="capitalize bg-blue text-white duration-300 ease-linear shadow flex items-center gap-1 px-2 py-1 border rounded lg:text-xl"
              >
                {query?.lang} <CloseIcon />{" "}
              </button>
            )}
            {query?.day && (
              <button
                onClick={() => setDay("")}
                className="capitalize bg-blue text-white duration-300 ease-linear shadow flex items-center gap-1 px-2 py-1 border rounded lg:text-xl"
              >
                {query?.day} <CloseIcon />{" "}
              </button>
            )}
            {query?.shift && (
              <button
                onClick={() => setTime("")}
                className="capitalize bg-blue text-white duration-300 ease-linear shadow flex items-center gap-1 px-2 py-1 border rounded lg:text-xl"
              >
                {query?.shift} <CloseIcon />{" "}
              </button>
            )}
            {query?.schedule && (
              <button
                onClick={() => setDay("")}
                className="capitalize bg-blue text-white duration-300 ease-linear shadow flex items-center gap-1 px-2 py-1 border rounded lg:text-xl"
              >
                {query?.schedule} <CloseIcon />{" "}
              </button>
            )}
            {query?.gender && (
              <button
                onClick={() => setGender("")}
                className="capitalize bg-blue text-white duration-300 ease-linear shadow flex items-center gap-1 px-2 py-1 border rounded lg:text-xl"
              >
                {query?.gender} <CloseIcon />{" "}
              </button>
            )}
          </div>
        </div>
      ) : null}

      {/* doctors data  */}
      {loader ? (
        <Loader />
      ) : (
        <div className="mx-5 p-5 md:container md:mx-auto">
          {doctors?.length > 0 ? (
            <div>
              <p className="text-xl md:text-2xl font-semibold">
                Found <span className="text-blue">{doctors?.length}</span>{" "}
                Doctor
              </p>

              <div className="grid grid-cols-2 place-items-center  md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5 my-5">
                {curentDoctors?.map((d, i) => (
                  <div
                    className="shadow hover:shadow-xl duration-300 ease-linear flex flex-col gap-5 w-full  h-[380px] md:h-[520px] rounded-xl "
                    key={i}
                  >
                    <div className="relative">
                      <img
                        src={d.cover_photo}
                        alt="Bumrungrad International Hospital"
                        loading="lazy"
                        className="h-[200px] md:h-[350px]  w-full rounded-tl-xl rounded-tr-xl"
                      />
                      <div>
                        <Link
                          to={`/doctor_details/${d?.slug}/${d.id}`}
                          className="flex justify-center"
                          target="_blank"
                        >
                          <button className="bg-blue text-sm md:text-base text-white  absolute bottom-0 rounded-tl-xl rounded-tr-xl px-2 md:px-6 py-2">
                            View Profile
                          </button>
                        </Link>
                      </div>
                    </div>

                    <div className="mb-2.5 ">
                      <p className="text-center md:text-xl text-blue font-bold">
                        {d?.name}
                      </p>
                      <p className="text-center mt-1 md:text-lg ">
                        {d?.specialty}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="min-h-[40vh] shadow-xl rounded p-5 mb-2.5">
              <Lottie style={style} animationData={notFoundAnim} loop={true} />
              <p className="text-xl font-semibold text-blue text-center">
                No Doctor Found
              </p>
            </div>
          )}
        </div>
      )}

      <div className="flex justify-center items-center gap-2 md:gap-4 mt-8 ">
        <button
          onClick={handlePageChangePrev}
          disabled={currentPage === 1}
          class="flex items-center  gap-1 md:gap-2 md:px-6 md:py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
            class="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            ></path>
          </svg>
          Prev
        </button>
        {minPageNumberLimit >= 1 && (
          <button
            onClick={handlePageChangePrev}
            disabled={currentPage === 1}
            className=" px-3 py-2  rounded"
          >
            ....
          </button>
        )}
        {showpageNumber.map((index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index)}
            class={`px-2 py-2 md:h-10 md:max-h-[40px] md:w-10 md:max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase  shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none${
              currentPage === index ? " bg-black text-white" : ""
            }`}
            type="button"
          >
            {index}
          </button>
        ))}
        {pageIndex.length > maxPageNumberLimit && (
          <button
            onClick={handlePageChangeNext}
            disabled={currentPage === pageIndex.length}
            className=" px-3 py-2  rounded"
          >
            ....
          </button>
        )}
        <button
          onClick={handlePageChangeNext}
          disabled={currentPage === pageIndex.length}
          class="flex items-center gap-1 md:gap-2 md:px-6 md:py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
            class="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            ></path>
          </svg>
        </button>
      </div>
    </section>
  );
}
