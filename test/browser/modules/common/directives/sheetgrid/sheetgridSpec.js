
describe("The sheet-grid directive", function () {

	var $compile, $rootScope;

	beforeEach(module("sheetsApp", "/modules/common/directives/sheetgrid/sheetgrid.html"));

	beforeEach(inject(function (_$compile_, _$rootScope_) {
		$compile = _$compile_;
		$rootScope = _$rootScope_;
	}));


	describe("constructs a sheet grid", function () {

		it("for specified width", function () {

			//$rootScope.sheets = sheetCreator(5);
			//$rootScope.sheetsPerRow = 3;
			//
			//let element = $compile(`<sheet-grid sheets="sheets" sheetsPerRow="${sheetsPerRow}"></sheet-grid>`).($rootScope);



		});




	});



});

