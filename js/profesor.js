var session = JSON.parse(sessionStorage.getItem('session'));

if (!session) {
	// document.location.href = '/linguaProject/escuela.html';
}
var agregarCurso = function (){
		var inputCodigo = $('#codigoCurso'),
				inputNombre = $('#nombre'),
				inputCupo = $('#cupoMaximo'),
				validado = true;

			validado = true;
			$('.form-group').removeClass('has-error');
    	$('.form-group').removeClass('has-success');

    	if (!inputCodigo.val()) {
    		inputCodigo.closest('.form-group').addClass('has-error');
    		validado = false;
    	} else {
    		inputCodigo.closest('.form-group').addClass('has-success');
    	}

    	if (!inputNombre.val()) {
    		inputNombre.closest('.form-group').addClass('has-error');
    		validado = false;
    	} else {
    		inputNombre.closest('.form-group').addClass('has-success');
    	}

    	if (!inputCodigo.val()) {
    		inputCodigo.closest('.form-group').addClass('has-error');
    		validado = false;
    	} else {
    		inputCodigo.closest('.form-group').addClass('has-success');
    	}
    	return validado;
};


 nuevoCurso = function() {
     var curso,
         codigoCurso = $('#codigoCurso').val(),
         nombreCurso = $('#nombre').val(),
         cupoMaximo = $('#cupoMaximo').val();

 }


$('document').ready(function (){
	 $('#submit-curso').on('click', function (){
	 		var nuevoCurso,
	 				i;

	 		if(agregarCurso()) {
	 			nuevoCurso = new Curso($('#codigoCurso').val(), $('#nombre').val(), $('#cupoMaximo').val());
	 			cursosAbiertos.push(nuevoCurso);
	 			for(i = 0; i < cursosAbiertos.length; i++){
	 				console.log(cursosAbiertos());
	 				cursosAbiertos
	 			}

	 			$('#nuevoCurso').modal('hide');
	 			alert('Curso registrado')
	 		}
	 })
})