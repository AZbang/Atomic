const $ = require('jquery');
const pubchem = require('pubchem-access').domain('compound');

const key = require('./key');
require('./wiki');

module.exports.search = (req, cb) => {
	let translate = 'https://translate.yandex.net/api/v1.5/tr.json/translate?' +
		'key=' + key +
		'&text=' + encodeURIComponent(req) +
		'&lang=ru-en'

	$.getJSON(translate, (data) => {
		pubchem
			.setName(data.text[0])
			.getIUPACName()
			.execute((data, status) => {
				if(status !== 1) return;

				let cid = data.PropertyTable.Properties[0].CID;
				let url = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/${cid}/record/JSON/?record_type=3d&response_type=display`;
				$.getJSON(url)
					.done((data) => {
						cb(data);
					});
			}, 'JSON', 'raw');
	});

	$('body').wikiblurb({
		wikiURL: "http://ru.wikipedia.org/",
		type: "custom",
		customSelector: ".thumbinner",
		page: req.replace(' ', '_'),
		section: 0          
	});
}