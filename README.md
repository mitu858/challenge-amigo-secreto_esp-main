<h1 align="center">🎁 Sorteo de Amigo Secreto</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Estado-En%20Desarrollo-orange" alt="Estado del proyecto">
  <img src="https://img.shields.io/badge/JavaScript-ES6-brightgreen" alt="JavaScript ES6">
</p>

---

## Índice

- [Descripción del Proyecto](#descripción-del-proyecto)  
- [Estado del Proyecto](#estado-del-proyecto)  
- [Funcionalidades](#funcionalidades)  
- [Tecnologías Utilizadas](#tecnologías-utilizadas)  
- [Instalación y Uso](#instalación-y-uso)  
- [Autor](#autor)  
- [Licencia](#licencia)

---

## Descripción del Proyecto

Esta es una sencilla aplicación web que permite a los usuarios:
- Ingresar nombres de amigos en una lista mediante un campo de texto o presionar Enter.
- Visualizar los nombres agregados en una lista en la página.
- Realizar un sorteo aleatorio para elegir un "amigo secreto" entre los nombres ingresados.

El objetivo es ofrecer una forma rápida y divertida de organizar sorteos de amigos secretos en grupos pequeños.

---

## Estado del Proyecto

<p align="center">
  :construction: Proyecto en desarrollo :construction:
</p>

Actualmente ya se implementaron las funcionalidades principales: agregado de nombres (por botón y tecla Enter), validación de entrada, actualización dinámica de la lista y sorteo aleatorio del amigo secreto.

---

## Funcionalidades

- `agregarAmigo()`: Captura el valor del input, valida que no esté vacío, lo agrega al arreglo `amigos`, limpia el campo y actualiza la lista visual.
- `actualizarLista()`: Recorre el arreglo `amigos` y genera elementos `<li>` para mostrar cada nombre en pantalla.
- `sortearAmigo()`: Comprueba que haya al menos un nombre, selecciona uno al azar usando `Math.random()` y `Math.floor()`, y muestra el resultado en un elemento en la página.
- Evento `keydown` en el input de nombre: si se presiona la tecla Enter, también llama a `agregarAmigo()`.

---

## Tecnologías Utilizadas

- **HTML5** – Estructura del contenido de la página.  
- **CSS3** – Estilos y diseño básico de la interfaz.  
- **JavaScript (ES6+)** – Lógica del front-end para manipulación del DOM, manejo de eventos y sorteo aleatorio.

---

## Instalación y Uso

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/amigo-secreto.git
   ```
2. Abre el archivo index.html en tu navegador preferido.

3. Cómo usar:
   - Escribe un nombre en el campo de texto y presiona Enter o haz clic en "Adicionar".
   - Verás el nombre agregado en la lista de amigos.
   - Cuando tengas al menos un nombre, haz clic en "Sortear Amigo" para seleccionar uno al azar.
   - El resultado se mostrará en pantalla.

---

## Autor

**Juan Antonio de la Fuente** – [mitu858](https://github.com/mitu858)

---

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

<p align="center">
  <a href="https://github.com/mitu858/challenge-amigo-secreto_esp-main/tree/main/issues">Reportar un problema</a> •
  <a href="https://github.com/mitu858/challenge-amigo-secreto_esp-main/tree/main/pulls">Sugerir mejoras</a>
</p>

---

<vscode_codeblock_uri>file:///c%3A/Proyectos/challenge-amigo-secreto_esp-
