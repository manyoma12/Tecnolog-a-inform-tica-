console.log("Bienvenido a TECNOINFO");

document.querySelectorAll('nav a').forEach(enlace => {
    enlace.addEventListener('click', function() {
        console.log("Visitando: " + this.textContent);
    });
});

window.addEventListener('load', function() {
    console.log("TECNOINFO está listo.");
});
