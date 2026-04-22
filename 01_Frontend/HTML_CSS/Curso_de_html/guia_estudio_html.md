# 📘 Guía de Estudio: Fundamentos de HTML

Esta guía es un manual práctico sobre los fundamentos de desarrollo web con HTML5, diseñado para ser una referencia rápida. Aquí encontrarás desde la estructura básica de una página hasta técnicas clave como accesibilidad, contenido multimedia y optimización para buscadores (SEO). Cada sección explica de forma clara el propósito de las etiquetas y sus buenas prácticas, sin complicaciones técnicas innecesarias.

🎯 **Proyecto Final (Referencia):** [Ver código completo en GitHub](https://github.com/platzi/html/blob/main/06_Proyecto_Final/index.html) — Un ejemplo práctico oficial donde puedes visualizar cómo se combinan e implementan las etiquetas, atributos y buenas prácticas aprendidas en este curso.

---

## Clase 01: Fundamentos y Estructura Base
👉 <a href="./01_fundamentos_HTML/clase_01_fundamentos_estructura_base/index.html" target="_blank">Ver código de la clase en pestaña nueva</a>

Todo archivo HTML5 debe comenzar con esta estructura mínima.

| Etiqueta | Descripción |
| :--- | :--- |
| `<!DOCTYPE html>` | Indica que el documento es **HTML5**. |
| `<html lang="en">` | Raíz del documento. `lang` define el idioma. |
| `<head>` | Información técnica (metadatos) no visible. |
| `<body>` | Todo el contenido que el usuario puede ver. |

### 🧠 Metadatos en `<head>`:
- `<meta charset="UTF-8">`: Soporte para acentos y emojis.
- `<meta name="viewport" content="...">`: Adaptación a dispositivos móviles.
- `<title>`: El título que aparece en la pestaña del navegador.

---

## Clase 02: Texto, Jerarquía y Contenido
👉 <a href="./01_fundamentos_HTML/clase_02_Texto_Jerarquia_Contenido/index.html" target="_blank">Ver código de la clase en pestaña nueva</a>

Organización del contenido textual por su importancia y significado.

- `<h1>` a `<h6>`: Encabezados (H1 es el más importante).
- `<p>`: Párrafos estándar.
- `<strong>`: Resalta texto en **negrita** (indica importancia semántica).
- `<blockquote>`: Se utiliza para realizar citas textuales de otras fuentes.

---

## Clase 03: Imágenes
👉 <a href="./01_fundamentos_HTML/clase_03_imagenes/index.html" target="_blank">Ver código de la clase en pestaña nueva</a>

Inserción y atributos de elementos visuales y multimedia.

### 🔑 Atributos Clave:
- `src`: La fuente o ruta de la imagen.
- `alt`: Texto alternativo (vital para accesibilidad).
- `width` / `height`: Atributos para definir dimensiones en píxeles.

### 🖼️ Multimedia Semántica:
- `<figure>`: Contenedor que agrupa la imagen y su descripción.
- `<figcaption>`: Leyenda o descripción textual de la imagen.

---

## Clase 06: Listas y Enlaces
👉 <a href="./02_Listas_Enlaces/clase_06_Listas/index.html" target="_blank">Ver código de la clase en pestaña nueva</a>

Organización de colecciones de datos y navegación entre páginas o recursos.

### 📝 Tipos de Listas:
- **Desordenadas (`<ul>`)**: Usa viñetas o balas. Elementos marcados con `<li>`.
- **Ordenadas (`<ol>`)**: Usa números o letras. El atributo `type` define el estilo (1, A, a, I, i).
- **De Definición (`<dl>`)**: Para glosarios. Usa términos (`<dt>`) y definiciones (`<dd>`).

### 🔗 Enlaces (`<a>`):
- `href`: Destino del enlace (URL).
- `target="_blank"`: Abre el enlace en una pestaña nueva.
- `rel="noopener noreferrer"`: Seguridad adicional para enlaces externos.
- **Protocolos**: `tel:` para llamadas y `mailto:` para correos electrónicos.

---

## Clase 07: Estructura Semántica
👉 <a href="./02_Listas_Enlaces/clase_07_Estructura_Semantica/index.html" target="_blank">Ver código de la clase en pestaña nueva</a>

Etiquetas que describen la función de cada sección en el diseño de la página de forma inteligente.

| Etiqueta | Nombre | "El Sabor del Caso de Uso" (¿Cuándo usarla?) |
| :--- | :--- | :--- |
| `<header>` | **La Cabecera** | Es el "rostro" de tu sitio. Se usa para el logo, el título principal y el buscador superior que recibe a los usuarios. |
| `<nav>` | **El Mapa** | Es la brújula de tu web. Úsalo para el menú que lleva a "Inicio", "Servicios" o "Contacto", permitiendo que el usuario no se pierda. |
| `<main>` | **La Estrella** | Es el corazón de la página. Aquí va el contenido único que el usuario vino a buscar; ese que no se repite en ninguna otra sección. |
| `<section>` | **El Capítulo** | Como en un libro, úsalo para separar bloques temáticos grandes, como una sección de "Características del producto" o "Lo que dicen nuestros clientes". |
| `<article>` | **El Post** | Es contenido que tiene vida propia. Imagina una noticia de blog o un comentario que podrías copiar, pegar en otra web, y se entendería perfectamente. |
| `<aside>` | **La Nota al Margen** | Es el "columnista invitado". Contenido que acompaña al principal pero es secundario, como una barra lateral con perfiles sociales o publicidad relevante. |
| `<details>` | **El Acordeón** | Ideal para secciones de "Preguntas Frecuentes", donde guardas el contenido bajo llave hasta que el usuario hace click para revelarlo. |
| `<summary>` | **El Título Revelador** | Es el texto visible del acordeón; la "pregunta" que invita al usuario a desplegar la información oculta. |
| `<footer>` | **El Adiós** | El "apretón de manos" final. La zona baja para poner redes sociales, el Copyright (©) y esos enlaces legales aburridos pero obligatorios. |

## Clase 08: Formularios
👉 <a href="./03_formularios_tablas/clase_08_Formularios.html" target="_blank">Ver código de la clase en pestaña nueva</a>

Etiquetas y atributos para recolectar información del usuario e interactuar con ella.

### 🏗️ Estructura Principal (`<form>`):
- `action`: Indica la URL destino donde se enviará la información recolectada.
- `method`: Define cómo se enviarán los datos.
  - `GET`: La información viaja de forma visible a través de la URL.
  - `POST`: La información viaja oculta en el cuerpo de la petición (más seguro).

### 🎛️ Entradas y Controles:
| Etiqueta | Descripción | Atributos Clave |
| :--- | :--- | :--- |
| `<label>` | Texto que describe un campo. Mejora la usabilidad y accesibilidad. | `for`: Vincula el label con un input, debe coincidir con el `id` del input. |
| `<input>` | Campo de entrada de datos de una sola línea. | `type` (text, email, password, number), `id`, `name`. |
| `<textarea>` | Campo para ingresar textos largos de múltiples líneas (ej. mensajes). | `cols`, `rows`, `id`, `name`. |
| `<button>` | Botón interactivo. | `type="submit"` permite enviar la información del `<form>`. |

## Clase 09: Tipos de Inputs
👉 <a href="./03_formularios_tablas/clase_09_Tipos_inputs.html" target="_blank">Ver código de la clase en pestaña nueva</a>

La etiqueta `<input>` es extremadamente versátil, su comportamiento y apariencia cambian dependiendo de su atributo `type`. Aquí tienes los tipos más comunes y útiles:

### ⌨️ Inputs de Texto y Búsqueda:
- `password`: Oculta los caracteres escritos con asteriscos o puntos (ideal para contraseñas).
- `search`: Optimizado para barras de búsqueda (suele incluir un botón para limpiar el texto).
- `url`: Diseñado y validado para recibir URLs web (http://...).
- `tel`: Para números de teléfono (en dispositivos móviles suele invocar el teclado numérico directamente).

### 🔢 Inputs de Números y Controles Deslizantes:
- `number`: Campo numérico. Suele mostrar flechas pequeñas para incrementar o disminuir.
- `range`: Muestra una barra de desplazamiento deslizable para seleccionar un valor numérico aproximado.

### 📅 Inputs de Fechas y Tiempo:
- `date`: Despliega un calendario nativo para elegir año, mes y día.
- `time`: Despliega un selector de reloj para horas y minutos.
- `datetime-local`: Despliega un selector combinado de fecha y hora local.
- `week` / `month`: Selectores específicos para escoger una semana exacta o un mes del año.

### ☑️ Inputs de Selección:
- `radio`: Selector de opción única u "excluyente". Para que funcionen en grupo (que al marcar uno se desmarque otro), todos deben compartir exactamente el mismo atributo `name`.
- `checkbox`: Casilla de verificación múltiple. Permite activar o desactivar tantas opciones como el usuario quiera.

### ✨ Inputs Especiales:
- `color`: Abre la paleta nativa de colores del sistema para elegir uno visualmente.
- `file`: Abre el explorador del sistema del usuario para adjuntar archivos (fotos, pdfs, etc).
- `hidden`: Información "invisible" para el usuario pero que viaja internamente con el formulario al enviarlo.

### 🔘 Tipos de Botones embebidos en el Input:
Aunque es más moderno usar la etiqueta `<button>`, también se pueden generar usando `input`:
- `submit`: Envía la información recolectada en el formulario.
- `reset`: Restaura todos los campos del formulario dejándolos en blanco/valores base.
- `button`: Un botón genérico sin acción automática (muy usado para darle funcionalidad posterior con JavaScript).
- `image`: Funciona igual que un 'submit', pero usa una imagen suministrada mediante `src` como cuerpo del botón.

### 📂 Agrupación y Listas Desplegables:
Además de la etiqueta `<input>`, existen otras etiquetas esenciales para estructurar correctamente tu formulario:
- `<fieldset>`: Dibuja un recuadro que agrupa visual y semánticamente campos de formulario lógicamente relacionados.
- `<legend>`: Actúa como el título descriptivo del recuadro creado por `<fieldset>`.
- `<select>`: Genera una lista desplegable (un menú clásico *dropdown*).
- `<option>`: Representa cada una de las opciones a elegir dentro de un `<select>`. El atributo `value=""` contiene el dato real que se enviará al servidor, mientras que el texto dentro de la etiqueta es la versión legible para el usuario.

### 🛡️ Atributos para Validación y Usabilidad:
HTML5 nos permite validar, pre-configurar y mejorar la usabilidad de los campos sin necesidad de usar JavaScript adicional:
- `required`: Vuelve el campo completamente obligatorio. El formulario mostrará un error y no se enviará si este campo no ha sido rellenado.
- `minlength` / `maxlength`: Limita la cantidad mínima y máxima de caracteres permitidos en un campo de texto (ej. para contraseñas o nombres de usuario).
- `min` / `max`: Establece el límite o rango permitido para un valor. Aplica tanto a inputs numéricos como a selectores de fecha (`<input type="date">`).
- `step`: Establece el intervalo o "saltos" válidos para un número (ej. con `step="5"` solo se podrán seleccionar números en múltiplos de 5).
- `pattern`: Obliga a que el valor ingresado siga un formato específico usando una Expresión Regular (ej. `pattern="[0-9]{10}"` para exigir exactamente 10 dígitos).
- `value`: Fija el valor predeterminado del campo. Para inputs vacíos es un valor por defecto; para `radio` y `checkbox` es indispensable para identificar qué opción eligió el usuario.
- `placeholder`: Muestra un texto tenue de "ayuda" o "ejemplo" dentro de un campo (como "Contraseña"), que desaparece visualmente en cuanto el usuario empieza a escribir en él.

## Clase 12: Tablas
👉 <a href="./03_formularios_tablas/clase_12_Tablas.html" target="_blank">Ver código de la clase en pestaña nueva</a>

Las tablas en HTML sirven para mostrar datos ordenados en filas y columnas, casi tal cual lo harías en un cuaderno cuadriculado o en Excel. Para que sean fáciles de leer (tanto para los humanos como para los navegadores), usamos piezas de rompecabezas que le dan una estructura muy clara (cabeza, cuerpo y pie).

### 🧩 Las Partes de la Estructura (El Contenedor)
| Etiqueta | ¿Qué hace? | Analogía Fácil |
| :--- | :--- | :--- |
| `<table>` | **El Tablero Principal:** Es la caja maestra. Todo absolutamente todo lo que pertenezca a la tabla, va aquí adentro. | Es como decirle al navegador: "¡A partir de aquí, voy a dibujar una cuadrícula!". |
| `<thead>` | **La Cabeza:** Envuelve la parte de arriba donde pones los títulos (Ej. "Nombre", "Precio"). | Es la portada de la tabla, los nombres de lo que cada columna significa. |
| `<tbody>` | **El Cuerpo:** Es el corazón de la tabla. Aquí guardas la información principal, una fila tras de otra. | Son todos tus apuntes y datos reales rellenando la cuadrícula. |
| `<tfoot>` | **El Pie:** Va al puro final de la tabla, y se utiliza frecuentemente para mostrar el resumen de los datos o las sumatorias matemáticas. | Imagina un recibo de supermercado: este sería el lugar que dice "Total: $50". |

### 🧱 Construyendo Celdas y Renglones
Una vez tienes el contenedor, vas llenándolo construyendo renglones, y dentro de cada renglón, poniendo cajoncitos (celdas):
- `<tr>` *(Table Row)*: **El Renglón (Fila).** Corta la tabla de izquierda a derecha. Es obligatorio crear un renglón antes de poder meter contenido. 
- `<th>` *(Table Header)*: **La Celda Importante (Título).** Cajón que va usualmente dentro de `<thead>` para los títulos. HTML le pone el texto en negrita y lo centra solito para que resalte.
- `<td>` *(Table Data)*: **La Celda Normal (Datos).** Cajón que porta la información del día a día, ideal para meter texto, números o lo que necesites en tu fila habitual.

### 🪄 Atributos o Poderes Especiales
- `colspan`: Permite que un solo cajón o celda (`<td>`) se expanda horizontalmente y ocupe el espacio de múltiples columnas. *En clase pusimos `<td colspan="2">Total</td>`, uniendo los espacios de "Producto" y "Precio" para poner una sola palabra*.
- `border`: Se utilizó visualmente `<table border="20">` para ponerle líneas muy gruesas a la tabla y que veamos cómo se dibuja en pantalla. *Nota: Hacerlo así es la forma "clásica", hoy en día pintar colores y bordes debería hacerse con hojas de estilo CSS.*

---

## Clase 13: Imágenes Responsivas
👉 <a href="./04_Contenido_Multimedia/clase_13_Imagenes_Resposnvias.html" target="_blank">Ver código de la clase en pestaña nueva</a>

Técnicas para que las imágenes se adapten visualmente a diferentes pantallas y carguen de forma optimizada, mejorando el rendimiento de la página, la experiencia del usuario y manteniendo la accesibilidad.

### 📐 Atributos para Adaptabilidad (`<img>` combinando `srcset` y `sizes`):
Para lograr responsividad real de manera inteligente (sin tener que usar CSS de cambio de imágenes), se usa la etiqueta `<img>` combinando atributos clave al mismo tiempo:

1. **La base de accesibilidad (`src` y `alt`):**
   - `src="..."`: Apunta al archivo. Funciona como valor de respaldo si todo lo demás falla.
   - `alt="..."`: **Es vital para la accesibilidad.** Ofrece una descripción clara y breve en caso de que la imagen no cargue, aporta contexto y es lo que "leen" los lectores de pantalla para personas con discapacidad visual.
2. `srcset="..."`: Es tu "menú de resoluciones por ancho". 
   - En este atributo pones la lista disponible de una misma imagen, por ejemplo: `IMG/hero-400.jpg 400w, IMG/hero-800.jpg 800w`.
   - La **`w`** le dice al navegador el ancho real y físico de cada archivo (ej: `400w` = 400 píxeles de ancho). El navegador se encarga de escoger el archivo de mejor calidad con el menor peso posible.
3. `sizes="..."`: Son las "reglas y presuposiciones del tamaño visual". 
   - Describe el espacio efectivo que ocupará la imagen en el viewport según CSS. Ej: `sizes="(max-width: 600px) 100vw, 50vw"`.
   - Significa: *"Si la pantalla es de hasta 600px de ancho (`max-width: 600px`), esta imagen debe ocupar todo el ancho del viewport (`100vw`). Para todo el resto de pantallas más grandes, debe medir la mitad (`50vw`)."*

### 🖼️ La Etiqueta `<picture>` combinada con `<source>` (Dirección de Arte):
Este enfoque se usa **cuando necesitas archivos distintos por dispositivo con reglas claras** (Ej: En desktop quieres mostrar un banner apaisado, pero en un móvil ocupas cargar una foto vertical).
- `<source>`: Trabaja en base a la etiqueta superior `<picture>`, pero requiere la combinación de estos dos atributos:
  1. `media`: Estableces la condición (ej: `media="(min-width: 768px)"`).
  2. `srcset`: Funciona como *"Entonces usa este archivo exacto"*.
- **La regla de caída libre:** El navegador lee los `<source>` de arriba hacia abajo, y se queda estrictamente con el primero que cumpla la regla. 
- **La red de seguridad (Fallback Mobile):** Siempre debe estar presente una etiqueta `<img>` como último hijo de `<picture>`. Actúa como el *fallback*. **La mejor práctica es colocar aquí la versión más ligera pensada para móviles**. Al crecer el ancho de la pantalla, se "activan" los `<source>` superiores.

### ⚡ Atributos físicos y de Rendimiento:
Ajustan la descarga y el procesamiento para garantizar velocidad y fluidez:

| Atributo | ¿Para qué sirve? (Explicación Sencilla) |
| :--- | :--- |
| `width="600"` y `height="400"` | Establecer dimensiones fijas evita cambios de layout inesperados mientras las imágenes cargan. Al reservar el espacio exacto, reduces el **reflujo** (reflow) y mejoras la experiencia de usuario. |
| `loading="lazy"` | **"Carga Perezosa":** Evita que la imagen se descargue si el usuario no ha bajado (hecho scroll) lo suficiente para verla. Mejora drásticamente la percepción de velocidad. |
| `decoding="async"` | **"Procesamiento en paralelo":** Impide que la decodificación de la imagen bloquee el renderizado. La página se mantiene fluida y el texto continúa mostrándose mientras la imagen se procesa de fondo. |

---

## Clase 14: Videos y Audio
👉 <a href="./04_Contenido_Multimedia/clase_14_Videos_Audio/clase_14_Videos_Audio.html" target="_blank">Ver código de la clase en pestaña nueva</a>

Gestión e inserción de contenido multimedia de forma nativa e incrustada.

### 🎥 Etiqueta `<video>`
Permite insertar videos directamente. Se recomienda alojar etiquetas `<source>` internas para ofrecer múltiples formatos (MP4, MOV) maximizando la compatibilidad.
- `controls`: Habilita la barra de controles nativa del navegador (play, pausa, pantalla completa, etc).
- `poster="..."`: Define una imagen de portada ("thumbnail") que se muestra antes de darle play al video.
- `autoplay`: Inicia la reproducción de forma automática.
- `loop`: Hace que el video se repita en bucle inifinito.
- `muted`: El video iniciará silenciado.
- `preload`: Indica al navegador cómo precargar el recurso:
  - `metadata`: Descarga solo la información técnica (duración, dimensiones). Ideal para no gastar datos de más.
  - `auto`: Descarga agresivamente el video creyendo que el usuario lo reproducirá.
  - `none`: No precarga absolutamente nada hasta que el usuario decida dar play.

### 🎵 Etiqueta `<audio>`
Inserta pistas de audio de manera semántica, de comportamiento similar a `<video>`.
- `controls`: Muestra el reproductor nativo del navegador.
- Incluyen soporte para `preload` de manera idéntica. Soporta formatos como MP3, WAV, OGG usando múltiples `<source>`.

### 🖼️ Etiqueta `<iframe>` (Incrustaciones)
Se usa extensamente para embeber reproductores profesionales de terceros (como YouTube, Vimeo, Spotify), mapas o interactivos. A diferencia de video/audio que cargan un archivo multimedia, `iframe` incrusta una "ventana" conection hacia otra página web independiente.

**Atributos clave (comunes en incrustaciones como YouTube):**
- `src`: La URL estricta o fuente directa del contenido externo a proyectar.
- `width` y `height`: Establecen las dimensiones específicas del marco de visualización.
- `title`: **Obligatorio para accesibilidad.** Proporciona un título al marco (ej. "YouTube video player") para que los lectores de pantalla puedan leer de qué trata el contenido incrustado antes de interactuar con él.
- `frameborder="0"`: Atributo clásico para eliminar el borde predeterminado de la ventana embebida (actualmente se prefiere quitar el borde por CSS con `border: none;`).
- `allow="..."`: Control de políticas y seguridad (Feature Policy). Aquí delimitas con reglas estrictas a qué sensores e interacciones tiene acceso el iframe externo dentro de tu página. Ejemplos de permisos incluídos:
  - `autoplay`: Para reproducirse de forma independiente.
  - `clipboard-write`: Para poder copiar cosas a tu portapapeles (ej. si el reproductor tiene un botón de "copiar enlace").
  - `gyroscope` y `accelerometer`: Útil en videos 360 en móviles.
  - `picture-in-picture`: Habilita al incrustado crear una ventana flotante del video en el navegador.
- `allowfullscreen`: Concede explícitamente el permiso fundamental para que el video o mapa ocupe toda la pantalla nativa del usuario cuando use la interfaz de la otra página.
- `referrerpolicy="..."`: Reglas de confidencialidad que le dicen al navegador cuánta información "huella" o rastreo enviar respecto a tu dominio cuando pide y carga los recursos que provienen del iframe cruzado hacia los servidores remotos.

---

## Clase 15: Accesibilidad y Atributos ARIA
👉 <a href="./05_Accesibilidad/clase_15_Accesibilidad/index.html" target="_blank">Ver código de la clase en pestaña nueva</a>

**ARIA (Accessible Rich Internet Applications)** es una especificación de atributos dedicados exclusivamente a mejorar la accesibilidad de las páginas web. Su propósito fundamental es inyectar contexto y semántica a elementos HTML que usualmente no la poseen por diseño visual, siendo indispensables para usuarios que emplean **lectores de pantalla**.

### 🏷️ Atributo `aria-label`
Añade una descripción o "etiqueta" invisible al ojo humano, pero pronunciable y comprensible para lectores de pantalla. Se utiliza mandatoriamente en componentes que no poseen texto textual visual que explique su propósito.
- **Caso de uso - Botón con ícono sin texto:** Si diseñas un botón guiado puramente por su icono (el carácter o imagen de "✕"), el lector de pantalla leerá basura a menos que uses: `<button aria-label="Cerrar ventana">✕</button>`.
- **Caso de uso - Navegación sin título visible:** Facilita la comprensión de la estructura de distintos menús. Ejemplo en clase: `<nav aria-label="Menú pricipal">`.
- **Caso de uso - Input cuando el label no es suficiente:** Cuando por diseño visual el `<input>` (como la barra de buscar superior) no va a estar acompañado por la etiqueta normal `<label>`, debes informarlo así: `<input type="search" aria-label="Buscador de productos" />`.

### 🔗 Atributo `aria-describedby`
Actúa creando un "vínculo" entre un elemento interactivo o visual principal y un texto extendido que habita en otra parte del documento. Su atributo debe empatar exactamente con el `id` del segundo elemento, forzando a que sus descripciones se junten a nivel de accesibilidad.
- **Caso de uso - Campo con instrucciones de contraseñas:** A diferencia del simple label "Contraseña", si tu password requiere reglas, usas `<input id="password" aria-describedby="password-help" />`. Esto fuerza al lector a bajar y leer el `<small id="password-help">Mínimo 8 caracteres, incluya números y letras</small>` antes de que el usuario decida escribir en el campo de texto.
- **Caso de uso - Imagen compleja con descripción:** Si el atributo `alt` se queda corto o necesitas relatar los resultados de un gráfico. Se usa `<img src="grafico.jpg" alt="Ventas 2024" aria-describedby="grafica-descripcion" />` que engrana con un párrafo inferior de análisis (`<p id="grafica-descripcion">Las ventas aumentraron un 40% en el Q1</p>`).

### 🎭 Atributo `role`
Te permite dictarle al navegador la "naturaleza", propósito específico o personalidad de un contenedor genérico (como lo son los elementos abstractos estilo `<div>` o `<span>`). Sobreescribe la carencia de semántica nativa del elemento.
- **Caso de uso - Región principal ("main"):** Utilizando `<div role="main">...</div>` definimos programáticamente a un contendor como el eje importante del sitio, dándole la estricta cualidad de un tag `<main>`.
- **Caso de uso - Alertas importantes ("alert"):** Este es un rol crítico que produce una "Zona Vivo" (*Live Region*). Al asignar un `<div role="alert">¡Tu sesión expirará en 5 minutos!</div>`, el navegador interrumpe inmediatamente el hilo narrativo del software del usuario con discapacidad para anunciarle esta advertencia urgente y vital que apenas se dibujó sobre la pantalla.

---

## Clase 16: SEO (Search Engine Optimization)
👉 <a href="./05_Accesibilidad/clase_16_SEO/index.html" target="_blank">Ver código de la clase en pestaña nueva</a>

El SEO engloba las reglas y buenas prácticas para indicarle correctamente a motores de búsqueda (como Google) cómo leer, entender y posicionar nuestra web en sus resultados orgánicos. El desarrollo se divide en dos frentes clave:

### 🧠 1. Meta Tags Esenciales (en el `<head>`)
Es un lenguaje técnico invisible para el usuario de la página, pero crítico para el rastreador de Google (Crawler).
- `<html lang="es">`: Declarar adecuadamente el idioma base para ubicar tu sitio geográficamente.
- `<meta charset="UTF-8">`: Obligatorio para evitar errores de renderizado de acentos o "ñ".
- `<meta name="viewport" ...>`: **CRÍTICO**. Le dice al navegador que se adapte a móviles de manera interactiva. (Google indexa y puntúa la web móvil primero, "mobile-first indexing").
- `<title>`: **El factor on-page más importante de todos.** 
  - Reglas: Tratar de estar entre los 50-60 caracteres, siempre debe incluir tu palabra clave o "keyword" principal y debe ser único repetible en todo tu sitio.
- `<meta name="description">`: El texto tipo subtítulo que aparece en la búsqueda de Google. 
  - Reglas: Entre 150-155 caracteres. No debe repetir textualmente lo del título (es para ampliar el texto en un "Llamado a la acción" descriptivo) y usa palabras clave secundarias.
- `<meta name="keywords">`: Hoy en día tiene muy poco peso de posicionamiento real, pero aloja de 5 a 10 términos separados por comas que resumen el archivo.
- `<meta name="author">`: Empresa o persona dueña intelectual de la web.
- `<meta name="robots" content="...">`: Órdenes estrictas hacia la indexación:
  - `index` / `noindex`: Decidir si esa página específica es pública frente a Google o permanece oculta en búsquedas (ej. páginas de panel "admin", "carrito de pago" se usan en `noindex`).
  - `follow` / `nofollow`: Le dices a los robots de Google si quieres que rastreen los "links" hacia afuera de tu página recomendando otro sitio. Todo link absorbe un poco de tu "Link juice" (autoridad); ten cuidado a quién apuntas con follow.
- `<link rel="canonical" href="...">`: Evita que Google te penalice por percibir "contenido duplicado" cuando tu página se puede cargar o accesar desde diferentes versiones de enlace. Sirve de megáfono para decirle a Google cuál es tu Link principal y oficial.
  - **¿Cuál es el problema?**: Sin darte cuenta tu misma página web puede abrirse con `http://sitio.com`, `https://sitio.com`, `https://www.sitio.com`, o cuando a alguien le llega un link de tu publicidad tipo `https://sitio.com/?utm_source=facebook`. Para Google, **¡todas y cada una de esas son páginas web distintas con idéntico contenido!**, por lo que te castiga el posicionamiento pensando que copiaste artículos.
  - **La Solución (Ejemplo):** Si decidiste a nivel de marca corporativa que tu link debe ser limpio. Agregas esta etiqueta en la cabecera e ignoras de dónde venga la URL, siempre declararás a Google el original, así: `<link rel="canonical" href="https://ejemplo.com/pagina-principal/" />`. Con esto unificas la fuerza de redirección y limpias el SEO.

#### 🌐 Open Graph y Redes Sociales
Controlan exactamente qué tarjeta gráfica, título y descripción se mostrará cuando una persona pegue la URL de tu sitio en un chat de WhatsApp, LinkedIn, X o Facebook. Se escriben mediante su `<meta property="og:...">`: `og:title`, `og:description`, `og:url` y `og:type` (`website`, `article`).
- `og:image`: Tu portada ideal compartible debe ser de `1200x630px` y llamativa.

### 🏗️ 2. Estructura y Jerarquía de Contenidos (en el `<body>`)
El cómo estructures tu código de contenido define cuánto te premiará Google.

#### Textos y Títulos:
- **La regla de oro del `<h1>`**: Sólo debe existir un `<h1>` absoluto por archivo HTML. Resume de qué va entera la página y porta tu palabra clave Target.
- **Mantener Jerarquía**: No puedes saltar el esquema, en orden debes pasar de H1 hacia H2, luego H3, etc (usados para alojar palabras clave secundarias).
- Párrafos limpios y fáciles de leer de no más de 4 renglones. *Cuidado*: Inyectar infinitamente tu palabra clave en el párrafo para engañar a Google ("Keyword stuffing") causa castigo y penalización inmediata de tu sitio.

#### Optimización Fundamental de Imágenes (`<img>`):
- **Nombres de archivo reales**: No subas algo llamado "Foto_10.jpg". Escribe con guiones de qué trata la imagen en su nombre orgánico: `producto-botella-azul-2025.jpg`.
- **Formato**: Menos de 100KB utilizando el codec estandar optimizado en la web `WebP`. (Intenta mitigar o evitar JPEG/PNG gigante).
- **Atributos que no deben faltar**: `width` y `height` limitan que la pantalla parpadeé mientras la página se carga ("Layout Shift"), `alt` detalla a Google lo que significa e impulsa el SEO de imágenes, y `loading="lazy"` mejora la velocidad del portal web.

#### Link Building Interno:
- Distribuyen tu propia validación entre artículos. 
- **Jamás uses enlaces genéricos**, por ejemplo un `<a href="...">Click Aquí</a>` no transfiere datos.
- **Hazlo descriptivo**, un texto correcto es `<a href="...">Guía completa de instalación del producto</a>`.

#### Interacción, permanencia y Retención:
Google analiza con IA cuánto tiempo pasa un usuario en tu web antes de irse. Retén su atención:
- Listas con etiquetas `<ul>`, `<li>`: Google las clasifica excelente e incluso las muestra directo en Google.
- **`<video>`**: Un video incrustado hace que las personas deban quedarse estáticas en el sitio generando alta retención, subiéndote puntos técnicos de manera pasiva.
- **Sección FAQ**: Crear en tu `<main>` un área dedicada de "Preguntas Frecuentes" con un `<section>` eleva masivamente la probabilidad de aparecer en los "Snippets o Cajas de respuestas directas de Google".

---


> [!TIP]
> Usar semántica es como ponerle etiquetas a las cajas en una mudanza: ayuda a que Google y los lectores de pantalla sepan exactamente qué hay dentro sin tener que adivinar.

---
*Generado para el Curso de HTML - Platzi*