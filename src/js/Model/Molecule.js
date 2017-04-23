const Atom = require('./Atom');
const Link = require('./Link');

class Molecule {
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

		this._bindEvents();
	}

	_bindEvents() {

		this.stage.children.forEach((mesh) => {
			this.model.domEvents.addEventListener(mesh, 'click', (event) => {
				if(!mesh.atom) return;

				// this.stage.children.forEach((mesh) => {
				// 	mesh.hex != null && mesh.children[0].material.emissive.setHex(mesh.hex);
				// });
				
				// mesh.hex = mesh.children[0].material.emissive.getHex();
				// mesh.children[0].material.emissive.setHex(0xF6D53B);

				var outlineMaterial2 = new THREE.MeshBasicMaterial( { color: 0x3992FF, side: THREE.BackSide } );
				var outlineMesh2 = new THREE.Mesh( mesh.atom.geometry, outlineMaterial2 );
				outlineMesh2.position.x = mesh.atom.x;
				outlineMesh2.position.y = mesh.atom.y;
				outlineMesh2.position.z = mesh.atom.z;
				outlineMesh2.scale.multiplyScalar(1.1);
				this.stage.add( outlineMesh2 );

				let table = $(`<table class="ui blue table">
									<thead>
										<tr>
											<th>Key</th>
											<th>Value</th>
										</tr>
									</thead>
									<tbody></tbody>
								</table>`);

				for(let key in mesh.atom.data) {
					if(key == 'description' || key == 'label' || key == 'color') continue;
					table.find('tbody').append(`<tr><td>${key}</td><td>${mesh.atom.data[key]}</td></tr>`);
				}
				$('#info-atom .content').empty();
				$('#info-atom .content').append(`<i class="right floated large close icon" style="cursor: pointer"></i>`);
				$('#info-atom .content i.close').on('click', () => {
					$('#info-atom').hide();
					$('#info-substance').show().transition('pulse');
				});
				$('#info-atom .content').append(`<div class="header">${mesh.atom.data.label.split(' ')[0]}</div>`);
				$('#info-atom .content').append(`<div class="meta">${mesh.atom.data.label.split(' ')[1]}</div>`);
				$('#info-atom .content').append(`<div class="description">${mesh.atom.data.description}</div>`);
				$('#info-atom .content').append(table);
				$('#info-substance').hide();
				$('#info-atom').show().transition('pulse');

			}, false)
		});
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

	update() {
		this.stage.rotation.x += 0.001;
		this.stage.rotation.y += 0.0001;

		for(let i = 0; i < this.atoms.length; i++) {
			this.atoms[i].update();
		}
	}
}

module.exports = Molecule;