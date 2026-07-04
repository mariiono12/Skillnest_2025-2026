// script.js
const imagen = document.getElementById('artImage');

// Evento mouseover - cambia a la segunda imagen (misma obra, otro detalle)
imagen.addEventListener('mouseover', function() {
    this.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg';
});

// Evento mouseout - vuelve a la imagen original
imagen.addEventListener('mouseout', function() {
    this.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv1lGdKB7sUmviMU2dAmU8bDaH_Xum9e-p3P-Ty7oTmA&s=10";
});