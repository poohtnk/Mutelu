import Navbar from "../../components/navbar/navbar";
import { getDatabase, ref, onValue } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";

function searchsanc() {

    const filterBySearch = (event) => {
        const query = event.target.value
        var updatedList = items
        updatedList = updatedList.filter((item) => {
            return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
        })
        setItemsForDisplay(updatedList)
    } 

    return (
        <div className="min-h-screen bg-mutelu_1 bg-cover">
            <Navbar />
            <div className="container">
                <div className="mx-[15rem] mt-[5rem]">
                    <div className="font-bold text-center text-5xl pt-20 tracking-widest">
                        Search sanctuary
                        <div className="p-4 break-normal">you want to visit</div>
                    </div>
                </div>
                <div className='place-content-center'>
                    <div className='text-center text-2xl items-center py-8'>
                        please input the sanctuary’s name
                    </div>
                    <div className='flex justify-center'>
                        <form>
                            <TextField
                                id="search-bar"
                                className="text"
                                // onInput={(e) => {
                                //     setSearchQuery(e.target.value);
                                // }}
                                label="type here..."
                                variant="outlined"
                                placeholder="type sanctuary name e.g. Lakshmi Shrine"
                                size="small"
                            />
                            <IconButton type="submit" aria-label="search">
                                <SearchIcon style={{ fill: "blue" }} />
                            </IconButton>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default searchsanc