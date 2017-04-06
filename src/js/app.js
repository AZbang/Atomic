const $ = require('jquery');
const Model = require('./Model');
const api = require('./api');

var model = new Model(window.innerWidth, window.innerHeight);
model.start();
 
$('#search-form').on('submit', (e) => {
    e.preventDefault();

    let req = $('#search').val();
    api.search(req, (data) => {
        $('#search').val('');

        model.removeMolecule(0);
        model.addMolecule(data);
    });
});


window.onresize = () => {
	model.resize(window.innerWidth, window.innerHeight);
}
