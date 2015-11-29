var sheetCreator = require("./sheetcreator");

describe("The test helper sheetcreator", function () {

	it("should create as many sheets as specified", function () {
		var sheets = sheetCreator.createSheets(2);
		expect(sheets.length).toBe(2);
	});

	it("should create a sheet with random title", function () {
		var sheet = sheetCreator.createSheets(1)[0];
		expect(typeof sheet.title).toEqual("string");
	});

	it("should create a sheet with random content", function () {
		var sheet = sheetCreator.createSheets(1)[0];
		expect(typeof sheet.content).toEqual("string");
	});

	it("should create a sheet with random id", function () {
		var sheet = sheetCreator.createSheets(1)[0];
		expect(typeof sheet.id).toEqual("number");
	});

	it("should create sheets with unique ids", function () {
		var sheets = sheetCreator.createSheets(1000),
			ids = {};
		sheets.forEach(function (sheet) {
			expect(ids[sheet.id]).toBeUndefined();
			ids[sheet.id] = 1;
		});
	});

});