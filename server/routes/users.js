const { myQuery, query } = require('../database/config')
const { allLoggedUsers } = require('../helpers/allloggedUsers')

const router = require('express').Router()

// open to everyone
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
    
        if (!email || !password) {
            return res.status(400).send({ err: true, msg: "missing email or password" })
        }
    
        const users = await myQuery( `SELECT * FROM users WHERE email="${email}" AND password="${password}"`)
        if (!users.length) {
            return res.status(401).send({ err: true, msg: "incorrect email or password" })
        }
    
        const user = users[0];

        req.session.user = { id: user.id, email: user.email, role: user.role, firstname: user.firstname, lastname: user.lastname }
        res.send({ msg: "you logged in successfully", id: user.id, email: user.email, role: user.role, firstname: user.firstname, lastname: user.lastname})
        
    } catch (err) {
        console.log(err)
        res.status(201).send(err)
    }

})

// open to everyone
router.post('/register', async (req, res) => {
    try {
        const {id, firstname, lastname, email, password, city, street} = req.body
    
        if (!id || !firstname || !lastname || !email || !password || !city || !street ) {
            return res.status(400).send({ err: true, msg: "Missing Info All fields are required" })
        }
    
        await myQuery( `insert into users (id, firstname, lastname, email, password, city, street)
        values ("${id}","${firstname}","${lastname}","${email}", "${password}","${city}","${street}")`)
           
        res.status(201).send({ msg: "user added successfully" })
        
    } catch (err) {
        console.log(err)
        res.status(201).send(err)
    }
})

// open to all registered users
router.delete('/logout', (req, res) => {
    req.session.destroy()
    res.send({ msg: "disconnected successfully" })
})

// open to all registered users
// router.get('/profile', allLoggedUsers, async (req, res) => {
//     try {
//         res.send(await myQuery(`SELECT * FROM followers
//         INNER JOIN vacations ON followers.vacationID = vacations.id WHERE userID = "${req.session.user.email}"`))
        
//     } catch (err) {
//         console.log(err)
//     }
// })

module.exports = router