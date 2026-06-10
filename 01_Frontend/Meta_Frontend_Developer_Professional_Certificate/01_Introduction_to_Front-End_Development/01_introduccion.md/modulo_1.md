# 📚 Introducción al Desarrollo de Front-end

## 🧱 Los 3 Pilares del Funcionamiento Web
Para que la web opere de forma correcta, se requiere la interacción de 3 componentes principales:

> 🎯 **Analogía de Repaso rápido:**
> * **Web Pages (Libros):** El contenido digital (texto, imágenes, video) que vas a consumir.
> * **Web Servers (Bibliotecarios):** Computadoras optimizadas encargadas de almacenar y despachar los archivos requeridos.
> * **Web Browsers (Tus Ojos):** Aplicaciones que traducen el código estructurado para que lo entiendas visualmente.

[ Navegador Web (Cliente) ] ──── Petición (Request) ───► [ Servidor Web ]
[ Navegador Web (Cliente) ] ◄─── Respuesta (Response) ── [ Servidor Web ]

---

## 🛠️ Herramientas de Desarrollo (Conceptos de Examen)

* **IDE (Entorno de Desarrollo Integrado):** Aplicación de software utilizada para **escribir código de forma más eficiente** (ej. VS Code).
* **Bootstrap:** Framework enfocado en la **implementación de diseño responsivo** (*Responsive Design*), adaptando la interfaz a cualquier pantalla.
* **React:** Librería de JavaScript empleada para **construir interfaces de usuario basadas en componentes** de UI.

> 💡 **Ejemplo de Componente:** Es como moldear un bloque de Lego único. Creas el diseño de una tarjeta de producto una sola vez y la reutilizas por todo el sitio web. Si editas el bloque padre, los cambios se replican automáticamente en los clones.

---

## 🚀 Resumen Técnico para Parcial
| Elemento | Función Principal |
| :--- | :--- |
| **Navegador** | Enviar peticiones HTTP y renderizar de forma visual el contenido. |
| **Servidor** | Almacenar datos y responder las solicitudes del cliente enviando archivos. |
| **Diseño Responsivo** | Garantizar que la maquetación web sea legible en móviles y ordenadores. |

# 👥 Roles en el Desarrollo Web: Full-stack

El desarrollo de software se divide en dos grandes áreas que juntas forman el **Full-stack** (el desarrollador orquesta).

| Característica | 🎨 Front-end (Client-Side) | ⚙️ Back-end (Server-Side) |
| :--- | :--- | :--- |
| **Enfoque** | Lo que el usuario ve e interactúa directamente. | Lo que el usuario NO ve (Lógica y Datos). |
| **Misión** | "Todo entra por los ojos". | "Lo esencial es invisible a los ojos". |
| **Tecnologías** | HTML, CSS, JavaScript (React). | Lenguajes de servidor, Bases de Datos, APIs. |
| **Niveles** | Junior, Intermediate, Senior. | Junior, Intermediate, Senior. |

---

## 🎨 Habilidades Críticas del Front-end
1. **HTML:** Estructura esencial (Huesos).
2. **CSS:** Estilos, colores y diseño (Ropa).
3. **JavaScript:** Interactividad y lógica (Cerebro). Es la habilidad más importante.

> 💡 **Nota sobre React:** Es una librería de JavaScript enfocada en construir interfaces de usuario mediante componentes reutilizables. Facilita el desarrollo modular.

---

## ⚙️ El Mundo del Back-end
El desarrollador Back-end facilita la interacción entre el sitio web y la base de datos.
* **Salarios:** Suelen ser más altos en la industria.
* **Curva de aprendizaje:** Es un camino más extenso y complejo.

# 📡 Fundamentos de Internet y Servidores Web

## 🛠️ El Desarrollador Full-stack
Es el perfil profesional que domina e integra los dos lados de la ingeniería de software:

* **Versatilidad:** Se siente cómodo trabajando tanto en el **Front-end** como en el **Back-end**.
* **Ciclo de Vida:** Tienen los conocimientos clave para participar en todas las áreas de un proyecto tecnológico.
* **Mercado:** Cuentan con una alta demanda laboral y acceden a mejores salarios.

---

## 🔌 ¿Cómo Funciona Internet?

