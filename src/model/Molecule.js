import Atom from './Atom'
import Link from './Link'

export default class Molecule {
	constructor(model, index, data) {
		this.model = model;
		this.index = 0;
		this._data = data.PC_Compounds[0];

		this.typeStructure = data.typeStructure;

		this.stage = new THREE.Group();
		this.model.scene.add(this.stage);

		this.atoms = [];
		this.links = [];

		this.typeStructure === '2d' && this._computedCenter();
		this._initAtoms();
		this._bindNodes();

		this.model.camera.position.z = Math.max(Math.min(this.atoms.length*20, 200), 70);
	}

	_computedCenter() {
		let pos = this._data.coords[0].conformers[0];
		let sortX = pos.x.slice(0).sort((a, b) => a-b);
		let sortY = pos.y.slice(0).sort((a, b) => a-b);

		this.center = {
			x: sortX[Math.round(sortX.length/2)],
			y: sortY[Math.round(sortY.length/2)]
		}
	}

	_initAtoms() {
		let pos = this._data.coords[0].conformers[0];

		for(let i = 0; i < this._data.atoms.element.length; i++) {
			let x, y, z;

			if(this.typeStructure === '3d') {
				x = pos.x[i]*20;
				y = pos.y[i]*20;
				z = pos.z[i]*20;
			} else {
				x = this.center.x*30-pos.x[i]*30;
				y = this.center.y*30-pos.y[i]*30;
				z = 0;
			}

			let atom = new Atom(this, this._data.atoms.element[i], x, y, z);
			this.atoms.push(atom);
		}
	}
	_bindNodes() {
		if(!this._data.bonds) return;

		for(let i = 0; i < this._data.bonds.aid1.length; i++) {
			let aid1 = this._data.bonds.aid1[i]-1;
			let aid2 = this._data.bonds.aid2[i]-1;
			let type = this._data.bonds.order[i];

			this.links.push(
				new Link(this, this.atoms[aid1], this.atoms[aid2], type)
			);
		}
	}

	remove() {
		for(let i = 0; i < this.atoms.length; i++) {
			this.atoms[i].remove();
		}
		this.stage.parent.remove(this.stage);
	}

	update() {
		this.stage.rotation.x += 0.001;
		this.stage.rotation.y += 0.0001;
	}
}
