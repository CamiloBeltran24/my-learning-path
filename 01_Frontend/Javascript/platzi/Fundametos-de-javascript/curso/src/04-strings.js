const nombre = "Javascript";
const version = "ES6";

// console.log(nombre, version);

const message = "Bienvenido a " + nombre + " version: " + version;
// console.log(message);

const message2 = `Bienvenida y Bienvenido a el curso de ${nombre} en su version ${version}`;

// Expresiones

const precio = 100;
const cantidad = 3;
const total = `Total: ${precio * cantidad}`;

console.log(total);

// Multilinea

const nota = `
# Mi nota
Este es el contenido

- Nota1
- Nota 2
- Nota 3
`;

console.log(nota);

// Metodos principales en Strings

//Length

const texto = "Hola Mundo";
console.log(texto.length);

// Slice(inicio, fin)

const texto1 = "Javascript es Genial";
console.log(texto1.slice(0, 10));
console.log(texto1.slice(11));
console.log(texto1.slice(-6));

// Substrings
const texto2 = "Hola Mundo";
console.log(texto2.substring(0, 4));

//Split
const texto3 = "Linea1 linea2 linea3";
const lineas = texto3.split(" ");
console.log(lineas);

//trim() trimStart() trimEnd()

const texto4 = "    Hola Mundo.    ";
console.log(texto4.trim());
console.log(texto4.trimStart());
console.log(texto4.trimEnd());

// toLowerCase() - toUpperCase()

const texto5 = "Javascript";
console.log(texto5.toLowerCase());

//includes()

const contenido = "Aprende JAvaScript desde cero";
console.log(contenido.includes("Javascirpt"));
console.log(contenido.includes("Python"));

//startsWith() - endsWith()
const archivo = "documento.md";
console.log(archivo.startsWith("doc"));
console.log(archivo.endsWith(".md"));

// replace() y replaceAll() - inmutables
const texto6 = "Hola Mundo, Hola javascript";
console.log(texto6.replace("Hola", "Hi"));
console.log(texto6.replaceAll("Hola", "Hi"));
console.log(texto6);
