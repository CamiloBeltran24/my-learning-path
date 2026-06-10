# 🎨 Texto y Color en CSS

El diseño visual de cualquier sitio web interactivo depende casi al 100% de dos pilares: la correcta manipulación del texto y la gestión semántica del color.

---

## 🌈 1. Modelos de Color en CSS

A partir de CSS3, los desarrolladores disponemos de 5 formas principales para hacer referencia a un color en propiedades como `color`, `background-color` o `border-color`.



[Image of RGB color model additive mixing]


### 🔹 A. Valor RGB (Red, Green, Blue)
Es un modelo aditivo basado en la intensidad de los tres colores primarios de la luz. 
* **Rango:** Cada color se define con un número entre `0` (0% de intensidad) y `255` (100% de intensidad).
* **Ejemplos:**
```css
p {
    color: rgb(255, 0, 0);     /* Rojo Puro */
    color: rgb(0, 0, 0);       /* Negro (Sin Luz) */
    color: rgb(255, 255, 255); /* Blanco (Luz Completa) */
}
```

### 🔹 B. Valor RGBA (RGB + Alpha)
Es una extensión directa de RGB que añade un cuarto canal llamado **Alpha (A)**, el cual controla la opacidad o transparencia del elemento.
* **Rango del Alpha:** Va desde `0.0` (completamente transparente/invisible) hasta `1.0` (completamente opaco/sólido).
```css
div {
    background-color: rgba(255, 0, 0, 0.5); /* Rojo con 50% de transparencia */
}
```

### 🔹 C. Valor HSL (Hue, Saturation, Lightness)
Diseñado para facilitar la visualización mental del color sin depender de combinaciones de luces. Se modela mediante un cilindro tridimensional:



1. **Hue (Tono):** Representa un arcoíris en un círculo completo de `0°` a `360°`. 
   * `0` = Rojo, `120` = Verde, `240` = Azul.
2. **Saturation (Saturación):** La pureza del color desde el centro del círculo hacia el borde. Se mide en porcentaje (`0%` es gris opaco y `100%` es el color a máxima plenitud).
3. **Lightness (Luminosidad):** La cantidad de luz. Se mide de `0%` (negro absoluto en la base) a `100%` (blanco absoluto en la cima). `50%` es el color puro.
```css
h2 {
    color: hsl(120, 100%, 50%); /* Verde Puro y Brillante */
}
```

### 🔹 D. Valor Hexadecimal (Base 16)
Es el estándar más usado en la industria. Usa el sistema numérico del `0` al `9` y de la `A` a la `F` (donde A=10 y F=15). Lleva el prefijo `#` seguido de 6 dígitos agrupados en parejas de dos (`#RRGGBB`).
* **Ejemplo:** El rojo `rgb(255, 0, 0)` se traduce a `#FF0000`.

### 🔹 E. Nombres de Colores Predefinidos
Los navegadores modernos admiten **140 nombres de colores nativos** por conveniencia (ej. `red`, `blue`, `tomato`, `purple`).

---

## ✍️ 2. Manipulación de Texto en CSS

CSS proporciona control absoluto sobre la tipografía mediante propiedades específicas:

### 🔤 Familia y Tamaño (`font-family` y `font-size`)
* **`font-family` (Mecanismo de Respaldo / Fallback):** Como no todos los usuarios tienen las mismas fuentes instaladas, se define una lista ordenada por prioridades separada por comas. Si el sistema no tiene la primera, busca la segunda, y si no, usa la tipografía por defecto del navegador.
* **`font-size`:** Determina las dimensiones físicas de la letra (comúnmente medido en píxeles `px`).

```css
p {
    font-family: "Times New Roman", Calibri, sans-serif;
    font-size: 16px;
}
```

### 🔠 Transformación de Texto (`text-transform`)
Controla el uso de mayúsculas y minúsculas de forma automática, asegurando la consistencia visual sin importar cómo se escribió en el HTML.
* **Valores posibles:** `uppercase` (Todo mayúsculas), `lowercase` (Todo minúsculas), `capitalize` (Primera letra de cada palabra en mayúscula) y `none` (Por defecto).
```css
h3 {
    text-transform: uppercase;
}
```

### 🎨 Decoración de Texto (`text-decoration`)
Permite aplicar líneas adicionales como subrayados o tachados. Se puede escribir en formato abreviado (*Shorthand*) o desglosado propiedad por propiedad:

#### Opción A: Formato Corto (Shorthand)
```css
p {
    /* Línea | Estilo | Color | Grosor */
    text-decoration: underline wavy red 5px;
}
```

#### Opción B: Propiedades Individuales (Longhand)
```css
p {
    text-decoration-line: underline;       /* underline, overline, line-through, none */
    text-decoration-style: wavy;           /* solid, double, dotted, dashed, wavy */
    text-decoration-color: red;
    text-decoration-thickness: 5px;
}
```

---

## 🎯 Resumen para el Parcial

| Propiedad CSS | Propósito | Valores Comunes |
| :--- | :--- | :--- |
| **`color`** | Define el color del texto. | Hex, RGB, RGBA, HSL, Nombres. |
| **`font-family`** | Define la tipografía y sus respaldos. | `"Arial", sans-serif`. |
| **`font-size`** | Modifica el tamaño de la letra. | Píxeles (`px`), `em`, `rem`. |
| **`text-transform`** | Fuerza la capitalización del texto. | `uppercase`, `lowercase`, `capitalize`. |
| **`text-decoration`** | Agrega líneas decorativas al texto. | `underline`, `line-through`, `none`. |

> 🏛️ **Refrán del Programador:** *"Más vale prevenir que lamentar... y una fuente de respaldo siempre debes guardar"*. 
> Al configurar la propiedad `font-family`, nunca dejes una sola opción. Termina siempre tu lista con una familia genérica (como `sans-serif` o `serif`) para garantizar que la estructura visual de tu web no se rompa si el dispositivo del cliente no tiene tu tipografía favorita.