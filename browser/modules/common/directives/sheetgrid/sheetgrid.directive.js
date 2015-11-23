/**
 * Created by daniel on 21.11.15.
 */
sheetsApp.directive("sheetGrid", (Sheets) => {
    return {
        restrict: "E",
        replace: true,
        scope: {
            sheets: "=",
            sheetsPerRow: "="
        },
        templateUrl: "/modules/common/directives/sheetgrid/sheetgrid.html",
        link: (scope) => {
            scope.sheetsPerRow = scope.sheetsPerRow || 4;
            scope.rows = [];

            scope.sheets = Sheets.getAll();

            let currentRow = [];
            scope.sheets.forEach((sheet, index) => {
                currentRow.push(sheet);
                if (currentRow.length === scope.sheetsPerRow || index === scope.sheets.length -1) {
                    scope.rows.push(currentRow);
                    currentRow = [];
                }
            });

        }
    };
});