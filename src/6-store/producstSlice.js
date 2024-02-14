import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { datamain } from "../5-utils/data";
export const upPageScroll = () => {
    document.querySelectorAll("a").forEach(e => e.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
        document.querySelector(".Header").classList.remove("hide")
    }))
}
export const feactProduct = createAsyncThunk("productSlice/productsSlice", async (_, thunkFunc) => {
    try {
        // const res = await fetch("http://localhost:3009/posts");
        // const data = await res.json()
        return datamain
    } catch { }
})
const productsSlice = createSlice({
    name: "prsuctSlice",
    initialState: { dataProducts: [], loddingStatus: false },
    extraReducers: (builder) => {
        builder.addCase(feactProduct.fulfilled, (state, action) => {
            state.dataProducts = action.payload || []
        })
    }
})

export default productsSlice.reducer;







