/* ==========================================
   RECUERDOS ❤️
   Archivo principal
========================================== */

const CONTRASENA = "271223";

/* ------------------------------------------
   Iniciar la página
------------------------------------------ */

window.addEventListener("DOMContentLoaded", () => {

    const input = document.getElementById("clave");

    input.focus();

    input.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            entrar();
        }
    });

});

/* ------------------------------------------
   Entrar
------------------------------------------ */

function entrar() {

    const input = document.getElementById("clave");
    const clave = input.value.trim();

    if (clave === CONTRASENA) {

        document.getElementById("inicio").style.display = "none";
        document.getElementById("pagina").style.display = "block";

        mostrarAlbumes();

    } else {

        alert("❤️ La contraseña no es correcta.");

        input.value = "";
        input.focus();

    }

}

/* ------------------------------------------
   Cambiar de sección
------------------------------------------ */

function cambiarContenido(html) {

    document.getElementById("contenido").innerHTML = html;

}
