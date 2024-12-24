const express = require('express')
const cors = require('cors')
const userRoutes = require('./routes/userRoutes.js')
const songRoutes = require('./routes/songRoutes.js')
const playlistRoutes = require('./routes/playlistRoutes.js')

const PORT = 3000

const app = express()

app.use(express.json())
app.use(cors())

// app.use((req, res, next) => {
//     console.log(`Incoming Request: ${req.method} ${req.url}`)
//     next()
// })

app.use('/users', userRoutes)
app.use('/users/:user_id/playlist', playlistRoutes)
app.use('/songs', songRoutes)

app.use((err, req, res, next) => {
    console.error(err.message)
    res.status(500).json({ message: 'Internal Server Error' })
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})