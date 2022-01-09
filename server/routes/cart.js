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

router.get('/addtocart/:prodID', onlyUsers, async (req, res) => {
    try {
        const cartID = req.session.cart.id
        const {
            prodID
          } = req.params;
          const productPriceArr =  await myQuery(`SELECT price FROM product WHERE id = ${prodID}`);
          const productPrice = productPriceArr[0].price;
          const cartItemIDArr = await myQuery(`SELECT id FROM cartItem WHERE cartID = ${cartID} AND prodID = ${prodID}`);
          const cartItemID = cartItemIDArr[0].id
        if (!cartItemIDArr.length) {
            await myQuery(`insert into cartItem (cartID,prodID, prodQuantity,totalProdPrice)
            values("${cartID}", "${prodID}",1,${productPrice})`)
            return  res.send({
                msg: "product added successfully"
            })
        }

        await myQuery(`UPDATE cartItem SET prodQuantity = prodQuantity + 1, totalProdPrice = totalProdPrice + ${productPrice} WHERE id = ${cartItemID}`)

        res.send({
            msg: "product added to cart"
        })
    } catch (err) {
        console.log(err)

    }
})

module.exports = router