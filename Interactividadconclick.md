--Interactividad con click

❓ ¿Qué son los eventos en JavaScript?
Cuando interactúas con un sitio web, cada acción que realizas genera un evento. Hacer clic en un botón, mover el mouse, escribir en un formulario, desplazarte por la página, todo eso son eventos. Los eventos permiten que una página web responda a las acciones del usuario, haciendo que se sienta más dinámica e interactiva. El evento click es uno de los eventos más comunes en JavaScript. Se activa cuando el usuario hace clic en un elemento, como un botón, un enlace o cualquier otro elemento interactivo. Gracias a click, puedes hacer que un sitio web reaccione en tiempo real a las acciones del usuario.

🎨 Cambiar el color de fondo con un botón
Vamos a crear un sitio web donde, al hacer clic en un botón, el fondo de la página cambiará de color aleatoriamente. Para esto, utilizaremos HTML, CSS y JavaScript.Estructura en HTML

<!DOCTYPE html>
<html lang="es">

<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Cambia el color de fondo</title>
   <!-- Hoja de estilos -->
   <link rel="stylesheet" href="style.css">
   <!-- Archivo JavaScript -->
   <script src="script.js" defer></script>
</head>

<body>
   <h1>Haz clic en el botón para cambiar el color de fondo</h1>
   <button id="colorButton">¡Cambia el color!</button>
</body>

</html>
💡 Explicación

🔘 Se incluye un botón con el id=”colorButton”, que será el elemento interactivo.
🧷 Se vinculan los archivos CSS (style.css) y JavaScript (script.js).
⏳ La etiqueta <script> incluye defer, lo que significa que el código JavaScript se ejecutará después de que el HTML haya sido completamente cargado.
Estilos en CSS

* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}

body {
   background-color: #f0f0f0;
   font-family: Arial, sans-serif;
   text-align: center;
   transition: background-color 0.5s ease;
   padding: 20px;
}

button {
   padding: 12px 25px;
   font-size: 18px;
   background-color: #007bff;
   color: white;
   border: none;
   cursor: pointer;
   margin-top: 20px;
   border-radius: 8px;
   outline: none;
   transition: background 0.3s;
}

button:hover {
   background-color: #0056b3;
}
💡 Explicación

🌈 Se agrega una transición de color suave en el fondo (background-color) para un efecto visual atractivo.
🔵 El botón tiene un color azul profesional, con un efecto hover, lo que lo hace más dinámico.
🟦 Se utiliza border-radius para redondear los bordes del botón y transition para suavizar el cambio de color.
Lógica en JavaScript

document.getElementById("colorButton").addEventListener("click", function () {
   cambiarColor();
});

// Función que cambia el color de fondo al hacer clic
function cambiarColor() {
   let colores = ["#ff6347", "#66cdaa", "#9370db", "#ffd700", "#4682b4", "#ffa07a"];
   let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
   document.body.style.backgroundColor = colorAleatorio;
}
💡 Explicación

🧠 Se usa getElementById(“colorButton”) para seleccionar el botón en el DOM.
👆 Se agrega un eventListener para detectar el clic y ejecutar la función cambiarColor().
🔁 La función cambiarColor() selecciona un color aleatorio de un arreglo de colores predefinidos y cambia el color de fondo del body.
Existen diferentes maneras de agregar eventos en JavaScript, pero addEventListener es la mejor opción porque:

➕ Permite agregar múltiples eventos al mismo elemento.
📁 Separa la lógica del HTML, manteniendo el código más limpio.
⚙️ Es más flexible para agregar o remover eventos dinámicamente.
Copia y pega cada archivo en un editor de código o en tu entorno de desarrollo y abre el archivo index.html en tu navegador. Cada vez que hagas clic en el botón, el fondo cambiará de color aleatoriamente

Seleccionar con querySelector
🎯 Objetivo
Comprender el uso del método querySelector en JavaScript para seleccionar y manipular elementos del DOM, aplicando selectores similares a los de CSS para modificar el contenido y la apariencia de una página web de manera dinámica.

🔍 Seleccionando elementos en JavaScript
En CSS, usas selectores para aplicar estilos a los elementos de una página web. Pero, ¿sabías que puedes usar los mismos selectores en JavaScript para manipular elementos en el DOM? Aquí es donde entra document.querySelector.

Con querySelector, puedes seleccionar cualquier elemento HTML utilizando los mismos selectores que ya conoces de CSS, como #id, .clase o etiquetas como h1, p, div, etc.

❓ ¿Cómo funciona querySelector?
Supongamos que tienes este código en tu archivo HTML:

<h1 id="title">¡Hola, mundo!</h1>
Para seleccionar este título desde JavaScript, puedes hacer lo siguiente:

let title = document.querySelector("#title");
console.log(title); // <h1 id="title">¡Hola, mundo!</h1>
Como ves, querySelector(“#title”) encuentra el elemento con el id title, exactamente igual que en CSS. También puedes seleccionar el mismo elemento usando su etiqueta:

let h1 = document.querySelector("h1");
console.log(h1); // <h1 id="title">¡Hola, mundo!</h1>
Ambas líneas seleccionan el mismo elemento, pero la primera usa un id, mientras que la segunda usa el nombre de la etiqueta.

🧩 Combinando selectores
Puedes combinar selectores para ser más específico. Por ejemplo, imagina que tienes una barra de navegación con una imagen y un título:

<div class="nav">
    <img src="logo.png" alt="logo">
    <h1>Bienvenido</h1>
</div>
Si quieres seleccionar solo la imagen dentro de .nav, puedes hacer:

let logoImg = document.querySelector(".nav img");
console.log(logoImg); // <img src="logo.png" alt="logo">
Aquí, .nav img selecciona la primera imagen dentro de un elemento con la clase nav.

☝️ querySelector solo devuelve el primer elemento
Si usas querySelector en un documento con varios elementos que coincidan con el selector, solo obtendrás el primero. Por ejemplo:

<p class="texto">Este es el primer párrafo.</p>
<p class="texto">Este es el segundo párrafo.</p>
Si intentas seleccionar .texto:

let parrafo = document.querySelector(".texto");
console.log(parrafo.textContent); // "Este es el primer párrafo."
Como puedes ver, aunque hay dos elementos con la clase .texto, solo devuelve el primero. Si necesitas todos los elementos, usa querySelectorAll, que veremos más adelante.

⚠️ ¿Qué pasa si no encuentra el elemento?
Si el elemento que buscas no existe en la página, querySelector te devolverá null, lo que significa que el elemento no fue encontrado. Por ejemplo:

let boton = document.querySelector("#boton-inexistente");
console.log(boton); // null
Para evitar errores, puedes comprobar si el elemento existe antes de manipularlo:

if (boton !== null) {
   boton.textContent = "Nuevo Texto";
} else {
   console.log("El botón no existe.");
}
El método querySelector es una herramienta muy poderosa que te permite seleccionar elementos de tu página web con la misma flexibilidad de CSS. Sin embargo, recuerda que solo devuelve el primer elemento encontrado, por lo que si necesitas trabajar con varios elementos, deberás usar querySelectorAll.

