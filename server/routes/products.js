const {
  myQuery,
  query
} = require("../database/config");
const {
  onlyUsers
} = require("../helpers/onlyusers");
const {
  onlyAdmins
} = require('../helpers/onlyadmins');
const {
  allLoggedUsers
} = require('../helpers/allLoggedUsers');

const router = require("express").Router();

// open only to users

// get all products
// router.get("/", allLoggedUsers, async (req, res) => {
router.get("/", async (req, res) => {
  try {
    const products = await myQuery("SELECT * FROM product");
    res.send(products);
  } catch (err) {
    console.log(err);
  }
});

// get single
router.get("/:prodid", allLoggedUsers, async (req, res) => {
  try {
    const {
      prodid
    } = req.params;
    const data = await myQuery(`SELECT * FROM product WHERE id = ${prodid}`);
    res.send(data);
  } catch (err) {
    console.log(err);
  }
});


//search by prodName
router.get("/search/:searchQuery", allLoggedUsers, async (req, res) => {
  try {
    const {
      searchQuery
    } = req.params;
    const search = await myQuery(`SELECT * FROM product WHERE prodName LIKE '%${searchQuery}%'`);
    console.log(searchQuery)
    res.send(search);
  } catch (err) {
    console.log(err);
  }
});


// add new product
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

// edit product
router.post('/edit/:prodid', onlyAdmins, async (req, res) => {
  try {
    const {
      prodid
    } = req.params;
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
    await myQuery(`UPDATE product SET prodName = "${prodName}",  catID = "${catID}", imgUrl = "${imgUrl}", price = "${price}" WHERE id = ${prodid}`)

    res.send({
      msg: "product edited successfully"
    })
  } catch (err) {
    console.log(err)

  }
})

// remove product
router.delete('/delete/:prodid', onlyAdmins, async (req, res) => {
  try {
    const {
      prodid
    } = req.params
    await myQuery(`DELETE FROM product WHERE id = ${prodid}`)

    res.send({
      msg: "product was deleted successfully"
    })
  } catch (error) {
    console.log(error);
  }
})


module.exports = router;