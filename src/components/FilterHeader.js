import React, { useState } from 'react';
import { FaRegCircle, FaCheckCircle } from 'react-icons/fa';
import { RiArrowDropDownLine } from "react-icons/ri";



const QuickFilterComponent = ({ text }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleButtonClick = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div
            className="bg-filter-header-btn text-white px-4 py-3 flex items-center rounded shadow-md cursor-pointer relative"
            onClick={handleButtonClick}>

            {isChecked ?
                <div className='flex items-center'>
                    <div className="bg-white h-3 my-auto mx-0 w-0.5 absolute left-0 top-0 bottom-0"></div>
                    <FaCheckCircle className="text-blue-500 mr-2" />
                    <span className='text-blue-500'>{text}</span>
                </div>
                :
                <div className='flex items-center '>
                    <div className="bg-orange-500 h-3 my-auto mx-0 w-0.5 absolute left-0 top-0 bottom-0"></div>
                    <FaRegCircle className=" text-blue-500 mr-2" />
                    <span>{text}</span>

                </div>
            }
        </div>
    );
};

function FilterHeader() {
    const [filters, setFilters] = useState();
    const moreFilters = ["View More Filters", "Filter 1", "Filter 1", "Filter 1", "Filter 1"];

    return (
        <div className='bg-filter-header flex px-6 py-4 text-white text-xs items-center justify-between'>
            <div className='flex items-center'>
                <p>Quick Filters: </p>
                <div className='flex items-center gap-4 ml-4'>
                    <QuickFilterComponent text="All Payouts" />
                    <QuickFilterComponent text="Scheduled for next 2 days" />
                    <QuickFilterComponent text="Queued (RaorpayXA/c) 1" />
                </div>
            </div>
            <div className='flex items-center'>

                <select
                    value={filters}
                    className="bg-transparent text-blue-400  "
                >

                    {moreFilters.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default FilterHeader;
