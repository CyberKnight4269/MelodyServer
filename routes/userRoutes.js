const express = require('express')
const { registerUser, getUsers, getUser, removeUser } = require('../controllers/userController')
const router = express.Router()

router.get('/',getUsers)

router.post('/register', registerUser)

router.get('/:username', getUser)

router.delete('/:username/deleteuser', removeUser)

module.exports = router