# 📘 Guía de Estudio: React - Reforzamiento de JS/TS

Esta guía contiene los apuntes de estudio y conceptos clave aprendidos durante el curso de React (Reforzamiento de JavaScript Moderno y TypeScript). El objetivo es documentar las bases esenciales para entender el funcionamiento interno de React y el manejo del estado.

---

## 📂 Índice de Clases
- [Clase 01: Variables y Constantes (`let` & `const`)](#clase-01-variables-y-constantes-let--const)
- [Clase 02: Template Strings](#clase-02-template-strings)
- [Clase 03: Objetos Literales, Interfaces y Copias (Superficial vs. Profunda)](#clase-03-objetos-literales-interfaces-y-copias-superficial-vs-profunda)
- [Clase 04: Arreglos (Arrays)](#clase-04-arreglos-arrays)
- [Clase 05: Funciones y Retornos](#clase-05-funciones-y-retornos)
- [Clase 06: Desestructuración de Objetos](#clase-06-desestructuración-de-objetos)

---

## Clase 01: Variables y Constantes (`let` & `const`)
👉 [Ver código de la clase](./01-reforzamiento/src/bases/01-const-let.ts)

En JavaScript moderno y TypeScript, se prefiere el uso de `const` y `let` sobre `var` para evitar problemas de hoisting y tener un control preciso del ámbito (scope) de las variables.

### 🔑 Conceptos Clave:
- **`const`**: Se utiliza para declarar variables que no van a cambiar su referencia o valor después de ser asignadas. **Buena práctica:** Úsalo por defecto para todas tus declaraciones a menos que sepas que el valor debe cambiar.
- **`let`**: Se utiliza cuando el valor de la variable necesita ser reasignado en el tiempo.
- **Tipado en TypeScript**: Podemos definir explícitamente el tipo de dato utilizando la sintaxis `: tipo` (por ejemplo, `: string`, `: number`).

### 💻 Ejemplo Práctico:
```typescript
let firstName: string = 'Christian';
const lastName = "Beltran"; // Inferencia de tipo: string

let diceNumber = 5;
diceNumber = 3; // Permitido por ser declarado con let

// Uso de métodos de strings
const containsLetterR = lastName.includes("r");
console.log({ containsLetterR, diceNumber, firstName });
```

> [!NOTE]
> En TypeScript, si no defines un tipo explícito, el compilador utilizará **inferencia de tipos** para asignar el tipo en base al valor inicial asignado.

---

## Clase 02: Template Strings
👉 [Ver código de la clase](./01-reforzamiento/src/bases/02-template-string.ts)

Los template strings (o plantillas de cadena) permiten concatenar texto y expresiones de una forma mucho más legible y limpia que la concatenación tradicional con el operador `+`.

### 🔑 Conceptos Clave:
- Se definen utilizando comillas invertidas o *backticks* (`` ` ``).
- Permiten interpolar variables y expresiones de JS usando la sintaxis `${expresión}`.
- Soportan saltos de línea de forma natural sin necesidad de caracteres de escape como `\n`.
- Permiten usar comillas simples y dobles dentro del texto sin necesidad de escaparlas.

### 💻 Ejemplo Práctico:
```typescript
let firstName: string = 'Christian';
const lastName = "O'Neal";
const lastName2 = 'O\'Neal "es el apellido de alguien"'; // Comillas escapadas si usamos comillas simples externas

// Interpolación con backticks
const fullName = `${firstName} ${lastName}`;

console.log(fullName); // Imprime: Christian O'Neal
```

---

## Clase 03: Objetos Literales, Interfaces y Copias (Superficial vs. Profunda)
👉 [Ver código de la clase](./01-reforzamiento/src/bases/03-object-literal.ts)

El manejo de objetos literales, el tipado con interfaces y las copias de objetos son pilares fundamentales para trabajar en React, especialmente debido al principio de **inmutabilidad** del estado.

### 🔑 Conceptos Clave:

1. **Interfaces en TypeScript**:
   - Definen la estructura o "contrato" que debe cumplir un objeto. Esto asegura que el objeto tenga las propiedades requeridas con sus tipos de datos correctos.
   - Las interfaces pueden anidarse (una propiedad de una interfaz puede tener el tipo de otra interfaz).
   - Son herramientas puramente de compilación/desarrollo y **no generan código JavaScript al compilar** (no tienen impacto en el tamaño o rendimiento del bundle final).

2. **Asignación por Referencia**:
   - En JavaScript/TypeScript, los objetos no se copian por valor, sino por **referencia** (dirección de memoria). Si asignas un objeto a otro (`const obj2 = obj1`), ambos apuntan al mismo lugar.

3. **Copia Superficial (Shallow Copy)**:
   - Crear una copia usando el operador spread (`{ ...objeto }`) duplica el primer nivel del objeto.
   - **Limitación**: Si el objeto contiene objetos o arreglos anidados, estos se siguen pasando por referencia, por lo que modificar un nivel interno de la copia afectará al objeto original.

4. **Copia Profunda (Deep Copy)**:
   - Duplica el objeto en todos sus niveles (incluyendo objetos internos).
   - En JavaScript moderno, la forma nativa y recomendada es utilizar `structuredClone(objeto)`.

---

### 💻 Ejemplo Práctico con Interfaces y Objetos:

```typescript
// 🏷️ Definición de Interfaces (Contratos de datos)
interface Person {
    firstName: String;
    lastName: String;
    age: number;
    address: address;
}

interface address {
    postalCode: string;
    city: string;
}

// 🦸 Creación de objetos tipados con la interfaz
const ironman: Person = {
    firstName: "Tony",
    lastName: "Stark",
    age: 45,
    address: {
        postalCode: 'ABC123',
        city: 'New York'
    }
}

const superman: Person = {
    firstName: "Clark",
    lastName: "Kent",
    age: 35,
    address: {
        postalCode: "AVF1234",
        city: "Metropolis"
    }
}
```

### 💻 Ejemplo de Copias de Objetos:

```typescript
// ⚠️ Copia Superficial (Shallow Copy)
const spiderman = { ...ironman };
spiderman.firstName = "Peter";
spiderman.lastName = "Parker";
spiderman.age = 22;

// Nota: Si mutamos spiderman.address.city = "Manhattan", 
// se alterará también el objeto ironman debido a la referencia anidada compartida.

// 🛡️ Copia Profunda (Deep Copy)
const cloneSpiderman = structuredClone(ironman);
// Nota: Si mutamos cloneSpiderman.address.city = "Girardot", 
// ironman no se verá afectado ya que es una copia completamente independiente.
```

> [!IMPORTANT]
> **Relevancia en React:** El estado de un componente en React debe ser tratado como inmutable. Cuando necesites actualizar un estado complejo (objetos anidados), debes asegurarte de hacer copias correctas. El uso de interfaces nos ayuda a garantizar que las modificaciones y copias de los objetos mantengan la estructura de datos deseada sin errores de tipado.

---

## Clase 04: Arreglos (Arrays)
👉 [Ver código de la clase](./01-reforzamiento/src/bases/04-arrays.ts)

Los arreglos son colecciones de datos ordenadas. En TypeScript, podemos restringir y definir los tipos de datos que puede contener un arreglo.

### 🔑 Conceptos Clave:

1. **Tipado de Arreglos en TypeScript**:
   - Para definir un arreglo de un solo tipo se usa `tipo[]` (ej. `number[]`).
   - Para permitir múltiples tipos de datos dentro del arreglo, se usa un tipo de unión entre paréntesis `(tipo1 | tipo2)[]` (ej. `(number | string)[]`).

2. **Inmutabilidad y Copia de Arreglos**:
   - Al igual que los objetos, los arreglos se asignan por referencia.
   - Para hacer una copia superficial de un arreglo y agregar o modificar elementos sin mutar el original, se puede usar el operador spread: `const copia = [ ...original ]`.
   - Métodos mutadores tradicionales como `.push()`, `.pop()`, `.shift()`, `.unshift()` modifican el arreglo directamente. En React, para mantener la inmutabilidad, se prefiere hacer una copia primero o usar métodos no mutadores (como `.map()`, `.filter()`, `.concat()`).

---

### 💻 Ejemplo Práctico:

```typescript
// 🏷️ Arreglo con unión de tipos (números y cadenas de texto)
let miArreglo: (number | string)[] = ['1', 2, 3, 4, 5, "6"];

// Iteración de elementos
miArreglo.forEach( number => {
    // Al iterar, se debe tener cuidado ya que TypeScript infiere que 'number' es string o number
    console.log(number + 10); 
});

// 🏷️ Arreglos tipados de un solo tipo
let myArray: number[] = [1, 2, 3, 4, 5, 6];

// 🛡️ Copias de arreglos para evitar mutación del original

// 1. Copia superficial (Shallow Copy) con Spread Operator
let myArray2 = [ ...myArray ]; 
myArray2.push(7); // Agrega el elemento al final de la copia

// 2. Copia profunda (Deep Copy) con structuredClone
let myArreglo3 = structuredClone(myArray);

console.log({ myArray, myArray2, myArreglo3 });
// Imprime:
// myArray:    [1, 2, 3, 4, 5, 6] (se mantiene intacto)
// myArray2:   [1, 2, 3, 4, 5, 6, 7] (modificado)
// myArreglo3: [1, 2, 3, 4, 5, 6] (copia profunda independiente)
```

> [!IMPORTANT]
> **Relevancia en React:** Cuando manejamos listas en el estado de un componente de React (por ejemplo, al renderizar elementos con `.map()`), nunca debemos usar métodos como `.push()` sobre el arreglo original del estado. Siempre debemos generar un nuevo arreglo usando el operador spread (`[...original, nuevoElemento]`) o métodos no mutadores para asegurar que React detecte los cambios de estado y vuelva a renderizar la interfaz de forma correcta.

---

## Clase 05: Funciones y Retornos
👉 [Ver código de la clase](./01-reforzamiento/src/bases/05-functions.ts)

Las funciones en JavaScript y TypeScript son bloques de código fundamentales y reutilizables. En TypeScript, podemos estructurar su comportamiento de manera estricta definiendo los tipos de datos de entrada y de retorno.

### 🔑 Conceptos Clave:

1. **Funciones Tradicionales vs. Funciones de Flecha (Arrow Functions)**:
   - **Funciones Tradicionales**: Se declaran con la palabra reservada `function`. Tienen su propio contexto para la palabra reservada `this`.
   - **Arrow Functions**: Se declaran usando la sintaxis `() => {}`. Son más compactas, no tienen su propio `this` (lo heredan del contexto donde fueron creadas), y son el estándar preferido en el desarrollo de React.

2. **Retorno Implícito**:
   - Si una función de flecha ejecuta una sola expresión y devuelve su resultado, se pueden omitir las llaves `{}` y la palabra clave `return`.
   - **Para retornar objetos literales de forma implícita**, se deben envolver las llaves del objeto entre paréntesis `({ ... })` para que el intérprete no las confunda con el cuerpo de la función.

3. **Tipado estricto en TypeScript**:
   - Se debe definir el tipo de los argumentos de la función `(arg: tipo)`.
   - El tipo de retorno de la función se especifica después de los parámetros `: tipo`. Si la función no retorna nada, se utiliza `: void`.
   - Es buena práctica tipar los retornos con **Interfaces** cuando se devuelven estructuras de datos complejas.

4. **Funciones como Argumentos (Callbacks)**:
   - Las funciones en JavaScript son ciudadanos de primera clase, lo que significa que se pueden pasar como argumentos a otras funciones (callbacks).
   - Métodos como `.forEach()`, `.map()`, `.filter()`, etc., aceptan callbacks. Si un callback solo recibe un argumento y este se pasa directamente a otra función, se puede simplificar pasando la referencia de la función (por ejemplo, `forEach(console.log)`).

---

### 💻 Ejemplo Práctico:

```typescript
// 🏷️ Definición de Interfaz para tipar el retorno
interface User {
    uid: string;
    username: string;
}

// 1. Función Tradicional Tipada
function greet(name: string): string {
    return `Hola soy ${name}`;
}

// 2. Arrow Function Tipada
const greet2 = (name: string): string => {
    return `Hola ${name}`;
};

// 3. Arrow Function con Retorno Implícito de Objeto
const getUser3 = (): User => ({
    uid: 'ABC-123',
    username: 'Elpapi_21',
});

// 4. Callback simplificado pasándole la referencia directa de console.log
const myNumbers: number[] = [1, 2, 3, 4, 5];
myNumbers.forEach(console.log); 
```

> [!IMPORTANT]
> **Relevancia en React:** En React moderno, la inmensa mayoría de componentes son componentes funcionales (funciones que retornan JSX). Además, las arrow functions son esenciales para manejar eventos (como `onClick={() => handleAction()}`), y pasar funciones callback como *props* es el mecanismo principal para que un componente hijo notifique o envíe datos a su componente padre.

---

## Clase 06: Desestructuración de Objetos
👉 [Ver código de la clase](./01-reforzamiento/src/bases/06-obj-destructuring.ts)

La desestructuración de objetos en JavaScript y TypeScript permite extraer valores de propiedades de un objeto y asignarlos directamente a variables utilizando una sintaxis mucho más limpia y concisa.

### 🔑 Conceptos Clave:

1. **Desestructuración Básica y Renombrado**:
   - Podemos extraer las propiedades directamente usando llaves: `const { name, age } = person`.
   - Si deseamos que la variable tenga un nombre diferente al de la propiedad del objeto para evitar colisiones de nombres o mejorar el contexto, usamos dos puntos: `const { name: nuevoNombre } = person`.

2. **Desestructuración en Parámetros de Funciones**:
   - En lugar de recibir un objeto completo y desestructurarlo dentro de la función, podemos hacerlo directamente en la firma de la función: `const miFuncion = ({ name, age }: Hero) => {}`. Esto facilita la lectura del contrato de la función.

3. **Propiedades Opcionales y Valores por Defecto**:
   - En TypeScript, las interfaces pueden definir propiedades opcionales usando `?` (ej. `rank?: string`).
   - Al desestructurar, podemos asignar un valor por defecto en caso de que la propiedad sea `undefined`: `const useContext = ({ rank = 'No Rank' }) => {}`.

4. **Desestructuración Anidada**:
   - Aunque es posible realizar desestructuraciones anidadas complejas en una sola línea (ej. `const { user: { name } } = context`), esto suele hacer que el código sea difícil de leer y mantener.
   - **Buena práctica:** Es preferible realizar la desestructuración en pasos separados, extrayendo primero el objeto anidado y luego las propiedades que necesitamos de él.

---

### 💻 Ejemplo Práctico:

```typescript
interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string; // Propiedad opcional
}

const person: Hero = {
    name: 'Tony',
    age: 45,
    key: 'Ironman',
};

// 1. Desestructuración básica con renombrado de variables
const { name: ironmanName, age: ironmanAge, key } = person;
console.log({ ironmanName, ironmanAge, key });

// 2. Desestructuración en la firma del método
const useContext = ({ name, age, key, rank = 'Recruit' }: Hero) => {
    return {
        keyName: key,
        user: {
            name,
            age
        },
        userRank: rank
    };
};

// 3. Desestructuración limpia paso a paso (evitando anidaciones complejas)
const { keyName, user, userRank } = useContext(person);
const { name } = user;
const { age } = user;

console.log({ keyName, name, age, userRank });
```

> [!IMPORTANT]
> **Relevancia en React:** La desestructuración de objetos es una de las características más utilizadas en React. Se emplea de forma masiva para:
> - Extraer las **Props** en la firma del componente (ej. `const Button = ({ label, onClick }) => {}`).
> - Extraer los valores devueltos por hooks, como `const { state, error } = useMyCustomHook()`.

