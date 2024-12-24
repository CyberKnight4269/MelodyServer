const express = require('express')
const {addPlaylist, getAllplaylists, songList} = require('../controllers/playlistController.js')

const router = express.Router({ mergeParams: true })

router.post('/create',addPlaylist)
router.get('/',getAllplaylists)
router.get('/:playlist_id',songList)

module.exports = router