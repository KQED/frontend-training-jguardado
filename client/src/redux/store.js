import { configureStore } from '@reduxjs/toolkit'
import { counterRed } from './counterSlice'
import thunk from 'redux-thunk'

export const store = configureStore({ reducer: counterRed, middleware: [thunk]})
