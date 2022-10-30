import Navbar from '../../components/navbar/navbar'
import Select from '@mui/material/Select/Select'
import MenuItem from '@mui/material/MenuItem/MenuItem'
import { FormGroup, FormControlLabel, Checkbox, Button, TextField} from '@mui/material'
import { useState } from 'react'

function Praying() {
    const [wish, setWish] = useState('')
    const [sanctuary, setSanctuary] = useState('')
    const handleChange = (e) => {

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
    return (
        <div className='min-h-screen bg-background1 bg-cover'>
            <Navbar />
            <div className='container'>
                <div className='text-center text-5xl font-bold pt-20'>
                    Praying for the wish you truely want ..
                </div>
                <div className='flex place-content-center'>
                    <form className='' onSubmit={onSubmit}>
                        <div className='flex text-center text-3xl items-center'>Please select the sanctuary</div>
                            <Select
                                id="sanctuary-select"
                                value={sanctuary}
                                onChange={handleChange}
                                className='form-control block w-full h-10 px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid 
                                border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600'
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Praying anonymously" />
                            </FormGroup>
                            <TextField id="wish" className='w-full focus:bg-white' variant="filled" rows={8} multiline/>
                            {/* <input
                                type='text'
                                className='form-control block w-3/4 h-4/6 px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid 
                                border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600'
                                name='wish'
                                onChange={handleWishInput}
                            /> */}
                            <Button variant="contained" type='submit'>Make a wish</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Praying
