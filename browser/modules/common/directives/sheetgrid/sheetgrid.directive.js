/**
 * Created by daniel on 21.11.15.
 */
sheetsApp.directive("sheetGrid", () => {
    return {
        restrict: "E",
        scope: {
            sheets: "="
        },
        templateUrl: "/modules/common/directives/sheetgrid/sheetgrid.html",
        link: (scope) => {
            const maxSheetsPerRow = 4;
            scope.rows = [];

            scope.sheets = [
                {
                    title: "linux commands",
                    content: "ls -l"
                },
                {
                    title: "CSS3 flex overview",
                    content: "justify-conent etc."
                },
                {
                    title: "some todo list",
                    content: "buy milk"
                },
                {
                    title: "linux commands",
                    content: "ls -l"
                },
                {
                    title: "CSS3 flex overview",
                    content: "justify-conent etc."
                },
                {
                    title: "some todo list",
                    content: "buy milk"
                }
            ];

            let currentRow = [];
            scope.sheets.forEach((sheet, index) => {
                currentRow.push(sheet);
                if (currentRow.length === maxSheetsPerRow || index === scope.sheets.length -1) {
                    scope.rows.push(currentRow);
                    currentRow = [];
                }
            });
            


        }
    };
});