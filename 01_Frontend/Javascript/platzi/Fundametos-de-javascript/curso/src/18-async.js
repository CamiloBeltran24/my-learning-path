console.log('1. Inicio');

setTimeout(() => {
  console.log('2. Timeout Ejecutado')
}, 1000);

console.log('3. Fin');

// CALLBACKS
// funcion que se pasa como argumento a otra funcion y se ejecuta cuando se completa cierta operacion

function obtenerDatos(callback) {
  setTimeout(() => {
    callback('datos obtenidos')
  }, 2000)
}

obtenerDatos((resultado) => {
  console.log(resultado);
})

//Callback hell

function obtenerUsuario(cb) {
  setTimeout(() => cb({ id: 1, nombre: 'Ada' }), 300);
}

function obtenerNotas(userId, cb) {
  setTimeout(() => cb(['nota 1', 'nota 2']), 300);
}

function procesarNotas(notas, cb) {
  setTimeout(() => cb(notas.map((n) => n.toUpperCase())), 300);
}

obtenerUsuario((usuario) => {
  obtenerNotas(usuario.id, (notas) => {
    procesarNotas(notas, (resultado) => {
      console.log('Usuario:', usuario.nombre);
      console.log('Resultado:', resultado);
    });
  });
});

// PROMISE
// Es un valor que puede estar disponible ahora, en el futuro o nunca
// tendra diferentes estados ( pendiente, cumplida o rechazada)

const promesa = new Promise((resolve, reject) => {
  const exito = true;

  setTimeout(() => {
    if(exito) {
      resolve('Operacion Exitosa');
    } else {
      reject(new Error('Algo malio sal'))
    }
  },1000);

})

promesa.then((mensaje) => {
  console.log(mensaje);
}).catch((error)=> console.log(error.message));

// PROMISE


function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function obtenerUsuario() {
  return esperar(200).then(() => ({ id: 1, nombre: 'Ada' }));
}

function obtenerNotas(userId) {
  return esperar(200).then(() => ['nota 1', 'nota 2']);
}

function procesarNotas(notas) {
  return esperar(200).then(() => notas.map((n) => n.toUpperCase()));
}

obtenerUsuario()
  .then((usuario) => obtenerNotas(usuario.id))
  .then((notas) => procesarNotas(notas))
  .then((resultado) => console.log('Resultado:', resultado))
  .catch((error) => console.error('Error en algún paso:', error.message));


  // ASYNC y AWAIT