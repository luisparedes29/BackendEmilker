const express = require('express')
const { registerUser, loginUser } = require('./controllers/usersControllers')
const router = express.Router()

router
  .post('/signup', registerUser)

  // Ruta para iniciar sesion
  .post('/login', loginUser)

module.exports = router
