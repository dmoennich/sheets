"use strict";

/**
 * Created by daniel on 20.11.15.
 */

var sheetsApp = angular.module("sheetsApp", []);

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
sheetsApp.directive("sheetGrid", function () {
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

            scope.sheets = [{
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
                title: "linux commands",
                content: "ls -l"
            }, {
                id: 5,
                title: "CSS3 flex overview",
                content: "justify-conent etc."
            }, {
                id: 6,
                title: "some todo list",
                content: "buy milk"
            }];

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNvbW1vbi9kaXJlY3RpdmVzL3NoZWV0L3NoZWV0LmRpcmVjdGl2ZS5qcyIsImNvbW1vbi9kaXJlY3RpdmVzL3NoZWV0Z3JpZC9zaGVldGdyaWQuZGlyZWN0aXZlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUlBLElBQUEsU0FBQSxHQUFBLE9BQUEsQ0FBQSxNQUFBLENBQUEsV0FBQSxFQUFBLEVBQUEsQ0FBQTs7Ozs7QUFBQSxBQ0RBLFNBQUEsQ0FBQSxTQUFBLENBQUEsT0FBQSxFQUFBLFlBQUE7QUFDQSxXQUFBO0FBQ0EsZ0JBQUEsRUFBQSxHQUFBO0FBQ0EsZUFBQSxFQUFBLElBQUE7QUFDQSxhQUFBLEVBQUE7QUFDQSxtQkFBQSxFQUFBLE9BQUE7U0FDQTtBQUNBLG1CQUFBLEVBQUEsNkNBQUE7QUFDQSxZQUFBLEVBQUEsY0FBQSxLQUFBLEVBQUEsRUFDQTtLQUNBLENBQUE7Q0FDQSxDQUFBOzs7O0FBQUEsQUNYQSxTQUFBLENBQUEsU0FBQSxDQUFBLFdBQUEsRUFBQSxZQUFBO0FBQ0EsV0FBQTtBQUNBLGdCQUFBLEVBQUEsR0FBQTtBQUNBLGVBQUEsRUFBQSxJQUFBO0FBQ0EsYUFBQSxFQUFBO0FBQ0Esa0JBQUEsRUFBQSxHQUFBO1NBQ0E7QUFDQSxtQkFBQSxFQUFBLHFEQUFBO0FBQ0EsWUFBQSxFQUFBLGNBQUEsS0FBQSxFQUFBO0FBQ0EsaUJBQUEsQ0FBQSxlQUFBLEdBQUEsQ0FBQSxDQUFBO0FBQ0EsaUJBQUEsQ0FBQSxJQUFBLEdBQUEsRUFBQSxDQUFBOztBQUVBLGlCQUFBLENBQUEsTUFBQSxHQUFBLENBQ0E7QUFDQSxrQkFBQSxFQUFBLENBQUE7QUFDQSxxQkFBQSxFQUFBLGdCQUFBO0FBQ0EsdUJBQUEsRUFBQSxPQUFBO2FBQ0EsRUFDQTtBQUNBLGtCQUFBLEVBQUEsQ0FBQTtBQUNBLHFCQUFBLEVBQUEsb0JBQUE7QUFDQSx1QkFBQSxFQUFBLHFCQUFBO2FBQ0EsRUFDQTtBQUNBLGtCQUFBLEVBQUEsQ0FBQTtBQUNBLHFCQUFBLEVBQUEsZ0JBQUE7QUFDQSx1QkFBQSxFQUFBLFVBQUE7YUFDQSxFQUNBO0FBQ0Esa0JBQUEsRUFBQSxDQUFBO0FBQ0EscUJBQUEsRUFBQSxnQkFBQTtBQUNBLHVCQUFBLEVBQUEsT0FBQTthQUNBLEVBQ0E7QUFDQSxrQkFBQSxFQUFBLENBQUE7QUFDQSxxQkFBQSxFQUFBLG9CQUFBO0FBQ0EsdUJBQUEsRUFBQSxxQkFBQTthQUNBLEVBQ0E7QUFDQSxrQkFBQSxFQUFBLENBQUE7QUFDQSxxQkFBQSxFQUFBLGdCQUFBO0FBQ0EsdUJBQUEsRUFBQSxVQUFBO2FBQ0EsQ0FDQSxDQUFBOztBQUVBLGdCQUFBLFVBQUEsR0FBQSxFQUFBLENBQUE7QUFDQSxpQkFBQSxDQUFBLE1BQUEsQ0FBQSxPQUFBLENBQUEsVUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBO0FBQ0EsMEJBQUEsQ0FBQSxJQUFBLENBQUEsS0FBQSxDQUFBLENBQUE7QUFDQSxvQkFBQSxVQUFBLENBQUEsTUFBQSxLQUFBLEtBQUEsQ0FBQSxlQUFBLElBQUEsS0FBQSxLQUFBLEtBQUEsQ0FBQSxNQUFBLENBQUEsTUFBQSxHQUFBLENBQUEsRUFBQTtBQUNBLHlCQUFBLENBQUEsSUFBQSxDQUFBLElBQUEsQ0FBQSxVQUFBLENBQUEsQ0FBQTtBQUNBLDhCQUFBLEdBQUEsRUFBQSxDQUFBO2lCQUNBO2FBQ0EsQ0FBQSxDQUFBO1NBSUE7S0FDQSxDQUFBO0NBQ0EsQ0FBQSxDQUFBIiwiZmlsZSI6InNoZWV0cy1idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgZGFuaWVsIG9uIDIwLjExLjE1LlxuICovXG5cbmxldCBzaGVldHNBcHAgPSBhbmd1bGFyLm1vZHVsZShcInNoZWV0c0FwcFwiLCBbXSk7XG5cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBkYW5pZWwgb24gMjEuMTEuMTUuXG4gKi9cbnNoZWV0c0FwcC5kaXJlY3RpdmUoXCJzaGVldFwiLCAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdHJpY3Q6IFwiRVwiLFxuICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgXCJzaGVldFwiOiBcIj1kYXRhXCJcbiAgICAgICAgfSxcbiAgICAgICAgdGVtcGxhdGVVcmw6IFwiL21vZHVsZXMvY29tbW9uL2RpcmVjdGl2ZXMvc2hlZXQvc2hlZXQuaHRtbFwiLFxuICAgICAgICBsaW5rOiAoc2NvcGUpID0+IHtcbiAgICAgICAgfVxuICAgIH07XG59KTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgZGFuaWVsIG9uIDIxLjExLjE1LlxuICovXG5zaGVldHNBcHAuZGlyZWN0aXZlKFwic2hlZXRHcmlkXCIsICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICByZXN0cmljdDogXCJFXCIsXG4gICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICBzaGVldHM6IFwiPVwiXG4gICAgICAgIH0sXG4gICAgICAgIHRlbXBsYXRlVXJsOiBcIi9tb2R1bGVzL2NvbW1vbi9kaXJlY3RpdmVzL3NoZWV0Z3JpZC9zaGVldGdyaWQuaHRtbFwiLFxuICAgICAgICBsaW5rOiAoc2NvcGUpID0+IHtcbiAgICAgICAgICAgIHNjb3BlLm1heFNoZWV0c1BlclJvdyA9IDQ7XG4gICAgICAgICAgICBzY29wZS5yb3dzID0gW107XG5cbiAgICAgICAgICAgIHNjb3BlLnNoZWV0cyA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJsaW51eCBjb21tYW5kc1wiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcImxzIC1sXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkNTUzMgZmxleCBvdmVydmlld1wiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcImp1c3RpZnktY29uZW50IGV0Yy5cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwic29tZSB0b2RvIGxpc3RcIixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJidXkgbWlsa1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiA0LFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJsaW51eCBjb21tYW5kc1wiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcImxzIC1sXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkNTUzMgZmxleCBvdmVydmlld1wiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcImp1c3RpZnktY29uZW50IGV0Yy5cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogNixcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwic29tZSB0b2RvIGxpc3RcIixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJidXkgbWlsa1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgbGV0IGN1cnJlbnRSb3cgPSBbXTtcbiAgICAgICAgICAgIHNjb3BlLnNoZWV0cy5mb3JFYWNoKChzaGVldCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjdXJyZW50Um93LnB1c2goc2hlZXQpO1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Um93Lmxlbmd0aCA9PT0gc2NvcGUubWF4U2hlZXRzUGVyUm93IHx8IGluZGV4ID09PSBzY29wZS5zaGVldHMubGVuZ3RoIC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLnJvd3MucHVzaChjdXJyZW50Um93KTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFJvdyA9IFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG5cblxuICAgICAgICB9XG4gICAgfTtcbn0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
