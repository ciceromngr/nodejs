const Sequelize = require('sequelize')
const database = require('./db')

const Produto = database.define('produto', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },

    preco: Sequelize.DOUBLE,
    descricao: Sequelize.STRING
})

module.exports = Produto


// O codigo acima carrega a dependencia do sequelize para
// que possamos usar algumas constantes dele.
// depois carregar a dependencia do nosso banco de dados, que 
// configuramos anteriormente