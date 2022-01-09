const { myQuery, query } = require("../database/config");
const { onlyUsers } = require("../helpers/onlyusers");

const router = require("express").Router();

// open only to users
router.get("/", onlyUsers, async (req, res) => {
    try {
        const cartID = await myQuery(`SELECT id FROM cart where userID = ${req.session.user.id}`);
        if (!cartID.length) {
        await myQuery(`insert into cart (userID)
        values("${req.session.user.id}"`)
  
        res.send({
            msg: "cart was created successfully",
            cartID: cartID
        }) 
        }
        res.send(cartID);
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