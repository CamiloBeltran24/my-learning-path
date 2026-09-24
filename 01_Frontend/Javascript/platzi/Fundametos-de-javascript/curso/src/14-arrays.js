//Arrays

const notas = ["Nota 1", "Nota 2", "Nota 3"];
const numeros = [1, 2, 3, 4, 5, 6];
const mixtos = [1, "texto", true, null, { id: 1 }];

notas.push("Nota 4");
console.log(notas);

notas.unshift("Nota 0");
console.log(notas);

//splice
notas.splice(1, 0, "Notas 1.2");
console.log(notas);

//Leer (Read)
console.log(notas[1]);
console.log(notas[2]);
console.log(notas[0]);

console.log(`La cantidad de elementos contenidos son: ${notas.length}`);

//Actualizar (update)
const notas2 = ["nota 1", "nota 2"];
notas2[1] = "nota 3";

console.log(notas2);

notas2.splice(1, 0, "Nota 4");
console.log(notas2);

//Eliminar
const notas3 = ["nota 1", "nota 2"];
console.log(notas3.pop());
console.log(notas3);

const notas4 = ["nota 1", "nota 2"];
// console.log(notas4.shift());
console.log(notas4);
console.log(notas4.splice(1, 1));
console.log(notas4);
