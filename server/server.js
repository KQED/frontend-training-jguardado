const express = require('express')
const app = express()

app.get("/api", (req, res) => {
    res.json({ "users": ["User1", "User2", "User3"]})
})

app.listen(5001, () => { console.log("Server started on port 5001")})