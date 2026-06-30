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