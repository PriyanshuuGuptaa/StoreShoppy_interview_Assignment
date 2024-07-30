const filterReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_FILTER':
            return {
                ...state,
                [action.payload.filterName]: action.payload.filterValue
            };
        default:
            return state;
    }
};
export default filterReducer;