const THREE = require('three');
const Atom = require('./Atom');
const Link = require('./Link');

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
		this.links = [];

		this._initAtoms();
		this._bindNodes();
	}

	_initAtoms() {
		let pos = this._data.coords[0].conformers[0];
		
		for(let i = 0; i < this._data.atoms.element.length; i++) {
			this.atoms.push(
				new Atom(this, this._data.atoms.element[i], pos.x[i], pos.y[i], pos.z[i])
			);
		}
	}
	_bindNodes() {
		for(let i = 0; i < this._data.bonds.aid1.length; i++) {
			let aid1 = this._data.bonds.aid1[i]-1;
			let aid2 = this._data.bonds.aid2[i]-1;
			let type = this._data.bonds.order[i];

			this.links.push(
				new Link(this, this.atoms[aid1], this.atoms[aid2], type)
			);
		}
	}

	update() {
		this.stage.rotation.x += 0.001;
		this.stage.rotation.y += 0.001;
		this.stage.rotation.z += 0.001;
	}
}

module.exports = Molecule;