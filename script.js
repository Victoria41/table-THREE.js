let camera, scene, renderer;
init();

function init(){

    camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight,1, 100);

    scene = new THREE.Scene();

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    var light = new THREE.AmbientLight( 0x404040 );
    scene.add(light);

    
    var loader = new GLTFLoader();
    loader.load( 'models/scene.gltf', function ( gltf ) {

            scene.add( gltf.scene );
            renderer.render(scene, camera)

        }, undefined, function ( error ) {

            console.error( error );

        } );
}


