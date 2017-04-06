const $ = require('jquery');
const pubchem = require('pubchem-access').domain('compound');

module.exports.search = (req, cb) => {
	let translate = 'https://translate.yandex.net/api/v1.5/tr.json/translate?' +
		'key=' + require('./key') +
		'&text=' + encodeURIComponent(req) +
		'&lang=ru-en'

	$.getJSON(translate, (data) => {
		pubchem
			.setName(data.text[0])
			.getIUPACName()
			.execute((data, status) => {
				if(status !== 1) return;

				let prop = data.PropertyTable.Properties[0];
				let cid = prop.CID;
				let label = prop.IUPACName;

				let url = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/${cid}/record/JSON/?record_type=3d&response_type=display`;

				$.getJSON(url)
					.done((data) => {
						cb(data);
					});
					
			}, 'JSON', 'raw');
	});
}