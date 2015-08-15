var registrarProfesor = function () {
    var inputNombre = $('#nombreusuario'),
        inputContrasena = $('#password-nombre'),
        inputConfirmarContrasena = $('#user-password-confir'),
        inputNombreCompleto = $('#full-name'),
        inputCedula = $('#cedula'),
        validado = true;

    validado = true;
    $('.form-group').removeClass('has-error');
    $('.form-group').removeClass('has-success');

    if (!inputNombre.val()) {
        inputNombre.closest('.form-group').addClass('has-error');
        validado = false;
    } else {
        inputNombre.closest('.form-group').addClass('has-success');
    }

    if (!inputContrasena.val()) {
        inputContrasena.closest('.form-group').addClass('has-error');
        validado = false;
    } else {
        inputContrasena.closest('.form-group').addClass('has-success');
    }

    if (inputConfirmarContrasena.val() === inputContrasena.val()) {
        inputConfirmarContrasena.closest('.form-group').addClass('has-success');
    } else {
        inputConfirmarContrasena.closest('.form-group').addClass('has-error');
        validado = false;
    }

    if (!inputNombreCompleto.val()) {
        inputNombreCompleto.closest('.form-group').addClass('has-error');
        validado = false;
    } else {
        inputNombreCompleto.closest('.form-group').addClass('has-success');
    }

    if (!inputCedula.val()) {
        inputCedula.closest('.form-group').addClass('has-error');
        validado = false;
    } else {
        inputCedula.closest('.form-group').addClass('has-success');
    }

    return validado;
};

var validarUsuario = function () {
    var i,
        usuarioRegistrado = {};

    for (i = 0; i < profesorRegistrado.length; i++) {

        if (profesorRegistrado[i].getNombreUsuario() === $('#user-login').val() && profesorRegistrado[i].getContrasena() === $('#user-password').val()) {

            usuarioRegistrado = {
                existe : true,
                indice : i
            };
        } else {
            console.log(i);
            usuarioRegistrado = false;
        }
    }
    return usuarioRegistrado;
};


$('document').ready(function () {

    $('#registrarse').on('click', function () {
        $('.modal-registrarse').modal('show');
    });

    $('#registrarsesistema').on('click', function () {
        var nuevoProfesor;

        if (registrarProfesor()) {

            nuevoProfesor = new Profesor($('#cedula').val(), $('#full-name').val(), $('#nombreusuario').val(), $('#user-password-confir').val());
            profesorRegistrado.push(nuevoProfesor);
            $('.modal-registrarse').modal('hide');
            alert('Registro Exitoso');
        }
    });

    $('#iniciar-sesion').on('click', function () {
        var usuarioValidado = validarUsuario(),
            data;
        if (usuarioValidado.existe) {
            data = {
                nombre_usuario : profesorRegistrado[usuarioValidado.indice].getNombreUsuario(),
                nombre_completo : profesorRegistrado[usuarioValidado.indice].getNombreCompleto(),
                numero_cedula : profesorRegistrado[usuarioValidado.indice].getNumeroCedula(),
                fecha_registro : profesorRegistrado[usuarioValidado.indice].getFechaIngreso()
            };
            sessionStorage.setItem("session", 1);
            sessionStorage.setItem("data", JSON.stringify(data));
            document.location.href = '/linguaProject/profesor.html';
        } else {
            alert('Debe ingresar los datos!');
        }
    });

});
