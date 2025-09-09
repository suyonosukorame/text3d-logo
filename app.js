import * as THREE from "https://esm.sh/three@0.160.0";
import { addLights } from "./lights.js";
import { createText } from "./text3d.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, preserveDrawingBuffer: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

addLights(scene);
const textGroup = createText();
scene.add(textGroup);

camera.position.z = 12;

// Clock untuk timing animasi
const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);

  const elapsedTime = clock.getElapsedTime();

  // Contoh animasi: membuat setiap huruf bergelombang
  if (textGroup.children.length > 0) {
    textGroup.children.forEach(wordGroup => {
      wordGroup.children.forEach((letter, index) => {
        letter.position.y = Math.sin(elapsedTime * 3 + index * 0.5) * 0.2;
      });
    });
  }

  renderer.render(scene, camera);
}
animate();

// Save PNG
function saveAsPNG() {
  const dataURL = renderer.domElement.toDataURL("image/png");
  const a = document.createElement("a");
  a.href = dataURL;
  a.download = "logo.png";
  a.click();
  showNotif();
}

document.getElementById("saveBtn").addEventListener("click", saveAsPNG);
document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "s") {
    e.preventDefault();
    saveAsPNG();
  }
});

function showNotif() {
  const notif = document.getElementById("notif");
  notif.style.opacity = "1";
  setTimeout(() => { notif.style.opacity = "0"; }, 2000);
}

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
