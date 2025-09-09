import * as THREE from "https://esm.sh/three@0.160.0";

export function addLights(scene) {
  const ambient = new THREE.AmbientLight(0x555555);
  scene.add(ambient);

  const dirLight = new THREE.DirectionalLight(0xffffff, 1);
  dirLight.position.set(5, 10, 7.5);
  scene.add(dirLight);

  const pointLight = new THREE.PointLight(0xffd580, 2, 50);
  pointLight.position.set(0, 5, 10);
  scene.add(pointLight);
}
