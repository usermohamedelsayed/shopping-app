import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "searchSlice",
    initialState: { productsSearch: [], inputSearchValue: "" },
    reducers: {
        setInputValueSearch: (state, action) => {
            state.inputSearchValue = action.payload
        },
        setProductsSearch: (state, action) => {
            state.productsSearch = action.payload
        }
    }
})

export const { setInputValueSearch, setProductsSearch } = searchSlice.actions;
export default searchSlice.reducer






