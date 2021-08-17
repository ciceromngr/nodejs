const pool = require('../database/db')


const getAllUsers = (req, res) => {
  pool.query('SELECT * FROM user_tb', (error, results) => {
    if(error) throw error

    res.json(results.rows)
  })
}

// const posUsers = (req, res) => {

// }

module.exports = {
  getAllUsers
}