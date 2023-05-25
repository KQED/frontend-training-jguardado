const express = require('express')
const app = express()

app.use(express.json()) // JSON parser

let userIsSet = false

app.get('/get-user/:id', (req, res) => { // :id is a dynamic variable
  const response = {
    id: req.params.id,
    firstName: req.query.firstName,
    lastName: req.query.lastName
  }
  if (response.firstName === null || response.firstName === '') {
    console.error('Please enter a valid response')
  } else {
    res.status(200).send({ // send back user data
      id: response.id,
      firstName: response.firstName,
      lastName: response.lastName
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
    res.status(200).send({ // send back user data with a flag
      id: response.id,
      firstName: response.firstName,
      lastName: response.lastName,
      userIsSet: userIsSet
    })
  }
})

app.listen(3001, () => { console.log('api-server started on Port: 3001!') })
