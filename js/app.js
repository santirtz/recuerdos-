// ==========================
// CONFIGURACIÓN
// ==========================


const contraseña = "271223";


// Cambiá este número cada vez que hagas cambios
// Esto obliga al navegador a cargar la versión nueva

const versionPagina = "?v=1";



// ==========================
// INGRESAR A LA PÁGINA
// ==========================


function entrar(){


let clave =
document.getElementById("clave").value;



if(clave === contraseña){



document.getElementById("inicio")
.style.display = "none";



document.getElementById("pagina")
.style.display = "block";



mostrarFotos();



}

else{


alert("Contraseña incorrecta");


}



}




// ==========================
// MOSTRAR FOTOS
// ==========================



function mostrarFotos(){



let contenido =
document.getElementById("contenido");



contenido.innerHTML = `



<div class="card">


<h2>
Nuestros álbumes ❤️
</h2>



<div class="galeria">



<img src="fotos/navidad/foto1.jpg${versionPagina}">


<img src="fotos/navidad/foto2.jpg${versionPagina}">



<img src="fotos/primer-viaje/foto1.jpg${versionPagina}">


<img src="fotos/primer-viaje/foto2.jpg${versionPagina}">



</div>



</div>



`;



}





// ==========================
// MOSTRAR MÚSICA
// ==========================



function mostrarMusica(){



let contenido =
document.getElementById("contenido");



contenido.innerHTML = `


<div class="card">


<h2>
Nuestra música 🎵
</h2>



<iframe

style="border-radius:12px"

src="https://open.spotify.com/embed/playlist/TU_ID_DE_PLAYLIST"

frameborder="0"


allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">


</iframe>



</div>


`;



}




// ==========================
// AGREGAR RECUERDOS
// ==========================



function mostrarAgregar(){



let contenido =
document.getElementById("contenido");



contenido.innerHTML = `



<div class="card">



<h2>
Agregar recuerdos 📸
</h2>



<p>
Próximamente podrás subir fotos directamente desde aquí ❤️
</p>



<input 
type="file"
multiple>



</div>



`;



}
