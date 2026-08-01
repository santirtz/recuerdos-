

const contraseña="271223";



function entrar(){


let clave =
document.getElementById("clave").value;



if(clave===contraseña){


document.getElementById("inicio")
.style.display="none";


document.getElementById("pagina")
.style.display="block";


mostrarFotos();



}else{


alert("Contraseña incorrecta");


}


}




function mostrarFotos(){


let contenido =
document.getElementById("contenido");



contenido.innerHTML=`

<div class="card">

<h2>
Nuestros álbumes ❤️
</h2>


<div class="galeria">


<img src="fotos/navidad/foto1.jpg">


<img src="fotos/navidad/foto2.jpg">


</div>


</div>

`;


}







function mostrarMusica(){



document.getElementById("contenido")
.innerHTML=`

<div class="card">


<h2>
Nuestra música 🎵
</h2>



<iframe 
style="border-radius:12px"
src="https://open.spotify.com/embed/playlist/TU_PLAYLIST"
frameBorder="0">

</iframe>



</div>


`;



}





function mostrarAgregar(){



document.getElementById("contenido")
.innerHTML=`

<div class="card">


<h2>
Agregar recuerdos
</h2>


<p>
Las fotos se subirán a GitHub
</p>



<input 
type="file"
multiple
id="imagenes">



<button onclick="subirFotos()">

Subir fotos

</button>


</div>


`;



}





function subirFotos(){


alert(
"Después conectaremos esto con GitHub API"
);


}