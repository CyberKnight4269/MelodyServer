const {CreateSongs, getAllsongs, getSong} = require('../models/songs.js')

const addSongs = async(req,res,next) => {
    
        const {songs} = req.body
        if(!Array.isArray(songs) || songs.length == 0)
            return res.status(400).json({'message' : 'An Array of songs is required!!!'})
        try{
            const newSongs = await CreateSongs(songs)
            return res.status(201).json({
                'message': 'Songs added successfully',
                'songs': newSongs
            })
        }
        catch(err){
            next(err)
        }
}

const getSongs = async(req,res,next) => {
    try{
        const songs = await getAllsongs()
        return res.status(200).json(songs)
    }
    catch(err){
        next(err)
    }
}

const getSongByTitle = async(req,res,next) => {
    const {title} = req.params
    try{
        const song = await getSong(title)
        if(Array.isArray(song) && song.length == 0)
            return res.status(404).json({'message': 'Song not found'})
        return res.status(200).json(song)
    }
    catch(err){
        next(err)
    }
}

module.exports = {addSongs, getSongs, getSongByTitle}