const Model = require('./Model');

var model = new Model(window.innerWidth, window.innerHeight);
model.addMolecule();

model.start();

window.onresize = () => {
	model.resize(window.innerWidth, window.innerHeight);
}
