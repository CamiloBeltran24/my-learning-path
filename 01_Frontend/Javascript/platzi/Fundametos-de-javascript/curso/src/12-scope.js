//Scope
const global = "Soy global";

function ejemplo() {
  const alcanceFuncion = "soy de funcion";

  if (true) {
    const bloque = "Soy de Bloque";
    console.log(bloque);
    console.log(`Bloque - Funcion = ${alcanceFuncion}`);
    console.log(`Bloque - Bloque = ${bloque}`);
    console.log(`Bloque - Bloque = ${global}`);
  }
  console.log(alcanceFuncion);
  console.log(`Funcion - Funcion = ${alcanceFuncion}`);
  // console.log(`Funcion - Bloque = ${bloque}`);
  console.log(`Funcion - Bloque = ${global}`);
}
ejemplo();
console.log(global);
// console.log(`Global - Funcion = ${alcanceFuncion}`);
// console.log(`Global - Bloque = ${bloque}`);
console.log(`Global - Bloque = ${global}`);
