# 🛠️ Guía de Etiquetas HTML Fundamentales

HTML ofrece una amplia variedad de etiquetas. Como desarrollador, estas son las herramientas más comunes que utilizarás para dar estructura y significado a tu contenido.

---

## 🏗️ 1. Estructura y Texto Básico

### 📝 Encabezados (`<h1>` a `<h6>`)
Se utilizan para establecer la jerarquía y los títulos de la página.
* **`<h1>`**: Título principal (solo debe haber uno por página).
* **`<h6>`**: Encabezado de menor nivel.

### 📝 Párrafos (`<p>`)
Se utilizan para bloques de texto. 
> ⚠️ **Nota Importante:** El navegador ignora los saltos de línea y espacios extra dentro de una etiqueta `<p>`.

### ⚡ Saltos de Línea (`<br>`)
Para forzar un salto de línea dentro de un texto, se usa la etiqueta `<br>`. 
* Es una etiqueta **self-closing** (no requiere cierre).

---

## 🧠 2. Formato de Texto: Semántica vs. Estilo

En HTML moderno, es vital elegir etiquetas que describan el **significado** del contenido, no solo su apariencia.

### 💪 Importancia vs. Resaltado
* **`<strong>`**: Indica que el texto tiene una **importancia especial** o urgencia. El navegador lo pone en negrita.
* **`<b>`**: Solo pone el texto en negrita para llamar la atención **sin** añadir importancia semántica.

### ✨ Énfasis vs. Cursiva
* **`<em>`**: Se usa para **enfatizar** una palabra (cambia el sentido de lo que se dice). El navegador lo pone en cursiva.
* **`<i>`**: Se usa para texto "desplazado": términos técnicos, títulos de obras, pensamientos o palabras en otro idioma.



---

## 📋 3. Listas en HTML

Existen dos formas principales de agrupar elementos relacionados:

### 🔹 Listas Desordenadas (`<ul>`)
Muestran viñetas o puntos. Se usan cuando el orden no es relevante.
```html
<ul>
    <li>Primer elemento</li>
    <li>Segundo elemento</li>
</ul>
```

### 🔢 Listas Ordenadas (`<ol>`)
Muestran números o letras. Se usan para pasos, rankings o procesos.
```html
<ol>
    <li>Paso 1</li>
    <li>Paso 2</li>
</ol>
```

### 📦 4. Contenedores y Notas
🔲 Etiqueta `<div>` (Contenedor Genérico)
Define una división o sección en el documento.

* **Función:** Actúa como una "caja" para agrupar otros elementos.

* **Estilo:** Por defecto es invisible; su poder real aparece cuando le aplicamos CSS.

💬 Comentarios (``)
Notas ocultas que no se muestran en el navegador.

* **Uso:** Explicar el código a otros desarrolladores o a tu "yo" del futuro.

Sintaxis: ``

### 🎯 Resumen de "Reglas de Oro"

* Jerarquía: No saltes niveles de encabezados (no pases de `<h1>` a `<h3>` directamente).

* Semántica: Usa `<strong>` y `<em>` si quieres que los lectores de pantalla y buscadores entiendan que el texto es importante.

* Divs: No abuses de ellos; úsalos solo cuando necesites agrupar para aplicar estilos o lógica.

### 🏛️ Refrán del Programador: 
"Escribe código para humanos, no solo para máquinas". El uso correcto de etiquetas semánticas hace que tu web sea accesible y profesional.