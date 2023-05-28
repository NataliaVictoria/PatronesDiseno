/**
 * Clase Recibo
 * Representa un recibo de pago.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recibo = void 0;
var Recibo = /** @class */ (function () {
    /**
     * Constructor de la clase Recibo.
     * @param cliente - Nombre del cliente.
     * @param monto - Monto del pago.
     * @param fecha - Fecha del pago.
     * @param descripcion - Descripción del pago.
     */
    function Recibo(cliente, monto, fecha, descripcion) {
        this.cliente = cliente;
        this.monto = monto;
        this.fecha = fecha;
        this.descripcion = descripcion;
    }
    /**
     * Genera un número de recibo.
     */
    Recibo.prototype.GenerarNumRecibo = function () {
        // Se simula la asignación de asientos
        this.NumRecibo = "18A";
    };
    /**
     * Genera un código QR aleatorio.
     */
    Recibo.prototype.GenerarCodigoQR = function () {
        // Se simula la generación del código QR
        var caracteresPermitidos = '0123456789abcdefghijklmnopqrstuvwxyz';
        this.codigoQR = caracteresPermitidos
            .split('')
            .sort(function () { return 0.5 - Math.random(); })
            .join('')
            .substring(0, 10);
    };
    /**
     * Obtiene el número de recibo generado.
     * @returns Número de recibo generado.
     */
    Recibo.prototype.getGenerarNumRecibo = function () {
        return this.NumRecibo;
    };
    /**
     * Obtiene el código QR generado.
     * @returns Código QR generado.
     */
    Recibo.prototype.getCodigoQR = function () {
        return this.codigoQR;
    };
    return Recibo;
}());
exports.Recibo = Recibo;

