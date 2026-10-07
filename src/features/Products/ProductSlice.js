import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    loading: true,
};

const productSlice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {
        addProducts: (state, action) => {
            state.data = action.payload;
            state.loading = false;
        },
        // deleteProduct: (state, action) => {
        //     // Filter out the deleted item from global state
        //     state.data = state.data.filter((product) => product.id !== action.payload);
        // }
    },
});

export const { addProducts } = productSlice.actions;
export default productSlice.reducer;