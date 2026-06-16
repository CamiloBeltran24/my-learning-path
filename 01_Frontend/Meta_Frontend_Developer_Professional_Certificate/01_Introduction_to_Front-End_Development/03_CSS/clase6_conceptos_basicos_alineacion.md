# ⚖️ Conceptos Básicos de Alineación Horizontal en CSS

La alineación en el desarrollo web se divide en dos categorías críticas: la alineación del contenido de texto y la alineación estructural de los elementos HTML (cajas).

---

## 📝 1. Alineación de Texto (`text-align`)

La propiedad `text-align` controla el comportamiento de los caracteres y palabras dentro de un contenedor de texto.



### 📋 Valores Disponibles:
* **`left`**: Alineación a la izquierda. Es el valor predeterminado para sistemas de lectura *Left-to-Right* (LTR).
* **`right`**: Alineación a la derecha. Predeterminado para sistemas *Right-to-Left* (RTL) como el árabe.
* **`center`**: Distribuye el texto de forma equidistante desde el centro del renglón.
* **`justify`**: Expande los espacios interpalabras para que cada línea de texto comparta exactamente la misma anchura horizontal.

```css
p {
    text-align: center;
}
```

---

## 📦 2. Alineación Central de Elementos de Bloque

Alinear una caja completa (como un `<div>`) en el centro de la pantalla requiere aplicar las reglas del Modelo de Caja. El navegador necesita saber las dimensiones exactas y cómo distribuir el espacio sobrante.

### ⚙️ Las Dos Condiciones Obligatorias:
1. **`width`**: Se debe especificar un ancho menor al 100% del contenedor padre.
2. **`margin: auto`**: Ordena al navegador calcular el espacio restante y distribuirlo equitativamente en los laterales.

```css
/* Contenedor Padre para visualizar el límite espacial */
.parent {
    border: 4px solid red;
}

/* Caja de datos centrada mediante márgenes automáticos */
.child {
    width: 50%;
    padding: 20px;
    border: 4px solid green;
    
    /* Centrado horizontal quirúrgico */
    margin-left: auto;
    margin-right: auto;
}
```

---

## 🚨 3. Centrado de Elementos en Línea (`<img>`)

Los elementos con flujo nativo en línea (*inline*) ignoran los márgenes automáticos laterales. Para centrar componentes como una imagen (`<img>`), se debe forzar un cambio en su comportamiento de flujo.

### ✅ Solución de Ingeniería:
Se debe aplicar la propiedad `display: block` para transformar la imagen en un elemento de nivel de bloque antes de declarar sus márgenes.

```html
<div class="parent">
    <img src="restaurant-plate.png" class="child" alt="Plato Little Lemon">
</div>
```

```css
.child {
    display: block;  /* Paso indispensable: Rompe el flujo en línea */
    width: 50%;
    margin: auto;    /* Aplica auto a izquierda y derecha */
}
```

---

## 📡 4. Desplazamiento Lateral y Envoltorio (`float`)

La propiedad `float` posiciona un elemento en los extremos horizontales del contenedor padre y permite que el contenido de texto fluya de manera orgánica a su alrededor.

```css
/* Empuja el elemento a la derecha y hace que el texto lo envuelva por la izquierda */
.child-image {
    float: right;
}
```

---

## 🎯 Resumen Técnico para el Parcial

| Objetivo de Diseño | Propiedad Correcta | Requisito Previo |
| :--- | :--- | :--- |
| Centrar las palabras de un párrafo. | `text-align: center;` | Ninguno (Afecta solo al texto interno). |
| Centrar un contenedor `<div>`. | `margin: auto;` | Debe tener un `width` definido. |
| Centrar una foto `<img>`. | `margin: auto;` | Requiere `display: block;` y un `width`. |
| Hacer que el texto rodee una foto a la derecha. | `float: right;` | El texto debe ser un elemento hermano en el HTML. |

---

> 🏛️ **Refrán del Programador:** *"El espacio vacío no es un desperdicio, es equilibrio"*. 
> Dominar `margin: auto` significa entender que le estás permitiendo al propio navegador hacer la matemática perfecta por ti, empujando la caja desde ambos lados con la misma fuerza para lograr una simetría profesional.