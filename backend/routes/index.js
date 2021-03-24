var express = require("express");
var router = express.Router();

/* GET home page. */
router.post("/sum/", function(req, res, next) {
  console.log(req.body);
  let sum = Number(req.body.number_1) + Number(req.body.number_2);
  res.json({ sum: sum });
});

module.exports = router;
