"use strict";
let express = require("express");
let app = express();
let morgan = require("morgan");
let routes = require("./routes");

app.use(morgan("dev"));

app.use(routes);

app.listen(3000, () => {
    console.log("sheets server listening on port 3000");
});












