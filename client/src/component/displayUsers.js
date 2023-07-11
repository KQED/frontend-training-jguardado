// file strictly for rendering users on the front end
import React, {useEffect, useState} from 'react'
import { fetchAllUsers } from '../redux/apiSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function Login() {
    const allUserData = useSelector(state => state.userReducer.data)
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
      
      console.log('First Name:', firstName)
      console.log('Last Name:', lastName)
      console.log('users: ', allUserData) // print users array
      console.log('allusers', fetchAllUsers())
    }

    const handleFirstNameChange = (e) => {
      setFirstName(e.target.value)
    }
  
    const handleLastNameChange = (e) => {
      setLastName(e.target.value)
    }

    useEffect(() => {
      dispatch(fetchAllUsers())
    }, [])

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
         {/* <ul>
        {allUserData.map((element, index) => {    // not an array, cannot iterate with .map
          return <li key={index}>{element.name}</li>;
        })}
      </ul>*/}
        </div>
        </div>
      )
}
