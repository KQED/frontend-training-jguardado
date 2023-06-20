import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: true,
  data: JSON.parse(localStorage.getItem('users')),
  message: ''
}

const userSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    addUser: (state, action) => {
      const user = action.payload
      state.data.users.push(user)
      state.loading = false
      state.message = 'User successfully added'
    },
    error: (state) => {
      state.data = null
      state.message = 'error occured'
    },
    getAllUsers: (state, action) => {
      state.data = action.payload
      state.loading = false
      localStorage.setItem('users', JSON.stringify(state.data))
    },
    modifyUser: (state, action) => {  // reducer for modifying user data

    }
  }
})

const fetchUsers = (id, userData) => {
  fetch(`http://localhost:3001/update-user/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data) // Log the response data
    })
    .catch((error) => {
      console.error('Error:', error)
    })
}

//  export actions
export const { addUser, error, getAllUsers, modifyUser } = userSlice.actions

//  export reducer
export const fetchRed = userSlice.reducer