// imports
const express = require('express')
const cors = require('cors')
const session = require('express-session')
require('./database/config')

// init
const app = express()

// middlewares
app.use(express.json()) // req.body
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
})) // enable cors
app.use(session({
    secret: "blah blah blah",
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 30 // 30 days
    }
})) // req.session

app.use('/follows', require('./routes/follows'))
app.use('/users', require('./routes/users'))
app.use('/vacations', require('./routes/vacations'))
app.use('/admin', require('./routes/admin'))



// run
app.listen(1000, () => console.log("J.A.R.V.I.S up and running on port 1000 🎆"))