import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addCartItem(state,action) {
            const existingItem = state.find((el) => el.productId === action.payload.productId);
            if (existingItem) {
                return state.map((cartItem) => {
                    if (cartItem.productId === existingItem.productId) {
                        return { ...cartItem,quantity: cartItem.quantity + 1 };
                    }
                    return cartItem;
                });
            }
            return [...state,{ ...action.payload,quantity: 1 }]
        },
        removeCartItem(state,action) {
            return state.map((cartItem) => {
                if (cartItem.productId === action.payload) {
                    return { ...cartItem,quantity: cartItem.quantity - 1 };
                }
                return cartItem;
            }).filter((cartItem) => cartItem.quantity > 0)
        }
    }
});

export const { addCartItem,removeCartItem } = cartSlice.actions;

export default cartSlice.reducer;

// const ADD_CART_ITEM = 'cart/addItem';
// const REMOVE_CART_ITEM = 'cart/removeItem';

// export const addCartItem = ((productData) => {
//     return { type: ADD_CART_ITEM,payload: productData }
// });

// export const removeCartItem = (prodcutId) => {
//     return { type: REMOVE_CART_ITEM,payload: prodcutId }
// };

// export default function cartItemReducer(state = [],action) {
//     switch (action.type) {
//         case ADD_CART_ITEM:
//             const existingItem = state.find((el) => el.productId === action.payload.productId);
//             if (existingItem) {
//                 return state.map((cartItem) => {
//                     if (cartItem.productId === existingItem.productId) {
//                         return { ...cartItem,quantity: cartItem.quantity + 1 };
//                     }
//                     return cartItem;
//                 });
//             }
//             return [...state,{ ...action.payload,quantity: 1 }]
//         case REMOVE_CART_ITEM:
//             return state.map((cartItem) => {
//                 if (cartItem.productId === action.payload) {
//                     return { ...cartItem,quantity: cartItem.quantity - 1 };
//                 }
//                 return cartItem;
//             }).filter((cartItem) => cartItem.quantity > 0)
//         default:
//             return state
//     }
// }