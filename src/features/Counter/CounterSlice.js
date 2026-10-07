import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    count: 0,
}

const CounterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        addByValue: (state, action) => {
            state.count += action.payload
        }
    }
})

export const { increment, decrement, addByValue } = CounterSlice.actions
export default CounterSlice.reducer