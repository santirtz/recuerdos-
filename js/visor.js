/* ==========================================
   RECUERDOS ❤️
   Visor avanzado de fotografías
========================================== */


let fotosVisor = [];

let posicionActual = 0;



/* ------------------------------------------
   Abrir visor
------------------------------------------ */

function abrirFoto(listaFotos, posicion){


    fotosVisor = listaFotos;

    posicionActual = posicion;


    crearVisor();


    actualizarFoto();


}



/* ------------------------------------------
   Crear estructura del visor
------------------------------------------ */

function crearVisor(){


    let visorExistente = document.getElementById("visor");


    if(visorExistente){

        visorExistente.remove();

    }



    const visor = document.createElement("div");


    visor.id = "visor";


    visor.innerHTML = `


        <button 
            id="cerrarVisor"
            onclick="cerrarFoto()"
        >
            ✕
        </button>



        <button 
            id="fotoAnterior"
            onclick="fotoAnterior()"
        >
            ◀
        </button>



        <img id="imagenVisor">



        <button 
            id="fotoSiguiente"
            onclick="fotoSiguiente()"
        >
            ▶
        </button>



        <p id="contadorFotos"></p>


    `;


    document.body.appendChild(visor);


}



/* ------------------------------------------
   Actualizar imagen
------------------------------------------ */

function actualizarFoto(){


    const imagen =
    document.getElementById("imagenVisor");


    const contador =
    document.getElementById("contadorFotos");



    if(!imagen){

        return;

    }



    imagen.src = fotosVisor[posicionActual];



    contador.textContent =
    `${posicionActual + 1} / ${fotosVisor.length}`;


}



/* ------------------------------------------
   Siguiente foto
------------------------------------------ */

function fotoSiguiente(){


    posicionActual++;


    if(posicionActual >= fotosVisor.length){

        posicionActual = 0;

    }


    actualizarFoto();


}



/* ------------------------------------------
   Foto anterior
------------------------------------------ */

function fotoAnterior(){


    posicionActual--;


    if(posicionActual < 0){

        posicionActual =
        fotosVisor.length - 1;

    }


    actualizarFoto();


}



/* ------------------------------------------
   Cerrar
------------------------------------------ */

function cerrarFoto(){


    const visor =
    document.getElementById("visor");



    if(visor){

        visor.remove();

    }


}