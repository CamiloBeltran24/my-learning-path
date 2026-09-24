//Funciones

function saludar(nombre) {
  return `Hola ${nombre}`;
}

let mensaje = saludar("Christian Camilo");
let mensaje2 = saludar("Johana");

console.log(mensaje, mensaje2);

// Parametros y Argumentos
//Parametros: varaibles que recibe la funcion
function crearUsuario(nombre, edad) {
  return { nombre, edad };
}

//Argumentos: valores que pasamos al momento de llamar la funcion
const usuario = crearUsuario("Christian", 32);

//Arrow Functions

const multiplicar = (numero1, numero2) => {
  return numero1 * numero2;
};

let resultado = multiplicar(10, 5);

console.log(resultado);

const crearNota = (contenido, titulo = "Sin Titulo") => {
  return {
    titulo,
    contenido,
    creado: Date.now(),
  };
};

let nota = crearNota("Mi nota", "Matematicas");

console.log(nota);
