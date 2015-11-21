/**
 * Created by daniel on 21.11.15.
 */
sheetsApp.directive("sheetGrid", () => {
    return {
        restrict: "E",
        replace: true,
        scope: {
            sheets: "="
        },
        templateUrl: "/modules/common/directives/sheetgrid/sheetgrid.html",
        link: (scope) => {
            scope.maxSheetsPerRow = 4;
            scope.rows = [];

            scope.sheets = [
                {
                    id: 1,
                    title: "linux commands",
                    content: "ls -l"
                },
                {
                    id: 2,
                    title: "CSS3 flex overview",
                    content: "justify-conent etc."
                },
                {
                    id: 3,
                    title: "some todo list",
                    content: "buy milk"
                },
                {
                    id: 4,
                    title: "linux commands",
                    content: "ls -l"
                },
                {
                    id: 5,
                    title: "CSS3 flex overview",
                    content: "justify-conent etc."
                },
                {
                    id: 6,
                    title: "some todo list",
                    content: "buy milk"
                }
            ];

            let currentRow = [];
            scope.sheets.forEach((sheet, index) => {
                currentRow.push(sheet);
                if (currentRow.length === scope.maxSheetsPerRow || index === scope.sheets.length -1) {
                    scope.rows.push(currentRow);
                    currentRow = [];
                }
            });



        }
    };
});