"use strict";

/**
 * La clase SlaveReceta representa una receta de medicamentos.
 */
var SlaveReceta = /** @class */ (function () {
    /**
     * Crea una instancia de la clase SlaveReceta.
     * @param medicamentos Los medicamentos prescritos en la receta.
     * @param dosis Las dosis asociadas a los medicamentos.
     */
    function SlaveReceta(medicamentos, dosis) {
        this.medicamentos = medicamentos;
        this.dosis = dosis;
    }

    /**
     * Establece los medicamentos prescritos en la receta.
     * @param medicamentos Los medicamentos a establecer.
     */
    SlaveReceta.prototype.setMedicamentos = function (medicamentos) {
        this.medicamentos = medicamentos;
    };

    /**
     * Establece las dosis asociadas a los medicamentos.
     * @param dosis Las dosis a establecer.
     */
    SlaveReceta.prototype.setDosis = function (dosis) {
        this.dosis = dosis;
    };

    /**
     * Obtiene la información de la receta.
     * @returns Un objeto con los medicamentos y las dosis de la receta.
     */
    SlaveReceta.prototype.getInfo = function () {
        return {
            Medicamentos: this.medicamentos,
            Dosis: this.dosis,
        };
    };

    return SlaveReceta;
}());
exports.SlaveReceta = SlaveReceta;

