import Navbar from '../../components/navbar/navbar'
// import Select from '@mui/material/Select/Select'
// import MenuItem from '@mui/material/MenuItem/MenuItem'
// import InputLabel from '@mui/material/InputLabel'
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import {
    FormGroup,
    FormControlLabel,
    Checkbox,
    Button,
    TextField,
} from '@mui/material'
import { useState } from 'react'
import BasicModal from '../../components/modal'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'

function Praying() {
    const [wish, setWish] = useState('')
    const [sanctuary, setSanctuary] = useState('')
    const [isModelVisible, setModel] = useState(false)
    const [done, setDone] = useState(false)
    const handleChange = (e) => {
        setSanctuary(e.target.value)
    }
    const handleWishInput = (e) => {
        setWish(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        try {
        } catch {
            alert('Praying Unsuccessful')
            setMessage(error.message)
        }
    }
    const openModal = (e) => {
        setModel(true)
    }
    if (!done) {
        if (wish != '' && sanctuary != '') {
            setDone(true)
        }
    }
    const router = useRouter()

    return (
        <div className='min-h-screen bg-mutelu_1 bg-cover'>
            <Navbar />
            <div className='container'>
                <div className='mx-[15rem] mt-[5rem]'>
                    <div className='font-inter text-center text-5xl pt-20 tracking-widest'>
                        Praying for the wish you truely want ..
                    </div>
                    <div className='place-content-center'>
                        <form className='' onSubmit={onSubmit}>
                            <div className='text-center text-3xl items-center py-5'>
                                Please select the sanctuary
                            </div>
                            <FormControl
                                fullWidth
                                size='small'
                                required
                                className='bg-royal-purple-light'
                            >
                                <Select
                                    id='sanctuary-select'
                                    value={sanctuary}
                                    onChange={handleChange}
                                    // className='form-control block w-full h-10 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                                    //     border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600'
                                    className='text-white'
                                    // className
                                >
                                    <MenuItem value={'Lakshmi Shrine'}>
                                        Lakshmi Shrine
                                    </MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                            <div className='flex justify-center'>
                                <FormGroup>
                                    <FormControlLabel
                                        control={<Checkbox color='secondary' />}
                                        label='Praying anonymously'
                                    />
                                </FormGroup>
                            </div>
                            <TextField
                                id='wish'
                                className='w-full focus:bg-white border-8 border-another-purple '
                                variant='outlined'
                                rows={8}
                                multiline
                                required
                                onChange={handleWishInput}
                            />
                            {/* <input
                                type='text'
                                className='form-control block w-3/4 h-4/6 px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid 
                                border-another-purple border-8 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600'
                                name='wish'
                                onChange={handleWishInput}
                            /> */}
                            <div className='flex flex-col items-center m-4'>
                                <Button
                                    disabled={!done}
                                    type='submit'
                                    className='bg-royal-purple-light text-white hover:text-royal-purple-light w-auto'
                                    onClick={() => {
                                        Swal.fire({
                                            title: 'Your wish have been received!',
                                            icon: 'success',
                                            width: '20rem',
                                            timer: 5000,
                                        }).then((result) => {
                                            router.push('/home')
                                        })
                                    }}
                                >
                                    Make a wish
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Praying