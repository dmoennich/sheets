window.sheetsTestHelper = window.sheetsTestHelper || {};
window.sheetsTestHelper.sheetCreator = {
	createSheets: function (num) {
		var sheets = [], currentId = 0;

		while (num-- > 0) {

			var sheet = {
				id: currentId++,
				title: chance.sentence({words: 3}),
				content: chance.paragraph({sentences: 2})
			};

			sheets.push(sheet);
		}

		return sheets;
	}
};

