

import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './Slices/Filter';
import cart from './Slices/cartSlice';
import pizza from './Slices/pizzaSlice';

export const store = configureStore({
    reducer: {
        filterReducer,
        cart,
        pizza,
    },
});

