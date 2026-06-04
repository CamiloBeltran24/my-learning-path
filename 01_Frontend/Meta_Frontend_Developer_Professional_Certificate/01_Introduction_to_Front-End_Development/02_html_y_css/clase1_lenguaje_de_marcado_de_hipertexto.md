# 🕰️ Historia y Fundamentos de HTML

Para entender el desarrollo web, debemos conocer sus raíces. HTML no es un lenguaje de programación, sino de **marcado**.

---

## 📅 Un poco de Historia
* **El Creador:** **Sir Tim Berners-Lee**, un físico que trabajaba en el **CERN** (Organización Europea para la Investigación Nuclear).
* **El Hito:** La primera página web se creó a finales de **1990**.
* **El Lanzamiento:** En **1991** se lanzó oficialmente la primera versión de HTML, junto con el primer servidor web y el primer navegador (*Web Browser*).

> 💡 **Relación para examen:** Sir Tim Berners-Lee es el "Padre de la Web". Él creó el idioma (HTML), el traductor (Navegador) y la biblioteca (Servidor).

---

## 📚 ¿Qué significa HTML?
Sus siglas significan **HyperText Markup Language** (Lenguaje de Marcado de Hipertexto).

1. **Hypertext (Hipertexto):** Es un texto que tiene "superpoderes", es decir, contiene enlaces (**links**) que te conectan con otros documentos.
2. **Markup (Marcado):** Se refiere al uso de etiquetas (*tags*) para decirle al navegador qué parte es un título, qué es un párrafo o qué es una imagen.

---

## 🏗️ La Naturaleza de un Archivo HTML
Un archivo HTML es simplemente un **archivo de texto plano** con una estructura específica.

* **Sufijo/Extensión:** Usualmente terminan en `.html`.
* **La Puerta de Entrada:** Cuando entras a un sitio web, el servidor siempre te entregará primero el archivo llamado `index.html`. Es la "portada" por defecto.

---

## 🦴 Anatomía de las Etiquetas (Tags)

Los documentos HTML se construyen con elementos. Casi todos tienen una **etiqueta de apertura** y una **etiqueta de cierre**.

### 1. Etiquetas Estándar
Cierran el contenido como un sándwich:
* `Opening Tag` ───► `<p>` (Apertura)
* `Closing Tag` ───► `</p>` (Cierre - nota la barra inclinada `/`)

**Ejemplo:** `<p> Hola mundo </p>`

### 2. Etiquetas Autoconclusivas (Self-closing)
Son etiquetas que no necesitan una pareja de cierre porque no contienen texto dentro, ellas mismas son el elemento.
* **Salto de línea:** `<br>` o `<br />`
* **Imagen:** `<img>` o `<img />`

---

## 🧩 Elementos Anidados (Nesting)
HTML permite meter elementos dentro de otros. Es como una **Matrioshka (muñeca rusa)**.

```html
<p>Este es un texto con un estilo de <i>cursiva</i> incluido.</p>`
```

#### ⚠️ **Regla de Oro de Sintaxis:**
La etiqueta que se abre de último, es la primera que se debe cerrar. Esto mantiene la jerarquía del documento.

#### ✅ Correcto:
```html
<p> Este es un texto con estilo de <i>cursiva</i> </p>
```
#### ❌ Incorrecto:
```html
<p> Este es un texto con estilo de <i>cursiva </p> </i>
```

## 🎯 Resumen para Parcial

Para dominar HTML, recuerda que la suma de:

* Los Elementos (Contenido).

* Las Etiquetas de apertura y cierre (<tag> y </tag>).

* Los Corchetes angulares (< >).

Componen el Documento HTML, el cual es el encargado de dar vida a la estructura de cualquier página web en el mundo.

#### 🏛️ ***Refrán del Desarrollador***:
"Sin una buena base, no hay edificio que aguante".
HTML es la base sólida y los cimientos de todo el internet.