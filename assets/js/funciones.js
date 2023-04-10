function validar() {

    var primerNombre = document.getElementById('primerNombre').value;
    var segundoNombre = document.getElementById('segundoNombre').value;
    var primerApellido = document.getElementById('primerApellido').value;
    var segundoApellido = document.getElementById('segundoApellido').value;
    var correo = document.getElementById('correo').value;
    var telefono = document.getElementById('telefono').value;
    var mensaje = document.getElementById('mensaje').value;

    if (primerNombre == "") {
        alert("El primer nombre no debe estar vacio");
    }

    if (segundoNombre == "") {
        alert("El segundo nombre no debe estar vacio");
    }

    if (primerApellido == "") {
        alert("El primer apellido no debe estar vacio");
    }
    if (segundoApellido == "") {
        alert("El segundo apellido no debe estar vacio");
    }
    if (correo == "") {
        alert("El correo electronico no debe estar vacio");
    }
    if (telefono == "") {
        alert("El telefono no debe estar vacio");
    }
    if (mensaje == "") {
        alert("El mensaje no debe estar vacio");
    }

}

$(document).ready(function () {
    $('#example').DataTable();
});