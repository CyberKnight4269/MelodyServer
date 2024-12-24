const express = require('express')
const router = express.Router()
const {addSongs, getSongs, getSongByTitle} = require('../controllers/songController.js')

router.post('/addsongs',addSongs)
router.get('/',getSongs)
router.get('/:title',getSongByTitle)

module.exports = router