* **La Red:** Una red está compuesta por dos o más computadores conectados entre sí de manera alámbrica o inalámbrica.
* **Switches:** Son los dispositivos que permiten la comunicación directa entre todos los computadores de la red o las redes.
* **Modelo Cliente-Servidor:** Sistema de comunicación donde un cliente pide datos y un servidor responde.

---

## 🖥️ Arquitectura de un Web Server (Servidor Web)
Un servidor es un computador dedicado a ejecutar aplicaciones y servicios diversos (como mensajería instantánea o administración de sitios web) para otros computadores clientes.

### 🏬 Data Center (Centro de Datos)
Es el lugar físico donde se almacenan y administran los servidores. En un Data Center pueden coexistir **miles o millones de computadores**, distribuidos por todo el mundo.

#### Requisitos Críticos de Infraestructura:
* ⚡ **Power:** Energía eléctrica garantizada sin interrupciones.
* 📡 **Internet Connection:** Conexión de red de alta velocidad.
* 🕒 **Disponibilidad:** Accesibles las 24 horas al día.

> 💡 **Hardware vs Software:** El hardware de los servidores varía según su propósito y funcionamiento físico. El código que se ejecuta dentro del hardware es el software.

---

## 🔄 El Ciclo de Respuesta a la Solicitud
El servidor web se encarga de: almacenamiento y administración de sitios, *Data storage* (almacenamiento de datos), seguridad, gestión de correo electrónico y manejo de solicitudes web.

[ Device ] ────────── Solicitud ──────────► [ Web Server ]
[ Device ] ◄────────── Respuesta ────────── [ Web Server ] ◄──── [ Website ]

> 🎯 **Ejemplo de Examen:** 
> Cuando abres WhatsApp en la computadora (**Device**), envías una solicitud al **Web Server**. El servidor procesa tu identidad, busca tus mensajes en el almacenamiento (*Data storage*) y te envía la respuesta devolviendo tus chats a la pantalla.

# 📄 Estructuras Web, Renderizado y Protocolos

## 🧱 Web Page vs. Web Site

### 🖥️ El Servidor Web
* **Rendimiento:** Puede atender **miles de solicitudes por segundo**.
* **Función Principal:** Atender de forma oportuna las solicitudes del cliente.

### 📄 Web Page (Página Web)
Es un documento individual presentado en el navegador web que integra:
* 🖼️ Imágenes.
* 📝 Textos.
* 🎥 Videos.
* 📎 Otros tipos de contenidos.

### 🌐 Web Site (Sitio Web)
Es una colección de páginas web que se entrelazan entre sí.
* 🔍 **Regla de Identificación:** Si varias páginas tienen una dirección similar en el navegador, se asume que pertenecen al mismo *website*.
* 🔗 **Comportamiento de Links:** En un sitio web, no todos los enlaces te mantienen dentro de él; algunos links sirven para redirigir a *websites* externos.

---

## 🛠️ Tecnologías para Crear Web Pages

* **HTML:** Estructura el contenido.
* **CSS:** Controla colores y estilos.
* **JavaScript:** Maneja la interacción con el usuario.

### ⏳ Proceso de Renderizado (Page Rendering)
Las líneas de código HTML son procesadas por el navegador web de forma **secuencial, del primero al último**. 

> 🎯 **Concepto de Examen:** A la creación de la representación visual de la página en la pantalla mediante esta lectura ordenada se le conoce como **Page Rendering**.
> * *Ejemplo:* El navegador lee el archivo como una receta, línea por línea de arriba hacia abajo, construyendo la interfaz de manera descendente.

---

## 🌐 Web Browser (Navegador Web)

Es una aplicación de software que se utiliza para navegar por la *World Wide Web*. Su trabajo es enviar una petición al *web server* y recibir como respuesta el contenido que mostrará en la pantalla del dispositivo.

### 🔗 Anatomía de una URL
Para la dirección de ejemplo: `http://www.example.com/index.html`

* **Protocolo (Protocol):** `http://` ── Es el protocolo de comunicación que usan el navegador y el servidor web.
* **Nombre de Dominio (Domain Name):** `www.example.com` ── El nombre de identidad de la página.
* **Ruta del Archivo (File Path):** `/index.html` ── El archivo específico que se solicita desplegar.

