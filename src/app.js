console.log("Empezare a trabajar");

// Arrays base
let pronoun = ['El', 'Mi', 'Nuestro','La', 'Su'];
let adj = ['gran', 'hermos@', 'autentico', 'inteligente'];
let noun = ['perro', 'mapache', 'chigüiro', 'gato', 'pez', 'abuel@', 'padre'];
let verbo = ['arruino', 'se comio', 'saboteo', 'cancelo', 'daño', 'secuestro', 'me convencio'];



const excuseElement = document.getElementById("excuse");
const btn = document.getElementById("generateBtn");

// 🔹 Generar excusa
function generateExcuse() {
  const p = pronoun[Math.floor(Math.random() * pronoun.length)];
  const a = adj[Math.floor(Math.random() * adj.length)];
  const n = noun[Math.floor(Math.random() * noun.length)];
  const e = verbo[Math.floor(Math.random() * verbo.length)];

  excuseElement.textContent = `Lo siento, ${p} ${a} ${n} ${e} (...).`;
}

// Evento del botón
btn.addEventListener("click", generateExcuse);

// (glitch)
function createCubes(wallId) {
  const wall = document.getElementById(wallId);
  for (let i = 0; i < 200; i++) { // 
    const cube = document.createElement("div");
    cube.classList.add("cube");
    wall.appendChild(cube);
  }
}

createCubes("leftWall");
createCubes("rightWall");

// Cambiar colores de cubos aleatoriamente (amarillo & gris)
setInterval(() => {
  document.querySelectorAll(".cube").forEach(cube => {
    const colors = ["#ffcc00", "#ffaa00", "#999", "#bbb", "#666"];
    cube.style.background = colors[Math.floor(Math.random() * colors.length)];
  });
}, 500);
