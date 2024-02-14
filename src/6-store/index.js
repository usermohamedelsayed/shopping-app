import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./producstSlice"
import cartSlice from "./cartSlice"
import favoriteSlice from "./favoriteSlice"
import searchSlice from "./searchSlice"
export const store = configureStore({
    reducer: {
        productsSlice,
        cartSlice,
        favoriteSlice,
        searchSlice,
    }
})










