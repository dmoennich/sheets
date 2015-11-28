/**
 * Created by daniel on 22.11.15.
 */
sheetsApp.factory("Sheets", ($http, $q) => {

    let sheetsFac = {},
    	sheets,
		fetchProm = $http.get("/api/sheets").then((resp) => {
			sheets = resp.data;
			return sheets;
		});



    sheetsFac.getAll = () => {
		return fetchProm;
    };

	sheetsFac.remove = (sheetId) => {
		sheets.some((sheet, index) => {
			if (sheet.id === sheetId) {
				sheets.splice(index, 1);
				return true;
			}
		});
	};

    return sheetsFac;
});