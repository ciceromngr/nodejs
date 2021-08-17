const express = require('express')
const cors = require('cors')
const queries = require('./repository/queries')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/users', queries.getAllUsers)

app.listen(8000, () => {
    console.log('Server is Running')
})