### 🔄 Ciclo de Petición y Respuesta (Request - Response Cicle)
El protocolo de comunicación opera mediante este ciclo constante de datos:

[ Navegador Web ] ─────── HTTP Request (Petición) ───────► [ Servidor Web ]
[ Navegador Web ] ◄────── HTTP Response (Respuesta) ───── [ Servidor Web ]

# ☁️ Web Hosting y Protocolos de Internet

## 🖥️ Tipos de Web Hosting
El Web Hosting es el servicio pago que garantiza almacenamiento estable y seguro en internet.

### 📊 Tabla Comparativa de Arquitecturas
| Tipo de Hosting | Recursos | Riesgo / Ventaja |
| :--- | :--- | :--- |
| **A) Shared (Compartido)** | Compartidos (Memoria/Ancho de banda) | Alto. Un vecino con mucho tráfico ralentiza tu web. |
| **B) VPS (Virtual Privado)** | Dedicados por instancias virtuales | Seguro. El rendimiento de otros no te afecta. |
| **C) Dedicated (Dedicado)** | 100% de Hardware exclusivo (CPU/Memoria) | Total. Control absoluto del servidor. |
| **D) Cloud (Nube)** | Distribuidos en múltiples servidores | Infalible. Si un servidor falla, otro entra en acción. |

> 💡 **Refrán Shared Hosting:** *"Donde comen dos, comen tres... pero el espacio se reduce"*.
> 💰 **Dato Cloud Hosting:** No hay límites estrictos; se paga únicamente por los recursos utilizados.

---

## 📯 Protocolos de Internet: Direcciones IP

La comunicación en internet exige reglas. Las **computadoras son los destinos** (solicitan y reciben datos) y las **redes son las rutas** por donde viaja la información. Sin **direcciones IP**, la comunicación es imposible.

### 👥 Estándares de IP (Preguntas de Examen)

📌 IPv4 ───► [ 4 Octetos separados por puntos ] ───► Ej: 192.0.2.235
📌 IPv6 ───► [ 8 Grupos Hexadecimales con : ]  ───► Ej: 4527:0a00:1567:0200:FF00:0042:8329

* **IPv4:** Compuesto por 4 octetos.
* **IPv6:** Compuesto por 8 grupos de dígitos hexadecimales.

# 📯 Paquetes de Red, Capa de Transporte y Comando Ping

## 📦 Estructura de un Paquete IP (Datagrama)
Cuando la información se envía por internet, viaja fragmentada en paquetes estructurados de la siguiente manera:

* **IP Header (Cabecera):** Contiene obligatoriamente la dirección IP de origen y la dirección IP de destino.
* **IP Data (Datos):** Contiene la data útil del mensaje acompañada de los protocolos de transporte (**TCP y UDP**).

┌──────────────────────────────────────────────┐
│                 PAQUETE IP                   │
├──────────────────────┬───────────────────────┤
│  IP HEADER (Cabecera)│  IP DATA (Datos)      │
│  • Dirección Destino │  • Mensaje útil       │
│  • Dirección Origren │  • Protocolos TCP/UDP │
└──────────────────────┴───────────────────────┘

---

## ⚠️ Problemáticas del Tráfico IP y sus Solucionadores

Durante el tránsito de red, los paquetes IP se enfrentan a tres percances técnicos:
1. **Out of Order:** Paquetes que llegan desordenados.
2. **Damaged:** Paquetes corruptos o dañados.
3. **Lost:** Paquetes perdidos por congestión de la red.

Para solucionar de raíz estos inconvenientes, se inyectan dos tipos de protocolos de transporte dentro de la sección **IP Data**:

### 📊 Tabla Comparativa: TCP vs. UDP
| Protocolo | Mecanismo de Acción | Tipo de Datos |
| :--- | :--- | :--- |
| **TCP** *(Transmission Control Protocol)* | **Resuelve al 100% los 3 problemas** (reordena, recupera pérdidas y corrige daños). Genera un pequeño retraso pero la entrega es perfecta. | Archivos de texto (`.txt`) e imágenes. |
| **UDP** *(User Datagram Protocol)* | Prioriza la velocidad fluida. Detecta datos corruptos pero **tolera la pérdida de paquetes** en el camino sin detenerse. | Streaming de video y llamadas de voz. |

