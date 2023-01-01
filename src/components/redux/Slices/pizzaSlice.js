

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


export const fetchPizzaRedux = createAsyncThunk(
    'pizza/fetchPizzaStatus',
    async (params) => {
        const { search, categorId, oredr, sortBy } = params;
        const { data } = await axios.get(`https://63a48119821953d4f2b6a7e6.mockapi.io/Items?${categorId}&sortBy=${sortBy}&order=${oredr}${search}`);
        return data;
    }
);


const initialState = {
    items: [],
    statusLoading: 'loading',

};

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload;
        },
    },
    extraReducers: {
        [fetchPizzaRedux.pending]: (state) => {
            state.statusLoading = 'loading';
            state.items = [];
        },
        [fetchPizzaRedux.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.statusLoading = 'success';
        },
        [fetchPizzaRedux.rejected]: (state) => {
            state.statusLoading = 'error';
            state.items = [];
        },
    },
});


export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer; 