/* ==========================================
   RECUERDOS ❤️
   Sistema de álbumes
========================================== */

let albumes = [];

/* ------------------------------------------
   Mostrar todos los álbumes
------------------------------------------ */

async function mostrarAlbumes() {

    const contenido = document.getElementById("contenido");

    contenido.innerHTML = `
        <div class="card">
            <h2>📸 Nuestros recuerdos</h2>
            <p>Cargando álbumes...</p>
        </div>
    `;

    try {

        const respuesta = await fetch("data/albumes.json");

        if (!respuesta.ok) {
            throw new Error("No se pudo leer albumes.json");
        }

        albumes = await respuesta.json();

        let html = `
            <h2 style="margin-bottom:25px;">📸 Nuestros recuerdos</h2>
            <div class="album-grid">
        `;

        albumes.forEach((album, indice) => {

            html += `
                <div class="album-card" onclick="abrirAlbum(${indice})">

                    <img
                        src="fotos/${album.carpeta}/foto1.jpg"
                        alt="${album.nombre}"
                        class="album-portada">

                    <div class="album-info">

                        <h3>${album.nombre}</h3>

                        <p>${album.descripcion}</p>

                        <small>${album.fecha}</small>

                    </div>

                </div>
            `;

        });

        html += "</div>";

        contenido.innerHTML = html;

    } catch (error) {

        contenido.innerHTML = `
            <div class="card">
                <h2>😥 Error</h2>
                <p>No fue posible cargar los álbumes.</p>
                <p>${error.message}</p>
            </div>
        `;

        console.error(error);

    }

}

/* ------------------------------------------
   Abrir un álbum
------------------------------------------ */

function abrirAlbum(indice) {

    const album = albumes[indice];

    cambiarContenido(`
        <div class="card">

            <button onclick="mostrarAlbumes()" style="width:auto;margin-bottom:25px;">
                ← Volver
            </button>

            <h2>${album.nombre}</h2>

            <p>${album.descripcion}</p>

            <p style="margin-top:10px;">
                <strong>${album.fecha}</strong>
            </p>

            <hr style="margin:25px 0;">

            <p>
                📷 En el próximo paso mostraremos automáticamente todas las fotos de este álbum.
            </p>

        </div>
    `);

}