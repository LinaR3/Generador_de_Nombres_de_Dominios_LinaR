


let pronoun = ['El', 'Mi', 'Nuestro', 'La', 'Su'];
let adj = ['gran', 'hermoso', 'auténtico', 'inteligente', 'astuto'];
let noun = ['perro', 'mapache', 'chigüiro', 'gato', 'pez', 'abuela', 'padre'];
let verbo = ['arruinó', 'se comió', 'saboteó', 'canceló', 'dañó', 'secuestró', 'mordio'];
let objeto = ['mi tarea', 'el informe', 'mi almuerzo', 'mi proyecto', 'la reunión', 'mi computador']; // 🔹 nuevo

const excuseElement = document.getElementById("excuse");
const btn = document.getElementById("generateBtn");

// 🔹 Generar excusa
function generateExcuse() {
  const p = pronoun[Math.floor(Math.random() * pronoun.length)];
  const a = adj[Math.floor(Math.random() * adj.length)];
  const n = noun[Math.floor(Math.random() * noun.length)];
  const e = verbo[Math.floor(Math.random() * verbo.length)];
  const o = objeto[Math.floor(Math.random() * objeto.length)];

  excuseElement.textContent = `Lo siento, ${p} ${a} ${n} ${e} ${o}.`;
}

// Evento del botón
btn.addEventListener("click", generateExcuse);

// 🔹 (glitch)
function createCubes(wallId) {
  const wall = document.getElementById(wallId);
  for (let i = 0; i < 200; i++) {
    const cube = document.createElement("div");
    cube.classList.add("cube");
    wall.appendChild(cube);
  }
}

createCubes("leftWall");
createCubes("rightWall");


setInterval(() => {
  document.querySelectorAll(".cube").forEach(cube => {
    const colors = ["#ffcc00", "#ffaa00", "#999", "#bbb", "#666"];
    cube.style.background = colors[Math.floor(Math.random() * colors.length)];
  });
}, 500);
