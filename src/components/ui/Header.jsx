import SearchIcon from '@mui/icons-material/Search';
import { FormControl, OutlinedInput, TextField } from "@mui/material";
import Button from "../../components/ui/Button";
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <nav className="bg-white-800 h-20 sticky shadow-sm z-10">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative h-16">
                        
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
                            
                                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" className='ml-20'>
                                    <OutlinedInput
                                        placeholder="Search"
                                        id="outlined-adornment-weight"
                                        startAdornment={<SearchIcon />}
                                        aria-describedby="outlined-weight-helper-text"
                                        inputProps={{
                                        'aria-label': 'weight',
                                        }}
                                    />
                                </FormControl>
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex align-center space-x-4">
                                    
                                    {/* <TextField
                                        id="filled-select-currency"
                                        select
                                        label="Select"
                                        helperText="Please select your currency"
                                        variant="filled"
                                        >
                                    </TextField> */}
                                </div>
                            </div>
                            <div className="flex align-center space-x-4">
                                <div className="flex align-center space-x-4">

                                    <Link to={'/sign-in'}><Button variant='outlined' text={'Sign In'} className='py-2' /></Link>
                                    <Link to={'/sign-up'}><Button variant="contained" text={'Sign Up'} className='py-2' /></Link>
                                </div>
                                
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        
                        </div>
                    </div>
                </div>
            </nav>
    )
}