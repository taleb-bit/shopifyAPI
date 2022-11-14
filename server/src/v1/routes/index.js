var express = require("express");
var router = express.Router();

router.use("/shop", require("./shop"));

module.exports = router;
