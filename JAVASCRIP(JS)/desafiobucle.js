// Recuerda usar for cuando conozcas la cantidad de repeticiones y while cuando dependas de una condición externa.
//Usa console.log() para verificar los valores en cada iteración.
//se usa for porque sabemos cuantas interacciones son exactamente

//while es más natural cuando la condición es "mientras haya notificaciones"

//for es mejor cuando sabes exactamente cuántas veces se va a repetir

//1
for (let interaccion = 1; interaccion <= 10; interaccion++) {
    console.log('intercccion ${interaccion}'); // let interaccion =1 porque las interacciones empiezan desde 1//
    //interaccion menor o igual a 10 se sigue. interaccion++ se sua 1 en cada vuelta. ('intercccion ${interaccion}') permite insertar la variable en el texto
}


//2
for (let porcentaje = 0; porcentaje <= 100; porcentaje+= 10) {
    console.log('cargando... ${cargando}%');
}

//3
for (let producto = 5; producto <= 5; descuento++) {
    let descuento = producto * 5;
    console.log('producto ${producto} - descuento aplicado: ${descuento}');
}

//4
let puntosTotales = 0;
for (let nivel = 1; nivel <= 5; nivel++) {
    puntosTotales += 50;
    console.log(`Puntos: ${puntosTotales}`);
}
console.log(`puntos acumulados: ${puntosTotales}`);

//5
let notificaciones = 5;

while (notificaciones >0) {   //While verifica o ve si la condicion se cumple. Si es si ejecuta lo que esta dentro de la {}, si es no salta fuera del bucle y continua con lo que sigue
    let mensaje = notificaciones >1 ? "notificaciones": "Notificacion";
    console.log('Tienes ${notificaciones} ${mensaje} nuevas.');  
}
console.log("No tienes notificaciones pendientes.");