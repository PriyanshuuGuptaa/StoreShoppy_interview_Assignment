import React, { createContext, useReducer, useContext } from 'react';
import PayoutData from "../../PayoutData.json";
import filterReducer from '../Reducer/FilterReducer';
// Define initial state
const initialState = {
    queued: '',
    done: '',
    contact: '',
    createdBy: '',
    AllPayouts: PayoutData.PayoutData,
    FilteredPayouts: PayoutData.PayoutData,
    Scheduled: ''
};


// Create a context
const FilterContext = createContext();

// Create a provider component
export const FilterProvider = ({ children }) => {
    const [filters, dispatch] = useReducer(filterReducer, initialState);

    const updateFilter = (filterName, filterValue) => {
        dispatch({
            type: 'UPDATE_FILTER',
            payload: { filterName, filterValue }
        });
    };

    return (
        <FilterContext.Provider value={{ filters, updateFilter }}>
            {children}
        </FilterContext.Provider>
    );
};

// Custom hook to use the filter context
export const useFilters = () => {
    return useContext(FilterContext);
};
