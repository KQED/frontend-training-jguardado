import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  error: false,
  message: '',
  isLoading: false
}

const userSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    fetchAllUsers: (state, action) => {
      const data = action.payload
      state.userList = data
      state.isLoading = false
      state.error = null
      state.message = null
    },
    setIsLoading: (state) => { // track progress, make copy and store it somewhere
      state.data = null
      state.isLoading = true // implies state has no data to give
      state.error = null
    },
    setError: (state, action) => {
      const error = action.payload
      state.data = ''
      state.isLoading = false
      state.error = error // error is the variable
    },
    addUser: (state, action) => {
      const newUser = action.payload
      state.userList.push(newUser)
    }
  }
})

// export actions
export const { fetchAllUsers, setIsLoading, setError, addUser } = userSlice.actions

export const getAllUsers = () => {
  return (dispatch, getState) => {
    const { userReducer } = getState()

    if (userReducer.data) { // we need to see if there is data
      return
    }

    dispatch(setIsLoading())

    const url = 'http://localhost:3001/users'
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch(url, requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
      })
      .then(
        (response) => {
          dispatch(fetchAllUsers(response))
        }
      )
      .catch(error => {
        dispatch(setError(error.message))
      })
  }
}

// export reducer
export const userRed = userSlice.reducer // userRed variable fixes ' "reducer" is a required argument ', error
