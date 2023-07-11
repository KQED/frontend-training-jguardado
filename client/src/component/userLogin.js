import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//import { addUser, error, getAllUsers, modifyUser } from '../redux/apiSlice'

export default function Login() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const message = useSelector((state) => state.message)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    const userData = {
      firstName: firstName,
      lastName: lastName,
    }
    
    dispatch(addUser(userData))
    const users = []
    //users = useState("")
    users.push({userData})

    setFirstName('-')
    setLastName('-')

    console.log('First Name:', firstName)
    console.log('Last Name:', lastName)
    console.log('users: ', users) // print users array
  }

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value)
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value)
  }

  const [users, setUsers] = useState([])

  /*useEffect(() => {
    fetchUsers()
  }, [])*/

  /*const fetchUsers = () => {
    fetch('http://localhost:3001/get-users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data)
      })
      .catch((error) => {
        console.error('Error fetching users:', error)
      })
  }*/ 


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
      {users.map((user, index) => (
        <div key={index}>
          <p>{ user.firstName }</p>
          <p>{ user.lastName }</p>
        </div>
      ))}
    </div>
    </div>
  )
}
