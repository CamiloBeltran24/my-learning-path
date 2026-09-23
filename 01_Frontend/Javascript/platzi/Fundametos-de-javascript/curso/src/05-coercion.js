// Es como javascript convierte sin preguntarnos como convierte algunos datos a otro tipo de datos
// y esto es un problema porque a veces no sabemos que esta pasando
// y puede generar errores en nuestro codigo

// Coercion Implicita
console.log("5" + 3);
// Cuando se encuentra el operador + y uno de los operandos es un string, javascript convierte el otro operando a string
console.log("5" - 3);
// Cuando se encuentra el operador - y uno de los operandos es un string, javascript convierte el otro operando a number ( operacion aritmetica de resta )
console.log(true + 1);
// Cuando se encuentra el operador + y uno de los operandos es un boolean, javascript convierte el otro operando a number ( Operacion aritmetica de suma )

// Conversion Explicita
const str = "42";
const num = Number(str);
console.log(typeof num, num);

const int = parseInt(str, 10);
console.log(typeof int, int);

const float = parseFloat("3.1415");
console.log(float);

const texto = String(123);
console.log(typeof texto, texto);

const bool = Boolean(1);
console.log(typeof bool, bool);
