"use strict";

/**
 * La clase SlaveResultados representa los resultados de un esclavo.
 */
var SlaveResultados = /** @class */ (function () {
    /**
     * Crea una instancia de la clase SlaveResultados.
     * @param tipo El tipo de resultados.
     * @param valores Los valores asociados a los resultados.
     */
    function SlaveResultados(tipo, valores) {
        this.tipo = tipo;
        this.valores = valores;
    }

    /**
     * Establece el tipo de resultados.
     * @param tipo El tipo de resultados a establecer.
     */
    SlaveResultados.prototype.setTipo = function (tipo) {
        this.tipo = tipo;
    };

    /**
     * Establece los valores asociados a los resultados.
     * @param valores Los valores a establecer.
     */
    SlaveResultados.prototype.setValores = function (valores) {
        this.valores = valores;
    };

    /**
     * Obtiene la información de los resultados.
     * @returns Un objeto con el tipo y los valores de los resultados.
     */
    SlaveResultados.prototype.getInfo = function () {
        return {
            Tipo: this.tipo,
            Valores: this.valores,
        };
    };

    return SlaveResultados;
}());
exports.SlaveResultados = SlaveResultados;
