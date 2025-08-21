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

// 🔹 Animación de cubos laterales (glitch)
function createCubes(wallId) {
  const wall = document.getElementById(wallId);
  for (let i = 0; i < 300; i++) {
    const cube = document.createElement("div");
    cube.classList.add("cube");
    wall.appendChild(cube);
  }
}

createCubes("leftWall");
createCubes("rightWall");

// Cambiar colores de cubos aleatoriamente (amarillo → gris)
setInterval(() => {
  document.querySelectorAll(".cube").forEach(cube => {
    const colors = ["#ffcc00", "#ffaa00", "#999", "#bbb", "#666"];
    cube.style.background = colors[Math.floor(Math.random() * colors.length)];
  });
}, 500);
