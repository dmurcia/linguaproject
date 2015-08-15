var estudianteRegistrado = [],
    profesorRegistrado = [],
	 cursosAbiertos = [];

var Curso = function(_codigoCurso, _horarioCurso, _cupoMaximo) {
	var codigoCurso = _codigoCurso,
		horarioCurso = _horarioCurso,
		cupoMaximo = _cupoMaximo;

	this.getCodigoCurso = function() {
		return codigoCurso;
	};
	this.getHorarioCurso = function() {
		return horarioCurso;
	};
	this.getCupoMaximo = function() {
		return cupoMaximo;
	};
	this.setCodigoCurso = function(_nuevoCodigo) {
		codigoCurso = _nuevoCodigo;
		return codigoCurso;
	};
	this.setHorarioCurso = function(_nuevoHorario) {
		horarioCurso = _nuevoHorario;
		return horarioCurso;
	};
	this.setCupoMaximo = function (_nuevoCupo) {
		cupoMaximo = _nuevoCupo;
	};
};

var Persona = function (_numeroCedula, _nombreCompleto, _nombreUsuario ,_contrasenaPersona, _fechaIngreso) {
	var numeroCedula = _numeroCedula,
		nombreCompleto = _nombreCompleto,
		fechaIngreso = _fechaIngreso,
		nombreUsuario = _nombreUsuario,
		contrasena = _contrasenaPersona;

	this.getNumeroCedula = function () {
		return numeroCedula;
	};
	this.getNombreCompleto = function () {
		return nombreCompleto;
	};
	this.getFechaIngreso = function () {
		return fechaIngreso;
	};
	this.setNumeroCedula = function (_nuevaCedula) {
		numeroCedula = _nuevaCedula;
		return numeroCedula;
	};
	this.setNombreCompleto = function (_nuevoNombre) {
		nombreCompleto = _nuevoNombre;
		return nombreCompleto;
	};
    this.getNombreUsuario = function () {
        return nombreUsuario;
    };
    this.getContrasena = function () {
      return contrasena;  
    };
};

var Profesor = function (_numeroCedula, _nombreCompleto, _nombreUsuario ,_contrasenaPersona,  _fechaIngreso) {
	Persona.call(this, _numeroCedula, _nombreCompleto, _nombreUsuario ,_contrasenaPersona, new Date());
	var cursoProfesor;

	this.abrirCurso = function(_codigo, _horario, _cupo) {
		
		cursoProfesor = new Curso(_codigo, _horario, _cupo);
		cursosAbiertos.push(cursoProfesor);
	};
	this.getCursosAbiertos = function() {
		return cursoProfesor;
	};
};

Persona.prototype = new Persona();
Profesor.prototype.constructor = Profesor;

var Estudiante = function(_numeroCedula, _nombreCompleto, _nombreUsuario ,_contrasenaPersona, _fechaIngreso) {
	Persona.call(this, _numeroCedula, _nombreCompleto, _nombreUsuario ,_contrasenaPersona, new Date())
};

Persona.prototype = new Persona();
Estudiante.prototype.constructor = Estudiante;