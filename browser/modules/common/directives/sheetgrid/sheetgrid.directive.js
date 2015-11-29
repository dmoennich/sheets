/**
 * Created by daniel on 21.11.15.
 */
sheetsApp.directive("sheetGrid", (Sheets) => {
    return {
        restrict: "E",
        replace: true,
        scope: {
            sheetsPerRow: "="
        },
        templateUrl: "/modules/common/directives/sheetgrid/sheetgrid.html",
        link: (scope) => {
            scope.sheetsPerRow = Number(scope.sheetsPerRow) || 4;
            let allSheets = [];

            let filterSheets = () => {
				let sheets = allSheets.filter((sheet) => {
					let searchRegEx = new RegExp(scope.command, "i");
					let titleMatch = sheet.title.search(searchRegEx);
					let contentMatch = sheet.content.search(searchRegEx);
					return (titleMatch !== -1) || (contentMatch !== -1);
				});
				return sheets;
            };

            let buildGrid = () => {
				let sheets = filterSheets();
				scope.rows = [];
                let currentRow = [];
                sheets.forEach((sheet, index) => {
                    currentRow.push(sheet);
                    if (currentRow.length === scope.sheetsPerRow || index === sheets.length -1) {
                        scope.rows.push(currentRow);
                        currentRow = [];
                    }
                });
				scope.noSheets = sheets.length === 0 ? true : false;
            };

            scope.$watch("command", function (newVal, oldVal) {
				buildGrid();
            });

            Sheets.getAll().then((sheets) => {
                allSheets = sheets;
				buildGrid();
			});


        }
    };
});