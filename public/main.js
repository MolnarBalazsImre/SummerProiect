let scene, camera, renderer, light, directionalLight,point;
let speed = 0.1;
let x ,y;    //get mouse position
document.addEventListener('mousemove',(e)=>{
    x = e.pageX;
    y = e.pageY;
})
const midX = innerWidth/2;
const midY = innerHeight/2;
function init()
{
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

const geometry3 = new THREE.SphereGeometry(3,32,32);
const geometry2 = new THREE.SphereGeometry(2,32,32);
const geometry1 = new THREE.SphereGeometry(1,32,32);
const material = new THREE.PointsMaterial({ size: 0.005 });
//60f6e36dfca68a1f687017ff
sphere1 = new THREE.Points( geometry3, material );
sphere2 = new THREE.Points(geometry2,material);
sphere3 = new THREE.Points(geometry1,material);


light = new THREE.AmbientLight( 0x404040,1 );
directionalLight = new THREE.DirectionalLight(0xffffff,0.5);
scene.add(directionalLight);
scene.add( light );
scene.add( sphere1 );
scene.add( sphere2 );
scene.add( sphere3 );


camera.position.z = 5;

}
function onWindowResize()
{
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}


function animate() {
	requestAnimationFrame( animate );
    if(y>midY)
    sphere1.rotation.x += 0.01;
    else
    sphere1.rotation.x -= 0.01;
    if(x>midX)
    sphere1.rotation.y += 0.01;
    else
    sphere1.rotation.y -= 0.01;
    
    sphere2.rotation.x -= 0.01;
    sphere2.rotation.y += 0.01;
    sphere3.rotation.x += 0.01;
    sphere3.rotation.y -= 0.01;


	renderer.render( scene, camera );
}
init();
animate();