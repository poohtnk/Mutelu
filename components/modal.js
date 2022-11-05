import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}

export default function BasicModal({ check, wish }) {
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    return (
        <div>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Modal
                open={check.isModelVisible}
                onClose={handleClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
                className='w-300px'
            >
                {/* <CheckCircleIcon /> */}
                <Box sx={style} className='rounded-lg'>
                    <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                        Your wish have been received!
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}
