"use strict";

let router = require("express").Router();

router.use("/sheets", require("./sheets"));

module.exports = router;