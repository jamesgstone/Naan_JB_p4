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
})) // enable cors - !!!delete for production!!!


app.use(session({
    secret: "{31K>f]!NJnST9H^n}hvXhA_b5vdjm",
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 // 1 day
    }
})) // req.session


// Routes:
app.use('/cart', require('./routes/cart'))
app.use('/users', require('./routes/users'))
app.use('/products', require('./routes/products'))
app.use('/category', require('./routes/category'))
app.use('/admin', require('./routes/admin'))



// run
app.listen(1000, () => console.log("J.A.R.V.I.S up and running on port 1000 🎆"))