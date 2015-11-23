"use strict";
let express = require("express");
let router = express.Router();
let path = require("path");
module.exports = router;

router.use(express.static(path.join(__dirname, "../../dist")));
router.use(express.static(path.join(__dirname, "../../browser")));
router.use(express.static(path.join(__dirname, "../../node_modules")));

router.get("/", (req, resp) => {
    resp.sendFile(path.join(__dirname, "../browser/index.html"));
});

router.use("/api", require("./api"));
