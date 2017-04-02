const THREE = require('three');
const Molecule = require('./Molecule');
const OrbitControls = require('./OrbitControls');

class Model {
	constructor(w, h) {
		this.w = w;
		this.h = h;

		this.molecules = [];

		// init three.js
		this.renderer = new THREE.WebGLRenderer();
		this.renderer.setSize(this.w, this.h);
		document.body.appendChild(this.renderer.domElement);

		this.camera = new THREE.PerspectiveCamera(75, this.w / this.h, 0.1, 1000);
		this.camera.position.z = 500;
		
		this.orbit = new THREE.OrbitControls(this.camera, this.renderer.domElement);
		
		this.scene = new THREE.Scene();

		this.lights = [];
		this.lights[0] = new THREE.PointLight(0xffffff, 1, 0);
		this.lights[1] = new THREE.PointLight(0xffffff, 1, 0);
		this.lights[2] = new THREE.PointLight(0xffffff, 1, 0);

		this.lights[0].position.set(0, 200, 0);
		this.lights[1].position.set(100, 200, 100);
		this.lights[2].position.set(-100, -200, -100);

		this.scene.add(this.lights[0]);
		this.scene.add(this.lights[1]);
		this.scene.add(this.lights[2]);

		// Load the background texture
		this.backgroundTexture = THREE.ImageUtils.loadTexture('img/bg1.png');
		this.backgroundMesh = new THREE.Mesh(
			new THREE.PlaneGeometry(2, 2, 0),
			new THREE.MeshBasicMaterial({
				map: this.backgroundTexture
			}));

		this.backgroundMesh.material.depthTest = false;
		this.backgroundMesh.material.depthWrite = false;

		// Create your background scene
		this.backgroundScene = new THREE.Scene();
		this.backgroundCamera = new THREE.Camera();
		this.backgroundScene.add(this.backgroundCamera);
		this.backgroundScene.add(this.backgroundMesh);
	}

	resize(w, h) {
		this.w = w;
		this.h = h;

		this.camera.aspect = this.w/this.h;
		this.camera.updateProjectionMatrix();
		this.renderer.setSize(this.w, this.h);	
	}

	addMolecule() {
		let mol = new Molecule(this, this.molecules.length);
		return this.molecules.push(mol);
	}
	removeMolecule(mol) {
		this.molecules.splice(mol.index, 1);
	}

	start() {
		this.loop();
	}

	loop() {
		requestAnimationFrame(() => this.loop());

		for(let i = 0; i < this.molecules.lenght; i++) {
			this.molecules.update();
		}

		this.camera.lookAt(this.scene.position);
		this.camera.updateMatrixWorld();

		this.renderer.autoClear = false;
		this.renderer.clear();
		this.renderer.render(this.backgroundScene , this.backgroundCamera);
		this.renderer.render(this.scene, this.camera);
	}
}

module.exports = Model;