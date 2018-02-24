
class Link {
	constructor(molecula, atom1, atom2, type) {
		this.molecula = molecula;
		this.atom1 = atom1;
		this.atom2 = atom2;
		this.type = type;


		// create three.js objects

		this.tubes = new THREE.Group();
		this.molecula.stage.add(this.tubes);

		for(let i = 0; i < type; i++) {

			let p1 = new THREE.Vector3(this.atom1.x, this.atom1.y, this.atom1.z+i*(6/type)-(2/type)*(type-1));
			let p2 = new THREE.Vector3(this.atom2.x, this.atom2.y, this.atom2.z+i*(6/type)-(2/type)*(type-1));

			let mesh = new THREE.Object3D();
			let geometry = new THREE.TubeGeometry(
				new THREE.CatmullRomCurve3([p1, p2]),
				12, 2/type
			);

			mesh.add(new THREE.Mesh(
				geometry,
				new THREE.MeshPhongMaterial({
					color: 0xB0B0B0,
					emissive: 0x7B7B7B,
					side: THREE.DoubleSide,
					shading: THREE.FlatShading
				})
			));
			this.tubes.add(mesh);
		}
	}
}

module.exports = Link;