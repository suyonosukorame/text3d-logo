import * as THREE from "https://esm.sh/three@0.160.0";
import { FontLoader } from "https://esm.sh/three@0.160.0/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "https://esm.sh/three@0.160.0/examples/jsm/geometries/TextGeometry.js";

export function createText(scene) {
  const loader = new FontLoader();
  const material = new THREE.MeshStandardMaterial({
    color: 0xffd700,
    metalness: 1,
    roughness: 0.2,
    emissive: 0x332200,
  });

  loader.load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json", (font) => {
    // Baris 1
    const geo1 = new TextGeometry("TAZKIYATUN", {
      font, size: 2, height: 0.6,
      bevelEnabled: true, bevelThickness: 0.1,
      bevelSize: 0.05, bevelSegments: 5
    });
    geo1.center();
    const mesh1 = new THREE.Mesh(geo1, material);
    mesh1.position.y = 1.5;
    scene.add(mesh1);

    // Baris 2
    const geo2 = new TextGeometry("NUFUS", {
      font, size: 2, height: 0.6,
      bevelEnabled: true, bevelThickness: 0.1,
      bevelSize: 0.05, bevelSegments: 5
    });
    geo2.center();
    const mesh2 = new THREE.Mesh(geo2, material);
    mesh2.position.y = -1.5;
    scene.add(mesh2);
  });
}
