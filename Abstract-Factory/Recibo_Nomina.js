/**
 * Clase Recibo_Nomina
 * Esta clase extiende la clase Recibo y representa un recibo de nómina.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recibo_Nomina = void 0;
var Recibo_1 = require("./Recibo");
var Recibo_Nomina = /** @class */ (function (_super) {
    __extends(Recibo_Nomina, _super);
    
    /**
     * Constructor de la clase Recibo_Nomina.
     * @param tipoRecibo - El tipo de recibo (string).
     * @param fecha - La fecha del recibo (string).
     * @param numeroRecibo - El número de recibo (number).
     * @param total - El total del recibo (number).
     * @param metodoPago - El método de pago utilizado (string).
     * @param nombre - El nombre asociado al recibo (string).
     */
    function Recibo_Nomina(tipoRecibo, fecha, numeroRecibo, total, metodoPago, nombre) {
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
     * Visualiza el recibo de nómina en la consola.
     */
    Recibo_Nomina.prototype.visualizarRecibo = function () {
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
     * @param total - El total del recibo (number).
     * @param metodoPago - El método de pago utilizado (string).
     * @param nombre - El nombre asociado al recibo (string).
     */
    Recibo_Nomina.prototype.SetRecibo = function (fecha, numeroR, total, metodoPago, nombre) {
        this.fecha = fecha;
        this.nombre = nombre;
        this.metodoPago = metodoPago;
        this.total = total;
    };

    return Recibo_Nomina;
}(Recibo_1.Recibo));

exports.Recibo_Nomina = Recibo_Nomina;

