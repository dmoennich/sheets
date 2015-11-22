"use strict";

/**
 * Created by daniel on 20.11.15.
 */

var sheetsApp = angular.module("sheetsApp", []);

/**
 * Created by daniel on 22.11.15.
 */
sheetsApp.factory("Sheets", function () {

    var sheets = [{
        id: 1,
        title: "linux commands",
        content: "ls -l"
    }, {
        id: 2,
        title: "CSS3 flex overview",
        content: "justify-conent etc."
    }, {
        id: 3,
        title: "some todo list",
        content: "buy milk"
    }, {
        id: 4,
        title: "URL shortener",
        content: "tiny.cc"
    }, {
        id: 5,
        title: "Another List",
        content: "- this and that"
    }, {
        id: 6,
        title: "wasteland survival tips",
        content: "1. keep hydrated"
    }];

    var sheetsFac = {};

    sheetsFac.getAll = function () {
        return sheets;
    };

    return sheetsFac;
});
/**
 * Created by daniel on 21.11.15.
 */
sheetsApp.directive("sheet", function () {
    return {
        restrict: "E",
        replace: true,
        scope: {
            "sheet": "=data"
        },
        templateUrl: "/modules/common/directives/sheet/sheet.html",
        link: function link(scope) {}
    };
});
/**
 * Created by daniel on 21.11.15.
 */
