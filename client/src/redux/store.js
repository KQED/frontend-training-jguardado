import { configureStore } from '@reduxjs/toolkit'
import { counterRed } from './slice'

export const store = configureStore({ reducer: counterRed })
