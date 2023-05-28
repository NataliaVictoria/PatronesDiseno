"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatosPago = void 0;
var DatosPago = /** @class */ (function () {
    function DatosPago(numeroTarjeta, apellidosTitular, nombreTitular, fechaVencimiento, cvv, precioTotal) {
        this.numeroTarjeta = numeroTarjeta;
        this.apellidosTitular = apellidosTitular;
        this.nombreTitular = nombreTitular;
        this.fechaVencimiento = fechaVencimiento;
        this.cvv = cvv;
        this.precioTotal = precioTotal;
    }
    /**
     * Get the value of numeroTarjeta
     */
    DatosPago.prototype.getNumeroTarjeta = function () {
        return this.numeroTarjeta;
    };
    /**
     * Set the value of numeroTarjeta
     */
    DatosPago.prototype.setNumeroTarjeta = function (numeroTarjeta) {
        this.numeroTarjeta = numeroTarjeta;
    };
    /**
     * Get the value of apellidosTitular
     */
    DatosPago.prototype.getApellidosTitular = function () {
        return this.apellidosTitular;
    };
    /**
     * Set the value of apellidosTitular
     */
    DatosPago.prototype.setApellidosTitular = function (apellidosTitular) {
        this.apellidosTitular = apellidosTitular;
    };
    /**
     * Get the value of nombreTitular
     */
    DatosPago.prototype.getNombreTitular = function () {
        return this.nombreTitular;
    };
    /**
     * Set the value of nombreTitular
     */
    DatosPago.prototype.setNombreTitular = function (nombreTitular) {
        this.nombreTitular = nombreTitular;
    };
    /**
     * Get the value of fechaVencimiento
     */
    DatosPago.prototype.getFechaVencimiento = function () {
        return this.fechaVencimiento;
    };
    /**
     * Set the value of fechaVencimiento
     */
    DatosPago.prototype.setFechaVencimiento = function (fechaVencimiento) {
        this.fechaVencimiento = fechaVencimiento;
    };
    /**
     * Get the value of cvv
     */
    DatosPago.prototype.getCvv = function () {
        return this.cvv;
    };
    /**
     * Set the value of cvv
     */
    DatosPago.prototype.setCvv = function (cvv) {
        this.cvv = cvv;
    };
    /**
     * Get the value of precioTotal
     */
    DatosPago.prototype.getPrecioTotal = function () {
        return this.precioTotal;
    };
    /**
     * Set the value of precioTotal
     */
    DatosPago.prototype.setPrecioTotal = function (precioTotal) {
        this.precioTotal = precioTotal;
    };
    return DatosPago;
}());
exports.DatosPago = DatosPago;
