"use strict";

let router = require("express").Router();
module.exports = router;

router.get("/", (req, resp) => {

	let sheets = [
		{
			id: 1,
			title: "linux commands",
			content: "ls -l"
		},
		{
			id: 2,
			title: "CSS3 flex overview",
			content: "justify-conent etc."
		},
		{
			id: 3,
			title: "some todo list",
			content: "buy milk"
		},
		{
			id: 4,
			title: "URL shortener",
			content: "tiny.cc"
		},
		{
			id: 5,
			title: "Another List",
			content: "- this and that"
		},
		{
			id: 6,
			title: "wasteland survival tips",
			content: "1. keep hydrated"
		}
	];
	
	resp.json(sheets);

})