"use strict";

describe("The Sheet directive", () => {

	let $compile, $rootScope, sheetElement;

	beforeEach(module("sheetsApp"));

	// puts directives HTML template in $templateCache (provided by ng-html2js preprocessor)
	beforeEach(module("/modules/common/directives/sheet/sheet.html"));

	beforeEach(inject((_$compile_, _$rootScope_) => {
		$compile = _$compile_;
		$rootScope = _$rootScope_;
	}));


	beforeEach(() => {
		$rootScope.testSheet = {
			id: 5411,
			title: "some todo list",
			content: "buy milk"
		};
		sheetElement = $compile("<sheet data='testSheet'></sheet>")($rootScope);
		$rootScope.$digest();
	});


	it("adresses the modal with correct ID", () => {
		expect(sheetElement.find(".img-thumbnail").attr("data-target")).toEqual("#sheet_modal_" + $rootScope.testSheet.id);
		expect(sheetElement.find(".modal").attr("id")).toEqual("sheet_modal_" + $rootScope.testSheet.id);
	});


	describe("modal", () => {

		it("contains the sheet title", () => {
			expect(sheetElement.find(".modal-title").text()).toContain($rootScope.testSheet.title);
		});

		it("contains the sheet content", () => {
			expect(sheetElement.find(".modal-body").text()).toContain($rootScope.testSheet.content);
		});

	});



});