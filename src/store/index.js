import { combineReducers, createStore } from "redux";
import productReducer from "./productReducer";
import cartItemReducer from "./cartItemReducer";


const reducer  = combineReducers({
    products: productReducer,
    cartItem: cartItemReducer,
    wishlist: []
});

const store = createStore(reducer,__REDUX_DEVTOOLS_EXTENSION__());

export default store;


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