const ADD_WISH_LIST_VAR = 'wishlist/addWishList';

const ADD_WISH_LIST = (productId) => {
    return { type: ADD_WISH_LIST_VAR,payload: productId }
}

export default function wishListReduer(state = [],action) {
    switch (action.type) {
        case ADD_WISH_LIST_VAR:
            return { ...state,wishList: action.payload }
        default:
            return state;
    }
}