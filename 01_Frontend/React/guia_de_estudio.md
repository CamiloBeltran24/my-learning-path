# 📘 Guía de Estudio: React - Reforzamiento de JS/TS

Esta guía contiene los apuntes de estudio, explicaciones detalladas y conceptos clave aprendidos durante el curso de React (Reforzamiento de JavaScript Moderno y TypeScript). El objetivo es documentar las bases esenciales de forma **sencilla, gráfica y accesible para cualquier tipo de audiencia**, conectando cada concepto técnico con su utilidad real al momento de construir aplicaciones en React.

---

## 📂 Índice de Clases
- [Clase 01: Variables y Constantes (`let` & `const`) y Métodos de Strings](#clase-01-variables-y-constantes-let--const-y-m%C3%A9todos-de-strings)
- [Clase 02: Template Strings (Plantillas de Texto)](#clase-02-template-strings-plantillas-de-texto)
- [Clase 03: Objetos Literales, Interfaces y Copias (Superficial vs. Profunda)](#clase-03-objetos-literales-interfaces-y-copias-superficial-vs-profunda)
- [Clase 04: Arreglos (Arrays) e Inmutabilidad](#clase-04-arreglos-arrays-e-inmutabilidad)
- [Clase 05: Funciones, Retornos y Callback Functions](#clase-05-funciones-retornos-y-callback-functions)
- [Clase 06: Desestructuración de Objetos (Object Destructuring)](#clase-06-desestructuraci%C3%B3n-de-objetos-object-destructuring)
- [Clase 07: Desestructuración de Arreglos (Arrays) y Tuplas](#clase-07-desestructuraci%C3%B3n-de-arreglos-arrays-y-tuplas)
- [Clase 08: Importaciones, Exportaciones y Métodos de Arreglos con Enums](#clase-08-importaciones-exportaciones-y-m%C3%A9todos-de-arreglos-con-enums)
- [Clase 09: Promesas (Promises)](#clase-09-promesas-promises)

---

## Clase 01: Variables y Constantes (`let` & `const`) y Métodos de Strings
👉 [Ver código de la clase](./01-reforzamiento/src/bases/01-const-let.ts)

En el desarrollo de JavaScript moderno y TypeScript, la forma en que guardamos datos en memoria ha evolucionado para evitar errores lógicos comunes.

### 📦 La Analogía de las Cajas de Almacenamiento
Imagina que declarar una variable es como comprar una caja de cartón para guardar cosas y ponerle una etiqueta con su nombre:
*   **`const` (Constante)**: Es una caja que, una vez que le pones un objeto dentro y la cierras, queda **soldada**. No puedes cambiar el objeto completo que está en su interior por otro diferente (es decir, no puedes reasignar la variable).
*   **`let` (Variable)**: Es una caja con una tapa de velcro. Puedes abrirla en cualquier momento, sacar lo que tiene dentro y meter algo completamente nuevo (reescribir su valor).
*   **`var` (El antepasado obsoleto)**: Era una caja sin tapa que andaba flotando por toda la casa (*ámbito global/hoisting*). Cualquiera podía tropezar con ella y cambiar su contenido sin querer. **¡Ya no se usa!**

---

### 🔑 Conceptos Clave:

1.  **Ámbito de Bloque (Block Scope)**: `let` y `const` solo existen dentro de las llaves `{}` donde fueron creadas. Si creas una variable dentro de un ciclo o una función, fuera de ellos nadie sabrá que existe.
2.  **Inferencia de Tipos en TypeScript**: Si declaras una variable y le asignas un valor de inmediato, TypeScript es lo suficientemente inteligente como para saber qué tipo de dato es sin que se lo digas explícitamente.
3.  **Método de Strings `.includes()`**: Sirve para buscar si un texto contiene a otro. Es **sensible a mayúsculas y minúsculas** (*case-sensitive*), por lo que `"r"` no es igual a `"R"`.

---

### 💻 Código de la Clase Ilustrado:
```typescript
// 1. Declaración con let (su valor cambiará en el futuro)
let firstName: string = 'Christian'; // Definimos explícitamente que es un string

// 2. Declaración con const (su referencia no cambiará)
const lastName = "Beltran"; // TypeScript infiere automáticamente que es un string

let diceNumber = 5;
diceNumber = 3; // Permitido: let nos deja cambiar el valor de 5 a 3

// 3. Uso de métodos de strings (.includes es sensible a mayúsculas)
const containsLetterR = lastName.includes("r"); // Devuelve true porque 'Beltran' tiene una 'r' minúscula
const containsLetterR_Upper = lastName.includes("R"); // Devuelve false porque no contiene 'R' mayúscula
const containsLetterH = lastName.includes("h"); // Devuelve false porque no contiene 'h'

console.log({ containsLetterR, containsLetterR_Upper, containsLetterH, diceNumber, firstName });
```

> [!NOTE]
> **Buena práctica en React:** Usa siempre `const` por defecto para todas tus variables. Solo cambia a `let` si tienes la absoluta certeza de que vas a reescribir su valor (por ejemplo, en acumuladores de ciclos). Esto hace tu código más predecible y reduce errores.

---

## Clase 02: Template Strings (Plantillas de Texto)
👉 [Ver código de la clase](./01-reforzamiento/src/bases/02-template-string.ts)

Los template strings son una forma cómoda y legible de construir cadenas de texto combinando palabras estáticas con variables o código.

### ✉️ La Analogía de las Cartas Pre-impresas
Imagina que quieres enviar invitaciones de cumpleaños. En lugar de escribir toda la invitación a mano para cada invitado, compras tarjetas pre-diseñadas que dicen: `"Hola [Nombre], te invito a mi fiesta de [Edad] años"`. Los template strings hacen exactamente eso mediante marcadores de posición.

---

### 🔑 Conceptos Clave:
1.  **Comillas invertidas (Backticks - `` ` ``)**: En lugar de usar comillas simples (`'`) o dobles (`"`), los template strings se envuelven en comillas invertidas.
2.  **Interpolación (`${ expresión }`)**: Permite incrustar cualquier expresión de JavaScript o variable directamente dentro del texto.
3.  **Cadenas multilínea**: Permiten dar saltos de línea presionando "Enter" de forma natural en tu editor de código. No necesitas concatenar renglón por renglón ni usar caracteres especiales como `\n`.
4.  **Adiós al escape de comillas**: Si tu texto incluye comillas simples o dobles, no tienes que usar barras invertidas (`\`) para evitar que el código se rompa.

---

### 💻 Código de la Clase Ilustrado:
```typescript
let firstName: string = 'Christian';
const lastName = "O'Neal"; // Comillas dobles externas permiten usar comilla simple adentro sin escapar

// Complicación tradicional: Si usamos comillas simples externas y el texto lleva una comilla simple interna,
// debemos "escaparla" usando una barra invertida (\'), de lo contrario JS pensará que el texto terminó ahí.
const lastName2 = 'O\'Neal "es el apellido de alguien"'; 

// 🚀 La solución moderna: Template Strings con Backticks
const fullName = `${firstName} ${lastName}`; // Combinación limpia de variables

// Ejemplo multilínea nativo
const message = `
Hola ${firstName},
Espero que estés aprendiendo React.
Tu apellido es: ${lastName}.
`;

console.log(fullName); // Imprime: Christian O'Neal
console.log(message);
```

---

## Clase 03: Objetos Literales, Interfaces y Copias (Superficial vs. Profunda)
👉 [Ver código de la clase](./01-reforzamiento/src/bases/03-object-literal.ts)

Entender cómo se guardan los objetos en memoria y cómo estructurarlos es uno de los requisitos más importantes para dominar el estado (*state*) en React.

### 👥 La Analogía de las Referencias y las Copias
*   **Paso por Referencia (Compartir Enlace)**: Imagina que creas un documento en Google Docs y le compartes el enlace a un amigo. Si tu amigo entra y borra un párrafo, el documento original cambia para ambos. Eso pasa en JS: cuando asignas un objeto a otra variable (`const obj2 = obj1`), no estás duplicando los datos, solo estás compartiendo un "enlace" (dirección de memoria) al mismo objeto.
*   **Copia Superficial (Shallow Copy)**: Es como fotocopiar la primera página de un expediente. Si esa página tiene pegada una nota física que dice *"Ver cajón de archivos adjuntos"*, ambos expedientes (el original y la copia) siguen compartiendo y apuntando al mismo cajón físico. Si modificas algo dentro del cajón, se altera para ambos.
*   **Copia Profunda (Deep Copy)**: Es como duplicar con una impresora 3D mágica todo el archivero, incluyendo todos los cajones y documentos que estén en su interior. Son 100% independientes.

---

### 🔑 Conceptos Clave:

1.  **Interfaces (El Plano de Construcción)**: Son contratos en TypeScript que definen qué propiedades y de qué tipos debe ser un objeto. **Dato importante:** Las interfaces no generan código JavaScript final; al compilar el proyecto, desaparecen por completo.
2.  **Operador Spread (`...`)**: Sirve para crear copias superficiales. Desparrama las propiedades de un objeto dentro de uno nuevo.
3.  **`structuredClone()`**: Función nativa de los navegadores modernos y Node.js que realiza copias profundas sin necesidad de librerías externas.

---

### 💻 Código de la Clase Ilustrado:
```typescript
// 🏷️ 1. Definición de la estructura usando Interfaces
interface Person {
    firstName: String;
    lastName: String;
    age: number;
    address: address; // Propiedad que usa otra interfaz (anidación)
}

interface address {
    postalCode: string;
    city: string;
}

// 🦸 2. Creación de objetos que deben respetar la interfaz
const ironman: Person = {
    firstName: "Tony",
    lastName: "Stark",
    age: 45,
    address: {
        postalCode: 'ABC123',
        city: 'New York'
    }
}

// ⚠️ 3. Copia Superficial (Shallow Copy) usando Spread Operator
// spiderman duplica las propiedades de primer nivel (firstName, lastName, age),
// pero 'address' sigue apuntando a la misma dirección de memoria que ironman.address.
const spiderman = { ...ironman };
spiderman.firstName = "Peter";
spiderman.lastName = "Parker";
spiderman.age = 22;

// Si hiciéramos: spiderman.address.city = "Manhattan";
// ¡El objeto ironman también cambiaría su ciudad a "Manhattan"!

// 🛡️ 4. Copia Profunda (Deep Copy) usando structuredClone
// cloneSpiderman es completamente independiente en todos sus niveles.
const cloneSpiderman = structuredClone(ironman);
cloneSpiderman.address.city = "Girardot"; // Cambiar esto NO afecta en nada a ironman

console.log({ ironman, spiderman, cloneSpiderman });
```

> [!IMPORTANT]
> **¿Por qué esto es vital en React?**
> React utiliza la comparación de referencias de memoria para saber si un estado cambió y debe volver a generar la interfaz. Si haces `estado.nombre = "Pedro"`, la referencia del objeto sigue siendo la misma y React no se dará cuenta del cambio. Debes crear un objeto nuevo: `setEstado({ ...estado, nombre: "Pedro" })`.

---

## Clase 04: Arreglos (Arrays) e Inmutabilidad
👉 [Ver código de la clase](./01-reforzamiento/src/bases/04-arrays.ts)

Los arreglos son colecciones ordenadas de información. Al igual que los objetos, en React debemos tratarlos con mucho cuidado para evitar mutaciones directas.

### 📚 La Analogía del Estante de Libros
Imagina un estante con libros ordenados.
*   **Métodos Mutadores (`.push()`)**: Es como tomar un marcador y pintar directamente sobre las hojas del libro del estante. Has cambiado el estante original directamente.
*   **Métodos No Mutadores (`.map()`, Spread)**: Es como tomar una fotocopiadora, sacar una copia del estante completo en una hoja nueva y añadirle un libro al final de esa copia. Tu estante original sigue intacto.

---

### 🔑 Conceptos Clave:
1.  **Tipado de Arreglos**:
    *   **Simple**: `number[]` indica que el arreglo solo puede contener números.
    *   **Unión**: `(number | string)[]` indica que el arreglo puede mezclar números y textos.
2.  **Inmutabilidad**: En React, está estrictamente prohibido usar métodos que modifiquen el arreglo original directamente (como `.push()`, `.pop()`, `.shift()`, `.unshift()`). En su lugar, creamos una copia modificada.

---

### 💻 Código de la Clase Ilustrado:
```typescript
// 1. Arreglo con unión de tipos (números y textos mezclados)
let miArreglo: (number | string)[] = ['1', 2, 3, 4, 5, "6"];

// 2. Arreglo estrictamente de números
let myArray: number[] = [1, 2, 3, 4, 5, 6];

// ⚠️ Intento de modificación directa (Mutación) - Evitar en React
// myArray.push(7); // Modificaría myArray directamente en su dirección de memoria original

// 🚀 Forma correcta: Crear una copia y modificar la copia
// Usamos el operador spread para crear una copia superficial
let myArray2 = [ ...myArray ]; 
myArray2.push(7); // Añadimos el 7 a la copia, el original queda intacto

// También podemos hacer copia profunda si el arreglo contiene objetos complejos
let myArreglo3 = structuredClone(myArray);

console.log({ myArray, myArray2, myArreglo3 });
// myArray: [1, 2, 3, 4, 5, 6] (Intacto)
// myArray2: [1, 2, 3, 4, 5, 6, 7] (Modificado)
```

---

## Clase 05: Funciones, Retornos y Callback Functions
👉 [Ver código de la clase](./01-reforzamiento/src/bases/05-functions.ts)

Las funciones son las unidades básicas de lógica en JavaScript. En React moderno, casi todo (incluyendo los propios componentes) son funciones.

### 🍕 La Analogía de la Pizza y el Repartidor (Callbacks)
Imagina que llamas a una pizzería para pedir comida. Le dices al repartidor: *"Cuando llegues a mi casa, toca el timbre tres veces y deja la pizza sobre la mesa del jardín"*.
Tú no estás yendo a entregar la pizza; le estás entregando una **función con instrucciones** (un *callback*) al repartidor para que él la ejecute en el momento adecuado (cuando llegue a tu casa).

---

### 🔑 Conceptos Clave:

1.  **Funciones Tradicionales vs. Flecha (`Arrow Functions`)**:
    *   Las tradicionales (`function`) tienen su propio contexto para la palabra `this`.
    *   Las de flecha (`() => {}`) no tienen su propio `this`, son más cortas y son el estándar de oro en React.
2.  **Retorno Implícito**: Si tu función de flecha solo tiene una línea que devuelve algo, puedes borrar las llaves `{}` y la palabra `return`. **¡Ojo!** Si devuelves un objeto literal, debes envolverlo entre paréntesis `({ ... })` para que JavaScript no se confunda pensando que las llaves del objeto son el cuerpo de la función.
3.  **Callback**: Una función que se pasa como argumento a otra función para ser ejecutada después.
4.  **Pasar por Referencia Directa**: Si una función callback recibe exactamente los mismos argumentos que otra función externa va a ejecutar, puedes ahorrar código pasando solo el nombre de la función externa (ej: `forEach(console.log)`).

---

### 💻 Código de la Clase Ilustrado:
```typescript
interface User {
    uid: string;
    username: string;
}

// 1. Función tradicional tipada (Argumento string, Retorna string)
function greet(name: string): string {
    return `Hola soy ${name}`;
}

// 2. Arrow function tipada
const greet2 = (name: string): string => {
    return `Hola ${name}`;
};

// 3. Retorno implícito de un objeto literal (Nótese los paréntesis envolviendo a las llaves)
const getUser3 = () => ({
    uid: 'ABC-123',
    username: 'Elpapi_21',
});

// 4. Tipado de retorno preciso usando Interfaces
const getUser4 = (): User => {
    return {
        uid: 'ABC-1234',
        username: 'Elpapi_4',
    };
};

// 5. Ejemplos de Callbacks con forEach
const myNumbers: number[] = [1, 2, 3, 4, 5];

// Opción A: Callback clásico con función anónima tradicional
myNumbers.forEach(function (value) {
    console.log(value);
});

// Opción B: Callback moderno con Arrow Function
myNumbers.forEach(value => console.log(value));

// Opción C: Callback con múltiples argumentos disponibles (valor, índice, arreglo completo)
myNumbers.forEach((value, index, arr) => {
    console.log({ value, index, arr });
});

// Opción D: Simplificado al extremo (Shorthand)
// Como forEach le pasa un valor a su callback, y ese callback solo hace console.log(valor),
// podemos pasar directamente la referencia a console.log.
myNumbers.forEach(console.log); 
```

---

## Clase 06: Desestructuración de Objetos (Object Destructuring)
👉 [Ver código de la clase](./01-reforzamiento/src/bases/06-obj-destructuring.ts)

La desestructuración es un atajo sintáctico que nos permite extraer propiedades de un objeto y convertirlas en variables individuales de forma muy limpia.

### 🧳 La Analogía de Desempacar la Maleta
Imagina que regresas de viaje con una maleta llena de ropa. En lugar de llevar toda la maleta arrastrando cada vez que necesites cambiarte de zapatos, abres la maleta, sacas únicamente los **zapatos** y la **camisa**, y los dejas sobre la cama listos para usar. Eso es desestructurar: sacar solo lo que necesitas de un objeto gigante.

---

### 🔑 Conceptos Clave:
1.  **Extracción por Nombre**: En los objetos, extraes los valores escribiendo el nombre exacto de la propiedad dentro de llaves `{}`. El orden en que los escribas no importa.
2.  **Renombrado**: Si ya tienes una variable con el mismo nombre y quieres evitar conflictos, puedes renombrarla usando dos puntos: `{ propiedadOriginal: nuevoNombre }`.
3.  **Valores por Defecto**: Si una propiedad es opcional (`rank?: string`) y su valor viene vacío o `undefined`, puedes asignarle un valor de respaldo usando el signo igual (`=`).
4.  **Desestructuración en Parámetros**: Puedes desestructurar un objeto directamente en los paréntesis de una función, evitando tener que escribir `objeto.propiedad` dentro del cuerpo del código.

---

### 💻 Código de la Clase Ilustrado:
```typescript
interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string; // Propiedad opcional (puede no existir)
}

const person: Hero = {
    name: 'Tony',
    age: 45,
    key: 'Ironman',
};

// 1. Desestructuración básica y renombrado de variables
// Extraemos 'name' y lo guardamos en 'ironmanName', 'age' en 'ironmanAge', y 'key' se queda igual.
const { name: ironmanName, age: ironmanAge, key } = person;
console.log({ ironmanName, ironmanAge, key }); // Imprime: Tony, 45, Ironman

// 2. Desestructuración directamente en la firma de la función
// Si rank viene vacío, tomará el valor por defecto 'Recruit'
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

// 3. Desestructuración paso a paso (Recomendado sobre desestructuraciones anidadas complejas)
const { keyName, user, userRank } = useContext(person);
const { name } = user; // Extraemos del sub-objeto 'user' de forma limpia
const { age } = user;

console.log({ keyName, name, age, userRank });
```

> [!TIP]
> **Relevancia en React:** Cuando creas un componente en React, este recibe un objeto llamado `props`. En lugar de escribir `props.title` o `props.imageUrl` por todo tu código, es estándar desestructurarlas en la firma del componente:
> `const Card = ({ title, imageUrl, active = false }) => { ... }`

---

## Clase 07: Desestructuración de Arreglos (Arrays) y Tuplas
👉 [Ver código de la clase](./01-reforzamiento/src/bases/07-arr-destructuring.ts)

A diferencia de los objetos, los arreglos no tienen nombres de propiedades; tienen posiciones indexadas (0, 1, 2...). La desestructuración de arreglos se basa puramente en este orden.

### 🥇 La Analogía del Podio Olímpico
Imagina una carrera donde compiten tres corredores. Al terminar, el que llegó en la posición 1 se lleva la medalla de Oro, el de la posición 2 la de Plata, y el de la 3 la de Bronce. No importa cómo se llamen los corredores; sus premios se asignan **estrictamente por el orden de llegada**.

---

### 🔑 Conceptos Clave:

1.  **Asignación Posicional**: Extraes los elementos usando corchetes `[ variable1, variable2 ]`. La primera variable recibirá el valor de la posición `0`, la segunda la posición `1`, y así sucesivamente.
2.  **Ignorar Posiciones**: Si solo te interesa el tercer elemento, puedes dejar espacios en blanco separados por comas: `[ , , tercero ]`.
3.  **Tuplas en TypeScript (`as const`)**:
    *   Si tienes un arreglo con datos mixtos (como un string y una función), TypeScript asumirá que el arreglo es de tipo `(string | Function)[]`.
    *   Al usar `as const` al final, le indicas a TypeScript que es una **Tupla estricta e inmutable** (de solo lectura). Así, TypeScript sabe exactamente que en la posición `0` siempre habrá un string y en la posición `1` siempre habrá una función específica.

---

### 💻 Código de la Clase Ilustrado:
```typescript
const characterNames = ['Goku', 'Vegueta', 'Trunks'];

// 1. Extraer elementos en base a su posición ordenada
const [ gold, silver, bronze ] = characterNames;
console.log(gold); // Imprime: Goku (Posición 0)

// 2. Extraer ignorando posiciones mediante comas
const [, p2] = characterNames; // Ignoramos la posición 0, extraemos la posición 1
console.log(p2); // Imprime: Vegueta

const [, , p3] = characterNames; // Ignoramos posiciones 0 y 1, extraemos la 2
console.log(p3); // Imprime: Trunks

// 3. Uso de 'as const' para definir una tupla estricta
const returnsArrayFn = () => {
    return ["ABC", 123] as const; // Indica que la posición 0 es string y la 1 es number invariablemente
};

const [letters, numbers] = returnsArrayFn();
console.log(numbers + 100); // Válido y seguro porque TS sabe que 'numbers' es de tipo number.

// 4. Implementación de una simulación del hook useState de React
const useState = (name: string) => {
    return [
        name,
        (newValue: string) => {
            console.log(`Cambiando estado a: ${newValue}`);
        }
    ] as const; // Crucial para que TypeScript no mezcle los tipos de retorno
};

const [ name, setName ] = useState('Goku');
console.log(name); // Goku
setName('Vegueta'); // Imprime: Cambiando estado a: Vegueta
```

---

## Clase 08: Importaciones, Exportaciones y Métodos de Arreglos con Enums
👉 Ver código de la clase: [08-imp-exp.ts (Lógica)](./01-reforzamiento/src/bases/08-imp-exp.ts) | [heroes.data.ts (Datos)](./01-reforzamiento/src/data/heroes.data.ts)

En esta clase organizamos la lógica separando los datos del código que los procesa, aprendimos a realizar búsquedas eficientes y vimos cómo estructurar listas de opciones fijas.

### 📂 La Analogía del Menú y la Cocina
*   **Módulos (Import/Export)**: Es como separar la despensa de la cocina. No guardas los ingredientes crudos encima de la estufa. Tienes un cuarto de despensa separado (`heroes.data.ts`) y cuando la cocina (`08-imp-exp.ts`) necesita tomates, va y los **importa**.
*   **Enums (El menú con opciones fijas)**: Imagina un restaurante donde solo puedes pedir Coca-Cola, Fanta o Agua. En lugar de dejar que el cliente escriba a mano *"Coke"* de formas inconsistentes, le das un menú de opciones fijas y pre-validadas.

---

### 🔑 Conceptos Clave:

1.  **Exportaciones Nombradas (`export`)**: Permiten exportar múltiples variables o funciones de un archivo. Al importarlas, debes llamarlas por su nombre exacto dentro de llaves: `import { heroes } from './path'`.
2.  **Exportación por Defecto (`export default`)**: Es el elemento principal que exporta un archivo. Solo puede haber uno por archivo y se importa sin llaves, pudiendo renombrarse libremente.
3.  **Enums en TypeScript**:
    *   A diferencia de las interfaces, los `enum` **sí generan código JavaScript real** cuando se compila la aplicación.
    *   **Detalle de Configuración:** En proyectos modernos con Vite y TypeScript, el compilador puede dar errores si intentas usar enums con configuraciones estrictas de borrado de sintaxis. Para permitir su uso, debes tener en tu archivo `tsconfig.json`:
        ```json
        "erasableSyntaxOnly": false
        ```
4.  **Enfoque Imperativo vs. Enfoque Declarativo**:
    *   **Imperativo (Cómo hacer las cosas)**: Le especificas al computador cada paso exacto y detallado para lograr el objetivo. Requiere que declares variables mutables y gestiones bucles manualmente.
    *   **Declarativo (Qué hacer)**: Le dices al computador qué resultado quieres obtener y dejas que los métodos de JavaScript hagan el trabajo sucio. No muta datos y es el enfoque estándar preferido en React.

---

### 💻 Código de la Clase Ilustrado:

#### 📜 Archivo de Datos (`src/data/heroes.data.ts`):
```typescript
export interface Hero {
    id: number;
    name: string;
    owner: Owner;
}

// 🏷️ Definición del Enum (Lista cerrada de creadores de cómics)
export enum Owner {
    DC = 'DC',
    Marvel = 'Marvel' // El valor original corregido
}

// Exportación nombrada de la constante 'heroes'
export const heroes: Hero[] = [
  { id: 1, name: 'Batman', owner: Owner.DC },
  { id: 2, name: 'Spiderman', owner: Owner.Marvel },
  { id: 3, name: 'Superman', owner: Owner.DC },
  { id: 4, name: 'Flash', owner: Owner.DC },
  { id: 5, name: 'Wolverine', owner: Owner.Marvel }
];

// Exportación por defecto del arreglo de héroes
export default heroes;
```

#### 🛠️ Archivo de Lógica (`src/bases/08-imp-exp.ts`):
```typescript
import heroes, { Owner, type Hero } from "../data/heroes.data";

// 🔍 Buscar un único héroe por ID usando .find() (Método Declarativo)
const getHeroById = (id: number): Hero | undefined => {
    return heroes.find( (hero) => hero.id === id );
};

// ==========================================
// ⚔️ TAREA: IMPERATIVO vs DECLARATIVO
// ==========================================

// 1. Solución Imperativa (Mi Solución):
// Creamos una lista mutable temporal y recorremos uno por uno agregando los elementos.
// Estamos diciéndole a JS el paso a paso ("cómo hacerlo").
export const getHeroByOwner = (owner: Owner) : Hero[] => {
    console.log(owner);
    let newHeroes: Hero[] = []; // Arreglo mutable intermedio

    heroes.forEach( (hero) => {
        if(hero.owner === owner) {
            newHeroes.push(hero); // Mutación manual del arreglo
        }
    });

    return newHeroes;
}

// 2. Solución Declarativa (Solución del Profesor):
// Usamos el método .filter(). Solo definimos qué queremos lograr (filtrar por el owner).
// Es mucho más corta, limpia y no muta ninguna variable intermedia. ¡La preferida en React!
export const getHeroesByOwner = (owner: Owner) => {
    return heroes.filter( (hero) => hero.owner === owner );
}

console.log( getHeroById(4) ); // Devuelve el objeto de Flash
console.log( getHeroesByOwner(Owner.DC) ); // Devuelve [Batman, Superman, Flash]
```

> [!NOTE]
> **Por qué preferir la Declaratividad en React:** Al evitar mutar variables internas y delegar la lógica a métodos funcionales como `.filter()`, `.map()`, o `.find()`, hacemos que nuestro código sea menos propenso a efectos secundarios y más fácil de depurar en arquitecturas de datos inmutables como la de React.

---

## Clase 09: Promesas (Promises)
👉 [Ver código de la clase](./01-reforzamiento/src/bases/09-promises.ts)

Las promesas son objetos que representan una operación asíncrona. Nos permiten ejecutar código que toma tiempo en completarse (como traer información del servidor) sin congelar la aplicación en el navegador.

### 🤝 La Analogía de la Promesa Financiera
Imagina que un amigo te pide $100 pesos prestados y te dice: *"Te prometo que te los devolveré en 2 días"*.
1.  **Estado Pendiente (Pending)**: Desde que le prestas el dinero hasta que pasan los 2 días, la promesa está en el aire. No sabes si te pagará o no.
2.  **Estado Resuelto (Fulfilled/Resolved - `.then()`)**: Dos días después, tu amigo llega con el dinero. La promesa se cumplió con éxito. Tú recibes el dinero y haces cosas con él (ej: comprar un café).
3.  **Estado Rechazado (Rejected - `.catch()`)**: Tu amigo regresa sin dinero y te dice: *"Lo siento, perdí mi cartera"*. La promesa falló. Debes manejar este problema (ej: enojarte o perdonar la deuda).
4.  **Estado Finalizado (Finally - `.finally()`)**: Pase lo que pase (si te devolvió el dinero o no), tú debes seguir con tu día a día (ej: ir a trabajar).

---

### 🔑 Conceptos Clave:

1.  **Asincronía**: JavaScript ejecuta el código línea por línea. Sin embargo, cuando se topa con una operación asíncrona (como `setTimeout` o una llamada a base de datos), la manda a una "lista de espera" (Event Loop) para que se procese en segundo plano y no bloquee el resto del programa.
2.  **Genéricos en Promesas (`Promise<Tipo>`)**: En TypeScript, definimos el tipo de dato que va a retornar la promesa cuando sea exitosa usando la sintaxis angular `<Tipo>`. Esto permite que el argumento del método `.then()` esté correctamente tipado.
3.  **Estructura de Consumo**:
    *   **`.then(callback)`**: Se ejecuta cuando la promesa se resuelve exitosamente.
    *   **`.catch(callback)`**: Se ejecuta cuando la promesa falla o es rechazada.
    *   **`.finally(callback)`**: Se ejecuta siempre al final, independientemente del éxito o fracaso de la promesa.

---

### 💻 Código de la Clase Ilustrado:
```typescript
// 1. Creación de la promesa
// Indicamos con <number> que cuando la promesa se resuelva, devolverá un número.
const myPromise = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        // resolve(100); // Si la promesa es exitosa, devolvemos 100
        
        // Simulamos un rechazo de la promesa
        reject('Mi amigo se perdió con el dinero'); 
    }, 2000); // Se ejecutará después de 2 segundos (2000 milisegundos)
});

// 2. Consumo de la promesa
myPromise
    .then((miMoney) => {
        // miMoney es de tipo number gracias al tipado genérico <number>
        console.log(`Tengo mi dinero: $${miMoney}`);
    })
    .catch((reason) => {
        // reason contiene el texto enviado en el reject()
        console.warn(reason); // Imprime la advertencia: 'Mi amigo se perdió con el dinero'
    })
    .finally(() => {
        // Se ejecuta siempre, ideal para limpiar cargadores o pantallas de carga
        console.log('Sigo con mi vida :)');
    });
```

> [!IMPORTANT]
> **Relevancia en React:** Cuando realizamos peticiones HTTP (por ejemplo, fetching de APIs usando `fetch()` o `axios`), estamos interactuando directamente con promesas. Es común usar el bloque `.finally()` para apagar estados de carga del tipo `setIsLoading(false)`, de modo que la animación de carga se detenga sin importar si la petición HTTP fue exitosa o falló.

