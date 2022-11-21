import Navbar from '../../components/navbar/navbar'
import { getDatabase, ref, onValue } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import Card from '../../components/card'

function SearchAmulet() {
    const [items, setItems] = useState([])
    const [itemsForDisplay, setItemsForDisplay] = useState([])
    const db = getDatabase()
    const starCountRef = ref(db, '/Amulet')
    useEffect(() => {
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val()
            var result = Object.entries(data)
            result.sort((a, b) => (a[1].name > b[1].name ? 1 : -1))
            setItems(result)
            setItemsForDisplay(result)
        })
    }, [])

    const filterBySearch = (event) => {
        const query = event.target.value
        var updatedList = items
        updatedList = updatedList.filter((item) => {
            return item[1].name.toLowerCase().indexOf(query.toLowerCase()) !== -1
        })
        setItemsForDisplay(updatedList)
    }
    return (
        <div className='min-h-screen bg-gradient-to-b from-blue-200 to-fuchsia-200'>
            <Navbar />
            <div className='container pt-[2rem]'>
                <div className='flex min-w-screen place-content-center py-5 rounded-md'>
                    <input
                        id='search-box'
                        className=' w-[30rem] rounded-xl pl-3 text-xl py-2'
                        onChange={filterBySearch}
                        placeholder='Search product here...'
                    />
                </div>

                <div className='grid overflow-hidden grid-cols-6 auto-rows-auto gap-x-6 gap-y-10 grid-flow-row'>
                    {itemsForDisplay.map((data) => {
                        return (
                            <Card
                                key={data[0]}
                                id={data[0]}
                                title={data[1].name}
                                price={data[1].price}
                                img={data[1].img}
                                description={data[1].description}
                                num={data[1].quantity}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default SearchAmulet
