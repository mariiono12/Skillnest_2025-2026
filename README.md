# Skillnest_2025-2026
 ¿Qué es this y por qué es importante?
En el método anterior, usamos this.pan, this.carne, etc. ¿Por qué no simplemente pan o carne? La palabra clave this es una referencia al propio objeto en el que se encuentra el método.
Cuando llamas a hamburguesaEspecial.mostrarIngredientes(), la palabra this hace referencia a hamburguesaEspecial, permitiéndote acceder a sus propiedades sin necesidad de mencionarlo explícitamente.

Qué son los objetos en JavaScript?
Hasta ahora, has visto cómo almacenar información en variables y arreglos. Sin embargo, cuando necesitas agrupar varios datos relacionados en una sola estructura, los objetos son la mejor opción.

Un objeto en JavaScript es una colección de propiedades que se organizan en pares clave-valor. Imagina que quieres almacenar información sobre un usuario en un sitio web. En lugar de crear múltiples variables como nombreUsuario, correoUsuario, edadUsuario, puedes agrupar todo dentro de un objeto llamado usuario.
let usuario = {
   nombre: "Bill Gates",
   edad: 69,
   correo: "bill.gates@microsft.com"
};
Cada clave representa el nombre de la propiedad y cada valor es la información almacenada.


❓ ¿Qué son las funciones?
Hasta ahora, tu código se ejecuta de arriba a abajo, siguiendo cada línea de forma secuencial. Pero, ¿qué pasaría si necesitas repetir un bloque de código varias veces sin escribirlo una y otra vez? Ahí es donde entran las funciones. Una función es un bloque de código reutilizable que solo se ejecuta cuando lo llamas.

Ejemplo de una función simple:

function saludar() {
   console.log("¡Hola, bienvenido!");
}
🔔 Llamando o invocando funciones
Para ejecutar una función, debes invocarla escribiendo su nombre seguido de paréntesis:

saludar();
Salida esperada en la consola:

¡Hola, bienvenido!
Puedes llamar a una función tantas veces como quieras, sin necesidad de repetir el código dentro de ella.

saludar();
saludar();
saludar();
Esto imprimirá el mensaje tres veces sin necesidad de escribir console.log repetidamente.
lamando o invocando funciones
Para ejecutar una función, debes invocarla escribiendo su nombre seguido de paréntesis:

saludar();
Salida esperada en la consola:

¡Hola, bienvenido!
Puedes llamar a una función tantas veces como quieras, sin necesidad de repetir el código dentro de ella.

saludar();
saludar();
saludar();
Esto imprimirá el mensaje tres veces sin necesidad de escribir console.log repetidamente.

 🎚️ Funciones con parámetros
Las funciones se vuelven aún más útiles cuando les puedes pasar datos. Estos datos son llamados parámetros y permiten que la función sea más flexible.

Ejemplo:

function saludar(nombre) {
   console.log("¡Hola, " + nombre + "!");
}
Ahora la función saludar espera recibir un nombre al ser llamada. Cuando la invocas, debes proporcionar un argumento.

saludar("Luis");
saludar("Ana");
Salida esperada:

¡Hola, Luis!
¡Hola, Ana!
Los parámetros permiten que una función trabaje con valores dinámicos en lugar de siempre ejecutar la misma instrucción.

🎯 Funciones con return
Hasta ahora, nuestras funciones solo muestran información en la consola, pero no devuelven ningún resultado que podamos usar en otro momento. Con return, una función puede devolver un valor, lo que la hace aún más poderosa.

Ejemplo de una función que devuelve el número mayor:

function encontrarMaximo(a, b) {
   if (a > b) {
       return a;
   } else {
       return b;
   }
}
Aquí, la función encontrarMaximo compara dos números y devuelve el mayor.

let numero1 = 10;
let numero2 = 7;
let maximo = encontrarMaximo(numero1, numero2);
console.log("El número mayor entre", numero1, "y", numero2, "es:", maximo);
Salida esperada:

El número mayor entre 10 y 7 es: 10
Cuando una función usa return, puedes almacenar el valor devuelto en una variable y usarlo más adelante en el código.

Las funciones en JavaScript permiten reutilizar código y hacerlo más organizado. Puedes definir funciones simples, funciones con parámetros para recibir valores y funciones que devuelven resultados con return.

Concepto this (Esto)
🎯 Objetivo
Comprender el concepto de this en JavaScript y su aplicación en la manipulación de elementos del DOM, permitiendo modificar contenido y estilos dinámicamente.

