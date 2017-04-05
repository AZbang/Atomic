const $ = require('jquery');
const pubchem = require('pubchem-access').domain('compound');

module.exports.search = (req, cb) => {
	pubchem
		.setName(req)
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
}