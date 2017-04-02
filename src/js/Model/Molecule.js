const THREE = require('three');
const Atom = require('./Atom');

class Molecule {
	constructor(model, index, data) {
		this.model = model;
		this.index = 0;
		this._data = data.PC_Compounds[0];

		this.label;
		this.synonymLabel;
		this.formula;
		this.weight;

		this.stage = new THREE.Group();
		this.model.scene.add(this.stage);

		this.atoms = [];

		this._initAtoms();
		this._bindNodes();
	}

	_initAtoms() {
		let pos = this._data.coords[0].conformers[0];
		
		for(let i = 0; i < this._data.atoms.element.length; i++) {
			this.atoms.push(new Atom(this, this._data.atoms.element[i], pos.x[i], pos.y[i], pos.z[i]));
		}
	}
	_bindNodes() {
		for(let i = 0; i < this._data.bonds.aid1.length; i++) {
			let id = this._data.bonds.aid1[i]-1;
			let aid = this._data.bonds.aid2[i]-1;
			let type = this._data.bonds.order[i];
			this.atoms[id].bindNode(aid, type);
		}
	}

	update() {
		for(let i = 0; i < atoms.length; i++) {
			this.atoms.update();
		}
	}
}

module.exports = Molecule;