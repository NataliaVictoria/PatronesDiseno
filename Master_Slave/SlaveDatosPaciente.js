"use strict";

/**
 * La clase SlaveDatosPaciente representa los datos de un paciente.
 */
var SlaveDatosPaciente = /** @class */ (function () {
    /**
     * Crea una instancia de la clase SlaveDatosPaciente.
     * @param nombre El nombre del paciente.
     * @param edad La edad del paciente.
     * @param sexo El sexo del paciente.
     */
    function SlaveDatosPaciente(nombre, edad, sexo) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }

    /**
     * Establece el nombre del paciente.
     * @param nombre El nombre a establecer.
     */
    SlaveDatosPaciente.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };

    /**
     * Establece la edad del paciente.
     * @param edad La edad a establecer.
     */
    SlaveDatosPaciente.prototype.setEdad = function (edad) {
        this.edad = edad;
    };

    /**
     * Establece el sexo del paciente.
     * @param sexo El sexo a establecer.
     */
    SlaveDatosPaciente.prototype.setSexo = function (sexo) {
        this.sexo = sexo;
    };

    /**
     * Obtiene la información del paciente.
     * @returns Un objeto con el nombre, la edad y el sexo del paciente.
     */
    SlaveDatosPaciente.prototype.getInfo = function () {
        return {
            Nombre: this.nombre,
            Edad: this.edad,
            Sexo: this.sexo,
        };
    };

    return SlaveDatosPaciente;
}());
exports.SlaveDatosPaciente = SlaveDatosPaciente;
