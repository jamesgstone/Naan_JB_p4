const {
    myQuery,
    query
  } = require("../database/config");
    const {
    allLoggedUsers
  } = require('../helpers/allLoggedUsers');

const router = require('express').Router()

// get all Categories
router.get("/", allLoggedUsers, async (req, res) => {
    try {
      const Categories = await myQuery("SELECT * FROM category");
      res.send(Categories);
    } catch (err) {
      console.log(err);
    }
  });


module.exports = router