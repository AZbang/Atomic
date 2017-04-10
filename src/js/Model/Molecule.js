const Atom = require('./Atom');
const Link = require('./Link');

class Molecule {
	constructor(model, index, data) {
		this.model = model;
		this.index = 0;
		this._data = data.PC_Compounds[0];

		console.log(this._data);

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

		this.model.camera.position.z = Math.min(this.atoms.length*20, 200);

		this._bindEvents();
	}

	_bindEvents() {
		this.model.wrap.onclick = (e) => {
			e.preventDefault();
			this.model.mouse.x = (e.clientX / window.innerWidth)*2-1;
			this.model.mouse.y = -(e.clientY / window.innerHeight)*2+1;

			this.model.raycaster.setFromCamera(this.model.mouse, this.model.camera);
			let intersects = this.model.raycaster.intersectObjects(this.model.scene.children);

			if (intersects.length > 0 ) {
				if (this.intesected != intersects[0].object) {
					if(this.intesected) {
						this.intesected.material.emissive.setHex(this.intesected.currentHex);
					}

					this.intesected = intersects[ 0 ].object;
					this.intesected.currentHex = this.intesected.material.emissive.getHex();
					this.intesected.material.emissive.setHex( 0xff0000 );
				}
			} else {
				if(this.intesected) { 
					this.intesected.material.emissive.setHex(this.intesected.currentHex);
					console.log(this.intesected);
				}
				this.intesected = null;
			}
		};
	}


	_initAtoms() {
		let pos = this._data.coords[0].conformers[0];
		
		for(let i = 0; i < this._data.atoms.element.length; i++) {
			this.atoms.push(
				new Atom(this, this._data.atoms.element[i], pos.x[i], pos.y[i], pos.z && pos.z[i])
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
		this.stage.rotation.y += 0.0001;

		for(let i = 0; i < this.atoms.length; i++) {
			this.atoms[i].update();
		}
	}
}

module.exports = Molecule;