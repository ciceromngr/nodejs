// conexão  com o banco;

const Sequelize = require('sequelize');
const sequelize = new Sequelize('crud', 'postgres', 'postgres', {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432
})

module.exports = sequelize