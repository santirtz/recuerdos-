

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


<img src="fotos/primer-viaje/foto1.jpg">


<img src="fotos/primer-viaje/foto2.jpg">


</div>


</div>

`;


}
