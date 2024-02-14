import { createSlice } from "@reduxjs/toolkit";

const init = localStorage.favorite ? JSON.parse(localStorage.favorite) : []
const favoriteSlice = createSlice({
    name: "favoriteSlice",
    initialState: { dataFavorite: init, inputVal: "" },
    reducers: {
        addToFavorite: (state, action) => {
            const checkData = state.dataFavorite.find(e => e.id === action.payload.id)
            if (checkData) {
                checkData.amount += 1
            } else {
                state.dataFavorite.push({ ...action.payload, amount: 1 })
            }
            localStorage.setItem("favorite", JSON.stringify([...state.dataFavorite]))
        },
        setInputVal: (state, action) => {
            state.inputVal = action.payload
        },
        changeAmount: (state, action) => {
            state.dataFavorite.find(e => e.id === action.payload.id).amount = +state.inputVal <= 0 ? 1 : +state.inputVal
            localStorage.setItem("favorite", JSON.stringify([...state.dataFavorite]))
        },
        removeProduct: (state, action) => {
            state.dataFavorite = state.dataFavorite.filter(e => e.id !== action.payload)
            localStorage.setItem("favorite", JSON.stringify([...state.dataFavorite]))
        },
        clearFavorite: (state, action) => {
            state.dataFavorite = []
            localStorage.setItem("favorite", JSON.stringify([...state.dataFavorite]))
        }
    }
})

export const { addToFavorite, changeAmount, setInputVal, removeProduct, clearFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;


