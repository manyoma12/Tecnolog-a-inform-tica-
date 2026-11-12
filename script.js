
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

// Abrir y cerrar el menú
menuBtn.addEventListener("click", function() {
    menu.classList.toggle("activo");
});

// Navegar a cada sección
const enlaces = document.querySelectorAll(".menu a");

enlaces.forEach(function(enlace) {
    enlace.addEventListener("click", function() {
        menu.classList.remove("activo");
    });
});

// Mensaje de bienvenida
console.log("Bienvenido a Tecnología e Informática");
