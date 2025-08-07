// Domain Name Generator - Homework
console.log("=== Domain Name Generator ===");

// Arrays con las palabras
let pronoun = ['the', 'our', 'my'];
let adj = ['great', 'big', 'best', 'cool'];
let noun = ['jogger', 'racoon', 'studio', 'net', 'app'];

// Extensiones de dominio
let extensions = ['.com', '.net', '.us', '.io', '.es'];

console.log("Generating all possible domain combinations...\n");

// Bucles anidados para generar todas las combinaciones
for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
            for (let l = 0; l < extensions.length; l++) {
                
                // Verificar si es un "domain hack"
                if (noun[k].endsWith(extensions[l].substring(1))) {
                    // Domain hack: quitar la extensión del final del sustantivo
                    let hackNoun = noun[k].slice(0, noun[k].length - extensions[l].length + 1);
                    let hackDomain = pronoun[i] + adj[j] + hackNoun + extensions[l];
                    console.log(hackDomain + " (domain hack)");
                } else {
                    // Dominio normal
                    let normalDomain = pronoun[i] + adj[j] + noun[k] + extensions[l];
                    console.log(normalDomain);
                }
            }
        }
    }
}

console.log("\n=== Generation Complete! ===");
console.log("Total combinations generated!");

// Mensaje adicional para cumplir con el requisito
console.log("This domain generator was created for homework assignment.");