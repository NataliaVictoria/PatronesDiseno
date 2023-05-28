"use strict";
/**
 * La clase SlaveCita representa una cita médica.
 */
var SlaveCita = /** @class */ (function () {
    /**
     * Crea una instancia de la clase SlaveCita.
     * @param doctor El nombre del doctor.
     * @param fecha La fecha de la cita.
     * @param hora La hora de la cita.
     */
    function SlaveCita(doctor, fecha, hora) {
        this.doctor = doctor;
        this.fecha = fecha;
        this.hora = hora;
    }
    /**
     * Establece el nombre del doctor.
     * @param doctor El nombre del doctor a establecer.
     */
    SlaveCita.prototype.setDoctor = function (doctor) {
        this.doctor = doctor;
    };
    /**
     * Establece la fecha de la cita.
     * @param fecha La fecha de la cita a establecer.
     */
    SlaveCita.prototype.setFecha = function (fecha) {
        this.fecha = fecha;
    };
    /**
     * Establece la hora de la cita.
     * @param hora La hora de la cita a establecer.
     */
    SlaveCita.prototype.setHora = function (hora) {
        this.hora = hora;
    };
    /**
     * Obtiene la información de la cita.
     * @returns Un objeto con el nombre del doctor, la fecha y la hora de la cita.
     */
    SlaveCita.prototype.getInfo = function () {
        return {
            Doctor: this.doctor,
            Fecha: this.fecha,
            Hora: this.hora,
        };
    };
    return SlaveCita;
}());
exports.SlaveCita = SlaveCita;
