import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./slices/productSlice";
import { cartReducers } from "./slices/cartSlice";

const store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducers,
    }
});

export default store;