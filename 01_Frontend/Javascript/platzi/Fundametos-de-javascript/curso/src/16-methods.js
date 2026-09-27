//Métodos de orden superior
//Map
const notas = [
  { id: 1, title: "Nota 1", content: "Contenido uno" },
  { id: 2, title: "Nota 2", content: "Contenido dos" },
  { id: 3, title: "Nota 3", content: "Contenido tres" },
];

const titulos = notas.map((nota) => nota.title);
console.log(titulos);

const notasConFecha = notas.map((nota) => ({
  ...nota,
  fechaCreacion: Date.now(),
}));

console.log(notasConFecha);

//Filter
const notas2 = [
  { id: 1, title: "Nota 1", content: "Contenido uno", esFavorita: true },
  { id: 2, title: "Nota 2", content: "Contenido dos", esFavorita: false },
  { id: 3, title: "Nota 3", content: "Contenido tres", esFavorita: true },
];

const favorites = notas2.filter((nota) => nota.esFavorita);
// console.log(favorites);

const title = notas2.filter((nota) =>
  nota.title.toLowerCase().includes("nota 1"),
);
console.log(title);

// Find
const notas3 = [
  { id: 1, title: "Nota 1", content: "Contenido uno", esFavorita: true },
  { id: 2, title: "Nota 2", content: "Contenido dos", esFavorita: false },
  { id: 3, title: "Nota 3", content: "Contenido tres", esFavorita: true },
];

const nota = notas3.find((nota) => nota.id === 2);
console.log(nota);

// reduce

const numeros = [1, 2, 3, 4, 5];
const sumatoria = numeros.reduce((acc, numero) => acc + numero, 0);
console.log(sumatoria);
