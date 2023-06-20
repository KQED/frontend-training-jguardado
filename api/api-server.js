//const { response } = require('express')
const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json()) // JSON parser

let userIsSet = false

let users = [{ firstName: 'Bob', lastName: 'H.' }, { firstName: 'Frank', lastName: 'S.' }, { firstName: 'Frankie', lastName: 'V.' }] // starter dummy data

app.get('/get-user/:id', (req, res) => { // :id is a dynamic variable
  const response = {
    id: req.params.id,
    firstName: req.query.firstName,
    lastName: req.query.lastName
  }
  if (response.firstName === null || response.firstName === '') {
    console.error('Please enter a valid response')
  } else {
    users.push({ firstName: response.firstName, lastName: response.lastName })
    res.status(200).send({ // send back user data
      id: response.id,
      firstName: users[response.id].firstName,
      lastName: users[response.id].lastName
    })
  }
})

app.get('/get-users', (req, res) => {
  res.status(200).send(users)
})
app.post('/update-user/:id', (req, res) => {
  const userId = req.params.id
  const { firstName, lastName } = req.body

  // Find the user with the specified id in the users array
  const user = users.find((user, index) => String(index) === userId)

  if (!user) {
    res.status(404).json({ message: 'User not found' })
  } else {
    // Update the user's firstName and lastName
    user.firstName = firstName
    user.lastName = lastName

    res.status(200).json({ message: 'User updated successfully' })
  }
})

app.post('/set-user/:id', (req, res) => {
  const response = {
    id: req.params.id,
    firstName: req.query.firstName,
    lastName: req.query.lastName
  }
  if (response.firstName === null || response.firstName === '') {
    console.error('Please enter a valid response')
  } else {
    userIsSet = true
    users = users.push({ firstName: response.firstName, lastName: response.lastName })
    res.status(200).send({ // send back user data with a flag
      id: response.id,
      firstName: users[response.id].firstName,
      lastName: users[response.id].lastName,
      userIsSet: userIsSet
    })
  }
})

// modify existing data on API
/*app.put('/modify-user/:id', (req, res) => {   // 
  const id = req.params.id

  console.log(req.body)

})*/

app.listen(3001, () => { console.log('api-server started on Port: 3001!') })
