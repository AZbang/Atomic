const THREE = require('three');
const OrbitControls = require('./OrbitControls');
const constants = require('./constants');

var container, stats;
var camera, scene, raycaster, renderer;
var mouse = new THREE.Vector2(), INTERSECTED;
var radius = 500, theta = 0;
var frustumSize = 1000;

// Create your main scene
var scene = new THREE.Scene();

// Create your main camera
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var lights = [];
lights[ 0 ] = new THREE.PointLight( 0xffffff, 1, 0 );
lights[ 1 ] = new THREE.PointLight( 0xffffff, 1, 0 );
lights[ 2 ] = new THREE.PointLight( 0xffffff, 1, 0 );

lights[ 0 ].position.set( 0, 200, 0 );
lights[ 1 ].position.set( 100, 200, 100 );
lights[ 2 ].position.set( - 100, - 200, - 100 );

scene.add( lights[ 0 ] );
scene.add( lights[ 1 ] );
scene.add( lights[ 2 ] );

// Create your renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var orbit = new THREE.OrbitControls( camera, renderer.domElement );

// Create a cube
var data = {
	radius : 30,
	widthSegments : 10,
	heightSegments : 7,
	phiStart : 0,
	phiLength : Math.PI * 2,
	thetaStart : 0,
	thetaLength : Math.PI
};

var geometry = new THREE.SphereGeometry(data.radius, data.widthSegments, data.heightSegments, data.phiStart, data.phiLength, data.thetaStart, data.thetaLength);

var mesh = new THREE.Object3D();
mesh.add(new THREE.Mesh(
	geometry,
	new THREE.MeshPhongMaterial( {
		color: 0xFF4848,
		emissive: 0xDE2A2A,
		side: THREE.DoubleSide,
		shading: THREE.FlatShading
	})
));
scene.add(mesh);

// Set up the main camera
camera.position.z = 500;

// Load the background texture
var texture = THREE.ImageUtils.loadTexture('img/bg1.png');
var backgroundMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(2, 2, 0),
    new THREE.MeshBasicMaterial({
        map: texture
    }));

backgroundMesh.material.depthTest = false;
backgroundMesh.material.depthWrite = false;

// Create your background scene
var backgroundScene = new THREE.Scene();
var backgroundCamera = new THREE.Camera();
backgroundScene.add(backgroundCamera );
backgroundScene.add(backgroundMesh );


// Rendering function
var render = () => {
    requestAnimationFrame(render);

	mesh.rotation.x += 0.001;
	mesh.rotation.y += 0.001;
	camera.lookAt( scene.position );
	camera.updateMatrixWorld();

    renderer.autoClear = false;
    renderer.clear();
    renderer.render(backgroundScene , backgroundCamera );
    renderer.render(scene, camera);
};
render();


// Bind Events
var onWindowResize = () => {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
}
window.addEventListener('resize', onWindowResize, false);