> 💡 **Refrán de UDP:** *"Al que le sirva el saco, que se lo ponga"*. Si un paquete de audio se pierde en una llamada de voz en vivo, UDP no frena la transmisión para recuperarlo; prioriza el tiempo real.

---

## 🔍 Herramientas de Diagnóstico: Comando Ping
Al hacer *ping* a un dominio web, el sistema ejecuta dos procesos esenciales de diagnóstico de red:

### 1. Resolución DNS
Muestra el nombre de dominio que se resuelve en su dirección IP correspondiente.
* *Ejemplo Real:* `Coursera.org [3.174.238.13]`

### 2. Monitoreo de Paquetes ICMP
Entrega las métricas detalladas del viaje de los datos:
* **Bytes:** Tamaño del paquete ICMP transmitido.
* **Time:** El tiempo de ida y vuelta (**RTT - Round Trip Time**) del paquete desde el ordenador al servidor, medido en milisegundos (ms).
* **TTL (Time To Live):** Valor numérico de tiempo de vida del paquete. **Disminuye en cada salto de red (routers)** para evitar que un paquete perdido bucle perpetuamente en internet.

> 📊 Al finalizar, el comando despliega un consolidado evaluando los **valores máximos y mínimos de respuesta**.

# 📨 El Protocolo HTTP

Es el lenguaje de transferencia de hipertexto que permite la comunicación **Navegador ↔ Servidor**.

## 📑 Estructura del HTTP Request
Una petición se compone de:
1. **Método:** Acción a realizar (GET, POST, PUT, DELETE).
2. **Ruta:** Ubicación del recurso solicitado.
3. **Versión:** Estándar utilizado (ej. HTTP/1.1).
4. **Cabeceras (Headers):** Información extra como el idioma o el host.

GET /index.html HTTP/1.1
Host: example.com
Accept-Language: es

## 🚦 Códigos de Respuesta (Status Codes)

Los códigos de estado son valores numéricos que el servidor envía para indicar el resultado de una operación. Se dividen en 5 categorías principales:

| Rango | Categoría | Significado del Mensaje |
| :--- | :--- | :--- |
| **1xx** | **Informational** | "Espera un momento, estamos procesando tu solicitud". |
| **2xx** | **Successful** | "¡Todo bien! Aquí tienes lo que pediste" (Ej: **200 OK**). |
| **3xx** | **Redirection** | "Lo que buscas se mudó a otro lado o ruta diferente". |
| **4xx** | **Client Error** | "Tú te equivocaste" (Ej: **404 Not Found**). |
| **5xx** | **Server Error** | "Yo (el servidor) fallé internamente al procesar". |

---

## 📋 Métodos HTTP Clave

Los métodos definen la acción que el cliente desea realizar sobre un recurso en el servidor.

* **GET:** Se utiliza para **recuperar** información o archivos del servidor.
* **POST:** Se utiliza para **enviar** datos nuevos al servidor para su procesamiento.
* **PUT:** Se utiliza para **actualizar** o reemplazar información ya existente en la web

# 📨 Protocolo HTTP: Métodos y Estados

El protocolo **HTTP (HyperText Transfer Protocol)** es la base de la comunicación en la web, funcionando mediante un ciclo de **Petición (Request)** y **Respuesta (Response)**.

---

## 📥 Métodos HTTP Clave
Los métodos definen la **acción** que el navegador le pide al servidor realizar sobre un recurso.

* **GET:** 🔍 Se usa para **recuperar** información o archivos (leer datos).
* **POST:** 📨 Se usa para **enviar** datos nuevos al servidor (ej. crear un usuario).
* **PUT:** 🔄 Se usa para **actualizar** o reemplazar información existente.
* **DELETE:** 🗑️ Se usa para **eliminar** un recurso específico.

> 💡 **Nota técnica:** Aunque existen muchas versiones, las más utilizadas actualmente en la industria son **HTTP/1.1** y **HTTP/2.0**.

---

## 🚦 Códigos de Respuesta (Status Codes)
Son valores numéricos que el servidor devuelve en los **Headers** para indicar el resultado de la solicitud.

