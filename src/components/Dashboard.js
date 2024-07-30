import React, { useState } from 'react'
import Header from './Header'
import FilterHeader from './FilterHeader'
import { FaRegSquare } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";
import { LuRotateCw } from "react-icons/lu";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import PayoutTable from './PayoutTable';







function Dashboard() {
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [sortByFilter, setSortByFilter] = useState();
    const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const sortBy = ["latest creation date"]

    const handleChange = (event) => {
        setRowsPerPage(event.target.value);
    };
    const handleRefresh = () => {
        window.location.reload();
    }
    const handleSortByChange = (event) => {
        setSortByFilter(event.target.value);
    }
    return (
        <div className='bg-dashboard-bg h-full fixed  w-screen left-16 pr-16'>
            <Header />
            <FilterHeader />
            <div className='bg-warning-bg flex mx-6 p-3 my-4  items-center gap-2   rounded'>
                <button className='text-xxs bg-orange-400 px-1 rounded'>TEST</button>
                <p className='text-white text-xs'>These are test payouts and do not affect the actual balance. They are used only for the purpose of integrating events. </p>
                <a className='text-blue-400 text-xs ml-3'><b>Learn More</b></a>
            </div>
            <div className='flex items-center mx-6 justify-between pb-3 border-warning-bg border-b-[1px] '>
                <div className='flex items-center text-white text-xs gap-3'>
                    <FaRegSquare className='text-warning-bg text-sm' />
                    <span> Showing 1-5 payouts</span>
                    <FaCircle className='text-3xs' />
                    <span>Sort By </span>
                    <select
                        value={sortByFilter}
                        onChange={handleSortByChange}
                        className="bg-transparent text-blue-400  "
                    >

                        {sortBy.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                    {/* drop down menu for filtering */}
                </div>
                <div className='flex gap-3'>
                    <button className='cursor-pointer text-m' onClick={handleRefresh}><LuRotateCw className='text-blue-400' /></button>
                    <button className='cursor-pointer text-m'><BsThreeDotsVertical className='text-blue-400' /></button>
                    <button className='bg-transparent border border-blue-400 text-blue-400 flex items-center text-sm py-1 px-4'>
                        <FiDownload /> Export
                    </button>
                    <button className='flex items-center text-white bg-blue-500 px-4'><span className='text-xs border-r-slate-500'>+ PAYOUT</span><RiArrowDropDownLine className='text-lg' /></button>
                </div>
            </div>
            <PayoutTable rowNum={rowsPerPage} />
            <div className="flex items-center space-x-2 text-sm relative py-4">
                <div className='absolute right-0 mx-6 flex gap-2 items-center'>
                    <select
                        value={rowsPerPage}
                        onChange={handleChange}
                        className="bg-filter-header text-white py-1 px-2 rounded "
                    >
                        {options.map((option) => (
                            <option key={option} value={option} onClick={() => { setRowsPerPage(option) }}>
                                {option}
                            </option>
                        ))}
                    </select>
                    <span className="text-white">rows/page</span>
                </div>
            </div>
        </div>

    )
}

export default Dashboard