var sheetCreator = require("../../../../../helper/sheetcreator");

describe("main-header directive", function ()  {

	var $compile, $rootScope, $httpBackend;

	beforeEach(angular.mock.module("sheetsApp", "/modules/common/directives/main-header/main-header.html"));

	beforeEach(angular.mock.inject(function (_$httpBackend_, _$compile_, _$rootScope_) {
		$httpBackend = _$httpBackend_;
		$compile = _$compile_;
		$rootScope = _$rootScope_;
	}));


	it("should display the number of sheets", function () {
		var sheets = sheetCreator.createSheets(11);
		$httpBackend.when("GET", "/api/sheets").respond(200, sheets);

		var element = $compile("<main-header></main-header>")($rootScope);
		$rootScope.$digest();
		$httpBackend.flush();
		expect(element.find(".headline").text()).toEqual("11 Sheets");

	});



});


