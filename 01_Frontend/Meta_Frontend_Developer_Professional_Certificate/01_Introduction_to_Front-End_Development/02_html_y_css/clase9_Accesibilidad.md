# ♿ Accesibilidad Web (Web Accessibility)

La accesibilidad web consiste en diseñar y construir sitios web que **todas las personas** puedan entender, navegar e interactuar de manera equitativa, sin importar sus capacidades físicas o cognitivas.

> 🏛️ **La Analogía del Arquitecto:** > Un desarrollador web es como un arquitecto. No puedes diseñar un edificio público moderno sin rampas, ascensores o barandillas. De la misma forma, no puedes crear una web sin las estructuras digitales necesarias para que todos puedan ingresar.

---

## 🕰️ Historia y Filosofía Universal

Cuando la **WAI (Web Accessibility Initiative)** se lanzó en **1997**, el creador de la World Wide Web, **Sir Tim Berners-Lee**, dejó una frase que hoy en día es regla de oro para cualquier examen:

> 🗣️ *"El poder de la Web está en su universalidad. El acceso por parte de todos, independientemente de su discapacidad, es un aspecto esencial."*

### ⚖️ Estándares Internacionales y Leyes
* La **W3C** (a través de la WAI) desarrolla las especificaciones internacionales que rigen la accesibilidad en el mundo.
* **Dato de Regulación:** En **2016**, la Unión Europea aprobó la *Directiva de Accesibilidad Web*, obligando a que todos los sitios web y apps del sector público sean accesibles. Hoy en día, es un estándar exigido en casi todas las industrias.

---

## 🔍 El Alcance de la Accesibilidad (Más allá de lo visual)

Existe el mito de que la accesibilidad es solo para personas ciegas. En realidad, cubre un espectro completo de discapacidades:

| Tipo de Discapacidad | Afecta a... | Solución de Desarrollo / Asistencia |
| :--- | :--- | :--- |
| **👁️ Visual** | Ceguera, baja visión, daltonismo. | Lectores de pantalla, alto contraste, texto alternativo (`alt`). |
| **👂 Auditiva** | Sordera o hipoacusia. | Subtítulos, transcripciones de audio y videos. |
| **🧠 Cognitiva / Neurológica** | Dificultades de aprendizaje, TDAH, memoria. | Diseños limpios, textos simples, navegación predecible. |
| **💪 Física y Motriz** | Incapacidad de usar las manos, temblores. | Navegación 100% por teclado, reconocimiento de voz. |
| **🗣️ Habla** | Impedimentos del lenguaje oral. | Interfaces que no dependan exclusivamente de comandos de voz. |

---

## 🛠️ Tecnologías de Asistencia (Assistive Technologies)

Los usuarios con discapacidades utilizan herramientas de software y hardware especializadas para navegar por internet:

1. **🎙️ Lectores de Pantalla (Screen Readers):** Software que lee en voz alta todo el contenido y las acciones que ocurren en el dispositivo. No solo lo usan personas ciegas, sino también usuarios con severas dificultades de lectura.
2. **🗣️ Software de Reconocimiento de Voz:** Transforma las palabras habladas en comandos de computadora. Crucial para personas que no pueden usar mouse o teclado debido a problemas físicos.
3. **🎬 Subtítulos y Transcripciones:** Herramientas de apoyo indispensables para consumir material multimedia.



---

## 🏗️ Buenas Prácticas de HTML para Desarrolladores

El principio fundamental es: **La accesibilidad se planea desde el día uno del proyecto.** Es extremadamente difícil y costoso remodelar un sitio web para que sea accesible una vez terminado.

### ❌ Malas Prácticas Comunes
* **Texto flotante sin etiquetas:** Dejar frases sueltas dentro del `<body>` sin envolverlas en etiquetas apropiadas como `<p>` o `<h1>` rompe la comunicación con los lectores de pantalla.
* **Abuso de saltos de línea:** Usar múltiples etiquetas `<br><br><br>` seguidas simplemente para generar espacio en blanco en la pantalla crea barreras invisibles que confunden a las tecnologías de asistencia.

### ✅ La Solución Avanzada: ARIA
A medida que creas interfaces de usuario (UI) más complejas, el HTML básico puede quedarse corto. Para solucionar esto, la W.A.I creó la especificación **ARIA (Accessible Rich Internet Applications)**.
* **¿Qué es?:** Un conjunto de atributos especiales que añades a tu HTML para darle superpoderes de accesibilidad a componentes complejos (como menús desplegables avanzados, pestañas o alertas en vivo).

---

> 💡 **Refrán del Programador:** *"Un código semántico es un código accesible"*. 
> Si utilizas las etiquetas correctas para lo que fueron hechas, el navegador y los lectores de pantalla harán el 90% del trabajo por ti de forma nativa.