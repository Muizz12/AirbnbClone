import React, { useState } from 'react'
import Image from 'next/image'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from "next/router"
import { SearchIcon } from '@heroicons/react/solid'
import { GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/solid'
function Header({ Placeholder }) {
    const [searchInput, SetsearchInput] = useState('')
    const [startDate, setstartdate] = useState(new Date())
    const [endDate, setendDate] = useState(new Date())
    const [numberofguest, setnumberofguest] = useState(1)
    const router = useRouter();

    const selectionrange = {
        startDate: startDate,
        endDate: endDate,
        key: 'Selection'
    }
    const handleSelect = (ranges) => {
        setstartdate(ranges.Selection.startDate)
        setendDate(ranges.Selection.endDate)
    }
    function ResetInput() {
        SetsearchInput('')

    }
    const Search = () => {
        router.push({
            pathname: '/search',
            query: {
                location: searchInput,
                startDate: startDate.toString(),
                endDate: endDate.toString(),
                numberofguest: numberofguest.toString()
            }

        })
    }






    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 
        md:bg-red shadow-md ">
            {/* left */}
            <div onClick={() => router.push('/')} className='relative flex items-center h-10 cursor-pointer my-auto'>
                <Image
                    src="https://links.papareact.com/qd3"
                    layout='fill'
                    objectFit='contain'
                    objectPosition='left'
                />
            </div>
            {/* middle */}
            <div className='flex items-center border-2 rounded-full py-2 shadow-md md:shadow-sm'>
                <input
                    type="text"
                    placeholder={Placeholder || "Star your Search"}
                    className="pl-5 bg-transparent outline-none flex-grow text-gray-600  placeholder-gray-400"
                    value={searchInput}
                    onChange={(e) => (SetsearchInput(e.target.value))} />
                <SearchIcon className=" hidden md:inline-flex h-8 bg-red-400 text-white 
                rounded-full p-2 cursor-pointer mx-2" />
            </div>
            {/* right */}
            <div className="flex space-x-4 items-center justify-end text-gray-500 ">
                <p className="hidden md:inline">Become a host</p>
                <GlobeAltIcon className="h-6" />
                <div className='flex space-x-4 items-center justify-center border-2 rounded-full pr-3 pl-3 bg-yellow-100  cursor-pointer '>
                    <MenuIcon className="h-6 mt-1 mb-1 hover:opacity-60" />
                    <UserCircleIcon className="h-6 mt-1 mb-1 hover:opacity-60" />

                </div>
            </div>
            {searchInput &&
                <div className='flex flex-col col-span-3 mx-auto mt-5 pt-5 mb-5 pb-5'>
                    <DateRangePicker
                        ranges={[selectionrange]}
                        minDate={new Date()}
                        rangeColors={['#FD5861']}
                        onChange={handleSelect}
                    />
                    <div className='flex flex-row items-center border-b mb-4 '>
                        <h2 className='text-2xl flex-grow font-semibold'>Number of Guests</h2>
                        <UsersIcon className='h-5' />
                        <input type="number"
                            value={numberofguest}
                            min={1}
                            onChange={e => setnumberofguest(e.target.value)}
                            className='w-12 pl-2 text-lg outline-none text-red-400'
                        />
                    </div>
                    <div className='flex '>
                        <button onClick={ResetInput} className='flex-grow text-gray-500'>Cancel</button>
                        <button onClick={Search} className='flex-grow text-red-400'>Search</button>
                    </div>


                </div>
            }
        </header>
    )
}

export default Header
