import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 1
}

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment: (state, action) => {
      return { count: state.count + 1, payload: action.payload } //    "Incremented!"
    },
    decrement: (state, action) => {
      return { count: state.count - 1, payload: action.payload } //    "Decremented!"
    }
  }
})

//  export actions
export const { increment, decrement } = counterSlice.actions

//  export reducer
export const counterRed = counterSlice.reducer
