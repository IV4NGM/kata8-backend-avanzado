const express = require('express')
const router = express.Router()
const { crearUser, loginUser, datosUser } = require('../controllers/usersControllers')

router.post('/', crearUser)
router.post('/login', loginUser)
router.get('/datos', datosUser)

module.exports = router
