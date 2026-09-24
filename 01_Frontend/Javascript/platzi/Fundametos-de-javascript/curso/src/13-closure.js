// =============================================================================
// ¿QUÉ ES UN CLOSURE?
// Es una función que "recuerda" el scope (variables) donde fue creada,
// incluso después de que la función padre ha terminado de ejecutarse.
// =============================================================================

// -----------------------------------------------------------------------------
// EJEMPLO 1: El Contador Simple (Para entender el concepto básico)
// -----------------------------------------------------------------------------
function crearContador() {
  let contador = 0; // Variable recordada en el closure

  return function () {
    contador++;
    return `Contador: ${contador}`;
  };
}

const miContador = crearContador();
console.log(miContador()); // 👉 "Contador: 1"
console.log(miContador()); // 👉 "Contador: 2"
console.log(miContador()); // 👉 "Contador: 3"

console.log("-----------------------------------------");

// -----------------------------------------------------------------------------
// EJEMPLO 2: Cuenta Bancaria (Encapsulación y Variables Privadas)
// -----------------------------------------------------------------------------
function crearCuentaBancaria(saldoInicial) {
  // 'saldo' es una variable PRIVADA. No es accesible directamente desde afuera.
  let saldo = saldoInicial;

  // Retornamos un objeto con métodos que tienen acceso a 'saldo':
  return {
    depositar(cantidad) {
      saldo += cantidad;
      return `Depositado $${cantidad}. Saldo actual: $${saldo}`;
    },
    retirar(cantidad) {
      if (cantidad > saldo) {
        return "Fondos Insuficientes";
      }
      saldo -= cantidad;
      return `Retirado $${cantidad}. Saldo actual: $${saldo}`;
    },
    consultarSaldo() {
      return `Saldo: $${saldo}`;
    },
  };
}

// 1. Instanciamos la cuenta bancaria con $100,000 iniciales:
const miCuenta = crearCuentaBancaria(100000);

// 2. Comprobamos que 'saldo' es privado y está protegido:
console.log("Acceso directo a saldo:", miCuenta.saldo); // 👉 undefined

// 3. Interactuamos a través de los métodos autorizados:
console.log(miCuenta.consultarSaldo()); // 👉 "Saldo: $100000"
console.log(miCuenta.depositar(50000));  // 👉 "Depositado $50000. Saldo actual: $150000"
console.log(miCuenta.retirar(150));     // 👉 "Retirado $150. Saldo actual: $149850"
console.log(miCuenta.consultarSaldo()); // 👉 "Saldo: $149850"
console.log(miCuenta.retirar(200000));  // 👉 "Fondos Insuficientes"

