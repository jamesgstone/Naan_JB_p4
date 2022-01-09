const {
    myQuery,
    query
} = require("../database/config");
const {
    onlyUsers
} = require("../helpers/onlyusers");

const router = require("express").Router();

// open only to users

//get cart id or open new
router.get("/", onlyUsers, async (req, res) => {
    try {
        let cartIDs = await myQuery(`SELECT id FROM cart where userID = ${req.session.user.id}`);
        // if no cart found open new ->
        if (!cartIDs.length) {
            await myQuery(`insert into cart (userID)
        values(${req.session.user.id})`)
            cartIDs = await myQuery(`SELECT id FROM cart where userID = ${req.session.user.id}`)
            const cartID = cartIDs[0]
            req.session.cart = {
                id: cartID.id
            }
            res.send({
                msg: "cart was created successfully",
                cartID: cartID.id
            })
            return
        }
        const cartID = cartIDs[0]
        req.session.cart = {
            id: cartID.id
        }
        console.log(req.session.cart.id)
        res.send(cartID);
    } catch (err) {
        console.log(err);
    }
});

// remove cart
router.delete('/delete', onlyUsers, async (req, res) => {
    try {
        const cartID = req.session.cart.id
        console.log(cartID)
        await myQuery(`DELETE FROM cart WHERE id = ${cartID}`)

        res.send({
            msg: "cart was deleted successfully"
        })
    } catch (error) {
        console.log(error);
    }
})

//cart Items:

// get all items in cart
router.get("/cartItem", onlyUsers, async (req, res) => {
    try {
        const cartID = req.session.cart.id
        console.log(cartID)
        const cartProducts = await myQuery(`SELECT * FROM cartItem WHERE cartID = ${cartID}`);
        res.send(cartProducts);
    } catch (err) {
        console.log(err);
    }
});
// Add item to Cart

router.post('/new', onlyAdmins, async (req, res) => {
    try {

        const {
            prodName,
            catID,
            imgUrl,
            price
        } = req.body

        if (!prodName || !catID || !imgUrl || !price) {
            return res.status(400).send({
                err: true,
                msg: "missing some info"
            })
        }
        await myQuery(`insert into product (prodName, catID, imgUrl, price)
        values("${prodName}", "${catID}","${imgUrl}","${price}")`)

        res.send({
            msg: "product added successfully"
        })
    } catch (err) {
        console.log(err)

    }
})

module.exports = router