
describe("The Sheet directive", function () {

	var $compile, $rootScope, sheetElement;

	beforeEach(module("sheetsApp"));

	// puts directives HTML template in $templateCache (provided by ng-html2js preprocessor)
	beforeEach(module("/modules/common/directives/sheet/sheet.html"));

	beforeEach(inject(function (_$compile_, _$rootScope_) {
		$compile = _$compile_;
		$rootScope = _$rootScope_;
	}));


	beforeEach(function () {
		$rootScope.testSheet = {
			id: 5411,
			title: "some todo list",
			content: "buy milk"
		};
		sheetElement = $compile("<sheet data='testSheet'></sheet>")($rootScope);
		$rootScope.$digest();
	});


	it("adresses the modal with correct ID", function () {
		expect(sheetElement.find(".img-thumbnail").attr("data-target")).toEqual("#sheet_modal_" + $rootScope.testSheet.id);
		expect(sheetElement.find(".modal").attr("id")).toEqual("sheet_modal_" + $rootScope.testSheet.id);
	});


	describe("modal", function () {

		it("contains the sheet title", function () {
			expect(sheetElement.find(".modal-title").text()).toContain($rootScope.testSheet.title);
		});

		it("contains the sheet content", function () {
			expect(sheetElement.find(".modal-body").text()).toContain($rootScope.testSheet.content);
		});

	});



});