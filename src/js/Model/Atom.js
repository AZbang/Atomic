const THREE = require('three');

class Atom {
	constructor(molecule, x, y, z) {
		this.molecule = molecule;
		this.model = molecule.model;

		this.nodes = [];

		this.formula;
		this.label;

		this.color = 0xFF4848;
		this.radius = 10;
		this.widthSegments = 5;
		this.heightSegments = 5;

		// create three.js objects
		this.geometry = new THREE.SphereGeometry(this.radius, this.widthSegments, this.heightSegments);
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

		this.mesh.position
			.set(x, y, z)
			.multiplyScalar(20);

		this.molecule.stage.add(this.mesh);
	}
	bindNode(aid, type) {
		this.nodes.push({
			atom: this.molecule.atoms[aid],
			type: type
		});
	}
	update() {

	}
}

module.exports = Atom;