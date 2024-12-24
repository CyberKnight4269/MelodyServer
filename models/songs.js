const pool = require('../config/db.js')

const CreateSongs = async (songs) => {

    const values = songs.map(
        (song) => `('${song.title}', '${song.artist}', ${song.duration}, '${song.url}')`
    ).join(',')

    const query = `INSERT INTO songs (title, artist, duration, url) VALUES ${values} RETURNING *`

    const result = await pool.query(query)
    return result.rows;
}

const getAllsongs = async() => {
    const result = await pool.query('SELECT * FROM songs')
    return result.rows
}

const getSong = async(title) => {
    const result = await pool.query(`SELECT * FROM songs WHERE title=$1`,[title])
    return result.rows
}

module.exports = { CreateSongs, getAllsongs, getSong}