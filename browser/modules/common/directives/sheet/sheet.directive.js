/**
 * Created by daniel on 21.11.15.
 */
sheetsApp.directive("sheet", () => {
    return {
        restrict: "E",
        replace: true,
        scope: {
            "sheet": "=data"
        },
        templateUrl: "/modules/common/directives/sheet/sheet.html",
        link: (scope) => {
        }
    };
});