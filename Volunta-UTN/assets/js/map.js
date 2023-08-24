//Latitud y longitud de Costa Rica
var myLatLng = { lat: 9.748917, lng: -83.753428 };
var mapOptions = {
    center: myLatLng,
    zoom: 7,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};

//Crea el mapa
var map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);

//Crear un objeto DirectionsService para usar el método de ruta y obtener un resultado para nuestra solicitud
var directionsService = new google.maps.DirectionsService();

//Crear un objeto DirectionsRenderer que usaremos para mostrar la ruta
var directionsDisplay = new google.maps.DirectionsRenderer();

//Vincular el DirectionsRenderer al mapa
directionsDisplay.setMap(map);


//Definir la función calRoute
function calcRoute() {
    //Crear la variable request
    var request = {
        origin: document.getElementById("from").value,
        destination: document.getElementById("to").value,
        travelMode: google.maps.TravelMode.DRIVING, //WALKING, BYCYCLING, TRANSIT Diferentes métodos para usar
        unitSystem: google.maps.UnitSystem.IMPERIAL
    }

    //Pasar la solicitud al método de ruta
    directionsService.route(request, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {

            //Obtener distancia y tiempo
            const output = document.querySelector('#output');
            output.innerHTML = "<div class='alert-info'> Tu ubicación: " + document.getElementById("from").value + ".<br />A: " + document.getElementById("to").value + ".<br /> Distancia de conducción <i class='fas fa-road'></i> : " + result.routes[0].legs[0].distance.text + ".<br />Duración <i class='fas fa-hourglass-start'></i> : " + result.routes[0].legs[0].duration.text + ".</div>";

            //Mostrar ruta
            directionsDisplay.setDirections(result);
        } else {
            //Eliminar ruta del mapa
            directionsDisplay.setDirections({ routes: [] });
            //Mapa del centro de Costa Rica
            map.setCenter(myLatLng);

            //Mostrar mensaje de error
            output.innerHTML = "<div class='alert-danger'><i class='fas fa-exclamation-triangle'></i> Could not retrieve driving distance.</div>";
        }
    });

}



//Crear objetos de autocompletar para todas las entradas
var options = {
    types: ['(cities)']
}

var input1 = document.getElementById("from");
var autocomplete1 = new google.maps.places.Autocomplete(input1, options);

var input2 = document.getElementById("to");
var autocomplete2 = new google.maps.places.Autocomplete(input2, options);
