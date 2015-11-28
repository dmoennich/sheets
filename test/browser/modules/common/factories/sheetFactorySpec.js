/**
 * Created by daniel on 28.11.15.
 */

describe("sheet.factory", function () {

	var $httpBackend,
		sheetFactory,
		sheets = sheetsTestHelper.sheetCreator.createSheets(3),
		requestHandler;

	beforeEach(module("sheetsApp"));

	beforeEach(inject(function (_$httpBackend_, _Sheets_) {
		$httpBackend = _$httpBackend_;
		sheetFactory = _Sheets_;
		requestHandler = $httpBackend.when("GET", "/api/sheets").respond(200, sheets);
	}));

	describe("getAll()", function () {

		it("should fetch sheets from /api/sheets", function () {
			$httpBackend.expectGET('/api/sheets');
			sheetFactory.getAll();
			$httpBackend.flush();
		});


		it("should fetch all sheets", function () {
			sheetFactory.getAll().then(function (sheets) {
				expect(sheets.length).toBe(3);
			});
			$httpBackend.flush();
		});


		it("should not make another GET request if sheets already fetched", function () {

			sheetFactory.getAll().then(function (sheets) {
				expect(sheets.length).toBe(3);
				sheetFactory.getAll().then(function (sheets) {
					expect(sheets.length).toBe(3);
					$httpBackend.verifyNoOutstandingRequest(); 	// should fail if there was a second request
																// since it's not flushed
				});
			});

			$httpBackend.flush();

		});


	});	// end decribe getAll()


	describe("remove()", function () {

		it("should only remove the sheet with the given ID", function () {

			sheetFactory.getAll().then(function (theSheets) {
				var sheet1Id = theSheets[0].id,
					sheetsLength = theSheets.length;
				sheetFactory.remove(sheet1Id);
				expect(theSheets.length).toBe(sheetsLength - 1);
				expect(_.find(theSheets, function (sheet) {
					return sheet.id === sheet1Id;
				})).toBeUndefined();
			});
			$httpBackend.flush();
		});


	});










});



