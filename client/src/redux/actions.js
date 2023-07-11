import { createAction } from '@reduxjs/toolkit'

export const increment = createAction('increment')
export const decrement = createAction('decrement')

// FETCH
export const fetch = createAction('set')
export const set = createAction('fetch')

// To get it to work, add an export for all reducers in {} and set to userSlice.actions in my case
// this is in line 84 in apiSlice.js