### ℹ️ 1xx - Informational (Informativos)
Respuestas provisionales que indican que la solicitud fue recibida y se está procesando.
* **100 Continue:** El servidor indica que todo va bien y el navegador puede seguir enviando datos.

### ✅ 2xx - Successful (Éxito)
Indican que la solicitud fue recibida, entendida y aceptada correctamente.
* **200 OK:** La respuesta de éxito estándar. *"¡Aquí tienes lo que pediste!"*.

### 🔀 3xx - Redirection (Redirecciones)
Indican que el recurso solicitado se ha movido a una ruta o URL diferente.
* **301 Moved Permanently:** El recurso se movió de forma definitiva.
* **302 Found / Encontrado:** Indica una redirección temporal detallada en los *headers*.

### ❌ 4xx - Client Error (Errores del Cliente)
Indican que hay un error en la solicitud enviada por el usuario (sintaxis o contenido incorrecto).
* **400 Bad Request:** Los datos enviados están mal formados.
* **401 Unauthorized:** Requiere que el usuario inicie sesión.
* **403 Forbidden:** El servidor entiende la petición pero se niega a dar acceso (falta de permisos).
* **404 Not Found:** El servidor no puede encontrar el recurso solicitado. *"Buscaste algo que no existe"*.

### 💥 5xx - Server Error (Errores del Servidor)
El cliente hizo la petición correctamente, pero el servidor falló internamente al procesarla.
* **500 Internal Server Error:** Error genérico en el código o motor del servidor.

---

## 📋 Estructura Técnica de un Request
Para refrescar conocimientos, así se ve una petición real en el código:

http
GET /index.html HTTP/1.1          <-- 1. Método, 2. Ruta, 3. Versión
Host: developer.mozilla.org       <-- 4. Cabeceras (Headers)
Accept-Language: es

# ⚖️ Diferencias: WebSite vs Web Application

Es vital entender si estamos construyendo un sitio informativo o una herramienta interactiva.

### 📊 Tabla Comparativa
| Punto de comparación | 📄 WebSite | 📱 Web Application |
| :--- | :--- | :--- |
| **Propósito** | Informar y mostrar contenido. | Interactuar y procesar datos. |
| **Contenido** | Estático (Igual para todos). | Dinámico (Personalizado por usuario). |
| **Interactividad** | Baja (Navegación básica). | Alta (Formularios, estados, lógica). |

---

## 🛠️ Developers Tools (Herramientas de Desarrollo)
Son las "herramientas de diagnóstico" presentes en los navegadores web. 



### 🚀 Funciones Principales:
* **🔍 Inspección:** Permite ver y editar el código **HTML, CSS y JavaScript** directamente en el navegador.
* **🌐 Network (Red):** Rastrea las solicitudes **HTTP** para ver si los archivos cargan correctamente.
* **⚡ Performance:** Ayuda a investigar y solucionar problemas de rendimiento.
* **🛡️ Security:** Permite revisar el estado de seguridad y certificados de la web.

> 💡 **Refrán del Desarrollador:** *"No asumas que tu código funciona, inspecciónalo en la consola"*. Las DevTools son tus mejores amigas para encontrar errores (bugs) rápidamente.

# 📚 Librerías, Frameworks y APIs

## ⚖️ Librerías vs. Frameworks (Marcos)

| 🛠️ Librerías | 🏗️ Frameworks (Marcos) |
| :--- | :--- |
| • Disponibles como **Open Source** (código abierto) y privativo. | • Disponibles como **Open Source** o privados. |
| • Son **piezas reutilizables** de código. | • Proporcionan una **estructura** base a partir de la cual los desarrolladores pueden crear. |
| • Proporcionan una **funcionalidad específica**. | • El desarrollador hace uso de su propio código, el cual **interactúa con el Framework**. |
| • Existen librerías de estilos, validación de formularios y muchos otros propósitos. | • Un Framework puede **gestionar la recepción de solicitudes HTTP**. |
| • Ayudan a agilizar y disponer de **más tiempo** para el desarrollo de la app. | • Un Framework **puede usar muchas librerías** internamente. |

> 🧠 **Relación de examen (Inversión de Control):**
> * Con una **Librería**, *tú* tienes el control y tú la llamas cuando la necesitas (es una herramienta más en tu caja).
> * Con un **Framework**, *él* tiene el control; te da el molde y te dice dónde debes escribir tu código para que funcione.

