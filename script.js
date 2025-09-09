// Setup scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Lighting
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 10, 7.5);
scene.add(light);
scene.add(new THREE.AmbientLight(0x404040));

// Load font
const loader = new THREE.FontLoader();
loader.load('https://threejs.org/examples/fonts/helvetiker_bold.typeface.json', function (font) {
    const geometry = new THREE.TextGeometry('TAZKIYATUN NUFUS', {
        font: font,
        size: 2,
        height: 0.6,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.1,
        bevelSize: 0.05,
        bevelSegments: 5
    });

    // Gold material with orange outline glow
    const material = new THREE.MeshPhongMaterial({
        color: 0xffd700,   // gold
        specular: 0xffa500, // orange highlight
        shininess: 100
    });

    const mesh = new THREE.Mesh(geometry, material);
    geometry.center();
    scene.add(mesh);

    camera.position.z = 10;

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        mesh.rotation.y += 0.01; // spin effect
        renderer.render(scene, camera);
    }
    animate();
});

window.addEventListener('keydown', (e) => {
  if (e.key === 's') { // tekan "s" untuk save
    const dataURL = renderer.domElement.toDataURL("image/png");
    const a = document.createElement('a');
    a.href = dataURL;
    a.download = "logo.png";
    a.click();
  }
});

