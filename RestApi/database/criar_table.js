const Sequelize = require('sequelize')
const database = require('../database/db')

const Usuario = database.sequelize.define('usuario', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: Sequelize.STRING,
    sobrenome: Sequelize.STRING
})

module.exports = {
    Usuario
}