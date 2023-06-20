import { createAction } from '@reduxjs/toolkit'

export const increment = createAction('increment')
export const decrement = createAction('decrement')

// FETCH
export const success = createAction('success')
export const failure = createAction('failure')