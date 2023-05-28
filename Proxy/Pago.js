"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pago = void 0;
var Recibo_1 = require("./Recibo");

/**
 * Clase Pago que representa un pago y genera un recibo.
 */
var Pago = /** @class */ (function () {
    /**
     * Constructor de la clase Pago.
     * @param nombre - Nombre del cliente.
     * @param datospago - Datos de pago.
     * @param monto - Monto del pago.
     * @param descripcion - Descripción del pago.
     * @param fecha - Fecha del pago.
     */
    function Pago(nombre, datospago, monto, descripcion, fecha) {
        this.nombre = nombre;
        this.datospago = datospago;
        this.monto = monto;
        this.descripcion = descripcion;
        this.fecha = fecha;
    }

    /**
     * Realiza el pago y genera el recibo correspondiente.
     */
    Pago.prototype.efectua_Pago = function () {
        this.recibo = new Recibo_1.Recibo(this.nombre, this.monto, this.descripcion, this.fecha);
        this.recibo.GenerarNumRecibo();
        this.recibo.GenerarCodigoQR();
    };

    /**
     * Obtiene el recibo generado.
     * @returns El objeto Recibo generado.
     */
    Pago.prototype.getRecibo = function () {
        return this.recibo;
    };

    /**
     * Muestra los detalles del recibo de pago.
     */
    Pago.prototype.despliegaRecibo = function () {
        console.log("\n********** RECIBO DE PAGO **********\n");
        console.log("PACIENTE: " + this.nombre);
        console.log("MONTO DE PAGO: " + this.monto);
        console.log("DESCRIPCION : " + this.descripcion);
        console.log("FECHA: " + this.fecha);
        console.log("NUMERO DE RECIBO: " + this.recibo.getGenerarNumRecibo() + "\n");
        console.log("**************************************\n");
        console.log("CÓDIGO QR: " + this.recibo.getCodigoQR() + "\n");
    };

    return Pago;
}());
exports.Pago = Pago;
