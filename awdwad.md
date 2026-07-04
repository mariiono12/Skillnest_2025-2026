Modificar HTML o CSS con JS
🎯 Objetivo
Comprender cómo modificar el contenido y el estilo de los elementos HTML utilizando JavaScript, ya sea cambiando texto, atributos o aplicando clases CSS dinámicamente.

📝 Cambiar el contenido de un elemento HTML
JavaScript te permite modificar el contenido de cualquier elemento en tu página. Esto significa que puedes actualizar textos dinámicamente, personalizar mensajes o incluso hacer que un título cambie según las interacciones del usuario.

Por ejemplo, imagina que tienes el siguiente título en tu HTML:

<h3 id="titulo">¡Hola, mundo!</h3>
Si quieres cambiarlo con JavaScript, puedes hacer esto:

let titulo = document.querySelector("#titulo");
titulo.innerText = "¡Bienvenido a mi sitio!";
Después de ejecutar este código, el contenido del h3 cambiará de “¡Hola, mundo!” a “¡Bienvenido a mi sitio!” sin necesidad de recargar la página.

🔧 Modificar atributos de un elemento HTML
Además de cambiar el texto, también puedes modificar los atributos de los elementos. Por ejemplo, cambiar la imagen de una página:

<img id="imagen" src="imagen-original.jpg" alt="Imagen inicial">
En JavaScript

let imagen = document.querySelector("#imagen");
imagen.src = "nueva-imagen.jpg";  // Cambia la imagen
imagen.alt = "Imagen actualizada";  // Cambia la descripción de la imagen
Esto permite actualizar imágenes dinámicamente sin modificar el HTML manualmente. Ideal para galerías de imágenes interactivas.

🎨 Modificar estilos de un elemento
Puedes modificar la apariencia de los elementos usando la propiedad style en JavaScript. Por ejemplo, si quieres cambiar el color de un botón cuando el usuario hace clic, puedes hacer lo siguiente:

<button id="boton">Haz clic aquí</button>
En JavaScript

let boton = document.querySelector("#boton");

boton.addEventListener("click", function () {
   boton.style.backgroundColor = "blue"; // Cambia el color del botón
   boton.style.color = "white"; // Cambia el color del texto
});
Sin embargo, modificar los estilos directamente en JavaScript no siempre es la mejor opción. Es mejor utilizar clases CSS para mantener un código más limpio y organizado.

🎭 Agregar y quitar clases CSS con JavaScript
Una forma más eficiente de cambiar estilos es agregando o eliminando clases CSS en los elementos.

Este es un ejemplo donde un botón cambia el tema de la página al modo oscuro y luego vuelve al modo claro cuando se presiona nuevamente.

<!DOCTYPE html>
<html lang="es">

<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Modo oscuro</title>
   <!-- Hoja de estilos -->
   <link rel="stylesheet" href="style.css">
   <!-- Archivo JavaScript -->
   <script src="script.js" defer></script>
</head>

<body>
   <button id="modoBtn">Modo oscuro</button>
</body>

</html>
Código CSS

* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}

body {
   font-family: Arial, sans-serif;
   background-color: #f0f0f0;
   color: black;
   text-align: center;
   padding: 50px;
   transition: background-color 0.3s ease;
}

.dark-mode {
   background-color: black;
   color: white;
}

#modoBtn {
   background-color: #4CAF50;
   color: white;
   padding: 10px 15px;
   font-size: 16px;
   border: none;
   border-radius: 5px;
   cursor: pointer;
   transition: background-color 0.3s ease;
}

#modoBtn:hover {
   background-color: #45a049;
}
Código JavaScript

document.addEventListener("DOMContentLoaded", function () {
   let modoBtn = document.getElementById("modoBtn");

   modoBtn.addEventListener("click", function () {
       document.body.classList.toggle("dark-mode");

       // Cambiar el texto del botón
       if (document.body.classList.contains("dark-mode")) {
           modoBtn.innerText = "Modo Claro";
       } else {
           modoBtn.innerText = "Modo Oscuro";
       }
   });
});
Modificar HTML y CSS con JavaScript te da un control total sobre tu página web. Puedes cambiar textos, imágenes, estilos y hasta alternar entre diferentes diseños dinámicamente.

Copia y pega el código en tu propio archivo HTML, CSS y JavaScript para probarlo.