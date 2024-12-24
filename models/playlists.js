const pool = require('../config/db.js')

const createPlaylist = async(playlistName, description, user_id) => {
    const query = 'INSERT INTO playlists(name,description,user_id) VALUES ($1,$2,$3) RETURNING *'
    const values = [playlistName,description,user_id]
    const result = await pool.query(query,values)
    return result.rows
}

const getPlaylists = async(user_id) => {
    const result = await pool.query('SELECT * FROM playlists WHERE user_id=$1',[user_id])
    return result.rows
}

const addSongsofPlayList = async(song,playlist_id) => {
    const values = song.map(
        (song) => `('${song.song_id}')`
    ).join(',')
    const query = `INSERT INTO playlistSongs WHERE playlist_id=$1 VALUES ${values} RETURNING *`
    const result = await pool.query(query,[playlist_id])
    return result.rows
}

const getSongsofPlaylist = async(playlist_id) => {
    const result = await pool.query('SELECT * FROM playlistSongs WHERE playlist_id=$1',[playlist_id])
    return result.rows
}

module.exports = {createPlaylist,getPlaylists,addSongsofPlayList,getSongsofPlaylist}