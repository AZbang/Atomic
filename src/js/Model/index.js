const Molecule = require('./Molecule');
const OrbitControls = require('./OrbitControls');
const DomEvents = require('./domEvents');

class Model {
	constructor(w, h) {
		this.w = w - w/100*25;
		this.h = h;

		this.molecules = [];

		// init three.js
		this.renderer = new THREE.WebGLRenderer({
			antialias: true,
			alpha: true
		});
		this.renderer.setClearColor(0xffffff, 0);
		this.renderer.setSize(this.w, this.h);

		this.wrap = document.getElementById('model');
		this.wrap.appendChild(this.renderer.domElement);

		this.camera = new THREE.PerspectiveCamera(75, this.w / this.h, 0.1, 1000);
		this.orbit = new THREE.OrbitControls(this.camera, this.renderer.domElement, this.wrap);
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
		
		this.domEvents = new DomEvents(this.camera, this.wrap);
	}

	resize(w, h) {
		this.w = w;
		this.h = h;

		this.camera.aspect = this.w/this.h;
		this.camera.updateProjectionMatrix();
		this.renderer.setSize(this.w, this.h);	
	}

	addMolecule(data) {
		let mol = new Molecule(this, this.molecules.length, data);
		return this.molecules.push(mol);
	}
	removeMolecule(i) {
		if(this.molecules[i]) {
			this.molecules[i].remove();
			this.molecules.splice(i, 1);
		}
	}

	start() {
		this.loop();
	}

	loop() {
		requestAnimationFrame(() => this.loop());

		this.camera.lookAt(this.scene.position);
		this.camera.updateMatrixWorld();

		for(let i = 0; i < this.molecules.length; i++) {
			this.molecules[i].update();
		}

		this.renderer.render(this.scene, this.camera);
	}
}

module.exports = Model;