sheetsApp.directive("sheetGrid", function (Sheets) {
    return {
        restrict: "E",
        replace: true,
        scope: {
            sheets: "="
        },
        templateUrl: "/modules/common/directives/sheetgrid/sheetgrid.html",
        link: function link(scope) {
            scope.maxSheetsPerRow = 4;
            scope.rows = [];

            scope.sheets = Sheets.getAll();

            //scope.sheets = [
            //    {
            //        id: 1,
            //        title: "linux commands",
            //        content: "ls -l"
            //    },
            //    {
            //        id: 2,
            //        title: "CSS3 flex overview",
            //        content: "justify-conent etc."
            //    },
            //    {
            //        id: 3,
            //        title: "some todo list",
            //        content: "buy milk"
            //    },
            //    {
            //        id: 4,
            //        title: "linux commands",
            //        content: "ls -l"
            //    },
            //    {
            //        id: 5,
            //        title: "CSS3 flex overview",
            //        content: "justify-conent etc."
            //    },
            //    {
            //        id: 6,
            //        title: "some todo list",
            //        content: "buy milk"
            //    }
            //];

            var currentRow = [];
            scope.sheets.forEach(function (sheet, index) {
                currentRow.push(sheet);
                if (currentRow.length === scope.maxSheetsPerRow || index === scope.sheets.length - 1) {
                    scope.rows.push(currentRow);
                    currentRow = [];
                }
            });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNvbW1vbi9mYWN0b3JpZXMvc2hlZXQuZmFjdG9yeS5qcyIsImNvbW1vbi9kaXJlY3RpdmVzL3NoZWV0L3NoZWV0LmRpcmVjdGl2ZS5qcyIsImNvbW1vbi9kaXJlY3RpdmVzL3NoZWV0Z3JpZC9zaGVldGdyaWQuZGlyZWN0aXZlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUlBLElBQUEsU0FBQSxHQUFBLE9BQUEsQ0FBQSxNQUFBLENBQUEsV0FBQSxFQUFBLEVBQUEsQ0FBQTs7Ozs7QUFBQSxBQ0RBLFNBQUEsQ0FBQSxPQUFBLENBQUEsUUFBQSxFQUFBLFlBQUE7O0FBRUEsUUFBQSxNQUFBLEdBQUEsQ0FDQTtBQUNBLFVBQUEsRUFBQSxDQUFBO0FBQ0EsYUFBQSxFQUFBLGdCQUFBO0FBQ0EsZUFBQSxFQUFBLE9BQUE7S0FDQSxFQUNBO0FBQ0EsVUFBQSxFQUFBLENBQUE7QUFDQSxhQUFBLEVBQUEsb0JBQUE7QUFDQSxlQUFBLEVBQUEscUJBQUE7S0FDQSxFQUNBO0FBQ0EsVUFBQSxFQUFBLENBQUE7QUFDQSxhQUFBLEVBQUEsZ0JBQUE7QUFDQSxlQUFBLEVBQUEsVUFBQTtLQUNBLEVBQ0E7QUFDQSxVQUFBLEVBQUEsQ0FBQTtBQUNBLGFBQUEsRUFBQSxlQUFBO0FBQ0EsZUFBQSxFQUFBLFNBQUE7S0FDQSxFQUNBO0FBQ0EsVUFBQSxFQUFBLENBQUE7QUFDQSxhQUFBLEVBQUEsY0FBQTtBQUNBLGVBQUEsRUFBQSxpQkFBQTtLQUNBLEVBQ0E7QUFDQSxVQUFBLEVBQUEsQ0FBQTtBQUNBLGFBQUEsRUFBQSx5QkFBQTtBQUNBLGVBQUEsRUFBQSxrQkFBQTtLQUNBLENBQ0EsQ0FBQTs7QUFFQSxRQUFBLFNBQUEsR0FBQSxFQUFBLENBQUE7O0FBRUEsYUFBQSxDQUFBLE1BQUEsR0FBQSxZQUFBO0FBQ0EsZUFBQSxNQUFBLENBQUE7S0FDQSxDQUFBOztBQUVBLFdBQUEsU0FBQSxDQUFBO0NBRUEsQ0FBQTs7OztBQUFBLEFDM0NBLFNBQUEsQ0FBQSxTQUFBLENBQUEsT0FBQSxFQUFBLFlBQUE7QUFDQSxXQUFBO0FBQ0EsZ0JBQUEsRUFBQSxHQUFBO0FBQ0EsZUFBQSxFQUFBLElBQUE7QUFDQSxhQUFBLEVBQUE7QUFDQSxtQkFBQSxFQUFBLE9BQUE7U0FDQTtBQUNBLG1CQUFBLEVBQUEsNkNBQUE7QUFDQSxZQUFBLEVBQUEsY0FBQSxLQUFBLEVBQUEsRUFDQTtLQUNBLENBQUE7Q0FDQSxDQUFBOzs7O0FBQUEsQUNYQSxTQUFBLENBQUEsU0FBQSxDQUFBLFdBQUEsRUFBQSxVQUFBLE1BQUEsRUFBQTtBQUNBLFdBQUE7QUFDQSxnQkFBQSxFQUFBLEdBQUE7QUFDQSxlQUFBLEVBQUEsSUFBQTtBQUNBLGFBQUEsRUFBQTtBQUNBLGtCQUFBLEVBQUEsR0FBQTtTQUNBO0FBQ0EsbUJBQUEsRUFBQSxxREFBQTtBQUNBLFlBQUEsRUFBQSxjQUFBLEtBQUEsRUFBQTtBQUNBLGlCQUFBLENBQUEsZUFBQSxHQUFBLENBQUEsQ0FBQTtBQUNBLGlCQUFBLENBQUEsSUFBQSxHQUFBLEVBQUEsQ0FBQTs7QUFFQSxpQkFBQSxDQUFBLE1BQUEsR0FBQSxNQUFBLENBQUEsTUFBQSxFQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBbUNBLGdCQUFBLFVBQUEsR0FBQSxFQUFBLENBQUE7QUFDQSxpQkFBQSxDQUFBLE1BQUEsQ0FBQSxPQUFBLENBQUEsVUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBO0FBQ0EsMEJBQUEsQ0FBQSxJQUFBLENBQUEsS0FBQSxDQUFBLENBQUE7QUFDQSxvQkFBQSxVQUFBLENBQUEsTUFBQSxLQUFBLEtBQUEsQ0FBQSxlQUFBLElBQUEsS0FBQSxLQUFBLEtBQUEsQ0FBQSxNQUFBLENBQUEsTUFBQSxHQUFBLENBQUEsRUFBQTtBQUNBLHlCQUFBLENBQUEsSUFBQSxDQUFBLElBQUEsQ0FBQSxVQUFBLENBQUEsQ0FBQTtBQUNBLDhCQUFBLEdBQUEsRUFBQSxDQUFBO2lCQUNBO2FBQ0EsQ0FBQSxDQUFBO1NBSUE7S0FDQSxDQUFBO0NBQ0EsQ0FBQSxDQUFBIiwiZmlsZSI6InNoZWV0cy1idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgZGFuaWVsIG9uIDIwLjExLjE1LlxuICovXG5cbmxldCBzaGVldHNBcHAgPSBhbmd1bGFyLm1vZHVsZShcInNoZWV0c0FwcFwiLCBbXSk7XG5cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBkYW5pZWwgb24gMjIuMTEuMTUuXG4gKi9cbnNoZWV0c0FwcC5mYWN0b3J5KFwiU2hlZXRzXCIsICgpID0+IHtcblxuICAgIGxldCBzaGVldHMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgdGl0bGU6IFwibGludXggY29tbWFuZHNcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwibHMgLWxcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMixcbiAgICAgICAgICAgIHRpdGxlOiBcIkNTUzMgZmxleCBvdmVydmlld1wiLFxuICAgICAgICAgICAgY29udGVudDogXCJqdXN0aWZ5LWNvbmVudCBldGMuXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICB0aXRsZTogXCJzb21lIHRvZG8gbGlzdFwiLFxuICAgICAgICAgICAgY29udGVudDogXCJidXkgbWlsa1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiA0LFxuICAgICAgICAgICAgdGl0bGU6IFwiVVJMIHNob3J0ZW5lclwiLFxuICAgICAgICAgICAgY29udGVudDogXCJ0aW55LmNjXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDUsXG4gICAgICAgICAgICB0aXRsZTogXCJBbm90aGVyIExpc3RcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiLSB0aGlzIGFuZCB0aGF0XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDYsXG4gICAgICAgICAgICB0aXRsZTogXCJ3YXN0ZWxhbmQgc3Vydml2YWwgdGlwc1wiLFxuICAgICAgICAgICAgY29udGVudDogXCIxLiBrZWVwIGh5ZHJhdGVkXCJcbiAgICAgICAgfVxuICAgIF07XG5cbiAgICBsZXQgc2hlZXRzRmFjID0ge307XG5cbiAgICBzaGVldHNGYWMuZ2V0QWxsID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc2hlZXRzO1xuICAgIH07XG5cbiAgICByZXR1cm4gc2hlZXRzRmFjO1xuXG59KTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgZGFuaWVsIG9uIDIxLjExLjE1LlxuICovXG5zaGVldHNBcHAuZGlyZWN0aXZlKFwic2hlZXRcIiwgKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlc3RyaWN0OiBcIkVcIixcbiAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgIFwic2hlZXRcIjogXCI9ZGF0YVwiXG4gICAgICAgIH0sXG4gICAgICAgIHRlbXBsYXRlVXJsOiBcIi9tb2R1bGVzL2NvbW1vbi9kaXJlY3RpdmVzL3NoZWV0L3NoZWV0Lmh0bWxcIixcbiAgICAgICAgbGluazogKHNjb3BlKSA9PiB7XG4gICAgICAgIH1cbiAgICB9O1xufSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGRhbmllbCBvbiAyMS4xMS4xNS5cbiAqL1xuc2hlZXRzQXBwLmRpcmVjdGl2ZShcInNoZWV0R3JpZFwiLCAoU2hlZXRzKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdHJpY3Q6IFwiRVwiLFxuICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgc2hlZXRzOiBcIj1cIlxuICAgICAgICB9LFxuICAgICAgICB0ZW1wbGF0ZVVybDogXCIvbW9kdWxlcy9jb21tb24vZGlyZWN0aXZlcy9zaGVldGdyaWQvc2hlZXRncmlkLmh0bWxcIixcbiAgICAgICAgbGluazogKHNjb3BlKSA9PiB7XG4gICAgICAgICAgICBzY29wZS5tYXhTaGVldHNQZXJSb3cgPSA0O1xuICAgICAgICAgICAgc2NvcGUucm93cyA9IFtdO1xuXG4gICAgICAgICAgICBzY29wZS5zaGVldHMgPSBTaGVldHMuZ2V0QWxsKCk7XG5cbiAgICAgICAgICAgIC8vc2NvcGUuc2hlZXRzID0gW1xuICAgICAgICAgICAgLy8gICAge1xuICAgICAgICAgICAgLy8gICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgLy8gICAgICAgIHRpdGxlOiBcImxpbnV4IGNvbW1hbmRzXCIsXG4gICAgICAgICAgICAvLyAgICAgICAgY29udGVudDogXCJscyAtbFwiXG4gICAgICAgICAgICAvLyAgICB9LFxuICAgICAgICAgICAgLy8gICAge1xuICAgICAgICAgICAgLy8gICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgLy8gICAgICAgIHRpdGxlOiBcIkNTUzMgZmxleCBvdmVydmlld1wiLFxuICAgICAgICAgICAgLy8gICAgICAgIGNvbnRlbnQ6IFwianVzdGlmeS1jb25lbnQgZXRjLlwiXG4gICAgICAgICAgICAvLyAgICB9LFxuICAgICAgICAgICAgLy8gICAge1xuICAgICAgICAgICAgLy8gICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgLy8gICAgICAgIHRpdGxlOiBcInNvbWUgdG9kbyBsaXN0XCIsXG4gICAgICAgICAgICAvLyAgICAgICAgY29udGVudDogXCJidXkgbWlsa1wiXG4gICAgICAgICAgICAvLyAgICB9LFxuICAgICAgICAgICAgLy8gICAge1xuICAgICAgICAgICAgLy8gICAgICAgIGlkOiA0LFxuICAgICAgICAgICAgLy8gICAgICAgIHRpdGxlOiBcImxpbnV4IGNvbW1hbmRzXCIsXG4gICAgICAgICAgICAvLyAgICAgICAgY29udGVudDogXCJscyAtbFwiXG4gICAgICAgICAgICAvLyAgICB9LFxuICAgICAgICAgICAgLy8gICAge1xuICAgICAgICAgICAgLy8gICAgICAgIGlkOiA1LFxuICAgICAgICAgICAgLy8gICAgICAgIHRpdGxlOiBcIkNTUzMgZmxleCBvdmVydmlld1wiLFxuICAgICAgICAgICAgLy8gICAgICAgIGNvbnRlbnQ6IFwianVzdGlmeS1jb25lbnQgZXRjLlwiXG4gICAgICAgICAgICAvLyAgICB9LFxuICAgICAgICAgICAgLy8gICAge1xuICAgICAgICAgICAgLy8gICAgICAgIGlkOiA2LFxuICAgICAgICAgICAgLy8gICAgICAgIHRpdGxlOiBcInNvbWUgdG9kbyBsaXN0XCIsXG4gICAgICAgICAgICAvLyAgICAgICAgY29udGVudDogXCJidXkgbWlsa1wiXG4gICAgICAgICAgICAvLyAgICB9XG4gICAgICAgICAgICAvL107XG5cbiAgICAgICAgICAgIGxldCBjdXJyZW50Um93ID0gW107XG4gICAgICAgICAgICBzY29wZS5zaGVldHMuZm9yRWFjaCgoc2hlZXQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY3VycmVudFJvdy5wdXNoKHNoZWV0KTtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFJvdy5sZW5ndGggPT09IHNjb3BlLm1heFNoZWV0c1BlclJvdyB8fCBpbmRleCA9PT0gc2NvcGUuc2hlZXRzLmxlbmd0aCAtMSkge1xuICAgICAgICAgICAgICAgICAgICBzY29wZS5yb3dzLnB1c2goY3VycmVudFJvdyk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSb3cgPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuXG5cbiAgICAgICAgfVxuICAgIH07XG59KTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
