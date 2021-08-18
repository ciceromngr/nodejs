const Pool = require('pg').Pool
const Sequelize = require('sequelize')

// A utilizacao do Sequelize é apeans para a criacao das tabelas no banco
// Ele pode ser utilizado para outras coisas tbm mas , no meu caso so estou ,
// usando para criar tabelas
const sequelize = new Sequelize('crud', 'postgres', 'postgres', {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432
})

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "crud",
    password: "postgres",
    port: 5432
})

module.exports = {
    pool,
    sequelize
}