//const { response } = require('express')
const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json()) // JSON parser

let userIsSet = false

let users = [{ firstName: 'Bob', lastName: 'H.' }, { firstName: 'Frank', lastName: 'S.' }, { firstName: 'Frankie', lastName: 'V.' }] // starter dummy data


app.get('/users', (req, res) => { // send back all users
  res.send(users)
})

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

app.listen(3001, () => { console.log('api-server started on Port: 3001!') })
