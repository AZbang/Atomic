const Model = require('./Model');
const $ = require('jquery');
const pubchem = require('pubchem-access').domain('compound');

var model = new Model(window.innerWidth, window.innerHeight);
model.start();
 
pubchem
    .setName('acetic acid')
    .getIUPACName()
    .execute((data, status) => {
    	if(status !== 1) return;

    	let cid = data.PropertyTable.Properties[0].CID;

    	$.getJSON(`https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/${cid}/record/JSON/?record_type=3d&response_type=display`)
    		.done((data) => {
    			console.log(data);
    			model.addMolecule(data);
    		});

	}, 'JSON', 'raw');



window.onresize = () => {
	model.resize(window.innerWidth, window.innerHeight);
}
