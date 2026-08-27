# 📘 Guía de Estudio: Fundamentos de JavaScript

Esta guía contiene los apuntes de estudio, explicaciones detalladas y conceptos clave aprendidos durante el curso de **Fundamentos de JavaScript** (Platzi). El objetivo es documentar las bases esenciales del lenguaje de forma **sencilla, gráfica y accesible**, explicando el porqué detrás de cada comportamiento técnico (como el *hoisting*, los tipos de datos, los operadores o el manejo de memoria).

---

## 📂 Índice de Clases

- [Clase 01: Variables (`var`, `let`, `const`) y Hoisting](#clase-01-variables-var-let-const-y-hoisting)
- [Clase 02: Tipos de Datos (Primitivos vs. Complejos) y `typeof`](#clase-02-tipos-de-datos-primitivos-vs-complejos-y-typeof)
- [Clase 03: Operadores Aritméticos, Asignación Compuesta y Valores Especiales (`NaN` / `Infinity`)](#clase-03-operadores-aritméticos-asignación-compuesta-y-valores-especiales-nan--infinity)

---

## Clase 01: Variables (`var`, `let`, `const`) y Hoisting
👉 [Ver código de la clase](./curso/src/01-vars.js)

En JavaScript, una variable es un contenedor en memoria donde almacenamos información para utilizarla y manipularla a lo largo del programa. La evolución de JavaScript (especialmente con ES6) introdujo formas más seguras y predecibles de gestionar datos en memoria.

---

### 📦 La Analogía de las Cajas de Almacenamiento

Imagina que declarar variables es como etiquetar cajas para organizar tu habitación:

* **`var` (La caja sin tapa de los años 90)**: Es una caja abierta que cualquiera en la casa puede ver, modificar o incluso cambiarle el nombre por error. Además, JavaScript la mueve "mágicamente" al techo de la habitación antes de que despiertes (*Hoisting*). **¡Mala práctica hoy en día!**
* **`let` (La caja con tapa de velcro)**: Está guardada dentro de una habitación específica (bloque `{}`). Puedes abrirla en cualquier momento, sacar su contenido y poner uno nuevo (reasignar). Pero **no puedes** comprar otra caja con el mismo nombre en la misma habitación (evita redeclaraciones accidentales).
* **`const` (La caja fuerte sellada)**: Una vez que guardas un valor y la cierras, queda blindada. No puedes reasignarle un valor completamente nuevo. Es la opción más segura y predecible.

---

### 🔑 Conceptos Clave

1. **Declaración vs. Reasignación**:
   - **Declarar**: Reservar el nombre de la variable en memoria (`let total;`).
   - **Inicializar / Asignar**: Darle un valor inicial (`total = 100;`).
   - **Reasignar**: Cambiar el valor existente por uno nuevo (`total = 150;`).
   - **Redeclarar**: Intentar volver a crear una variable con el mismo nombre (`var x = 1; var x = 2;`). `var` lo permite silenciosamente (generando bugs), mientras que `let` y `const` lanzan un error de sintaxis inmediato.

2. **Tabla Comparativa de Comportamiento**:

| Característica | `var` | `let` | `const` |
| :--- | :--- | :--- | :--- |
| **Ámbito (*Scope*)** | Función o Global | Bloque `{}` | Bloque `{}` |
| **¿Permite Reasignar?** | ✅ Sí | ✅ Sí | ❌ No |
| **¿Permite Redeclarar?** | ✅ Sí (Peligroso) | ❌ No | ❌ No |
| **Hoisting** | ✅ Sí (Inicializa en `undefined`) | ⚠️ Sí (Temporal Dead Zone) | ⚠️ Sí (Temporal Dead Zone) |
| **Uso Recomendado** | ⛔ Evitar siempre | 🟡 Solo si cambiará su valor | 🟢 **Uso por defecto** |

3. **¿Qué es el Hoisting (Elevación)?**:
   - Es el comportamiento interno de JavaScript durante la fase de compilación/creación, donde las **declaraciones** de variables y funciones son procesadas en memoria antes de ejecutar cualquier línea de código.
   - Con `var`: La variable es "elevada" y se le asigna automáticamente el valor inicial `undefined`. Si intentas acceder a ella antes de su línea de asignación, no dará error, sino que devolverá `undefined`.
   - Con `let` y `const`: También son elevadas conceptualmente, pero **no son inicializadas**. Entran en un estado llamado **Zona Muerta Temporal (Temporal Dead Zone - TDZ)**. Si intentas utilizarlas antes de declararlas, el motor arrojará un `ReferenceError`.

---

### 💻 Código de la Clase Ilustrado

```javascript
// ==========================================
// 1. Comportamiento de 'var' (Problema de redeclaración)
// ==========================================
var bloquesRojos = true;
var bloquesRojos = 5; // ⚠️ Permitido con var: sobreescribe sin avisar

// ==========================================
// 2. Comportamiento de 'let' (Reasignable, no redeclarable)
// ==========================================
let contador = 0;
// let contador = 5; // ❌ Error: Identifier 'contador' has already been declared
contador = 5;        // ✅ Válido: Reasignación de valor
let mensaje = "Hola";

// ==========================================
// 3. Comportamiento de 'const' (Constante)
// ==========================================
const PI = 3.1416;
// PI = 3.15; // ❌ TypeError: Assignment to constant variable.

// ==========================================
// 4. Hoisting (Elevación)
// ==========================================
console.log(nombre); // 👉 Imprime: undefined (No rompe el programa)
var nombre = "Christian";

/* 
🧠 ¿Qué hizo JavaScript internamente tras bambalinas?
------------------------------------------------------
var nombre;             // 1. Eleva la declaración y le asigna undefined
console.log(nombre);    // 2. Imprime undefined
nombre = "Christian";   // 3. Asigna el valor real en la línea original
*/
```

---

> [!TIP]
> **Regla de Oro en JavaScript Moderno:**
> Declara siempre todas tus variables con **`const`** por defecto. Si en algún momento descubres que el valor debe cambiar (por ejemplo, el acumulador de un bucle o un contador), cámbialo a **`let`**. **Nunca utilices `var`**.

---

## Clase 02: Tipos de Datos (Primitivos vs. Complejos) y `typeof`
👉 [Ver código de la clase](./curso/src/02-types.js)

En JavaScript, los datos que manipulamos se dividen en dos grandes categorías: **Tipos Primitivos** y **Tipos Complejos (o de Referencia)**. Conocer sus diferencias es vital para entender cómo se guardan en memoria y cómo se comportan al pasarlos como argumentos.

---

### 🪙 La Analogía de la Fotocopia vs. La Llave de Casa

* **Tipos Primitivos (Paso por Valor / La Fotocopia)**: Imagina que tienes una hoja con un poema y le sacas una fotocopia para dársela a un amigo. Si tu amigo mancha con café su fotocopia, tu hoja original sigue intacta. Cada variable guarda **su propio valor independiente** directamente en memoria (*Stack*).
* **Tipos Complejos (Paso por Referencia / La Llave Compartida)**: Imagina que le das una copia de la llave de tu casa a un amigo. Si tu amigo entra y pinta las paredes de verde, tú también verás las paredes verdes al entrar. La variable no guarda la casa entera, guarda únicamente la **dirección de memoria** (*Heap*) donde vive el objeto.

---

### 🔑 1. Los 7 Tipos de Datos Primitivos

Son valores simples, inmutables y de tamaño fijo:

| Tipo | Descripción | Ejemplo | Resultado de `typeof` |
| :--- | :--- | :--- | :--- |
| **`string`** | Texto o cadenas de caracteres envueltas en comillas (`""`, `''`, `` ` ``). | `"Hola"` | `"string"` |
| **`number`** | Números enteros o decimales (punto flotante de 64 bits). | `42`, `3.14` | `"number"` |
| **`boolean`** | Valores lógicos de verdadero o falso. | `true`, `false` | `"boolean"` |
| **`null`** | Representa intencionalmente la ausencia de valor o valor vacío. | `null` | `"object"` *(Bug histórico)* |
| **`undefined`** | Variable declarada a la que aún no se le ha asignado un valor. | `undefined` | `"undefined"` |
| **`symbol`** | Identificador único e inmutable (introducido en ES6). | `Symbol("id")` | `"symbol"` |
| **`bigint`** | Enteros de precisión arbitraria para números mayores a $2^{53} - 1$ (sufijo `n`). | `123n` | `"bigint"` |

> [!WARNING]
> **El Bug Histórico de `typeof null`:**
> Al ejecutar `typeof null`, JavaScript devuelve `"object"`. Esto es un error de diseño que existe desde la primera versión de JS en 1995. No se ha corregido para no romper la compatibilidad con millones de sitios web antiguos. `null` es un **primitivo**, no un objeto.

---

### 🧩 2. Tipos Complejos (Estructuras de Referencia)

Son colecciones de valores o unidades de código ejecutable que pueden crecer de forma dinámica:

1. **Objetos Literales (`Object`)**: Colecciones de pares clave-valor `{ clave: valor }`.
2. **Arreglos (`Array`)**: Listas ordenadas indexadas numéricamente `[ elemento1, elemento2 ]`. En JavaScript, los arreglos son técnicamente un tipo especial de objeto (`typeof [] === "object"`).
3. **Funciones (`Function`)**: Bloques de código reutilizables y ejecutables. El operador `typeof` devuelve `"function"`.

---

### 💻 Código de la Clase Ilustrado

```javascript
// ==========================================
// 1. Tipos de Datos Primitivos
// ==========================================
const texto = "Hola";              // string
const numero = 42;                 // number
const boolean = true;              // boolean (true o false)
const nulo = null;                 // null (ausencia intencional de valor)
const indefinido = undefined;      // undefined (valor por defecto no asignado)
const simbolo = Symbol("id");      // symbol (identificador único garantizado)
const grande = 123n;               // bigint (número entero gigante con sufijo 'n')

// Inspección con el operador typeof:
console.log(typeof texto);       // "string"
console.log(typeof numero);      // "number"
console.log(typeof boolean);     // "boolean"
console.log(typeof nulo);        // "object" ⚠️ (Bug histórico de JS)
console.log(typeof indefinido);  // "undefined"
console.log(typeof simbolo);     // "symbol"
console.log(typeof grande);      // "bigint"

// ==========================================
// 2. Tipos de Datos Complejos (Por Referencia)
// ==========================================
const objeto = { nombre: "Juan", edad: 30 }; // Objeto literal
const arreglo = [1, 2, 3, "string"];         // Array (colección indexada)
const funcion = function () {};              // Función

console.log(typeof objeto);      // "object"
console.log(typeof arreglo);     // "object" (Usa Array.isArray(arreglo) para comprobar si es un array)
console.log(typeof funcion);     // "function"
```

---

> [!NOTE]
> **¿Cómo comprobar si un dato es realmente un Arreglo?**
> Dado que `typeof []` devuelve `"object"`, la forma correcta y estándar de verificar si una variable es un array es utilizando el método nativo:
> ```javascript
> Array.isArray(arreglo); // Devuelve true
> ```

---

## Clase 03: Operadores Aritméticos, Asignación Compuesta y Valores Especiales (`NaN` / `Infinity`)
👉 [Ver código de la clase](./curso/src/03-operators.js)

Los operadores son símbolos que le indican al motor de JavaScript que realice operaciones matemáticas, manipulaciones de valores o asignaciones sobre una o más variables (operandos).

---

### 🧮 1. Operadores Aritméticos Básicos

Permiten realizar cálculos matemáticos directos:

| Operador | Operación | Ejemplo | Resultado |
| :--- | :--- | :--- | :--- |
| **`+`** | Suma | `2 + 2` | `4` |
| **`-`** | Resta | `5 - 2` | `3` |
| **`*`** | Multiplicación | `5 * 3` | `15` |
| **`/`** | División | `10 / 2` | `5` |
| **`%`** | Módulo (Residuo de la división) | `5 % 2` | `1` |
| **`**`** | Exponenciación / Potencia | `2 ** 3` | `8` ($2^3$) |

> [!TIP]
> **El caso de uso estrella del operador Módulo (`%`):**
> Se utiliza frecuentemente para determinar si un número es **par** o **impar**:
> ```javascript
> const esPar = numero % 2 === 0; // Si el residuo es 0, es par
> ```

---

### 📝 2. Operadores de Asignación Compuesta

Son atajos sintácticos para tomar el valor actual de una variable, aplicarle una operación matemática y reasignar el resultado en la misma variable:

* **`a += 3`** $\rightarrow$ Equivale a: `a = a + 3`
* **`b -= 10`** $\rightarrow$ Equivale a: `b = b - 10`
* **`c *= 2`** $\rightarrow$ Equivale a: `c = c * 2`
* **`d /= 3`** $\rightarrow$ Equivale a: `d = d / 3`

---

### 🔄 3. Operadores de Incremento y Decremento

Permiten sumar o restar exactamente `1` a una variable:

* **Incremento (`++`)**: `contador++` (aumenta el valor en 1).
* **Decremento (`--`)**: `contador--` (disminuye el valor en 1).

> [!NOTE]
> **Post-incremento vs. Pre-incremento:**
> * `x++` (Post): Primero devuelve el valor actual y luego lo incrementa.
> * `++x` (Pre): Primero incrementa el valor y luego lo devuelve.

---

### ⚠️ 4. Valores Numéricos Especiales en JavaScript

JavaScript no se "rompe" ni detiene la ejecución del programa cuando ocurre un error matemático extremo; en su lugar, devuelve representaciones numéricas especiales:

1. **`Infinity` y `-Infinity`**:
   - Ocurren al dividir un número finito entre `0` (en otros lenguajes esto lanzaría una excepción).
   - `1 / 0` $\rightarrow$ `Infinity`
   - `-1 / 0` $\rightarrow$ `-Infinity`

2. **`NaN` (*Not a Number*)**:
   - Representa un cálculo que no tiene sentido matemático o una conversión fallida.
   - `0 / 0` $\rightarrow$ `NaN` (indeterminación matemática).
   - `"Hola" * 2` $\rightarrow$ `NaN` (intentar multiplicar un texto no numérico).
   - **Curiosidad técnica:** `typeof NaN` devuelve `"number"`. Para comprobar si un valor es `NaN`, usa siempre `Number.isNaN(valor)` (ya que por especificación `NaN !== NaN`).

---

### 💻 Código de la Clase Ilustrado

```javascript
// ==========================================
// 1. Operaciones Aritméticas Básicas
// ==========================================
const suma = 2 + 2;             // 4
const resta = 5 - 2;            // 3
const multiplicacion = 5 * 3;   // 15
const divicion = 10 / 2;        // 5
const modulo = 5 % 2;           // 1 (Residuo de dividir 5 entre 2)
const potencia = 2 ** 3;        // 8 (2 elevado al cubo: 2 * 2 * 2)

console.log({ suma, resta, multiplicacion, divicion, modulo, potencia });

// ==========================================
// 2. Operadores de Asignación Compuesta
// ==========================================
let a = 5;
a += 3; // a = 5 + 3 -> 8
console.log(a);

let b = 50;
b -= 10; // b = 50 - 10 -> 40
console.log(b);

let c = 6;
c *= 2; // c = 6 * 2 -> 12
console.log(c);

let d = 15;
d /= 3; // d = 15 / 3 -> 5
console.log(d);

// ==========================================
// 3. Incremento y Decremento
// ==========================================
let contador = 0;
contador++; // contador = 1
console.log(contador);

contador--; // contador = 0
console.log(contador);

// ==========================================
// 4. Valores Especiales: Infinity y NaN
// ==========================================
console.log(1 / 0);       // Infinity
console.log(-1 / 0);      // -Infinity

console.log(0 / 0);       // NaN (Not-a-Number)
console.log("Hola" * 2);  // NaN (Operación matemática inválida con string)
```

---
*Hecho con ☕ y 💻 para el Curso de Fundamentos de JavaScript - Platzi*
