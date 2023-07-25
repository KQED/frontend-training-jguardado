import { createAction } from '@reduxjs/toolkit'

export const increment = createAction('increment')
export const decrement = createAction('decrement')

// FETCH
export const fetchAllUsers = createAction('users/fetchAllUsers')
export const setIsLoading = createAction('users/setIsLoading')
export const setError = createAction('users/setError')
export const addUser = createAction('users/addUser')

// To get it to work, add an export for all reducers in {} and set to userSlice.actions in my case
// this is in line 84 in apiSlice.js
