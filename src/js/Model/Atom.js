const atoms = require('./atoms.json');

class Atom {
	constructor(molecule, id, x, y, z) {
		this.molecule = molecule;
		this.model = molecule.model;

		this.id = id;

		this.x = x;
		this.y = y;
		this.z = z;
		
		this.nodes = [];

		this.data = atoms[id-1];

		this.color = +(''+this.data.color).toLowerCase();
		this.shadow = +(''+this.data.shadow).toLowerCase();
		this.radius = +this.data['Ковалентный радиус, Å'] ? Math.min(+this.data['Ковалентный радиус, Å']*10, 10) : 10;
		this.detail = 2;

		// create three.js objects
		this.geometry = new THREE.IcosahedronGeometry(this.radius, this.detail);
		this.mesh = new THREE.Object3D();
		this.mesh.add(new THREE.Mesh(
			this.geometry,
			new THREE.MeshPhongMaterial({
				color: this.color,
				emissive: this.shadow,
				side: THREE.DoubleSide,
				shading: THREE.FlatShading
			})
		));
		this.mesh.position.set(this.x, this.y, this.z);
		this.molecule.stage.add(this.mesh);

		this.materialSelect = new THREE.MeshBasicMaterial( { color: 0x3992FF, side: THREE.BackSide } );
		this.meshSelect = new THREE.Mesh( this.geometry, this.materialSelect );
		this.meshSelect.scale.multiplyScalar(1.2);
		this.meshSelect.position.x = this.x;
		this.meshSelect.position.y = this.y;
		this.meshSelect.position.z = this.z;
		this.meshSelect.visible = false;
		this.molecule.stage.add(this.meshSelect);

		this._bindEvents();
	}
	_bindEvents() {
		this.model.domEvents.addEventListener(this.mesh, 'click', (event) => {

			this.molecule.atoms.forEach((atom) => {
				atom.meshSelect.visible = false;
			});
			this.meshSelect.visible = true;

			let table = $(`<table class="ui blue table"><tbody></tbody></table>`);

			table.find('tbody').append(`<tr><td>Порядковый номер атома</td><td>${this.id}</td></tr>`);
			for(let key in this.data) {
				if(key == 'description' || key == 'label' || key == 'shadow' || key == 'color') continue;
				table.find('tbody').append(`<tr><td>${key}</td><td>${this.data[key]}</td></tr>`);
			}
			$('#info-atom .content').empty();
			$('#info-atom .content').append(`<i class="right floated large close icon" style="cursor: pointer"></i>`);
			$('#info-atom .content i.close').on('click', () => {
				$('#info-atom').hide();
				$('#info-substance').show().transition('pulse');
			});
			$('#info-atom .content').append(`<div class="header">${this.data.label.split(' ')[0]}</div>`);
			$('#info-atom .content').append(`<div class="meta">${this.data.label.split(' ')[1]}</div>`);
			$('#info-atom .content').append(`<div class="description">${this.data.description}</div>`);
			$('#info-atom .content').append(table);
			$('#info-substance').hide();
			$('#info-atom').show().transition('pulse');

		}, false);
	}

	remove() {
		this.model.domEvents.unbind(this.mesh, 'click');
	}
}

module.exports = Atom;