const THREE = require('three');

class Link {
	constructor(molecula, atom1, atom2, type) {
		this.molecula = molecula;
		this.atom1 = atom1;
		this.atom2 = atom2;
		this.type = type;


		// create three.js objects
		this.point1 = new THREE.Vector3(this.atom1.x, this.atom1.y, this.atom1.z);
		this.point2 = new THREE.Vector3(this.atom2.x, this.atom2.y, this.atom2.z);

		this.geometry = new THREE.TubeGeometry(
			new THREE.SplineCurve3([this.point1, this.point2]),
			10, 2, 8, false
		);
		this.mesh = new THREE.Object3D();
		this.mesh.add(new THREE.Mesh(
			this.geometry,
			new THREE.MeshPhongMaterial({
				color: 0xB0B0B0,
				emissive: 0x7B7B7B,
				side: THREE.DoubleSide,
				shading: THREE.FlatShading
			})
		));
		this.molecula.stage.add(this.mesh);
	}
}

module.exports = Link;