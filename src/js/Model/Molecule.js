const THREE = require('three');
const Atom = require('./Atom');

class Molecule {
	constructor(model, index) {
		this.model = model;
		this.index = 0;

		this.label;
		this.synonymLabel;
		this.formula;
		this.weight;

		this.atoms = [new Atom(this)];
	}

	update() {
		for(let i = 0; i < atoms.length; i++) {
			this.atoms.update();
		}
	}
}

module.exports = Molecule;