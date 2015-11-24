/**
 * Created by daniel on 21.11.15.
 */
sheetsApp.directive("sheetGrid", (Sheets) => {
    return {
        restrict: "E",
        replace: true,
        scope: {
            sheets: "=",
            sheetsPerRow: "=sheetsPerRow"
        },
        templateUrl: "/modules/common/directives/sheetgrid/sheetgrid.html",
        link: (scope) => {
            scope.sheetsPerRow = Number(scope.sheetsPerRow) || 4;
            scope.rows = [];

            Sheets.getAll().then((sheets) => {
				let currentRow = [];
				sheets.forEach((sheet, index) => {
					currentRow.push(sheet);
					if (currentRow.length === scope.sheetsPerRow || index === sheets.length -1) {
						scope.rows.push(currentRow);
						currentRow = [];
					}
				});
                if (sheets.length === 0) {
                    scope.noSheets = true;
                }
			});


        }
    };
});