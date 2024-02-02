const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')

const User = require('../models/usersModel')

const crearUser = asyncHandler(async (req, res) => {
  // Desestructuramos el body
  const { name, email, password } = req.body

  // Verificamos que nos pasen todos los datos
  if (!name || !email || !password) {
    res.status(400)
    throw new Error('Por favor, ingresa todos los campos')
  }

  // Verificar si el usuario ya existe en la base de datos a través del email
  const userExiste = await User.findOne({ email })
  if (userExiste) {
    res.status(400)
    throw new Error('Ese usuario ya existe en la base de datos')
  }

  // Hacemos el Hash al password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // Creamos el usuario
  const user = await User.create({
    name,
    email,
    password: hashedPassword
  })

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email
    })
  } else {
    res.status(400)
    throw new Error('No se pudieron guardar los datos')
  }
})

const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Login usuario' })
})

const datosUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Datos del usuario' })
})

module.exports = {
  crearUser,
  loginUser,
  datosUser
}
