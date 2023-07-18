import { configureStore } from '@reduxjs/toolkit'
import { userRed } from './apiSlice'
import { counterRed } from './counterSlice'

const mainRed = {     // two separate reducers is troublesome, one is better in this case.
        countRed: counterRed,
        userReducer: userRed
}
const store = configureStore({ 
    reducer: mainRed
})

export { store, mainRed }
