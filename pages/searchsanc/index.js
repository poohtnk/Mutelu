import Navbar from "../../components/navbar/navbar";
import { getDatabase, ref, onValue } from "firebase/database";
import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Sanc from "../../components/sanc";

function searchsanc() {
    const [items, setItems] = useState([]);
    const [itemsForDisplay, setItemsForDisplay] = useState([]);
    const db = getDatabase();
    const starCountRef = ref(db, "/Sanctuary");

    useEffect(() => {
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            data.sort((a, b) => (a.name > b.name ? 1 : -1));
            setItems(data);
            setItemsForDisplay(data);
        });
    }, []);

    const filterBySearch = (event) => {
        const query = event.target.value;
        var updatedList = items;
        updatedList = updatedList.filter((item) => {
            return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });
        setItemsForDisplay(updatedList);
    };

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
                <div className="place-content-center">
                    <div className="text-center text-2xl items-center py-8">
                        please input the sanctuary’s name
                    </div>

                    <div className="container pt-[2rem]">
                        <div className="flex min-w-screen place-content-center py-5 rounded-md">
                            <input
                                id="search-box"
                                className=" w-[30rem] rounded-xl pl-3 text-xl py-2"
                                onChange={filterBySearch}
                                placeholder="Search sanctuary e.g. Lakshmi Shrine"
                            />
                        </div>

                        <div className="container pl-[15rem] pt-[5rem]">
                        <div className="grid overflow-hidden grid-cols-6 auto-rows-auto gap-x-6 gap-y-10 grid-flow-row">
                            {itemsForDisplay.map((data) => {
                                return (
                                    <Sanc
                                        key={data.id}
                                        id={data.id}
                                        title={data.name}
                                        img={data.img}
                                        description={data.description}
                                    />
                                );
                            })}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default searchsanc;
