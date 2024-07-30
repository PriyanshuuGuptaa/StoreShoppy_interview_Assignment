import React, { useState } from 'react';
import { FaRegCircle, FaCheckCircle } from 'react-icons/fa';
import { useFilters } from './Context/FilterContext';

const QuickFilterComponent = ({ text, isChecked, onToggle }) => {
    return (
        <div
            className="bg-filter-header-btn text-white px-4 py-3 flex items-center rounded shadow-md cursor-pointer relative"
            onClick={onToggle}
        >
            {isChecked ?
                <div className='flex items-center'>
                    <div className="bg-white h-3 my-auto mx-0 w-0.5 absolute left-0 top-0 bottom-0"></div>
                    <FaCheckCircle className="text-blue-500 mr-2" />
                    <span className='text-blue-500'>{text}</span>
                </div>
                :
                <div className='flex items-center'>
                    <div className="bg-orange-500 h-3 my-auto mx-0 w-0.5 absolute left-0 top-0 bottom-0"></div>
                    <FaRegCircle className="text-blue-500 mr-2" />
                    <span>{text}</span>
                </div>
            }
        </div>
    );
};

function FilterHeader() {
    const { filters, updateFilter } = useFilters();

    const handleAllPayoutFilter = () => {
        updateFilter('FilteredPayouts', filters.AllPayouts);
    };

    const handleStatusFilter = (value) => {
        updateFilter('queued', value);
        if (value) {
            const filteredPayouts = filters.AllPayouts.filter((elem) => elem.queued === value);
            updateFilter('FilteredPayouts', filteredPayouts);
        }
        else {
            updateFilter('FilteredPayouts', filters.AllPayouts);

        }
    };

    const handleScheduleFilter = (value) => {
        updateFilter('Scheduled', value);
    };

    return (
        <div className='bg-filter-header flex px-6 py-4 text-white text-xs items-center justify-between'>
            <div className='flex items-center'>
                <p>Quick Filters: </p>
                <div className='flex items-center gap-4 ml-4'>
                    <QuickFilterComponent
                        text="All Payouts"
                        isChecked={filters.FilteredPayouts === filters.AllPayouts}
                        onToggle={handleAllPayoutFilter}
                    />
                    <QuickFilterComponent
                        text="Scheduled for next 2 days"
                        isChecked={filters.Scheduled === true}
                        onToggle={() => handleScheduleFilter(!filters.Scheduled)}
                    />
                    <QuickFilterComponent
                        text="Queued (RaorpayXA/c) 1"
                        isChecked={filters.queued === true}
                        onToggle={() => handleStatusFilter(!filters.queued)}
                    />
                </div>
            </div>
            <div className='flex items-center'>
                <select
                    value={filters.FilteredPayouts}
                    className="bg-transparent text-blue-400"
                >
                    <option value="View More Filters">View More Filters</option>
                    <option value="Filter 2">Filter 2</option>
                    <option value="Filter 3">Filter 3</option>
                    <option value="Filter 4">Filter 4</option>
                    <option value="Filter 5">Filter 5</option>
                </select>
            </div>
        </div>
    );
}

export default FilterHeader;