❓ ¿Qué es this en JavaScript?
Cuando interactúas con una página web, puedes hacer que ciertos elementos cambien de aspecto o desaparezcan. Esto es posible gracias a this, una palabra clave especial en JavaScript que se refiere al contexto en el que se está ejecutando un código.

Imagina que estás usando una aplicación donde cada usuario tiene su propio perfil con información personal. Si deseas ver tus propios datos, necesitas acceder a tu perfil, no al de otra persona. En JavaScript, this funciona de manera similar: cambia dependiendo de dónde y cómo lo uses.

En términos simples, this es un atajo para referirse al objeto que está ejecutando una función.

🧱 Dentro de un objeto, this hace referencia a ese objeto.

🖱️ Dentro de un evento, this representa el elemento HTML que activó el evento.

🌐 En el ámbito global, this representa el objeto window (en navegadores).

📝 Cambiar el texto de un botón
Vamos a empezar con un ejemplo simple en el que this nos ayuda a modificar el texto de un botón cuando lo presionas.



Código en HTML

<!DOCTYPE html>
<html lang="es">

<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Ejemplo this</title>
   <!-- Hoja de estilos -->
   <link rel="stylesheet" href="style.css">
   <!-- Archivo JavaScript -->
   <script src="script.js" defer></script>
</head>

<body>
   <button id="cambiarTexto">Haz clic en mí</button>
</body>

</html>
Código en CSS

* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}

body {
   font-family: Arial, sans-serif;
   text-align: center;
   background-color: #f7e8d3;
   padding: 50px;
}

button {
   padding: 12px 20px;
   font-size: 18px;
   background-color: #ff8b94;
   color: white;
   border: none;
   cursor: pointer;
   border-radius: 10px;
   transition: background 0.3s;
}

button:hover {
   background-color: #ff5d73;
}
Código en JavaScript

// Seleccionamos el botón por su id
let boton = document.getElementById("cambiarTexto");

// Agregamos un evento 'click' al botón
boton.addEventListener("click", function () {
   // Cambia el texto del botón usando `this`
   this.innerText = "¡Texto cambiado!";
});
💡 Explicación

⌨️ Se selecciona el botón con getElementById(“cambiarTexto”).

👆 Se agrega un eventListener para detectar cuando el usuario haga clic en el botón.

🪄 this.innerText cambia el texto del botón directamente.

Cuando hagas clic en el botón, su texto cambiará dinámicamente sin necesidad de escribir una función adicional.

🖼️ Eliminar imágenes al hacer clic
Para hacerlo más interactivo, ahora vamos a eliminar imágenes cuando hagas clic en ellas.



Código en HTML

<!DOCTYPE html>
<html lang="es">

<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Eliminar Imagen</title>
   <!-- Hoja de estilos -->
   <link rel="stylesheet" href="style.css">
   <!-- Archivo JavaScript -->
   <script src="script.js" defer></script>
</head>

<body>
   <div id="galeria">
       <img src="images/bulbasaur.png" alt="Bulbasaur" class="imagenEliminar">
       <img src="images/charmander.png" alt="Charmander" class="imagenEliminar">
       <img src="images/pikachu.png" alt="Pikachu" class="imagenEliminar">
   </div>
</body>

</html>
 

Código en CSS

* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}

body {
   background-color: #ffe4e1;
   text-align: center;
}

#galeria {
   display: flex;
   justify-content: center;
   gap: 50px;
   margin-top: 20px;
}

img {
   width: 200px;
   height: 200px;
   cursor: pointer;
   transition: opacity 0.3s;
}

img:hover {
   opacity: 0.7;
}
 

Código en JavaScript

// Seleccionamos todas las imágenes con la clase 'imagenEliminar'
let imagenes = document.querySelectorAll(".imagenEliminar");

// Agregamos un evento 'click' a cada imagen
imagenes.forEach(function (imagen) {
   imagen.addEventListener("click", function () {
       // Eliminamos la imagen al hacer clic
       this.remove();
   });
});
💡 Explicación

🔎 Se seleccionan todas las imágenes con querySelectorAll(“.imagenEliminar”).

🔁 Se recorre cada imagen y se le asigna un eventListener para detectar clics.

🧨 La sentencia this.remove() elimina la imagen en la que se hizo clic.

Copia y pega los archivos en tu editor y abre index.html. Haz clic en los elementos y observa cómo cambian de manera dinámica gracias a this.