
const formulario = document.getElementById("hl");
const userNombre = document.getElementById("nombre");
const userFecha = document.getElementById("fecha");
const userWeb = document.getElementById("web");
const userContra = document.getElementById("contraseña");
const userEmail = document.getElementById("email");
const userDNI = document.getElementById("dni");

formulario.addEventListener("submit", (e) => {
    alert("sdfg");
    e.preventDefault();

    const dni_test = new RegExp("^[0-9]{2}\.[0-9]{3}\.[0-9]{3}-[a-zA-Z]$");
    const nombre_test = new RegExp("^[a-zA-Z]+[ ][a-zA-Z]+([ ][a-zA-Z]+){0,2}$");
    const edad_test = new RegExp(".*");
    const email_test = new RegExp("^[a-zA-Z0-9_-]{2,63}@[a-zA-Z0-8]{2,63}[\.][a-z]{2,4}$");
    const sitioweb_test = new RegExp("^(http(s)?:\/\/)+([w]{3}[\.])+[a-z0-9]+[\.][a-z]{2,3}$");
    const passwd_test = new RegExp("^.{8,10}$");

    if (!dni_test.test(userDNI.value)) {
        reset();
        return console.log("Mal formulado el DNI");
        
    }

    if (!nombre_test.test(userNombre.value)) {
        return document.write("Nombre mal escrito");
      
    }
    if (!edad_test.test(userFecha.value)) {
        return console.log("Fecha mal puesta");
       
    }
    if (!email_test.test(userEmail.value)) {
        return console.log("Email no encontrado");
        errores.push({
            tipo: alertEmail,
            msg: "Escriba un correo válido",
        });
        
    }
    if (!sitioweb_test.test(userWeb.value)) {
        return console.log("Web mal puesta 'http://www.xxxx.yyy'");
       
    }
    if (!passwd_test.test(userContra.value)) {
        return console.log("Contrasel no disponible 8 a 10 caracteres");
       
    }

    else{
        console.log("Formulario enviado con éxito");
    }


});