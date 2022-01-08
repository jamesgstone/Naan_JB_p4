const {
    myQuery,
    query
  } = require("../database/config");
  const {
    onlyUsers
  } = require("../helpers/onlyusers");
  const {
    onlyAdmins
  } = require('../helpers/onlyadmins')

const router = require('express').Router()

// get all Categories
router.get("/", onlyUsers, async (req, res) => {
    try {
      const Categories = await myQuery("SELECT * FROM category");
      res.send(Categories);
    } catch (err) {
      console.log(err);
    }
  });


module.exports = router