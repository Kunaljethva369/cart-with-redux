import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'products',
    initialState: {
        isLoading: false,
        list: []
    },
    reducers: {
        isLoadingFn(state) {
            state.isLoading = true
        },
        fetchProduct(state,action) {
            state.isLoading = false,
            state.list = action.payload
        }
    }
});

export const { fetchProduct,isLoadingFn } = productSlice.actions;

export default productSlice.reducer;