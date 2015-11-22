"use strict";

describe("Sheet directive", () => {

	let $compile, $rootScope;

	beforeEach(module("sheetsApp"));

	// puts directives HTML template in $templateCache (ng-html2js preprocessor)
	beforeEach(module("/modules/common/directives/sheet/sheet.html"));

	beforeEach(inject((_$compile_, _$rootScope_) => {
		$compile = _$compile_;
		$rootScope = _$rootScope_;
	}));


	it("adresses the modal with correct ID", () => {
		$rootScope.testSheet = {
			id: 5411,
			title: "some todo list",
			content: "buy milk"
		};

		let element = $compile("<sheet data='testSheet'></sheet>")($rootScope);
		$rootScope.$digest();
		expect(element.find("img").attr("data-target")).toEqual("#sheet_modal_" + $rootScope.testSheet.id);
		expect(element.find("div").attr("id")).toEqual("sheet_modal_" + $rootScope.testSheet.id);
	});

});