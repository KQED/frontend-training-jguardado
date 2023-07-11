import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: '_filler_',
  message: ''
}

export const userSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    fetchAllUsers: (state, action) => {
      let data = action.payload
      state.userList = data
      state.isLoading = false
      state.error = null
    },
    setIsLoading: (state) => {    //track progress, make copy and store it somewhere
      state.data = null
      state.isLoading = true  // implies state has no data to give
      state.error =  null
    },
    setError: (state, action) => {
      let error = action.payload 
      state.data = ''
      state.isLoading = false
      state.error = error     // error is the variable
    }
    // ** add a reducer to add more users **
    // this reducer will push new users into the
    // already existing 'users' array
  },
})

//  export actions
export const { fetchAllUsers, setIsLoading, setError
 } = userSlice.actions

 export const getAllUsers = () => {
  return (dispatch, getState) => {
    const { users } = getState()

    if (users.data) { // need to see if there is data
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
        if(response.ok) {
          return response.json()
        }
      })
      .then(
        (response) => {
          dispatch(fetchAllUsers({ allUsers: response }))
          console.log("response", response)
        }
      )
      .catch(error => {
        dispatch(setError(error.message))
      })
  }
}

//  export reducer
//export default userSlice.reducer
export const userRed = userSlice.reducer     // <-- userRed variable fixes ' "reducer" is a required argument ', error
