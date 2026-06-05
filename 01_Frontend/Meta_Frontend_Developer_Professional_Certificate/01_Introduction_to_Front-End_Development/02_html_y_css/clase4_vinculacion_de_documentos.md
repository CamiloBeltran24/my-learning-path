# 🔗 Enlaces y Construcción de un Website

Un **Website** no es más que una colección organizada de múltiples páginas web (`.html`) conectadas entre sí mediante enlaces.

---

## ⚓ La Etiqueta de Anclaje `<a>` (Anchor Tag)

La etiqueta `<a>` se utiliza para crear hipervínculos en la web. Su anatomía técnica es la siguiente:



* **Atributo `href`:** (*Hypertext Reference*) Especifica el destino del enlace (un archivo local o una URL externa).
* **Texto del Link:** Es el texto visible y cliqueable que el navegador suele pintar de color azul por defecto.

---

## 🛠️ Caso Práctico: Conectando dos páginas locales

Para el proyecto de restaurante **Little Lemon**, estructuramos un sitio web de dos páginas en la misma carpeta:

### 📍 1. Página Secundaria: `location.html`
Contiene la información de la dirección física del restaurante.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Little Lemon - Location</title>
    </head>
    <body>
        <h1>Our Location</h1>
        <p>123 Rome Road, Main Districts capital city.</p>
    </body>
</html>
```

### 🏠 2. Página Principal: index.html
Contiene el enlace puente que apunta y conecta hacia la página de ubicación.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Little Lemon - Home</title>
    </head>
    <body>
        <h1>Welcome to Little Lemon</h1>
        <p>The best Mediterranean food in town.</p>
        
        <a href="location.html">Our Location</a>
    </body>
</html>
```