const express = require('express')
const app = express()
const path = require('path');


const config = {
  baseUrl: '/'
}

app.use('/dist', express.static(path.join(__dirname, '/../static/dist')))

const indexRouter = express.Router()
indexRouter.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/../static/dist/index.html'))
})

indexRouter.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../static/dist/index.html'))
})

app.use(config.baseUrl, indexRouter)

app.listen(5001, () => { console.log("Server started on port 5001")})