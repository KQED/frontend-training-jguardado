// file strictly for rendering users on the front end
import React, { useEffect, useState } from 'react'
import { getAllUsers, addUser } from '../redux/apiSlice'
import { useDispatch, useSelector } from 'react-redux'
import '../App.css'

export default function Login () {
  const allUserData = useSelector(state => state.userReducer.userList)
  const [isDisplayed, setIsDisplayed] = useState(false)
  const handleUserList = () => {
    setIsDisplayed(!isDisplayed)
  }
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    const userData = {
      firstName: firstName,
      lastName: lastName
    }
    if (userData.firstName !== '') {
      dispatch(addUser(userData))
    }
    setFirstName('')
    setLastName('')
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
      <h1>KQED v1.0 alpha</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Firstname: <input type='text' name='firstName' className='input' value={firstName} onChange={handleFirstNameChange} />
        </label>
        <label>
          Lastname: <input type='text' name='lastName' className='input' value={lastName} onChange={handleLastNameChange} />
        </label>
        <button type='submit' className='button'>Submit</button>
      </form>
      <div className='userbutton'>
        {!isDisplayed
          ? <button className='hidebutton' onClick={handleUserList}> Show </button>
          : <div>
            <button className='hidebutton' onClick={handleUserList}> Hide </button>
            <div className='userlist'>
              {/* Render the users array */}
              {allUserData
                ? (
                    allUserData.map((user) => (
                    <div key={user.id} className='users'>
                      <p>First Name: {user.firstName}</p>
                      <p className='lastname'>Last Name: {user.lastName}</p>
                    </div>
                    ))
                  )
                : (
                  <p>Loading users...</p>
                  )}
            </div>
          </div>
        }
      </div>
    </div>
  )
}
