import * as THREE from "https://esm.sh/three@0.160.0";
import { FontLoader } from "https://esm.sh/three@0.160.0/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "https://esm.sh/three@0.160.0/examples/jsm/geometries/TextGeometry.js";

export function createText() {
  const loader = new FontLoader();
  const material = new THREE.MeshStandardMaterial({
    color: 0xffd700,
    metalness: 1,
    roughness: 0.2,
    emissive: 0x332200,
  });

  // Buat sebuah grup untuk menyatukan kedua baris teks
  const textGroup = new THREE.Group();

  // Helper function untuk membuat sebuah kata dari mesh huruf individual
  const createWord = (text, textOptions, material) => {
    const wordGroup = new THREE.Group();
    let totalWidth = 0;

    // Buat setiap mesh huruf dan hitung total lebarnya
    const characters = text.split('').map(char => {
      const geo = new TextGeometry(char, textOptions);
      geo.computeBoundingBox();
      const width = geo.boundingBox.max.x - geo.boundingBox.min.x;
      const mesh = new THREE.Mesh(geo, material);
      totalWidth += width;
      return { mesh, width };
    });

    // Posisikan setiap huruf
    let currentX = -totalWidth / 2;
    for (const char of characters) {
      // Posisikan mesh agar tepi kirinya berada di currentX
      char.mesh.position.x = currentX;
      wordGroup.add(char.mesh);
      currentX += char.width;
    }
    return wordGroup;
  };

  loader.load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json", (font) => {
    const textOptions = {
      font,
      size: 2,
      height: 0.6,
      bevelEnabled: true,
      bevelThickness: 0.1,
      bevelSize: 0.05,
      bevelSegments: 5,
    };

    const word1 = createWord("TAZKIYATUN", textOptions, material);
    word1.position.y = 1.2;
    textGroup.add(word1);

    const word2 = createWord("NUFUS", textOptions, material);
    word2.position.y = -1.2;
    textGroup.add(word2);
  });

  // Posisikan grup sedikit ke atas agar lebih pas di tengah layout
  textGroup.position.y = 0.5;
  return textGroup;
}
