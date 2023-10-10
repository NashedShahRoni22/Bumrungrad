import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import Services from './Services'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const BookingModal = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = (id) => setOpen(id)
  const handleClose = () => setOpen(false)
  const [serviceName, setServiceName] = React.useState({})
  const getData = (data) => {
    setServiceName(data)
  }
  const { name, form} = serviceName

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style} className='w-[350px] md:w-[750px]'>
          <button
            onClick={handleClose}
            size='small'
            className='bg-black text-white px-3 py-1 rounded float-right'
          >
            Close
          </button>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            <p className='font-semibold'>{name}</p>
          </Typography>

          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            {form}
          </Typography>
        </Box>
      </Modal>
      <Services handaleOpen={handleOpen} getData={getData} />
    </div>
  )
}

export default BookingModal
