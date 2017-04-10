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
            $('#model').css('opacity', 0);
            setTimeout(() => $('#model').animate({opacity: 1}, 1000), 500);
            model.addMolecule(data);
	    },
    	error: () => {
    		$('#loader').hide();
    		$('#error').show().transition('pulse');
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
