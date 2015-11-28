"use strict";

/**
 * Created by daniel on 20.11.15.
 */

var sheetsApp = angular.module("sheetsApp", []);

/**
 * Created by daniel on 22.11.15.
 */
sheetsApp.factory("Sheets", function ($http, $q) {

  var sheetsFac = {},
      sheets = undefined,
      fetchProm = $http.get("/api/sheets").then(function (resp) {
    sheets = resp.data;
    return sheets;
  });

  sheetsFac.getAll = function () {
    return fetchProm;
  };

  sheetsFac.remove = function (sheetId) {
    sheets.some(function (sheet, index) {
      if (sheet.id === sheetId) {
        sheets.splice(index, 1);
        return true;
      }
    });
  };

  return sheetsFac;
});

sheetsApp.directive("mainHeader", function (Sheets) {

  return {
    restrict: "E",
    replace: true,
    scope: {},
    templateUrl: "/modules/common/directives/main-header/main-header.html",
    link: function link(scope) {
      Sheets.getAll().then(function (sheets) {
        scope.sheets = sheets;
      });
    }
  };
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
    templateUrl: "/modules/common/directives/sheet/sheet.html"
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
      sheets: "=",
      sheetsPerRow: "=sheetsPerRow"
    },
    templateUrl: "/modules/common/directives/sheetgrid/sheetgrid.html",
    link: function link(scope) {
      scope.sheetsPerRow = Number(scope.sheetsPerRow) || 4;
      scope.rows = [];

      Sheets.getAll().then(function (sheets) {
        var currentRow = [];
        sheets.forEach(function (sheet, index) {
          currentRow.push(sheet);
          if (currentRow.length === scope.sheetsPerRow || index === sheets.length - 1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNvbW1vbi9mYWN0b3JpZXMvc2hlZXQuZmFjdG9yeS5qcyIsImNvbW1vbi9kaXJlY3RpdmVzL21haW4taGVhZGVyL21haW4taGVhZGVyLmRpcmVjdGl2ZS5qcyIsImNvbW1vbi9kaXJlY3RpdmVzL3NoZWV0L3NoZWV0LmRpcmVjdGl2ZS5qcyIsImNvbW1vbi9kaXJlY3RpdmVzL3NoZWV0Z3JpZC9zaGVldGdyaWQuZGlyZWN0aXZlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUlBLElBQUEsU0FBQSxHQUFBLE9BQUEsQ0FBQSxNQUFBLENBQUEsV0FBQSxFQUFBLEVBQUEsQ0FBQTs7Ozs7QUFBQSxBQ0RBLFNBQUEsQ0FBQSxPQUFBLENBQUEsUUFBQSxFQUFBLFVBQUEsS0FBQSxFQUFBLEVBQUEsRUFBQTs7QUFFQSxNQUFBLFNBQUEsR0FBQSxFQUFBO01BQ0EsTUFBQSxZQUFBO01BQ0EsU0FBQSxHQUFBLEtBQUEsQ0FBQSxHQUFBLENBQUEsYUFBQSxDQUFBLENBQUEsSUFBQSxDQUFBLFVBQUEsSUFBQSxFQUFBO0FBQ0EsVUFBQSxHQUFBLElBQUEsQ0FBQSxJQUFBLENBQUE7QUFDQSxXQUFBLE1BQUEsQ0FBQTtHQUNBLENBQUEsQ0FBQTs7QUFJQSxXQUFBLENBQUEsTUFBQSxHQUFBLFlBQUE7QUFDQSxXQUFBLFNBQUEsQ0FBQTtHQUNBLENBQUE7O0FBRUEsV0FBQSxDQUFBLE1BQUEsR0FBQSxVQUFBLE9BQUEsRUFBQTtBQUNBLFVBQUEsQ0FBQSxJQUFBLENBQUEsVUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBO0FBQ0EsVUFBQSxLQUFBLENBQUEsRUFBQSxLQUFBLE9BQUEsRUFBQTtBQUNBLGNBQUEsQ0FBQSxNQUFBLENBQUEsS0FBQSxFQUFBLENBQUEsQ0FBQSxDQUFBO0FBQ0EsZUFBQSxJQUFBLENBQUE7T0FDQTtLQUNBLENBQUEsQ0FBQTtHQUNBLENBQUE7O0FBRUEsU0FBQSxTQUFBLENBQUE7Q0FDQSxDQUFBLENBQUE7O0FDM0JBLFNBQUEsQ0FBQSxTQUFBLENBQUEsWUFBQSxFQUFBLFVBQUEsTUFBQSxFQUFBOztBQUVBLFNBQUE7QUFDQSxZQUFBLEVBQUEsR0FBQTtBQUNBLFdBQUEsRUFBQSxJQUFBO0FBQ0EsU0FBQSxFQUFBLEVBQUE7QUFDQSxlQUFBLEVBQUEseURBQUE7QUFDQSxRQUFBLEVBQUEsY0FBQSxLQUFBLEVBQUE7QUFDQSxZQUFBLENBQUEsTUFBQSxFQUFBLENBQUEsSUFBQSxDQUFBLFVBQUEsTUFBQSxFQUFBO0FBQ0EsYUFBQSxDQUFBLE1BQUEsR0FBQSxNQUFBLENBQUE7T0FDQSxDQUFBLENBQUE7S0FDQTtHQUNBLENBQUE7Q0FHQSxDQUFBOzs7OztBQUFBLEFDYkEsU0FBQSxDQUFBLFNBQUEsQ0FBQSxPQUFBLEVBQUEsWUFBQTtBQUNBLFNBQUE7QUFDQSxZQUFBLEVBQUEsR0FBQTtBQUNBLFdBQUEsRUFBQSxJQUFBO0FBQ0EsU0FBQSxFQUFBO0FBQ0EsYUFBQSxFQUFBLE9BQUE7S0FDQTtBQUNBLGVBQUEsRUFBQSw2Q0FBQTtHQUNBLENBQUE7Q0FDQSxDQUFBOzs7O0FBQUEsQUNUQSxTQUFBLENBQUEsU0FBQSxDQUFBLFdBQUEsRUFBQSxVQUFBLE1BQUEsRUFBQTtBQUNBLFNBQUE7QUFDQSxZQUFBLEVBQUEsR0FBQTtBQUNBLFdBQUEsRUFBQSxJQUFBO0FBQ0EsU0FBQSxFQUFBO0FBQ0EsWUFBQSxFQUFBLEdBQUE7QUFDQSxrQkFBQSxFQUFBLGVBQUE7S0FDQTtBQUNBLGVBQUEsRUFBQSxxREFBQTtBQUNBLFFBQUEsRUFBQSxjQUFBLEtBQUEsRUFBQTtBQUNBLFdBQUEsQ0FBQSxZQUFBLEdBQUEsTUFBQSxDQUFBLEtBQUEsQ0FBQSxZQUFBLENBQUEsSUFBQSxDQUFBLENBQUE7QUFDQSxXQUFBLENBQUEsSUFBQSxHQUFBLEVBQUEsQ0FBQTs7QUFFQSxZQUFBLENBQUEsTUFBQSxFQUFBLENBQUEsSUFBQSxDQUFBLFVBQUEsTUFBQSxFQUFBO0FBQ0EsWUFBQSxVQUFBLEdBQUEsRUFBQSxDQUFBO0FBQ0EsY0FBQSxDQUFBLE9BQUEsQ0FBQSxVQUFBLEtBQUEsRUFBQSxLQUFBLEVBQUE7QUFDQSxvQkFBQSxDQUFBLElBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQTtBQUNBLGNBQUEsVUFBQSxDQUFBLE1BQUEsS0FBQSxLQUFBLENBQUEsWUFBQSxJQUFBLEtBQUEsS0FBQSxNQUFBLENBQUEsTUFBQSxHQUFBLENBQUEsRUFBQTtBQUNBLGlCQUFBLENBQUEsSUFBQSxDQUFBLElBQUEsQ0FBQSxVQUFBLENBQUEsQ0FBQTtBQUNBLHNCQUFBLEdBQUEsRUFBQSxDQUFBO1dBQ0E7U0FDQSxDQUFBLENBQUE7QUFDQSxZQUFBLE1BQUEsQ0FBQSxNQUFBLEtBQUEsQ0FBQSxFQUFBO0FBQ0EsZUFBQSxDQUFBLFFBQUEsR0FBQSxJQUFBLENBQUE7U0FDQTtPQUNBLENBQUEsQ0FBQTtLQUdBO0dBQ0EsQ0FBQTtDQUNBLENBQUEsQ0FBQSIsImZpbGUiOiJzaGVldHMtYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IGRhbmllbCBvbiAyMC4xMS4xNS5cbiAqL1xuXG5sZXQgc2hlZXRzQXBwID0gYW5ndWxhci5tb2R1bGUoXCJzaGVldHNBcHBcIiwgW10pO1xuXG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgZGFuaWVsIG9uIDIyLjExLjE1LlxuICovXG5zaGVldHNBcHAuZmFjdG9yeShcIlNoZWV0c1wiLCAoJGh0dHAsICRxKSA9PiB7XG5cbiAgICBsZXQgc2hlZXRzRmFjID0ge30sXG4gICAgXHRzaGVldHMsXG5cdFx0ZmV0Y2hQcm9tID0gJGh0dHAuZ2V0KFwiL2FwaS9zaGVldHNcIikudGhlbigocmVzcCkgPT4ge1xuXHRcdFx0c2hlZXRzID0gcmVzcC5kYXRhO1xuXHRcdFx0cmV0dXJuIHNoZWV0cztcblx0XHR9KTtcblxuXG5cbiAgICBzaGVldHNGYWMuZ2V0QWxsID0gKCkgPT4ge1xuXHRcdHJldHVybiBmZXRjaFByb207XG4gICAgfTtcblxuXHRzaGVldHNGYWMucmVtb3ZlID0gKHNoZWV0SWQpID0+IHtcblx0XHRzaGVldHMuc29tZSgoc2hlZXQsIGluZGV4KSA9PiB7XG5cdFx0XHRpZiAoc2hlZXQuaWQgPT09IHNoZWV0SWQpIHtcblx0XHRcdFx0c2hlZXRzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xuXG4gICAgcmV0dXJuIHNoZWV0c0ZhYztcbn0pOyIsIlxuc2hlZXRzQXBwLmRpcmVjdGl2ZShcIm1haW5IZWFkZXJcIiwgKFNoZWV0cykgPT4ge1xuXG5cdHJldHVybiB7XG5cdFx0cmVzdHJpY3Q6IFwiRVwiLFxuXHRcdHJlcGxhY2U6IHRydWUsXG5cdFx0c2NvcGU6IHt9LFxuXHRcdHRlbXBsYXRlVXJsOiBcIi9tb2R1bGVzL2NvbW1vbi9kaXJlY3RpdmVzL21haW4taGVhZGVyL21haW4taGVhZGVyLmh0bWxcIixcblx0XHRsaW5rOiBmdW5jdGlvbiAoc2NvcGUpIHtcblx0XHRcdFNoZWV0cy5nZXRBbGwoKS50aGVuKChzaGVldHMpID0+IHtcblx0XHRcdFx0c2NvcGUuc2hlZXRzID0gc2hlZXRzO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXG5cbn0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGRhbmllbCBvbiAyMS4xMS4xNS5cbiAqL1xuc2hlZXRzQXBwLmRpcmVjdGl2ZShcInNoZWV0XCIsICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICByZXN0cmljdDogXCJFXCIsXG4gICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICBcInNoZWV0XCI6IFwiPWRhdGFcIlxuICAgICAgICB9LFxuICAgICAgICB0ZW1wbGF0ZVVybDogXCIvbW9kdWxlcy9jb21tb24vZGlyZWN0aXZlcy9zaGVldC9zaGVldC5odG1sXCJcbiAgICB9O1xufSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGRhbmllbCBvbiAyMS4xMS4xNS5cbiAqL1xuc2hlZXRzQXBwLmRpcmVjdGl2ZShcInNoZWV0R3JpZFwiLCAoU2hlZXRzKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdHJpY3Q6IFwiRVwiLFxuICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgc2hlZXRzOiBcIj1cIixcbiAgICAgICAgICAgIHNoZWV0c1BlclJvdzogXCI9c2hlZXRzUGVyUm93XCJcbiAgICAgICAgfSxcbiAgICAgICAgdGVtcGxhdGVVcmw6IFwiL21vZHVsZXMvY29tbW9uL2RpcmVjdGl2ZXMvc2hlZXRncmlkL3NoZWV0Z3JpZC5odG1sXCIsXG4gICAgICAgIGxpbms6IChzY29wZSkgPT4ge1xuICAgICAgICAgICAgc2NvcGUuc2hlZXRzUGVyUm93ID0gTnVtYmVyKHNjb3BlLnNoZWV0c1BlclJvdykgfHwgNDtcbiAgICAgICAgICAgIHNjb3BlLnJvd3MgPSBbXTtcblxuICAgICAgICAgICAgU2hlZXRzLmdldEFsbCgpLnRoZW4oKHNoZWV0cykgPT4ge1xuXHRcdFx0XHRsZXQgY3VycmVudFJvdyA9IFtdO1xuXHRcdFx0XHRzaGVldHMuZm9yRWFjaCgoc2hlZXQsIGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0Y3VycmVudFJvdy5wdXNoKHNoZWV0KTtcblx0XHRcdFx0XHRpZiAoY3VycmVudFJvdy5sZW5ndGggPT09IHNjb3BlLnNoZWV0c1BlclJvdyB8fCBpbmRleCA9PT0gc2hlZXRzLmxlbmd0aCAtMSkge1xuXHRcdFx0XHRcdFx0c2NvcGUucm93cy5wdXNoKGN1cnJlbnRSb3cpO1xuXHRcdFx0XHRcdFx0Y3VycmVudFJvdyA9IFtdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG4gICAgICAgICAgICAgICAgaWYgKHNoZWV0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUubm9TaGVldHMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblx0XHRcdH0pO1xuXG5cbiAgICAgICAgfVxuICAgIH07XG59KTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
