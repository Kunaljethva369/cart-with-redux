import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slice//productReducer";
import cartSlice from "./slice/cartItemReducer";
import wishListReduer from "./slice/wishListReduer";



const logger = (store => (next) => (action) => {
    // console.log('Store',store);
    // console.log('next',next);
    // console.log('action',action);
    next(action);
});

const store = configureStore({
    reducer: {
        products: productSlice,
        cartItem: cartSlice,
        wishList: wishListReduer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;

// const reducer = combineReducers({
//     products: productReducer,
//     cartItem: cartSlice,
//     wishList: wishListReduer
// });


// const initialState = {
//     count: 0
// }
// function counterReducer(state = initialState,action) {
//     switch (action.type) {
//         case 'counter/incremented':
//             return {...state, count: state.count + action.payload }
//         case 'counter/decremented':
//             return {...state, count: state.count - 1 }
//         default:
//             return state
//     }
// }

// function products(state = initialState,action) {
//     switch (action.type) {
//         case ADD_CART_ITEM:
//             return { ...state,cartItem: [...state.cartItem,action.payload] }
//         case REMOVE_CART_ITEM:
//             return { ...state,cartItem: state.cartItem.filter(el => el.products !== action.payload.products) }
//         default:
//             return state
//     }
// }

// const store = createStore(counterReducer,__REDUX_DEVTOOLS_EXTENSION__());
// store.dispatch({ type: 'counter/incremented', payload: 10 });
// store.dispatch({ type: 'counter/incremented', payload: 20  });
// store.dispatch({ type: 'wishlist/addWishList',payload: { productId: 1 } });