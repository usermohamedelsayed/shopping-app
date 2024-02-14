import { createSlice } from "@reduxjs/toolkit";

let init = localStorage.cartItem ? JSON.parse(localStorage.cartItem) : []
const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: { dataCart: init, inputValAmount: "" },
    reducers: {
        setDataCart: (state, action) => {
            const checkPro = state.dataCart.find(e => e.id === action.payload.id)
            if (checkPro) {
                checkPro.amount += 1
            } else {
                state.dataCart.push({ ...action.payload, amount: 1 })
            }
            localStorage.setItem("cartItem", JSON.stringify([...state.dataCart]))
        },
        getInputVal: (state, action) => {
            state.inputValAmount = action.payload
        },
        setHandleAmount: (state, action) => {
            const checkPro = state.dataCart.find(e => e.id === action.payload.id)
            if (checkPro) {
                checkPro.amount = +state.inputValAmount <= 0 ? 1 : +state.inputValAmount
            }
            localStorage.setItem("cartItem", JSON.stringify([...state.dataCart]))

        },
        deletProduct: (state, action) => {
            state.dataCart = state.dataCart.filter(e => e.id !== action.payload)
            localStorage.setItem("cartItem", JSON.stringify([...state.dataCart]))
        },
        clearCart: (state, action) => {
            state.dataCart = []
            localStorage.setItem("cartItem", JSON.stringify([...state.dataCart]))
        }
    }
})
export const { dataCart, setDataCart, setHandleAmount, getInputVal, deletProduct, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
