# 🖼️ El Elemento Imagen en HTML (`<img>`)

La etiqueta `<img>` se utiliza para desplegar elementos visuales en un sitio web. Al ser una etiqueta **self-closing**, no requiere una etiqueta de cierre.

---

## 🏗️ Anatomía y Atributos Técnicos

Una etiqueta de imagen completa se compone de los siguientes atributos:



* **`src` (Source):** Especifica la ubicación del archivo de imagen.
  * *Misma ubicación:* `src="logo.png"`
  * *En subcarpetas:* `src="assets/img/logo.png"`
* **`alt` (Alternative Text):** Texto descriptivo que no se muestra visualmente, pero es interpretado por tecnologías de asistencia (lectores de pantalla) y motores de búsqueda (SEO).
* **`width` / `height`:** Atributos de dimensionamiento del tamaño de la imagen, medidos nativamente en píxeles.

---

## 🛠️ Ejemplos de Código Prácticos

### 🔹 Ejemplo 1: Imagen básica en la misma carpeta con dimensiones
```html
<img src="falafel.jpg" alt="Plato de falafel crujiente con especias" width="400" height="300">
```

### 🔹 Ejemplo 2: Imagen organizada dentro de carpetas del proyecto
```html
<img src="assets/images/pasta-salad.jpg" alt="Ensalada de pasta con muzzarella" width="500">
```