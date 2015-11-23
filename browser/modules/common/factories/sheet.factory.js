/**
 * Created by daniel on 22.11.15.
 */
sheetsApp.factory("Sheets", ($http) => {

    let sheetsFac = {};

    sheetsFac.getAll = () => {
        return $http.get("/api/sheets").then((resp) => resp.data);
    };

    return sheetsFac;

});