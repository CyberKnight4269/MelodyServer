const { createUser, getAllUsers, getUserByUsername, deleteUser } = require('../models/user.js')
const bcrypt = require('bcryptjs')

const getUsers = async (req, res, next) => {
    try{
        const user = await getAllUsers()
        return res.status(200).json(user)
    }
    catch(err){
        next(err)
    }
}

const registerUser = async (req, res, next) => {
    const { username, email, password } = req.body
    if(!username)
        res.status(400).send({'message': 'Username is required'})
    else if(!email)
        res.status(400).send({'message': 'Email is required'})
    const passwordHash = await bcrypt.hash(password, 10)
    try{
        const user = await createUser(username, email, passwordHash)
        console.log('User registered Successfully')
        return res.status(201).json(user)
    }
    catch(err){
        console.error(err.message)
        if(err.message.includes('username'))
            return res.status(400).send({'message': 'Username is already taken'})
        else if(err.message.includes('email'))
            return res.status(400).send({'message': 'Email is already registered'})
        else
            next(err)
    }
}

const getUser = async(req,res,next) => {
    const {username} = req.params
    try{
        const user = await getUserByUsername(username)
        if(!user)
            return res.status(404).send({'message': 'User not found'})
        else
            return res.status(200).json(user)
    }
    catch(err){
        next(err)
    }
}

const removeUser = async(req,res,next) => {
    const {username} = req.params
    try{
        const result = await deleteUser(username)
        if(!result)
            return res.status(404).send({'message': 'User not found'})
        else
            return res.status(204).send('User Deleted Successfully')
    }
    catch(err){
        next(err)
    }
}

module.exports = { registerUser, getUser, getUsers, removeUser}