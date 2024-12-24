const {createPlaylist, getPlaylists,addSongsofPlayList ,getSongsofPlaylist} = require('../models/playlists.js')

const addPlaylist = async(req,res,next) => {
    const {name,description} = req.body
    const user_id = req.params['user_id']
    if(!name)
        return res.status(400).json({'message': 'Playlist name is required'})
    if(!user_id)
        return res.status(400).json({'message': 'User id is required'})
    try{
        const playlist = await createPlaylist(name,description,user_id)
        console.log('Playlist Created!')
        return res.status(201).json(playlist)
    }
    catch(err){
        next(err)
    }
}

const getAllplaylists = async(req,res,next) => {
    const {user_id} = req.params
    try{
        const playlists = await getPlaylists(user_id)
        return res.status(200).json(playlists)
    }
    catch(err){
        next(err)
    }
}

const songList = async(req,res,next) => {
    const {playlist_id} = req.params
    try{
        const playlists = await getPlaylists(playlist_id)
        return res.status(200).json(playlists)
    }
    catch(err){
        next(err)
    }
}

const addSongstoPlaylist = async(req,res,next) => {
    const {playlist_id} = req.params
    const song = req.body
    try{
        const songs = await addSongsofPlayList(song,playlist_id)
        return res.status(200).json(songs)
    }
    catch(err){
        next(err)
    }
}

module.exports = {addPlaylist, getAllplaylists, songList, addSongstoPlaylist}