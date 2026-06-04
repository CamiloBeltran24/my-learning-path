# 🏗️ Estructura Básica de HTML

Todo documento HTML sigue una jerarquía lógica de etiquetas para que el navegador sepa cómo dibujar la información.

## 🏁 Componentes de Inicio

* **`<!DOCTYPE html>`**: Indica que el archivo utiliza el estándar HTML5.
* **`<html lang="en">`**: Es el contenedor raíz. El atributo `lang` ayuda a los motores de búsqueda a identificar el idioma del sitio.

---

## 🧠 El bloque `<head>` (La Mente)
Contiene la configuración de la página que el usuario **no puede ver** directamente.
* **`<title>`**: Define el texto que aparece en la pestaña del navegador.

## 👕 El bloque `<body>` (El Cuerpo)
Contiene toda la información **visible** de la página web. 

---

## ✍️ Etiquetas de Texto y Contenido

| Etiqueta | Nombre | Función |
| :--- | :--- | :--- |
| `<h1>` | Heading 1 | Título de máxima importancia (Solo 1 por página). |
| `<h2>` | Heading 2 | Subtítulos para separar secciones. |
| `<p>` | Paragraph | Bloques de texto comunes. |
| `` | Comment | Notas para el desarrollador que el navegador no muestra. |

### 🔍 Ejemplo Práctico del Código:

```html
<body>
    <h1>Our Menu</h1> 
    
    <h2>Falafel</h2> 
    <p>Chickpea, herbs and spices</p> 
    
    <h2>Pasta Salad</h2>
    <p>Lettuce, Vegetables and mozzarella</p>

</body>
```

### 🏛️ Refrán del Desarrollador: 

"El que mucho abarca, poco aprieta".

No uses muchos `<h1>` en una página; mantén la jerarquía clara para que los buscadores y usuarios entiendan tu contenido rápidamente.