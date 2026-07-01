//cambiar texto del boton
function Sesion() {
    const sesion = document.getElementById("sesion");

    if (sesion.textContent === "iniciar sesion") {
        sesion.textContent = "cerrar sesion";
    } else {
        sesion.textContent = "iniciar sesion";
    };
}


/* const btnSesion = document.querySelector("#sesion");
    btnSesion.innerText = "cerrar sesion"; */

//likes
function darLike() {
    const spanLike = document.querySelector("#like");
    let cant = parseInt(spanLike.innerText); //parse = text a num
    spanLike.innerText = cant + 1;
}

//likes
function darLike1() {
    const spanLikes = document.querySelector("#likes");
    let cant = parseInt(spanLikes.innerText); //parse = text a num
    spanLikes.innerText = cant + 1;
}

//perfil
function perfil() {
    alert("tienes un perfil?");
};