---

## 🔌 API (Application Programming Interface)
* **Traducción:** Interfaz de Programación de Aplicaciones.
* **Concepto fácil:** Es un puente o intermediario que permite que dos softwares o componentes se comuniquen y compartan servicios entre sí sin saber cómo están programados por dentro.

### 🧩 Los 3 Tipos de API en tus apuntes:

1. **🌐 Browser API (APIs del Navegador)**
   * **¿Qué hacen?:** Añaden servicios y funcionalidades extras directamente al navegador web.
   * *Ejemplo de examen:* La API de Geolocalización del navegador que te pide permiso para saber dónde estás, o el almacenamiento local (*LocalStorage*).

2. **📡 REST API**
   * **¿Qué hacen?:** Son las APIs estándar de internet que permiten que el Front-end se comunique con el Back-end mediante solicitudes HTTP para consultar, crear, actualizar o borrar datos.
   * *Ejemplo de examen:* Cuando tu app consulta el clima actual enviando una petición a un servidor remoto.

3. **📱 Sensor-Based API (APIs Basadas en Sensores)**
   * **¿Qué hacen?:** Permiten al software interactuar directamente con el hardware físico y los sensores de un dispositivo.
   * *Ejemplo de examen:* La API que detecta cuando giras la pantalla del celular (acelerómetro) o la que mide la proximidad en una llamada.

   # 🔌 APIs Profundo e Introducción a los IDEs

## 🌐 1. APIs del Browser (Navegador)
Son las interfaces nativas que añaden servicios y funcionalidades adicionales directamente al navegador web. Tus notas destacan las siguientes:

* 📥 **Fetch API:** Utilizada para realizar peticiones de red y consultar datos de forma asíncrona.
* 🎨 **Canvas API:** Permite dibujar gráficos y animaciones 2D/3D mediante código.
* ⏳ **History API:** Da acceso al historial de navegación de la sesión del navegador.
* 🗄️ **Web Storage API:** Permite almacenar datos de manera local en el navegador (LocalStorage / SessionStorage).
* 📍 **Geolocation API:** Permite a la aplicación web conocer la ubicación física del dispositivo.
* ➕ **Otras:** Muchas más herramientas de hardware y navegador accesibles mediante JavaScript.

---

## 📡 2. RESTful API
* **Significado de REST:** *Representational State Transfer* (Transferencia de Estado Representacional).
* **Definición de Examen:** Son las APIs encargadas de **enviar y recibir datos** desde y hacia una **base de datos centralizada** en la web.

---

## 📱 3. Sensor-Based API (APIs Basadas en Sensores)
* **Definición:** Es la interfaz que permite al software comunicarse directamente con los sensores de un dispositivo físico.
* **Relación Clave:** En este tipo de APIs se basa por completo el **Internet de las Cosas** o **IoT** (*Internet of Things*).

---

## 🎯 4. ¿Cómo se acceden a las APIs y qué responden?

### 📍 El EndPoint
* **Definición:** Las APIs se acceden puntualmente mediante un **EndPoint**.
* **Concepto rápido:** Un EndPoint no es más que una **URL** específica a la cual el cliente le hace una petición HTTP.

### 🔄 Respuestas Comunes de los EndPoints
Cuando tu aplicación le "grita" a la URL de un EndPoint, las respuestas más comunes que devuelve el servidor son:

1. 📄 **Web Pages completas:** Documentos listos para ser renderizados.
2. 📦 **Archivos JSON:** El formato de texto estándar en la industria para intercambiar datos estructurados entre aplicaciones.

[ Cliente / App ] ────── Petición al EndPoint (URL) ─────► [ API ]
[ Cliente / App ] ◄───── Responde (JSON o Web Page) ───── [ API ]

---

## 💻 5. IDE (Integrated Development Environment)
* **Traducción:** Entorno de Desarrollo Integrado.
* **Definición de Parcial:** Es un **software especializado para crear aplicaciones**.
* **Tipos de IDEs:** 
  * Existen IDEs **específicos** diseñados para trabajar con un único lenguaje de programación.
  * Existen otros IDEs que son flexibles y **admiten múltiples lenguajes de programación** al mismo tiempo.