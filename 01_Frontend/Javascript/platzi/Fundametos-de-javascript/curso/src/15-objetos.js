const nota = {
  id: 1,
  title: "Mi primera nota",
  content: "Contenido de la nota",
  createAt: Date.now(),
  edad: 13,
  esAdmin: true,
  dates: [1, 1, 1, 1],
};

console.log(nota.id);
console.log(nota.title);

const campo = "content";

console.log(nota[campo]);

//undefined
console.log(nota.author.name);

//optional chaning
console.log(nota.author?.name);

//Destructuracion
const nota2 = {
  id: 1,
  title: "Mi Segunda nota",
  content: "Contenido de la nota",
  createAt: Date.now(),
  edad: 13,
  esAdmin: true,
  dates: [1, 1, 1, 1],
};

const title = nota2.title;

const { id, title: titulo, content } = nota2;
console.log(id, titulo, content);

//Spread Operator
const nota3 = { id: 2, title: "Hola" };
const copia = { ...nota3 };
const data = { admin: true, edad: 18 };

console.log(nota3);
console.log(copia);

copia.id = 3;

console.log(nota3);
console.log(copia);

const notaActualizada = {
  ...nota3,
  content: "contenido de la nota",
  ...data,
};
console.log(notaActualizada);

//Object
//Retorna un arreglo
console.log(Object.keys(notaActualizada));

//Values
console.log(Object.values(notaActualizada));

//entries
console.log(Object.entries(notaActualizada));
