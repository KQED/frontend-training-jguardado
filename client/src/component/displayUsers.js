// file strictly for rendering users on the front end
import React, { useEffect, useState } from 'react'
import { fetchAllUsers, getAllUsers, addUser } from '../redux/apiSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function Login() {
  const allUserData = useSelector(state => state.userReducer.userList)
  //const state = useSelector(state => state.users.data)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    const userData = {
      firstName: firstName,
      lastName: lastName,
    }

    setFirstName('-')
    setLastName('-')

    //dispatch(fetchAllUsers())
    dispatch(addUser(userData));

    console.log('1: First Name:', firstName)
    console.log('2: Last Name:', lastName)
    console.log('3: users: ', allUserData) // print users array
   
  }

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value)
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value)
  }

  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Firstname: <input type='text' name='firstName' value={firstName} onChange={handleFirstNameChange} />
        </label>
        <label>
          Lastname: <input type='text' name='lastName' value={lastName} onChange={handleLastNameChange} />
        </label>
        <button type='submit'>Submit</button>
      </form>

      <div>
        {/* Render the users array */}
        {allUserData ? (
          allUserData.map((user) => (
            <div key={user.id}>
              <p>First Name: {user.firstName}</p>
              <p>Last Name: {user.lastName}</p>
            </div>
          ))
        ) : (
          <p>Loading users...</p>
        )}
      </div>
    </div>
  )
}

