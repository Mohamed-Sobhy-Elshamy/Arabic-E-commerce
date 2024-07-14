import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: localStorage.getItem("cartItems") ? 
        JSON.parse(localStorage.getItem("cartItems")) : []
    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;

            const isItemExistInCart = state.cartItems.find(
                cartItem => cartItem.id === newItem.id
            );

            if(isItemExistInCart) {
                state.cartItems = state.cartItems.map(item => item.id === newItem.id ? newItem : item); 
                // عشان ميكونش نفس المنتج موجود مرتين ف ال cart
            } else {
                // ال item الجديد مش موجود ف ال cart قبل كده
                state.cartItems = [...state.cartItems, newItem];
            }
        },
        removeItemFromCart(state, action) {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        }
    }
})

const cartActions = cartSlice.actions;
const cartReducers =cartSlice.reducer;
// exports 
export { cartActions, cartReducers }; 