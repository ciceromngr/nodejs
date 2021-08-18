(async () => {
    const express = require('express')
    const cors = require('cors')
    const queries = require('./repository/queries')

    const app = express()

    // Criacao das tabelas 
    const sqlize = require('./database/db')
    const Usuario = require('./database/criar_table')

    await sqlize.sequelize.sync()

    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))

    app.get('/users', queries.getAllUsers)
    app.post('/users', queries.createUser)

    app.listen(8000, () => {
    console.log('Server is Running')
})
})()