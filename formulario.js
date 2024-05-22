
const formulario = document.getElementById("hl");


formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;
    // variables del formulario
    const userNombre = document.getElementById("nombre").value;
    const userFecha = document.getElementById("fecha").value;
    const userWeb = document.getElementById("web").value;
    const userContra = document.getElementById("contraseña").value;
    const userEmail = document.getElementById("email").value;
    const userDNI = document.getElementById("dni").value;

    // patrones de ejemplo 
    const dni_test = new RegExp("^[0-9]{2}\.[0-9]{3}\.[0-9]{3}-[a-zA-Z]$");
    const nombre_test = new RegExp("^[a-zA-Z]+[ ][a-zA-Z]+([ ][a-zA-Z]+){0,2}$");
    const fecha_test = new RegExp("/^\d{4}-\d{2}-\d{2}$/");
    const email_test = new RegExp("^[a-zA-Z0-9_-]{2,63}@[a-zA-Z0-8]{2,63}[\.][a-z]{2,4}$");
    const sitioweb_test = new RegExp("^(http(s)?:\/\/)+([w]{3}[\.])+[a-z0-9]+[\.][a-z]{2,3}$");
    const passwd_test = new RegExp("^.{8,10}$");

    //condiciones 
    //alert es como un JOptionPane de java 

    if (!nombre_test.test(userNombre)) {
        isValid = false;
        alert('El nombre es incorrecto');
    }
    if (!fecha_test.test(userFecha)) {
        isValid = false;
        alert('La fecha es incorrecta. Es YYYY-MM-DD');
    }
    if (!email_test.test(userEmail)) {
        isValid = false;
        alert('El email es incorrecto. Debe ser ejemplo@ejemplo.eje');
    }
    if (!sitioweb_test.test(userWeb)) {
        isValid = false;
        alert('La URL de la web es incorrecta');
    }
    if (!passwd_test.test(userContra)) {
        isValid = false;
        alert('La contraseña es incorrecta. Debe tener al menos 8 caracteres, una letra y un número');
    }
    if (!dni_test.test(userDNI)) {
        isValid = false;
        alert('El DNI es incorrecto. Debe ser XX.XXX.XXX-A');
    }

    if (!isValid) {
        document.getElementById('hl').reset(); 
    } 
    else {
        alert('Formulario enviado correctamente');
       
    }
});