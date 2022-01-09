const { myQuery, query } = require("../database/config");
const { onlyUsers } = require("../helpers/onlyusers");

const router = require("express").Router();

// open only to users
router.get("/", onlyUsers, async (req, res) => {
    try {
        const follows = await myQuery(`SELECT * FROM cart where userID = ${req.session.user.id}`);
        res.send(follows);
    } catch (err) {
        console.log(err);
    }
});

// add new cart
router.get('/new/:userID', onlyUsers, async (req, res) => {
        try {
            const {
                userID
            } = req.params;
        await myQuery(`insert into cart (userID)
        values("${userID}"`)
  
        res.send({
            msg: "cart was created successfully"
        })
    } catch (err) {
        console.log(err)
  
    }
  })

module.exports = router