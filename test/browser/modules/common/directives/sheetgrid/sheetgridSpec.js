
describe("The sheet-grid directive", function () {

	var $compile, $rootScope, $httpBackend, sheetsRequestHandler;

	var getGridRows = function (gridElement) {

		var rows = gridElement.find(".row");
		return Array.prototype.map.call(rows, function (row) {
			return angular.element(row);
		});

	};

	beforeEach(module(
			"sheetsApp",
			"/modules/common/directives/sheetgrid/sheetgrid.html",
			"/modules/common/directives/sheet/sheet.html"
	));

	beforeEach(inject(function (_$compile_, _$rootScope_, _$httpBackend_) {
		$compile = _$compile_;
		$rootScope = _$rootScope_;
		$httpBackend = _$httpBackend_;

		// return 3 sheets by default
		var sheets = sheetsTestHelper.sheetCreator.createSheets(3);
		sheetsRequestHandler = $httpBackend.when("GET", "/api/sheets").respond(201, sheets);

	}));

	afterEach(function () {
		$httpBackend.verifyNoOutstandingRequest();
	});


	it("should construct a grid with specified width", function () {

		var sheets = sheetsTestHelper.sheetCreator.createSheets(5),
			rows,
			grid;


		sheetsRequestHandler.respond(200, sheets);

		$rootScope.sheetsPerRow = 3;

		grid = $compile("<sheet-grid sheets-per-row='sheetsPerRow'></sheet-grid>")($rootScope);

		$rootScope.$digest();
		$httpBackend.flush();

		rows = getGridRows(grid);

		// 2 rows
		expect(rows.length).toBe(2);

		// 3 column per row
		expect(rows[0].find(".col-md-4").length).toBe(3);

		// 3 sheets in first row
		expect(rows[0].find(".sheet").length).toBe(3);

		// 2 sheets in second row
		expect(rows[1].find(".sheet").length).toBe(2);

	});


	it("should build a grid with 4 sheets per row by default", function () {

		var sheets = sheetsTestHelper.sheetCreator.createSheets(6),
			grid,
			rows;

		sheetsRequestHandler.respond(200, sheets);

		grid = $compile("<sheet-grid></sheet-grid>")($rootScope);

		$rootScope.$digest();
		$httpBackend.flush();

		rows = getGridRows(grid);

		expect(rows.length).toBe(2);
		expect(rows[0].find(".col-md-3").length).toBe(4);
		expect(rows[0].find(".sheet").length).toBe(4);
		expect(rows[1].find(".sheet").length).toBe(2);

	});


	it("should display a message if there are no sheets", function () {

		sheetsRequestHandler.respond(200, []);

		var grid = $compile("<sheet-grid></sheet-grid>")($rootScope);

		$rootScope.$digest();
		$httpBackend.flush();

		expect(grid.text()).toContain("Here would be your sheets, if you had created any...");
	});






});

