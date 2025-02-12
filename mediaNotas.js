const notas = [7, 6, 7];

var soma = 0;
var media = 0;
var maior = 0;
var menor = Infinity;
var reprovado = false;


for (let i = 0; i < notas.length; i++) {
  console.log(`Nota ${i + 1}: ${notas[i]} `)
  soma += notas[i];
}

media = soma / notas.length;


if (media >= 7) {
  console.log("APROVADO - Média: " + media);
} else {
  console.log("REPROVADO - Média: " + media);
  reprovado = true;
}

for (let i = 0; i < notas.length; i++) {
  if (maior < notas[i]) {
    maior = notas[i];
  }

  if (menor > notas[i]) {
    menor = notas[i];
  }
}

console.log("Sua menor nota foi " + menor);
console.log("Sua maior nota foi " + maior);

if (reprovado == true) {
  var faltou = 7 - media;
  console.log(`Faltou ${faltou} ponto(os) para ser aprovado, tente novamente na proxima!`)
}