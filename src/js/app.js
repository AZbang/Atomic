const $ = require('jquery');
const Model = require('./Model');
const api = require('./api');

var model = new Model(window.innerWidth, window.innerHeight);
model.start();
 
$('#search-form').on('submit', (e) => {
    e.preventDefault();

    let req = $('#search').val();
    $('#loader').show();

    model.removeMolecule(0);
    $('#error').hide();

    api.search(req, {
    	done: (data) => {
	    	$('#loader').hide();
	        model.addMolecule(data);
	    },
    	error: () => {
    		$('#loader').hide();
    		$('#error').show();
    		$('#error-info').text(`Вещества по запросу "${req}" нет в базе данных PubChem`);
    	}
    });
});

$('#error').hide();
$('#loader').hide();
$('#search').val('ЛСД');
$('#search-form').submit();

window.onresize = () => {
	model.resize(window.innerWidth, window.innerHeight);
}
