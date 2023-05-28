/**
 * Clase ProxyPago
 * Implementa la interfaz IPago y actúa como un proxy para el objeto Pago real.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProxyPago = void 0;
var Pago_1 = require("./Pago");

/**
 * Clase ProxyPago que implementa la interfaz IPago.
 */
var ProxyPago = /** @class */ (function () {
    /**
     * Constructor de la clase ProxyPago.
     * @param nombre - Nombre del cliente.
     * @param datospago - Datos de pago.
     * @param monto - Monto del pago.
     * @param descripcion - Descripción del pago.
     * @param fecha - Fecha del pago.
     */
    function ProxyPago(nombre, datospago, monto, descripcion, fecha) {
        this.nombre = this.nombre;
        this.datospago = this.datospago;
        this.monto = this.monto;
        this.descripcion = this.descripcion;
        this.fecha = this.fecha;
        this.pago = new Pago_1.Pago(nombre, datospago, monto, descripcion, fecha);
    }

    /**
     * Realiza el pago llamando a los métodos correspondientes.
     */
    ProxyPago.prototype.efectua_Pago = function () {
        this.registrar_Pago();
        this.pago.efectua_Pago();
        //return this.despliegaRecibo();
    };

    /**
     * Registra el pago.
     */
    ProxyPago.prototype.registrar_Pago = function () {
        console.log("SE LOGRO REGISTRAR");
    };

    /**
     * Muestra el recibo del pago.
     */
    ProxyPago.prototype.despliegaRecibo = function () {
        this.pago.despliegaRecibo();
        console.log("SE LOGRO DESPLEGAR");
    };

    return ProxyPago;
}());
exports.ProxyPago = ProxyPago;
