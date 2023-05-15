import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
  message: ''
}

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment: (state, action) => {
      return { count: state.count + 1, payload: action.payload, message: 'Incremented!' } //    "Incremented!"
    },
    decrement: (state, action) => {
      return { count: state.count - 1, payload: action.payload, message: 'Decremented!' } //    "Decremented!"
    }
  }
})

//  export actions
export const { increment, decrement } = counterSlice.actions

//  export reducer
export const counterRed = counterSlice.reducer
