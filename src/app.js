console.log("Empezare a trabajar");

// Arrays base
let pronoun = ['the', 'our', 'my'];
let adj = ['great', 'big', 'best', 'cool'];
let noun = ['jogger', 'racoon', 'studio', 'net', 'app'];
let extensions = ['.com', '.net', '.us', '.io', '.es'];

// Elementos del DOM
const excuseElement = document.getElementById("excuse");
const btn = document.getElementById("generateBtn");

// Función que genera un dominio aleatorio
function generateDomain() {
  let i = Math.floor(Math.random() * pronoun.length);
  let j = Math.floor(Math.random() * adj.length);
  let k = Math.floor(Math.random() * noun.length);
  let l = Math.floor(Math.random() * extensions.length);

  if (noun[k].endsWith(extensions[l].substring(1))) {
    let hackNoun = noun[k].slice(0, noun[k].length - extensions[l].length + 1);
    return pronoun[i] + adj[j] + hackNoun + extensions[l] + " (domain hack)";
  } else {
    return pronoun[i] + adj[j] + noun[k] + extensions[l];
  }
}

// Evento click para generar un nuevo dominio
btn.addEventListener("click", () => {
  excuseElement.textContent = generateDomain();
});

console.log("Ya generé unos dominios :)"); 


// 🎨 Fondo tipo Glitch con cubos (amarillo -> gris)
const canvas = document.getElementById("glitchCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const cubeSize = 20;
const cols = Math.floor(canvas.width / cubeSize);
const rows = Math.floor(canvas.height / cubeSize);

// Genera un color random entre amarillo y gris
function getRandomColor() {
  const shades = [
    "#ffcc00", "#ffaa00", "#888888", "#bbbbbb", "#666666", "#444444"
  ];
  return shades[Math.floor(Math.random() * shades.length)];
}

// Dibuja los cubos
function drawCubes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      if (Math.random() > 0.7) {
        ctx.fillStyle = getRandomColor();
        ctx.fillRect(x * cubeSize, y * cubeSize, cubeSize, cubeSize);
      }
    }
  }
}

// Loop de animación glitch
function animate() {
  drawCubes();
  requestAnimationFrame(animate);
}

animate();
