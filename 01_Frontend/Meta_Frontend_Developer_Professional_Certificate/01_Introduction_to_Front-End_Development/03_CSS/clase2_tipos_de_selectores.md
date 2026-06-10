# 🎛️ Guía Completa de Selectores en CSS

En CSS, los selectores definen el alcance de nuestras reglas de diseño. Podemos ser tan amplios o tan específicos como el proyecto lo requiera.

---

## 🧩 1. Selectores Básicos

### 📝 Selector de Elemento (Tipo)
Afecta a todas las etiquetas del tipo especificado en el documento HTML.
* **Sintaxis:** Nombre directo de la etiqueta.
```css
p {
    color: blue;
}
```

### 🏷️ Selector de Clase
Afecta a todos los elementos que compartan el atributo `class`. Se identifica con un punto (`.`).
```css
.navigation {
    background-color: lightgrey;
}
```

### 🆔 Selector de ID
Afecta a un único elemento irrepetible dentro de la página mediante el atributo `id`. Se identifica con una almohadilla (`#`).
```css
#main-header {
    color: darkblue;
}
```

---

## ⚙️ 2. Selectores de Alta Especificidad

### 🔲 Elemento con Clase Específica
Filtra un elemento por su etiqueta y exige que contenga una clase determinada.
* **Ejemplo:** Selecciona únicamente los `<p>` que tengan la clase `introduction`.
```css
p.introduction {
    font-size: 18px;
}
```

### 🌲 Selector Descendiente (Espacio)
Selecciona un elemento que se encuentra anidado dentro de otro, sin importar el nivel de profundidad (hijos, nietos, etc.).
```css
#blog h1 {
    color: crimson;
}
```

### 👶 Selector Hijo Directo (`>`)
Afecta exclusivamente a los descendientes inmediatos (primer nivel de profundidad) del elemento padre.
```css
#blog > h1 {
    border-bottom: 2px solid black;
}
```



---

## 🎯 3. Estados de Interacción: Pseudoclase `:hover`

Las pseudoclases seleccionan elementos basándose en el estado en el que se encuentran debido a la interacción del usuario.

* **`:hover`**: Aplica los estilos de forma temporal únicamente cuando el cursor del ratón se posiciona sobre el elemento.

```css
a {
    color: blue;
    text-decoration: none;
}

/* Cambia a naranja al pasar el mouse */
a:hover {
    color: orange;
    text-decoration: underline;
}
```

---

## 📊 Tabla de Resumen para el Parcial

| Selector | Sintaxis | Ejemplo | Peso / Especificidad |
| :--- | :--- | :--- | :--- |
| **Elemento** | `etiqueta` | `h1` | Bajo (General) |
| **Clase** | `.clase` | `.btn` | Medio (Reutilizable) |
| **ID** | `#id` | `#login-box` | Alto (Único) |
| **Descendiente** | `padre hijo` | `.card p` | Depende de la combinación |
| **Hijo Directo** | `padre > hijo` | `ul > li` | Estricto (1 nivel de profundidad) |
| **Estado** | `selector:estado` | `button:hover` | Dinámico |

> 🏛️ **Refrán del Programador:** *"Al que madruga, Dios lo ayuda... pero en CSS, el que es más específico es el que gana"*. 
> Si aplicas un estilo con un selector de ID, este siempre le ganará a los estilos declarados mediante selectores de tipo o de clase debido a las reglas de especificidad del navegador.