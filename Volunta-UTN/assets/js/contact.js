function enviarEmail() {
  var name = document.getElementsByName("name")[0].value;
  name = +" " + document.getElementsByName("lastName")[0].value;
  var tel = document.getElementsByName("phone")[0].value;
  var email = document.getElementsByName("email")[0].value;
  var mensaje = document.getElementsByName("message")[0].value;
  var fecha = document.getElementsByName("date")[0].value;
  var generos = document.getElementsByName("gender");
  var gender = "";
  var grade = "";
  var body = "";

  //Género

  for (i = 0; i < generos.length; i++) {
    if (gerneros[i].checked) {
      if (generos[i].value == "male") {
        gender += "Masculino";
      }
      if (generos[i].value == "female") {
        gender += "Femenino";
      }
      if (generos[i].value == "other") {
        gender += "Otro";
      }
    }
  }
}

// Grade
if (document.getElementById("primaria").checked) {
    grade += "<br/>Primaria";
}

if (document.getElementById("secundaria").checked) {
    grade += "<br/>Secundaria";
}

if (document.getElementById("tecnico").checked) {
    grade += "<br/>Tecnico";
}

if (document.getElementById("diplomado").checked) {
    grade += "<br/>Diplomado";
}

if (document.getElementById("bachillerato").checked) {
    grade += "<br/>Bachillerato";
}

if (document.getElementById("licenciatura").checked) {
    grade += "<br/>Licenciatura";
}

//Calcular edad
fecha = Date.parse(fecha);
var hoy = new Date();
var cumpleanos = new Date(fecha);
var edad = hoy.getFullYear() - cumpleanos.getFullYear();
var mes = hoy.getMonth() - cumpleanos.getMonth();

if (mes < 0 || (mes === 0 && hoy.getDate() < cumpleanos.getDate())) {
    edad--;
}

body = 'Name: ' + name + '<br/>Phone: ' + tel + '<br/>Email: ' + email + '<br/>Age: ' + edad + '<br/>Gender: ' + gender + '<br/>Academic grades: ' + grade + '<br/><br/>' + mensaje;

if ((name != "") && (email != "") && (mensaje != "")) {

    Email.send({
        SecureToken: "c0697cbc-1eeb-47d6-aaf6-974c74bc8bb6",
        To: 'chewis11@gmail.com',
        From: "amadorlopezdaniela@gmail.com",
        Subject: "Hola!",
        Body: body
    }).then(
        message => {

            if (message == 'OK') {
                //alert('Email sent, Thank you.');
                swal("Email sent!", "Thank you.", "success");
            } else {
                console.error(message);
                //alert('There is error at sending message.');
                swal("Error", "There is error at sending message.", "error");
            }
        }
    );
} else {
    alert("Datos incompletos, por favor completar el formulario");
}

