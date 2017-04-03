const THREE = require('three');

class Atom {
	constructor(molecule, id, x, y, z) {
		this.molecule = molecule;
		this.model = molecule.model;

		this.x = x*20;
		this.y = y*20;
		this.z = z*20;
		
		this.nodes = [];

		this.formula;
		this.label;

		this.color = 0xFF4848;
		this.radius = 10;
		this.detail = 2;

		// create three.js objects
		this.geometry = new THREE.IcosahedronGeometry(this.radius, this.detail);
		this.mesh = new THREE.Object3D();
		this.mesh.add(new THREE.Mesh(
			this.geometry,
			new THREE.MeshPhongMaterial({
				color: this.color,
				emissive: this.color + 0x990000,
				side: THREE.DoubleSide,
				shading: THREE.FlatShading
			})
		));

		this.mesh.position.set(this.x, this.y, this.z);

		this.molecule.stage.add(this.mesh);
	}
	update() {

	}
}

module.exports = Atom;