# 📨 Formularios en HTML (`<form>`)

Los formularios son la herramienta principal de HTML para recolectar datos del usuario e iniciar la interacción activa con el servidor (E-commerce, Logins, Registros).

---

## 🧱 Estructura de Control de un Formulario

Toda la captura de datos se encierra dentro de la etiqueta `<form>`. Su comportamiento se rige por dos atributos críticos:

* **`action`**: Define la URL o ruta del servidor a donde se enviará la petición HTTP con los datos. Si se omite, recarga la misma página.
* **`method`**: Especifica el método HTTP de envío:
  * `GET`: Recupera información. Los datos viajan expuestos en la URL.
  * `POST`: Envía/Guarda datos en el servidor de forma segura y oculta.

---

## 🛠️ Campos de Entrada Basados en `<input>`

La etiqueta `<input>` es **self-closing** y cambia su comportamiento visual y técnico mediante el atributo `type`.

### 🗂️ Tipos de Inputs más Comunes:

| Atributo `type` | Representación Visual | Uso Común |
| :--- | :--- | :--- |
| `type="text"` | Caja de una sola línea limpia. | Nombres de usuario, búsquedas. |
| `type="password"` | Caja que **enmascara** el texto (puntos). | Contraseñas y datos sensibles. |
| `type="checkbox"` | Casilla cuadrada de selección múltiple. | Aceptar términos, selección de gustos. |
| `type="radio"` | Botón redondo de **selección única** por grupo. | Selección de género, métodos de pago. |
| `type="submit"` | Botón nativo que dispara la acción del form. | Botón de "Enviar" o "Iniciar Sesión". |
| `type="email"` / `type="number"` / `type="file"` | Inputs especializados con validación nativa. | Correos, edades y subida de archivos. |

> 💡 **Buenas Prácticas:** Siempre acompaña tus campos con una etiqueta `<label>` para describir el campo de texto, mejorando drásticamente la usabilidad y la accesibilidad de la página.

---

## 📝 Elementos Especiales (Sin etiqueta `<input>`)

No todos los campos de un formulario utilizan la etiqueta input. HTML proporciona selectores y bloques de texto multilínea específicos:

### 1. Cuadro de Texto Extenso (`<textarea>`)
Se usa para comentarios o descripciones largas que requieren múltiples líneas de espacio.

```html
<label>Comentarios adicionales:</label>
<textarea></textarea>
```

### 2. Menús Desplegables (`<select>` y `<option>`)
Permite al usuario elegir un elemento de una lista colapsable predefinida.

```html
<label>Elige tu plato:</label>
<select>
    <option>Falafel</option>
    <option>Pasta Salad</option>
</select>
```

### 🎯 Ejemplo Práctico: Formulario de Login Estándar

```html
<form action="/login-process" method="POST">
    <label>User Name</label>
    <input type="text" name="username" />

    <label>Password</label>
    <input type="password" name="userpass" />

    <input type="submit" value="Log In" />
</form>
```