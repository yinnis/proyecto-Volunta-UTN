function cargarAPIImagenes() {
  fetch(
    "https://raw.githubusercontent.com/yinnis/Volunta-UTN-JSON/main/Volunta-UTN.json",
    {
      method: "GET",
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la solicitud.");
      }
      return response.json();
    })

    .then((data) => {
      const imagenes = data.imagenes; // Obtener el arreglo de imagenes
      console.log(imagenes); // Mostrar las imagenes en la consola
      const contenedor = document.getElementById("datosImagenes");

      for (let i = 0; i < imagenes.length; i++) {
        // Creas un elemento div
        const div = document.createElement("div");
        div.className = 'col-md-4';

        // Crea una cadena de texto con el HTML que quieres agregar
        const html = `
                <div class="gallery-item h-100">
                    <img src="${imagenes[i].imagen}" class="img-fluid" alt="" width="500" height="500">
                      <div class="gallery-links d-flex align-items-center justify-content-center">
                         <a href="${imagenes[i].imagen}" title="Gallery 1" class="glightbox preview-link"><i class="bi bi-arrows-angle-expand"></i></a>
                     </div>
               </div>
  
`;

        // Agrega la cadena de texto al div creado
        div.innerHTML = html;

        // Agrega el div al elemento contenedor
        document.getElementById("datosImagenes").appendChild(div);
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

window.onload = cargarAPIImagenes;
