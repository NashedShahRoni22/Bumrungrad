import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../shared/Loader/Loader'
import { Divider } from '@mui/material'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import EventAvailableIcon from '@mui/icons-material/EventAvailable'

export default function DoctorInfo() {
  const [loader, setLoader] = useState(false)
  const { id } = useParams()
  const [doctor, setDoctor] = useState({})
  // console.log(doctor);
  useEffect(() => {
    setLoader(true)
    fetch(`https://api.bumrungraddiscover.com/api/search/doctor/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.response.status === 200) {
          setDoctor(data.response.data)
          console.log(data.response.data)
          setLoader(false)
        } else {
          console.log(data)
          setLoader(false)
        }
      })
  }, [id])
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <section>
          <div className='doctor-bg'>
            <div className='md:flex p-5 md:p-10 md:container md:mx-auto'>
              <div className='flex flex-col justify-center'>
                <img
                  src={doctor?.cover_photo}
                  alt=''
                  className='h-[250px] md:h-[400px] lg:h-[450px] w-full md:w-[300px] lg:w-[350px] rounded-tl-xl rounded-tr-xl'
                />
                <button className='bg-blue text-white py-2.5 w-full rounded-bl-xl rounded-br-xl'>
                  <EventAvailableIcon />
                  <span className='capitalize ml-2.5'>Appointment</span>
                </button>
              </div>
              {/* right side  */}
              <div className='flex-1 text-blue lg:text-center p-5'>
                <p className='text-xl md:text-3xl lg:text-5xl font-bold'>
                  {doctor?.name}
                </p>
                <div>
                  <p className='font-semibold mt-5 text-xl md:text-2xl lg:text-3xl capitalize'>
                    Expertise
                  </p>
                  <Divider className='!my-2.5' />
                  <p className='text-lg'>{doctor?.specialty}</p>
                </div>
                {doctor?.sub_specialty?.length > 0 && (
                  <div>
                    <p className='font-semibold mt-5 text-xl md:text-2xl lg:text-3xl capitalize'>
                      Specialty
                    </p>
                    <Divider className='!my-2.5' />
                    <ul className=''>
                      {doctor?.sub_specialty?.map((ss, i) => (
                        <li key={i} className='text-lg'>
                          {ss}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div>
                  <p className='font-semibold mt-5 text-xl md:text-2xl lg:text-3xl capitalize'>
                    Language
                  </p>
                  <Divider className='!my-2.5' />
                  <ul className=''>
                    {doctor?.lang?.map((ss, i) => (
                      <li key={i} className='text-lg'>
                        {ss}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* qualifications  */}
          <div className='p-5 md:p-10 md:container md:mx-auto lg:flex'>
            <div className='lg:w-1/2 flex flex-col gap-5 md:gap-10'>
              <div className=''>
                <p className='text-xl md:text-2xl text-blue font-semibold'>
                  Medical School:
                </p>
                {doctor?.schools?.length > 0 && (
                  <ul className='mt-2.5 md:mt-5'>
                    {doctor?.schools?.map((ms, i) => (
                      <li key={i} className='text-xl'>
                        {ms?.school}
                      </li>
                    ))}
                  </ul>
                )}

                {doctor?.school && <p className='text-xl'>{doctor?.school}</p>}
              </div>
              {doctor?.certificates?.length !== 0 && (
                <div className=''>
                  <p className='text-xl md:text-2xl text-blue font-semibold'>
                    Certifications:
                  </p>
                  <ul className='mt-2.5 md:mt-5'>
                    {doctor?.certificates?.map((dc, i) => (
                      <li key={i} className='text-xl'>
                        {dc?.certificate}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {doctor?.interests?.length !== 0 && (
                <div className=''>
                  <p className='text-xl md:text-2xl text-blue font-semibold'>
                    Article:
                  </p>
                  <ul className='mt-2.5 md:mt-5'>
                    {doctor?.interests?.map((dc, i) => (
                      <li key={i} className='text-xl'>
                        {dc?.Interest}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {doctor?.experiences?.length !== 0 && (
                <div className=''>
                  <p className='text-xl md:text-2xl text-blue font-semibold'>
                    Experiences:
                  </p>
                  <ul className='mt-2.5 md:mt-5'>
                    {doctor?.experiences?.map((dc, i) => (
                      <li key={i} className='text-xl'>
                        {dc?.experience}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {doctor?.researches?.length !== 0 && (
                <div className=''>
                  <p className='text-xl md:text-2xl text-blue font-semibold'>
                    Researches:
                  </p>
                  <ul className='mt-2.5 md:mt-5'>
                    {doctor?.researches?.map((dc, i) => (
                      <li key={i} className='text-xl'>
                        {dc?.research}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {doctor?.article?.length !== 0 && (
                <div className=''>
                  <p className='text-xl md:text-2xl text-blue font-semibold'>
                    Articles:
                  </p>
                  <ul className='mt-2.5 md:mt-5'>
                    {doctor?.article?.map((dc, i) => (
                      <li key={i} className='text-xl'>
                        {dc?.article}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            {doctor?.day?.length > 0 && (
              <div className='mt-5 md:mt-10 lg:mt-0 lg:w-1/2'>
                <p className='mb-5 text-xl md:text-2xl text-blue font-semibold'>
                  Schedules:
                </p>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                    <TableHead className='bg-blue'>
                      <TableRow>
                        <TableCell className='!text-white'>Day</TableCell>
                        <TableCell className='!text-white' align='center'>
                          Arrival
                        </TableCell>
                        <TableCell className='!text-white' align='center'>
                          Leave
                        </TableCell>
                        <TableCell className='!text-white' align='center'>
                          Shift
                        </TableCell>
                        <TableCell className='!text-white' align='center'>
                          Location
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {doctor?.day?.map((day, i) => (
                        <TableRow key={i}>
                          <TableCell>{day}</TableCell>
                          <TableCell align='center'>
                            {doctor?.arrival?.[i]}
                          </TableCell>
                          <TableCell align='center'>
                            {doctor?.leave?.[i]}
                          </TableCell>
                          <TableCell align='center'>
                            {doctor?.shift?.[i]}
                          </TableCell>
                          <TableCell align='center'>
                            {doctor?.location?.[i]}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  )
}
