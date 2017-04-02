const THREE = require('three');

class Atom {
	constructor(molecule) {
		this.molecule = molecule;
		this.model = molecule.model;

		this.formula;
		this.label;
		this.color = 0xFF4848;
		this.radius = 60;
		this.widthSegments = 60;
		this.heightSegments = 60;

		// create three.js objects
		this.geometry = new THREE.SphereGeometry(this.radius, this.widthSegments, this.heightSegments);
		this.mesh = new THREE.Object3D();
		this.mesh.add(new THREE.Mesh(
			this.geometry,
			new THREE.MeshPhongMaterial( {
				color: this.color,
				emissive: this.color + 0x990000,
				side: THREE.DoubleSide,
				shading: THREE.FlatShading
			})
		));
		this.model.scene.add(this.mesh);
	}
	update() {

	}
}

module.exports = Atom;