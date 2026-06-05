# 📊 Tablas en HTML (`<table>`)

El elemento `<table>` nos permite organizar y presentar datos estructurados en un formato de cuadrícula (filas y columnas).

---

## 🏗️ Anatomía de una Tabla

La construcción de una tabla en HTML es fundamentalmente **horizontal**. Primero creamos la fila y luego inyectamos las celdas.



### 🏷️ Etiquetas Clave:
* **`<table>`**: El contenedor padre que define el inicio y fin de la tabla.
* **`<tr>` (Table Row):** Define una fila horizontal completa.
* **`<th>` (Table Header):** Celda de encabezado. Por defecto, el navegador la renderiza en **negrita y centrada**.
* **`<td>` (Table Data):** Celda de datos estándar que contiene el texto o valores del contenido.

---

## 🛠️ Ejemplo de Código Analizado

A continuación se presenta la estructura de un menú de restaurante utilizando una tabla limpia:

```html
<table>
    <tr>
        <th>Dish</th>
        <th>Price</th>
    </tr>
    
    <tr>
        <td>Falafel</td>
        <td>$10.00</td>
    </tr>
    
    <tr>
        <td>Pasta Salad</td>
        <td>$12.00</td>
    </tr>
</table>
```

### 🖥️ Representación Visual en el Navegador:
| Dish | Price |
| :--- | :--- |
| Falafel | $10.00 |
| Pasta Salad | $12.00 |
