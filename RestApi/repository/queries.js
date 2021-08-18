const pool = require('../database/db')


const getAllUsers = (req, res) => {
  pool.query('SELECT * FROM usuarios', (error, results) => {
    if(error) throw error

    return res.json(results.rows)
  })
}

const createUser = (request, response) => {
  const { name, sobrenome } = request.body;

  pool.query('INSERT INTO usuarios (name, sobrenome) VALUES ($1, $2)', [name, sobrenome], (error, results) => {
      if(error) {
          throw error;
      }
      response.status(201).send(`User added with ID: ${response}`);
  })
}

module.exports = {
  getAllUsers,
  createUser
}