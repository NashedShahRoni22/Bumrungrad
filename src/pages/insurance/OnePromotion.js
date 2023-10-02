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
const OnePromotion = (props) => {
  const { question, img, i, url, target } = props.questionans

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
            <div className='my-8'>
              <Link to={url} target={target}>
                <img
                  src={img}
                  alt=''
                  className='w-[80%] h-[50%] mx-auto'
                  srcset=''
                />
              </Link>
            </div>
          </AccordionBody>
        </Accordion>
      </>
    </div>
  )
}

export default OnePromotion
