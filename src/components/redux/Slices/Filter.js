

import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    categoryId: 0,
    sortType: {
        name: 'популярности',
        sort: 'rating'
    },
};

export const filterSlice = createSlice({
    name: 'Filters',
    initialState,
    reducers: {
        setCategoryID(state, action) {
            state.categoryId = action.payload;
        },
        setSortType(state, action) {
            state.sortType = action.payload;
        },
        /* setFilters(state, action) {
            state.sortType = action.payload.sortType;
            state.categoryId = Number(action.payload.categoryId);

        } */
    },
});


export const { setCategoryID, setSortType, /* setFilters */ } = filterSlice.actions;

export default filterSlice.reducer;