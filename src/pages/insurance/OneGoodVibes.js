import React from 'react'
import { Link } from 'react-router-dom'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react'
function Icon({ id, open }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={2}
      stroke='#ffffff'
      className={`${
        id === open ? 'rotate-180' : ''
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M19.5 8.25l-7.5 7.5-7.5-7.5'
      />
    </svg>
  )
}
const OneGoodVibes = (props) => {
  const { question, datas, i } = props.questionans

  const [open, setOpen] = React.useState(0)
  const handleOpen = (value) => setOpen(open === value ? 0 : value)
  return (
    <div className='mt-[1px]'>
      <>
        <Accordion open={open === i} icon={<Icon id={i} open={open} />}>
          <div>
            <AccordionHeader
              className='bg-blue p-3'
              onClick={() => handleOpen(i)}
            >
              <h1 className='text-white text-sm'>{question}</h1>
            </AccordionHeader>
          </div>

          <AccordionBody>
            {datas?.map((data, i) => (
              <div key={i}>
                <div className='py-1'>
                  <Link to={data?.url} target={data?.target}>
                    <div className=''>
                      <p className={data?.text}>{data?.ans}</p>
                      <span>{data?.hr}</span>
                    </div>
                  </Link>

                  <Link to={data?.url} target={data?.target}>
                    <div className='mt-5 mb-5'>
                      <img
                        src={data?.img}
                        alt=''
                        className={data?.imgclass}
                        srcset=''
                      />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </AccordionBody>
        </Accordion>
      </>
    </div>
  )
}

export default OneGoodVibes
