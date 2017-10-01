// UNWORK MODULE!!! 

const pubchem = require('pubchem-access').domain('compound');
const key = require('./key');

module.exports = {
	searchSubstance(req) {
		let label = this.translateLabel(req);
		let data = this.getPubchemData(label);
		let structure = this.getStructureData(data.CID);
	},

	translateLabel(req) {
		let translate = 'https://translate.yandex.net/api/v1.5/tr.json/translate?' +
			'key=' + key +
			'&text=' + encodeURIComponent(req) +
			'&lang=ru-en';

		$.getJSON(translate, (data) => {
			return data.text[0].replace('the ', '');
		});
	},

	getPubchemData(req) {
		pubchem
			.setName(formatReq)
			.getProperties(["IUPACName", "MolecularFormula", "MolecularWeight"])
			.execute((data, status) => {
				if(status !== 1) return {};
				else return data.PropertyTable.Properties[0];
			}, 'JSON', 'raw');
	},

	getStructureData(CID) {
		let url3d = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/${CID}/record/JSON/?record_type=3d&response_type=display`;
		let url2d = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/${CID}/record/JSON/?record_type=2d&response_type=display`;

		$.getJSON(url3d)
			.done((data) => {
				data.typeStructure = '3d';
				this.state.currentSubstance = data;
			})
			.fail(() => {
				$.getJSON(url2d)
					.done((data) => {
						data.typeStructure = '2d';
						this.state.currentSubstance = data;
					})
					.fail(() => {
						this.state.errorMessage = 'Вещество не найдено';
					});
				});
	}
}
