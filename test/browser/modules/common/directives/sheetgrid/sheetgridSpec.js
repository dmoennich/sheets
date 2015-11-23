
describe("The sheet-grid directive", function () {

	var $compile, $rootScope;

	beforeEach(module(
			"sheetsApp",
			"/modules/common/directives/sheetgrid/sheetgrid.html",
			"/modules/common/directives/sheet/sheet.html"
	));

	beforeEach(inject(function (_$compile_, _$rootScope_) {
		$compile = _$compile_;
		$rootScope = _$rootScope_;
	}));


	describe("constructs a sheet grid", function () {

		it("with specified width", function () {

			//TODO stub this as sheet response
			var sheets = sheetsTestHelper.sheetCreator.createSheets(5);


			$rootScope.sheetsPerRow = 3;

			var gridElement = $compile("<sheet-grid sheets-per-row='sheetsPerRow'></sheet-grid>")($rootScope);
			$rootScope.$digest();
			var rows = gridElement.find(".row");

			// 2 rows
			expect(rows.length).toBe(2);

			// 3 column per row
			expect(angular.element(rows[0]).find(".col-md-4").length).toBe(3);

			// 3 sheets in first row
			expect(angular.element(rows[0]).find(".sheet").length).toBe(3);

			// 2 sheets in second row
			expect(angular.element(rows[1]).find(".sheet").length).toBe(2);

		});




		//TODO test default 4 sheets per row

		//TODO test visual for empty sheet list


	});



});

