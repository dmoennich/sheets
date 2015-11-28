
sheetsApp.directive("mainHeader", (Sheets) => {

	return {
		restrict: "E",
		replace: true,
		scope: {},
		templateUrl: "/modules/common/directives/main-header/main-header.html",
		link: function (scope) {
			Sheets.getAll().then((sheets) => {
				scope.sheets = sheets;
			});
		}
	};


});
