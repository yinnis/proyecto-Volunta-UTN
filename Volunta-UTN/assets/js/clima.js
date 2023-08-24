var datos;
var lat;
var long;
var btn = document.getElementById("tiempo");

// Ubicación de Cartago
var URLServer = "https://api.openweathermap.org/data/2.5/weather?lat=9.8644400&lon=-83.9194400&appid=ceb0cc3c715ce0b58d633fc7785d96ff";

function callService(){

    $.ajax({
        url: URLServer,
        type: "get",
        dataType: "json",
        success: onSuccess,
        error: onError
    });
    
    btn.style.display = "none";
}

function onError(jqXHR, textStatus, errorThrown) {
    alert("Mensaje de Error: " + errorThrown + "\nURL: " + URLServer);
}

function onSuccess(data){
    datos = data;
    cargarDatos();
}

function cargarDatos() {
    let weather = document.getElementById("infoWeather");
    var tabla = "";
    var icon = "http://openweathermap.org/img/wn/" + datos.weather[0].icon + "@2x.png";

    weather.innerHTML = "";

    tabla += `
            <tr>
                <td rowspan="4"><img src="` + icon + `"></td>
                <td>Lugar:</td>
                <td>` + datos.name + `</td>
            </tr>
            <tr>
                <td>Temperatura:</td>
                <td>` + datos.main.temp + `</td>
            </tr>
            <tr>
                <td>Humedad:</td>
                <td>` + datos.main.humidity + `</td>
            </tr>
            <tr>
                <td>Viento:</td>
                <td>` + datos.wind.speed + `</td>
            </tr>`;
    weather.innerHTML = tabla;
}

function showBtn(){
    var weather = document.getElementById("infoWeather");
    weather.innerHTML = "";
    
    btn.style.display = "block";
}