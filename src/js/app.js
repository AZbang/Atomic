const Model = require('./Model');
const api = require('./api');

var model = new Model(window.innerWidth, window.innerHeight);
model.start();
 
api.search('water', (data) => {
    model.addMolecule(data);
});

window.onresize = () => {
	model.resize(window.innerWidth, window.innerHeight);
}
