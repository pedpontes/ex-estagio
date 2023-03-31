var vetor = process.argv.slice(2).join(" ") || "aqui dentro deve ter alguma string";
vetor = vetor.split("");

var aux = [];

for (let i = vetor.length - 1; i >= 0; i--) aux.push(vetor[i]);
aux = aux.join("");

console.log(`A string ${vetor.join("")} reverso é igual a ${aux}.`);