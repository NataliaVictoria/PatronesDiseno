/**
 * Clase Recibo_Insumo
 * Esta clase extiende la clase Recibo y representa un recibo de insumo.
 */
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recibo_Insumo = void 0;
var Recibo_1 = require("./Recibo");

/**
 * Clase Recibo_Insumo
 * Esta clase extiende la clase Recibo y representa un recibo de insumo.
 */
var Recibo_Insumo = /** @class */ (function (_super) {
    __extends(Recibo_Insumo, _super);

    /**
     * Constructor de la clase Recibo_Insumo.
     * @param tipoRecibo - El tipo de recibo (string).
     * @param fecha - La fecha del recibo (string).
     * @param numeroRecibo - El número de recibo (number).
     * @param total - El total del recibo (number).
     * @param metodoPago - El método de pago utilizado (string).
     * @param nombre - El nombre asociado al recibo (string).
     */
    function Recibo_Insumo(tipoRecibo, fecha, numeroRecibo, total, metodoPago, nombre) {
        var _this = _super.call(this) || this;
        _this.tipoRecibo = tipoRecibo;
        _this.fecha = fecha;
        _this.numeroRecibo = numeroRecibo;
        _this.total = total;
        _this.metodoPago = metodoPago;
        _this.nombre = nombre;
        _this.fecha = fecha;
        _this.tipoRecibo = tipoRecibo;
        _this.nombre = nombre;
        _this.metodoPago = metodoPago;
        _this.total = total;
        return _this;
    }

    /**
     * Visualiza el recibo de insumo en la consola.
     */
    Recibo_Insumo.prototype.visualizarRecibo = function () {
        console.log("\n**** RECIBO DE ".concat(this.tipoRecibo, " ****\n"));
        console.log("NOMBRE: ".concat(this.nombre, " "));
        console.log("MONTO DE PAGO: ".concat(this.total, " "));
        console.log("METODO DE PAGO : ".concat(this.metodoPago, " "));
        console.log("FECHA: ".concat(this.fecha));
        console.log("**************\n");
    };

    /**
     * Establece los valores del recibo.
     * @param fecha - La fecha del recibo (string).
     * @param numeroR - El número de recibo (number).
     * @param total - El total del rec
     * @param metodoPago - El método de pago utilizado (string).
     * @param nombre - El nombre asociado al recibo (string).
     */
    Recibo_Insumo.prototype.SetRecibo = function (fecha, numeroR, total, metodoPago, nombre) {
        this.fecha = fecha;
        this.nombre = nombre;
        this.metodoPago = metodoPago;
        this.total = total;
    };

    return Recibo_Insumo;
}(Recibo_1.Recibo));

exports.Recibo_Insumo = Recibo_Insumo;
