const pool = require('../config/db.js')

const getAllUsers = async () => {
    const result = await pool.query('SELECT * FROM users')
    return result.rows
}

const createUser = async (username, email, password_hash) => {
    const query = 'INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING *'
    const values = [username, email, password_hash]
    const result = await pool.query(query, values)
    return result.rows
}

const getUserByUsername = async (username) => {
    const result = await pool.query('SELECT * FROM users WHERE username=$1',[username])
    return result.rows[0]
}

const deleteUser = async (username) => {
    const result = await pool.query('DELETE FROM users WHERE username= $1 RETURNING *',[username])
    return result.rows
}

module.exports = { createUser, getAllUsers, getUserByUsername, deleteUser}