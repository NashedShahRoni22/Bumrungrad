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
  border: '2px solid #fff',
  borderRadius: '16px',
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
  const { name, form, height } = serviceName

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style} className={`${height} w-[350px]`}>
          <button
            onClick={handleClose}
            size='small'
            className='bg-black text-white px-2 py-1 mb-2 rounded float-right'
          >
            Close
          </button>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            <p className='font-semibold'>{name}</p>
          </Typography>

          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            <div>{form}</div>
          </Typography>
        </Box>
      </Modal>
      <Services
        handaleOpen={handleOpen}
        getData={getData}
        handleClose={handleClose}
      />
    </div>
  )
}

export default BookingModal
